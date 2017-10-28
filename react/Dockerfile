FROM node:7.8.0
RUN mkdir /app
WORKDIR /app
COPY package.json /app/
COPY index.js /app/
RUN npm install -g nodemon && \
 npm install && \
 npm install express --save
CMD node index.js
EXPOSE 4000