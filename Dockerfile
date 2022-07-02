FROM node:16-alpine

LABEL author="Felipe Britto dos Anjos"

WORKDIR /usr/app

COPY ./package.json /usr/app/
COPY . /usr/app/

RUN npm install

ENTRYPOINT ["npm", "run", "dev"]

EXPOSE 3333