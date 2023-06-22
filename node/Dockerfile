FROM node:alpine
WORKDIR /src/app

COPY package.json .
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "index.js" ]