FROM node:current-alpine

WORKDIR /backend

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "server"]