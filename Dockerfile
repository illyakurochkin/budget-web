# Use an official Node.js runtime as a parent image
FROM node:16.17.0

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application for production
RUN npm run build

# Set the command to run when a container of this image is started
CMD ["npm", "start"]