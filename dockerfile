FROM node:18-alpine

WORKDIR /app

COPY package.jso /

RUN npm install

COPY . /

RUN npm run build

EXPOSE 3000

CMD [ 'npm' , 'start']