##################      STAGE 1      ######################
FROM node:18.16.1-alpine AS base

USER root

WORKDIR /app

RUN npm i -g yarn

COPY package.json yarn.lock ./


##################      STAGE 2      ######################
FROM base AS build

RUN yarn install --frozen-lockfile


##################      STAGE 3      ######################
FROM base AS release

COPY  --from=build /app/node_modules ./node_modules
COPY . .

RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]