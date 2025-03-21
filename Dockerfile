FROM node:alpine AS build_stage
WORKDIR /app
COPY ./package*.json ./
COPY ./vite.config.js ./
RUN npm install
COPY ./ ./
RUN npx vite build --mode production

FROM nginx
COPY --from=build_stage /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf