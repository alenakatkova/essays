# Create a layzer from https://hub.docker.com/_/node Docker image
FROM node:17

# Set working directory
WORKDIR /server

# Install dependencies
COPY package*.json ./
RUN yarn install

# Copy source code
COPY . ./

# Indicate the port on which a container listens for connections
EXPOSE 8080

# What command to run
CMD ["yarn", "start", "dev"]




