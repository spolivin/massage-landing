FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY styles/ /usr/share/nginx/html/styles/
COPY scripts/ /usr/share/nginx/html/scripts/
COPY fonts/ /usr/share/nginx/html/fonts/
COPY images/ /usr/share/nginx/html/images/
COPY icons/ /usr/share/nginx/html/icons/

EXPOSE 80
