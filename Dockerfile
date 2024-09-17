FROM node:20.15.1-bullseye-slim AS node
ENV ENV=production
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install && npm ci --only=production --omit=dev && npm cache clean --force
COPY . .
EXPOSE 80
CMD npm start

