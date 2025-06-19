import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      // Компоненты
      '@components': resolve(__dirname, 'src/react/components'),

      // Хуки
      '@hooks': resolve(__dirname, 'src/react/hooks'),

      // Сервисы
      '@services': resolve(__dirname, 'src/react/services'),

      // Контексты
      '@stores': resolve(__dirname, 'src/react/stores'),

      // Хелперы
      '@helpers': resolve(__dirname, 'src/react/helpers'),

      // Стили
      '@styles': resolve(__dirname, 'src/styles'),

      // Ассеты
      '@assets': resolve(__dirname, 'src/assets'),

      // Общие алиасы
      '@': resolve(__dirname, 'src'),
      '@react': resolve(__dirname, 'src/react'),
      '@app': resolve(__dirname, 'src/react/app'),
      '@routes': resolve(__dirname, 'src/react/app/routes'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
});
