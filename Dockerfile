# Stage: 1
FROM node as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2 - The production environment
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]