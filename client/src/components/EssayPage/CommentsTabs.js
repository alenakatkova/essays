import React from "react";
import { useTranslation } from "react-i18next";
import { Tab, Tabs } from "react-bootstrap";
import LeaveComment from "./LeaveComment";
import SuggestEdits from "./SuggestEdits";
import { getComments, getEditSuggestionsComments } from "../../api/EssayAPI";
import Comments from "./Comments";

const CommentsTabs = ({ essayId, essayText }) => {
  const { t } = useTranslation();
  const [key, setKey] = React.useState("comments");
  const [comments, setComments] = React.useState([]);
  const [editSuggestionsComments, setEditSuggestionsComment] = React.useState(
    []
  );

  const getEssayComments = React.useCallback(async () => {
    const commentsFromServer = await getComments(essayId);
    commentsFromServer && setComments(commentsFromServer);
  }, [essayId]);

  const getEssayEditSuggestionsComments = React.useCallback(async () => {
    const commentsFromServer = await getEditSuggestionsComments(essayId);
    commentsFromServer && setEditSuggestionsComment(commentsFromServer);
  }, [essayId]);

  React.useEffect(() => {
    getEssayComments();
    getEssayEditSuggestionsComments();
  }, [getEssayComments, getEssayEditSuggestionsComments]);

  const onCommentAdd = () => {
    getEssayComments();
  };

  const onEditSuggestionsAdd = () => {
    getEssayEditSuggestionsComments();
  };

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab
        eventKey="comments"
        title={t("essay.commentsTabs.commentsList.title")}
      >
        {comments.length === 0 ? (
          t("essay.commentsTabs.commentsList.noComments")
        ) : (
          <Comments toRender={comments} />
        )}
      </Tab>
      <Tab
        eventKey="editSuggestions"
        title={t("essay.commentsTabs.editSuggestionsList.title")}
      >
        {editSuggestionsComments.length === 0 ? (
          t("essay.commentsTabs.commentsList.noComments")
        ) : (
          <Comments
            toRender={editSuggestionsComments}
            isTextComparisonRequired={true}
            essayText={essayText}
          />
        )}
      </Tab>
      <Tab eventKey="toComment" title={t("essay.commentsTabs.toComment.title")}>
        <LeaveComment refreshCommentsFeed={onCommentAdd} />
      </Tab>
      <Tab
        eventKey="toSuggestEdits"
        title={t("essay.commentsTabs.toSuggestEdits.title")}
      >
        <SuggestEdits
          essayText={essayText}
          refreshEditSuggestionsFeed={onEditSuggestionsAdd}
        />
      </Tab>
    </Tabs>
  );
};

export default CommentsTabs;

