import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'build',
    },
    server: {
        port: 3000,
    },
    plugins: [
        react(),
        viteTsconfigPaths(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true,
            },
            includeAssets: [
              
            ],
            manifest: {
                name: 'Test Dashboard',
                short_name: 'dashboard',
                display: 'standalone',
                start_url: '/',
                theme_color: '#00AB55',
                background_color: '#FFFFFF',
               
            },
        }),
    ],
    envPrefix: 'DASHBOARD_',
});
