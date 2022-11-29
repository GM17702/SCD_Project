FROM node:current-alpine

WORKDIR /SCD_Backend

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "server"]