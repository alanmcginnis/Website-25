# Stage 1: Build the 11ty site
FROM node:alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY eleventy.config.js .
COPY tailwind.config.js . 
COPY ./lib ./lib
COPY ./src ./src

RUN npm run build

# Stage 2: Serve the site with Apache
FROM httpd:alpine

# Copy the built site from the previous stage
COPY --from=builder /app/dist/ /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 5665