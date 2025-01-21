module.exports = {
  content: [
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.svg',
    './src/assets/js/*.js'
  ],
  screens: {
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'blockquote': {
              fontWeight: 'normal',
              color: theme('colors.slate.600')
            },
            'blockquote p:first-of-type::before': {
              content: ''
            },
            'blockquote p:last-of-type::after': {
              content: ''
            },
            // h1: {
            //   fontSize: theme('fontSize.4xl'),
            //   fontWeight: theme('fontWeight.bold'),
            //   color: theme('colors.blue.500'),
            //   marginBottom: theme('spacing.4'),
            // },
            // h2: {
            //   fontSize: theme('fontSize.3xl'),
            //   fontWeight: theme('fontWeight.semibold'),
            //   color: theme('colors.gray.800'),
            //   marginBottom: theme('spacing.3'),
            // },
            // h3: {
            //   fontSize: theme('fontSize.2xl'),
            //   fontWeight: theme('fontWeight.medium'),
            //   color: theme('colors.gray.700'),
            //   marginBottom: theme('spacing.2'),
            // },
            // h4: {
            //   fontSize: theme('fontSize.xl'),
            //   fontWeight: theme('fontWeight.medium'),
            //   color: theme('colors.gray.600'),
            //   marginBottom: theme('spacing.2'),
            // },
            // h5: {
            //   fontSize: theme('fontSize.lg'),
            //   fontWeight: theme('fontWeight.normal'),
            //   color: theme('colors.gray.500'),
            //   marginBottom: theme('spacing.1'),
            // },
            // h6: {
            //   fontSize: theme('fontSize.base'),
            //   fontWeight: theme('fontWeight.normal'),
            //   color: theme('colors.gray.400'),
            //   marginBottom: theme('spacing.1'),
            // }
          }
        }
      }),
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
