FROM node:carbon

LABEL maintainer="Orjiewuru Kingdom (kingisaac95)"
LABEL version="0.1.1"

ENV HOME=/app
WORKDIR $HOME

COPY package.json .
RUN npm install
COPY . .

EXPOSE 8080

CMD [ "./start.sh" ]
