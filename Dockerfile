# build environment
FROM node:14-alpine as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY src src
COPY public public
RUN yarn
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
