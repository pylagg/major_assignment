#STAGE 1: Build ###
FROM node:12.4-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build 

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/UserManagement/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
