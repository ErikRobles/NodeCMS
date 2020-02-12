FROM node:current-alpine
RUN mkdir /app
COPY . /app
RUN rm -f Dockerfile
RUN rm -f node_modules

WORKDIR /app
RUN npm i
RUN npm run build
CMD ["node", "app"]