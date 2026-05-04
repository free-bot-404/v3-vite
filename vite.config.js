import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // github自动部署适配
    const isGithub = process.env.BUILD_GITHUB === 'true';
    return {
        base: isGithub ? '/v3-vite/' : '/',
        plugins: [vue(), cloudflare()],
        server: {
            host: '0.0.0.0',
            port: '3600',
            proxy: {},
        },
    };
});