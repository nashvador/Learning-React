FROM node:16
COPY . . 
RUN npm run build && npm install -g serve
CMD ["serve", "-s", "-l", "5000", "build"]