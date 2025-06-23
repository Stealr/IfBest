FROM node:18-alpine

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json ./
RUN npm install

# Копируем остальные файлы (включая src/)
COPY . .

# Экспонируем порт Vite
EXPOSE 5173

# Запускаем Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]