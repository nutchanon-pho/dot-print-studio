FROM node

WORKDIR /usr/share/app

EXPOSE 3000

CMD ["npm", "start"]