# Specify the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# biuld project
RUN npm run build

# Expose the port on which the server will listen
EXPOSE 3000

# Run the server
CMD ["npm", "start"]







