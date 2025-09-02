FROM node:20-alpine
WORKDIR /app
COPY ./react-dev-skills/package*.json .
RUN npm install
COPY ./react-dev-skills/* .
EXPOSE 5173
CMD ["npm", "run","dev"]
