FROM node:carbon
ENV NODE_ENV "docker"
# Create app directory
WORKDIR /opt/src/backend/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start-docker" ]