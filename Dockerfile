# Use a base image with Bun pre-installed
FROM oven/bun:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (adjust if your app uses a different port)
EXPOSE 3000

# Command to run the application
CMD ["bun", "start"]