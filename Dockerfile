FROM node:carbon

EXPOSE 9000
EXPOSE 9229

ENV APP=/home/app
WORKDIR ${APP}

COPY package*.json ./
RUN npm i
COPY . .

CMD ["npm", "run", "debug-remote-nm"]
