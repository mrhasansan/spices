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



# Command to run the application
CMD ["bun", "start"]