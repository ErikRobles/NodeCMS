FROM node:current-alpine
RUN mkdir /app
COPY . /app
RUN rm -f Dockerfile
RUN rm -f node_modules

WORKDIR /app
RUN npm i
EXPOSE 8080
CMD ["node", "app"]