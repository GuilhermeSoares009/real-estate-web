FROM node:20-bullseye AS builder
WORKDIR /app
COPY ./apps/web/package*.json ./
RUN npm install
COPY ./apps/web .
RUN npm run build

FROM node:20-bullseye
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
EXPOSE 5173
CMD ["npx", "--yes", "vite", "preview", "--host", "0.0.0.0", "--port", "5173"]
