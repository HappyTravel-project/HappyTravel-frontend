import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
})

// import { defineConfig } from 'vite';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// import { VitePWA } from 'vite-plugin-pwa';

// export default defineConfig({
//   plugins: [
//     reactRefresh(),
//     VitePWA(),
//   ],
//   define: {
//     'process.env.NODE_ENV': '"test"',
//   },
// });