const I = {
  _id: "621bfabbfb9cfcd7200d53c5",
  topic: "2014–15 Vermont Catamounts women's ice hockey season",
  user_id: "621beff1c722d42b863ce57f",
  title: "ыа",
  body: "а а а а а а. а а а а а. а а а а а а. а а а а а. а",
  comments: [],
  editSuggestionsComments: [],
  createdAt: "2022-02-27T22:27:07.320Z",
  updatedAt: "2022-02-27T22:27:07.320Z",
  __v: 0,
  author: [
    {
      _id: "621beff1c722d42b863ce57f",
      username: "alenakatkova",
      password: "$2a$12$JhR7jB5fbEaxPry1PkBeneTUmizl4CLZ5mMEkYLUayfHtv/lf8qeO",
      writingSettings: {
        _id: "621beff1c722d42b863ce58e",
        minAmountOfWords: 200,
        timingInMinutes: 20,
        level_id: "621beff1c722d42b863ce57d",
        language_id: "621beff1c722d42b863ce552",
        test_id: "621beff1c722d42b863ce568",
      },
      comments: [
        "621bf1d1fb9cfcd7200d51d8",
        "621bf3f2fb9cfcd7200d526c",
        "621bf476fb9cfcd7200d5293",
        "621bf54dfb9cfcd7200d52c6",
        "621bf5eafb9cfcd7200d52f8",
        "621bf65ffb9cfcd7200d531a",
      ],
      editSuggestionsComments: [
        "621bf1b7fb9cfcd7200d51c8",
        "621bf1defb9cfcd7200d51e4",
        "621bf242fb9cfcd7200d51fd",
        "621bf33cfb9cfcd7200d5232",
        "621bf3b9fb9cfcd7200d5246",
        "621bf427fb9cfcd7200d5282",
        "621bf52cfb9cfcd7200d52aa",
        "621bf53efb9cfcd7200d52bc",
        "621bf57ffb9cfcd7200d52d8",
        "621bf5e1fb9cfcd7200d52ed",
        "621bf656fb9cfcd7200d5310",
        "621bf6b5fb9cfcd7200d5325",
        "621bf6bdfb9cfcd7200d5330",
        "621bf6edfb9cfcd7200d5342",
        "621bf70afb9cfcd7200d5356",
        "621bf712fb9cfcd7200d5360",
        "621bf730fb9cfcd7200d536b",
        "621bf8e4fb9cfcd7200d538e",
      ],
      drafts: [
        {
          topic: "Target audience",
          title: "Strategies for reaching target audiences",
          body: "The effectiveness of a target audience campaign is dependent on how well the company knows their market; this can include details such as behaviours, incentives, cultural differences and societal expectations.[11] Failure to identify these trends can lead to campaigns being targeted at the wrong audiences, and ultimately a loss of money or no change at all. An example of this type of failure was Chef Boyardee, who planned a campaign to appeal to teenage boys, the largest consumers of their product.[11] What they hadn't considered however was that the purchasers of their goods may be different from the consumers, which was the case, as mothers were the leading purchasers, even though the boys were consuming the product. Factors like these are considered at a more in-depth level with a detailed media plan, one that cannot be found in a simpler target market strategy.",
          writingSettings: {
            _id: "621beff1c722d42b863ce58e",
            minAmountOfWords: 200,
            timingInMinutes: 20,
            level_id: "621beff1c722d42b863ce57d",
            language_id: "621beff1c722d42b863ce552",
            test_id: "621beff1c722d42b863ce568",
          },
          createdAt: "2022-02-19T20:04:58.115Z",
          updatedAt: "2022-02-19T20:04:58.115Z",
        },
        {
          topic: "Web platform",
          title: "What is a Web Platform",
          body: "The Web platform is a collection of technologies developed as open standards by the World Wide Web Consortium and other standardization bodies such as the Web Hypertext Application Technology Working Group, the Unicode Consortium, the Internet Engineering Task Force, and Ecma International.",
          writingSettings: {
            _id: "621beff1c722d42b863ce58e",
            minAmountOfWords: 200,
            timingInMinutes: 20,
            level_id: "621beff1c722d42b863ce57d",
            language_id: "621beff1c722d42b863ce552",
            test_id: "621beff1c722d42b863ce568",
          },
          createdAt: "2022-02-19T20:08:06.539Z",
          updatedAt: "2022-02-19T20:08:06.539Z",
        },
        {
          topic: "List of Thor DM-18 launches",
          title: "кпцукп",
          body: "укпцукпцукп",
          _id: "621bfa94fb9cfcd7200d53b4",
          createdAt: "2022-02-27T22:26:28.340Z",
          updatedAt: "2022-02-27T22:26:28.340Z",
        },
      ],
      essays: [
        "621beff1c722d42b863ce584",
        "621beff1c722d42b863ce585",
        "621beff1c722d42b863ce586",
        "621bfabbfb9cfcd7200d53c5",
      ],
      favouriteAuthors: [
        "621beff1c722d42b863ce580",
        "621beff1c722d42b863ce581",
      ],
      likes: ["621beff1c722d42b863ce587", "621beff1c722d42b863ce588"],
      __v: 26,
    },
  ],
  language: [],
  level: [],
  test: [],
};
