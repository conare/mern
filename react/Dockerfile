FROM node:7.8.0
VOLUME /app
WORKDIR /app
COPY package.json /app/
RUN npm install -g nodemon && \
 npm install && \
 npm install express --save
CMD node index.js
EXPOSE 4000