FROM node:20-alpine

WORKDIR /app

COPY dist/ ./dist
COPY package*.json ./
COPY node_modules ./node_modules

EXPOSE 4444

CMD ["node", "dist/main"]