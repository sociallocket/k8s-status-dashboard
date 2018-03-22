FROM node:alpine

ENV HOST=
ENV CLIENT_CRT=
ENV CLIENT_KEY=
ENV AUTH0_CLIENT_ID=
ENV AUTH0_DOMAIN=
ENV AUTH0_CALLBACK_URL=
ENV AUTH0_SECRET=
ENV PORT=

# Update
RUN apk add --update nodejs &&\
    apk add \
        bash \
        bash-doc \
        git

# Bundle app source
RUN mkdir -p /app/src
COPY package.json /app/package.json
COPY server.js /app/server.js
COPY shell-scripts /app/shell-scripts
COPY set-env.js /app/set-env.js
COPY src /app/src

WORKDIR /app/src/public
RUN npm install
WORKDIR /app
RUN npm install

EXPOSE  5000
CMD ["npm","start"]
