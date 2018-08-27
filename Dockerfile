FROM node:carbon

LABEL maintainer="KINGDOM ISAAC"
LABEL version="1.0"

ENV HOME=/app
WORKDIR $HOME

COPY package.json .
RUN npm install
COPY . .

EXPOSE 8080

CMD [ "./start.sh" ]
