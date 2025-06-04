/** @type {import('tailwindcss').Config} */
// Importa a paleta de cores padrão do Tailwind CSS.
// Isso é necessário para referenciar cores como 'colors.slate'.
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './content/**/*.{md,html}',
    './layouts/**/*.{html,js}',
    './themes/**/*.{html,js}',
  ],
  theme: {
    extend: {
      // Define a sua cor 'primary' usando a paleta 'slate' do Tailwind.
      // Agora, qualquer classe que use 'primary' (ex: bg-primary-600)
      // usará os tons da cor slate.
      colors: {
        primary: colors.slate,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Alterado para usar a cor 'primary' (slate)
            '--tw-prose-body': theme('colors.primary[800]'), // Usará slate-800
            '--tw-prose-headings': theme('colors.primary[900]'), // Usará slate-900
            '--tw-prose-lead': theme('colors.primary[700]'), // Usará slate-700
            '--tw-prose-links': theme('colors.primary[700]'), // Usará slate-700
            '--tw-prose-bold': theme('colors.primary[900]'), // Usará slate-900
            '--tw-prose-counters': theme('colors.primary[600]'), // Usará slate-600
            '--tw-prose-bullets': theme('colors.primary[400]'), // Usará slate-400
            '--tw-prose-hr': theme('colors.primary[300]'), // Usará slate-300
            '--tw-prose-quotes': theme('colors.primary[900]'), // Usará slate-900
            '--tw-prose-quote-borders': theme('colors.primary[300]'), // Usará slate-300
            '--tw-prose-captions': theme('colors.primary[700]'), // Usará slate-700
            // Cores de código e pre-code agora usam 'primary' (slate)
            '--tw-prose-code': theme('colors.primary[500]'), // Usará slate-500
            '--tw-prose-pre-code': theme('colors.primary[300]'), // Usará slate-300
            '--tw-prose-pre-bg': theme('colors.gray[900]'), // Mantido gray[900] para fundo de código escuro

            // Cores para o modo escuro (invertido) - alterado para usar 'primary' (slate)
            '--tw-prose-invert-body': theme('colors.primary[200]'), // Usará slate-200
            '--tw-prose-invert-headings': theme('colors.white'), // Mantido branco para contraste
            '--tw-prose-invert-lead': theme('colors.primary[300]'), // Usará slate-300
            '--tw-prose-invert-links': theme('colors.primary[400]'), // Usará slate-400
            '--tw-prose-invert-bold': theme('colors.white'), // Mantido branco
            '--tw-prose-invert-counters': theme('colors.primary[400]'), // Usará slate-400
            '--tw-prose-invert-bullets': theme('colors.primary[200]'), // Usará slate-200
            '--tw-prose-invert-hr': theme('colors.primary[500]'), // Usará slate-500
            '--tw-prose-invert-quotes': theme('colors.primary[100]'), // Usará slate-100
            '--tw-prose-invert-quote-borders': theme('colors.primary[700]'), // Usará slate-700
            '--tw-prose-invert-captions': theme('colors.primary[400]'), // Usará slate-400
            // Cores de código invertidas agora usam 'primary' (slate)
            '--tw-prose-invert-code': theme('colors.primary[400]'), // Usará slate-400
            '--tw-prose-invert-pre-code': theme('colors.primary[300]'), // Usará slate-300
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'), // Mantido gray[900]
            '--tw-prose-invert-th-borders': theme('colors.primary[100]'), // Usará slate-100
            '--tw-prose-invert-td-borders': theme('colors.primary[500]'), // Usará slate-500

            // Tamanhos de fonte personalizados (sem alteração, pois já estão ok)
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