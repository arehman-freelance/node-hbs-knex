FROM node:18.2-bullseye
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .