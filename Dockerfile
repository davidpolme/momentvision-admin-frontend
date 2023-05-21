# Etapa 1: Construir la aplicación de React
FROM node:14-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

# Etapa 2: Servir la aplicación con nginx
FROM nginx:1.19.0-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]