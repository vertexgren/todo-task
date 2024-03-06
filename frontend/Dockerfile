
FROM node:21

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue application
RUN npm run build

# Expose port 80 for the application
EXPOSE 80

# Set the command to run the application when the container starts
CMD [ "npm", "run", "serve" ]
