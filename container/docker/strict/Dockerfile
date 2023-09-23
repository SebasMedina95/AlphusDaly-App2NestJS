FROM node:18

WORKDIR /db
COPY package.json .
RUN npm install

EXPOSE 8085

COPY . .
CMD npm run start:dev