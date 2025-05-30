/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.{md,html}',
    './layouts/**/*.{html,js}',
    './themes/**/*.{html,js}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[800]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-lead': theme('colors.zinc[700]'),
            '--tw-prose-links': theme('colors.zinc[900]'),
            '--tw-prose-bold': theme('colors.zinc[900]'),
            '--tw-prose-counters': theme('colors.zinc[600]'),
            '--tw-prose-bullets': theme('colors.zinc[400]'),
            '--tw-prose-hr': theme('colors.zinc[300]'),
            '--tw-prose-quotes': theme('colors.zinc[900]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.indigo[500]'),
            '--tw-prose-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[300]'),
            '--tw-prose-td-borders': theme('colors.zinc[200]'),
            '--tw-prose-invert-body': theme('colors.zinc[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.indigo[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[200]'),
            '--tw-prose-invert-hr': theme('colors.zinc[500]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.indigo[400]'),
            '--tw-prose-invert-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-th-borders': theme('colors.zinc[100]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[500]'),

            // Tamanhos de fonte personalizados
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
}
