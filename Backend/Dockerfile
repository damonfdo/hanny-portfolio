# REF https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:16

#Creating a App Directory
WORKDIR /usr/src/app


# COPY package.json file to WORKDIR  
COPY package*.json ./

# Copy Env file  
COPY .env ./

# NPM INSTALL 
RUN npm ci --only=production


# Copy source code  
COPY . .



EXPOSE 3000

CMD ["node", "server.js"]