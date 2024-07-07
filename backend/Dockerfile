FROM node:19-alpine 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV SERVER_PORT 3000
EXPOSE $SERVER_PORT


CMD ["npm","run","server"]