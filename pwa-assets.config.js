import {
    defineConfig,
    minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
    headLinkOptions: {
        preset: '2024',
    },
    preset,
    images: ['public/favs/safari-pinned-tab.svg'],
})
