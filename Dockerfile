# Stage 1: Build the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if using npm)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Run the build command
RUN npm run build

# Stage 2: Production runtime image
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# The Next.js standalone output directory contains all files needed to run the app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose the port you want to run on (even though Next.js binds to 3000)
# This is more for documentation and firewall settings
EXPOSE 3001

# Set the environment variable for the port
# Next.js defaults to 3000, so we set this to run on 3001
ENV PORT=3001

# We don't need to specify the HOST as 0.0.0.0 is the default in Node.js, 
# but it's good practice for Docker
ENV HOST=0.0.0.0

# Command to run the application
CMD ["node", "server.js"]