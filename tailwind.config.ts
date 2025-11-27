import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            keyframes: {
                logoLoop: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' }
                }
            },
            animation: {
                'logo-loop': 'logoLoop 20s linear infinite'
            }
        }
    },
    plugins: []
} satisfies Config
