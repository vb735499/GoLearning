FROM node:22-alpine3.18

WORKDIR /app

COPY yarn.lock package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000
CMD ["yarn", "start", "--host", "0.0.0.0"]
