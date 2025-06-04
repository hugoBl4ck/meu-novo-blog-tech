/** @type {import('tailwindcss').Config} */
// Importa a paleta de cores padrão do Tailwind CSS.
// Embora não seja mais estritamente necessário para 'primary', 'secondary' e 'neutral'
// quando os valores são explícitos, é mantido para consistência e se outras cores
// padrão do Tailwind forem usadas.
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './content/**/*.{md,html}',
    './layouts/**/*.{html,js}',
    './themes/**/*.{html,js}',
  ],
  theme: {
    extend: {
      // Define as cores 'primary' (slate), 'secondary' e 'neutral' (originais)
      // com valores hexadecimais explícitos para todas as shades.
      colors: {
        primary: {
          50: '#f8fafc',   // Cor slate-50
          100: '#f1f5f9',  // Cor slate-100
          200: '#e2e8f0',  // Cor slate-200
          300: '#cbd5e1',  // Cor slate-300
          400: '#94a3b8',  // Cor slate-400
          500: '#64748b',  // Cor slate-500
          600: '#475569',  // Cor slate-600
          700: '#334155',  // Cor slate-700
          800: '#1e293b',  // Cor slate-800
          900: '#0f172a',  // Cor slate-900
          950: '#020617',  // Cor slate-950
        },
        secondary: {
          50: '#FDEEF6',  // rgb(253 238 246) - Original
          100: '#FBDCEB', // rgb(251 220 235) - Original
          200: '#F8B7D7', // rgb(248 183 215) - Original
          300: '#F492C2', // rgb(244 146 194) - Original
          400: '#F06DAE', // rgb(240 109 174) - Original
          500: '#EC4899', // rgb(236 72 153) - Original
          600: '#E4187D', // rgb(228 24 125) - Original
          700: '#B11261', // rgb(177 18 97) - Original
          800: '#7F0D45', // rgb(127 13 69) - Original
          900: '#4C0829', // rgb(76 8 41) - Original
        },
        neutral: {
          50: '#CDD0D5', // rgb(205 208 213) - Original
          100: '#C2C5CC', // rgb(194 197 204) - Original
          200: '#ACB0BA', // rgb(172 176 186) - Original
          300: '#969BA7', // rgb(150 155 167) - Original
          400: '#7F8694', // rgb(127 134 148) - Original
          500: '#6B7280', // rgb(107 114 128) - Original
          600: '#515761', // rgb(81 87 97) - Original
          700: '#383C43', // rgb(56 60 67) - Original
          800: '#1E2024', // rgb(30 32 36) - Original
          900: '#050506', // rgb(5 5 6) - Original
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // As cores da tipografia agora usam a paleta 'primary' (slate)
            '--tw-prose-body': theme('colors.primary[800]'),
            '--tw-prose-headings': theme('colors.primary[900]'),
            '--tw-prose-lead': theme('colors.primary[700]'),
            '--tw-prose-links': theme('colors.primary[700]'),
            '--tw-prose-bold': theme('colors.primary[900]'),
            '--tw-prose-counters': theme('colors.primary[600]'),
            '--tw-prose-bullets': theme('colors.primary[400]'),
            '--tw-prose-hr': theme('colors.primary[300]'),
            '--tw-prose-quotes': theme('colors.primary[900]'),
            '--tw-prose-quote-borders': theme('colors.primary[300]'),
            '--tw-prose-captions': theme('colors.primary[700]'),
            '--tw-prose-code': theme('colors.primary[500]'),
            '--tw-prose-pre-code': theme('colors.primary[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'), // Mantido gray[900] para fundo de código escuro
            '--tw-prose-th-borders': theme('colors.primary[300]'),
            '--tw-prose-td-borders': theme('colors.primary[200]'),

            // Cores para o modo escuro (invertido) - usando as paletas definidas
            '--tw-prose-invert-body': theme('colors.primary[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.primary[300]'),
            '--tw-prose-invert-links': theme('colors.primary[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.primary[400]'),
            '--tw-prose-invert-bullets': theme('colors.primary[200]'),
            '--tw-prose-invert-hr': theme('colors.primary[500]'),
            '--tw-prose-invert-quotes': theme('colors.primary[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.primary[700]'),
            '--tw-prose-invert-captions': theme('colors.primary[400]'),
            '--tw-prose-invert-code': theme('colors.primary[400]'),
            '--tw-prose-invert-pre-code': theme('colors.primary[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'), // Mantido gray[900]
            '--tw-prose-invert-th-borders': theme('colors.primary[100]'),
            '--tw-prose-invert-td-borders': theme('colors.primary[500]'),

            // Tamanhos de fonte personalizados (sem alteração)
            fontSize: '1rem',
            h1: {
              fontSize: '2.5rem',
              lineHeight: theme('lineHeight.tight'),
            },
            h2: {
              fontSize: '2rem',
              lineHeight: theme('lineHeight.tight'),
            },
            h3: {
              fontSize: '1.25rem',
              lineHeight: theme('lineHeight.snug'),
            },
            p: {
              fontSize: '0.875rem',
              lineHeight: theme('lineHeight.relaxed'),
            },
            li: {
              fontSize: '0.95rem',
            },
            blockquote: {
              fontSize: '1rem',
            },
            code: {
              fontSize: '0.9rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
