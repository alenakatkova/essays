const Essay = require("../models/Essay");
const User = require("../models/User");
const Comment = require("../models/Comment");
const mongoose = require("mongoose");
const EditSuggestionsComment = require("../models/EditSuggestionsComment");

exports.getEssays = async (req, res, next) => {
  try {
    const filters = req.query;
    const keys = Object.keys(filters);
    let query = {};
    keys.forEach((key, index) => {
      query["writingSettings." + key + "_id"] = mongoose.Types.ObjectId(
        filters[key]
      );
    });

    const essays = await Essay.aggregate()
      .match(query)
      .lookup({
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "author",
      })
      .lookup({
        from: "languages",
        localField: "writingSettings.language_id",
        foreignField: "_id",
        as: "language",
      })
      .lookup({
        from: "levels",
        localField: "writingSettings.level_id",
        foreignField: "_id",
        as: "level",
      })
      .lookup({
        from: "tests",
        localField: "writingSettings.test_id",
        foreignField: "_id",
        as: "test",
      });

    res.status(200).json({
      status: "success",
      results: essays.length,
      data: {
        essays,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getOneEssay = async (req, res, next) => {
  try {
    const essay = await Essay.aggregate()
      .match({ _id: mongoose.Types.ObjectId(req.params.id) })
      .lookup({
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "author",
      })
      .lookup({
        from: "languages",
        localField: "writingSettings.language_id",
        foreignField: "_id",
        as: "language",
      })
      .lookup({
        from: "levels",
        localField: "writingSettings.level_id",
        foreignField: "_id",
        as: "level",
      })
      .lookup({
        from: "tests",
        localField: "writingSettings.test_id",
        foreignField: "_id",
        as: "test",
      });

    res.status(200).json({
      status: "success",
      data: {
        essay,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.createEssay = async (req, res, next) => {
  try {
    const essay = await Essay.create(req.body);
    const user = await User.findById(req.body.user_id);
    user.essays.push(essay);
    user.save();

    res.status(200).json({
      status: "success",
      data: {
        essay,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

exports.updateEssay = async (req, res, next) => {
  try {
    const essay = await Essay.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        essay,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.deleteEssay = async (req, res, next) => {
  try {
    const essay = await Essay.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.getEssayComments = async (req, res, next) => {
  try {
    const essay = await Essay.findById(req.params.id);

    const comments = await Promise.all(
      essay.comments.map((id) => {
        return Comment.aggregate().match({ _id: id }).lookup({
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "author",
        });
      })
    );

    res.status(200).json({
      status: "success",
      data: {
        comments,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

exports.postComment = async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body);
    comment.essay_id = req.params.id;
    const essay = await Essay.findById(req.params.id);
    const user = await User.findById(req.body.user_id);

    user.comments.push(comment);
    user.save();

    essay.comments.push(comment);
    essay.save();

    res.status(200).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

exports.postEditSuggestionsComment = async (req, res, next) => {
  try {
    const comment = await EditSuggestionsComment.create(req.body);
    comment.essay_id = req.params.id;
    const essay = await Essay.findById(req.params.id);
    const user = await User.findById(req.body.user_id);

    user.editSuggestionsComments.push(comment);
    user.save();

    essay.editSuggestionsComments.push(comment);
    essay.save();

    res.status(200).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};

exports.getEditSuggestionsComments = async (req, res, next) => {
  try {
    const essay = await Essay.findById(req.params.id);

    const comments = await Promise.all(
      essay.editSuggestionsComments.map((id) => {
        return EditSuggestionsComment.aggregate().match({ _id: id }).lookup({
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "author",
        });
      })
    );

    res.status(200).json({
      status: "success",
      data: {
        comments,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};
