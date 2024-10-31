FROM node:9-alpine
RUN apk add --no-cache tini
COPY . /app
WORKDIR /app
RUN apk add --update --no-cache --virtual .gyp python make g++ && npm install && apk del .gyp && apk add --no-cache --update curl
EXPOSE 3000
ENTRYPOINT ["tini", "--"]
HEALTHCHECK --start-period=15s --interval=5s --timeout=5s CMD curl -s -http://127.0.0.1:3000/
CMD ["npm", "start"]
