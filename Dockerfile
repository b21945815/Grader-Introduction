FROM node:20.10.0
EXPOSE 8081
ENV TZ=Europe/Istanbul
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#need to be development 
ENV NODE_ENV production
CMD ["npm", "run", "dev"]

