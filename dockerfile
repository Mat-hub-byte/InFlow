FROM node:22-slim as builder

WORKDIR /app

COPY ./package*.json  .

RUN npm i 

COPY . .

RUN npm run build

FROM nginx:stable-alpine3.20-otel

EXPOSE 80

COPY ./nginx/default.conf  /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/gestion-stock /usr/share/nginx/html

CMD [ "nginx" , "-g", "daemon off;" ]