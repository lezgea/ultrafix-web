# Use Node.js v22.9.0 as the base image
FROM node:22.9.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port your application runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]