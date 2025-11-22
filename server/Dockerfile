FROM node:18-aplpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 8080

CMD [ "npm" , "start" ]