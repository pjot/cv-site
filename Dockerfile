# dev
FROM node:25 AS dev

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . /app
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

# build
FROM node:25 AS build

RUN npm run build

# export
FROM scratch AS export
COPY --from=build /app/dist .

