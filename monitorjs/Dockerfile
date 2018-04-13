FROM node:9-alpine

COPY . /srv/app/monitorjs

RUN cd /srv/app/monitorjs && npm install 

WORKDIR /srv/app/monitorjs

RUN node monitor.js

