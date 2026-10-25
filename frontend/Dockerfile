FROM nginx:alpine

RUN rm -f /usr/share/nginx/html/index.html

COPY . /usr/share/nginx/html/

RUN cp /usr/share/nginx/html/login.html /usr/share/nginx/html/index.html

EXPOSE 80
