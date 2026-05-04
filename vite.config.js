import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { cloudflare } from '@cloudflare/vite-plugin';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    return {
        base: '/',
        plugins: [vue(), cloudflare()],
        server: {
            host: '0.0.0.0',
            port: '3600',
            proxy: {},
        },
    };
});