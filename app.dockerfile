# base image
FROM node:12.3.1-alpine

# install and cache app dependencies
COPY package.json /data/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# configure
EXPOSE 3000
VOLUME [ "/data" ]
WORKDIR /data

# start app
CMD ["npm", "start"]
