FROM node:16.13.1-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

RUN export NODE_OPTIONS=--openssl-legacy-provider

CMD ["npm", "start"]

