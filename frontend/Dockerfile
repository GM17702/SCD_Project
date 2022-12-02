FROM node:16
#  wrokdirectroy specify if any
COPY package*.json .
RUN npm install

# first dot means all files from source secnod means to destination
COPY . .  

ENV PORT=3000

EXPOSE  3000

CMD ["npm", "start"]