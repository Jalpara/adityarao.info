window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        subink: 'rgb(var(--ink-subtle-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        subtle: 'rgb(var(--surface-subtle-rgb) / <alpha-value>)',
        stroke: 'rgb(var(--stroke-rgb) / <alpha-value>)',
        blue: {
          50: 'rgb(var(--blue-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--blue-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--blue-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--blue-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--blue-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--blue-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--blue-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--blue-700-rgb) / <alpha-value>)'
        }
      },
      boxShadow: {
        card: 'var(--shadow-card)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif']
      },
      borderRadius: {
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        pill: 'var(--radius-pill)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(var(--motion-translate-distance))' },
          '100%': { opacity: '1', transform: 'none' }
        },
        pulseLine: {
          '0%, 100%': { width: '10%' },
          '50%': { width: '70%' }
        }
      },
      animation: {
        fadeUp: 'fadeUp var(--motion-duration-lg) var(--motion-ease-standard) both',
        pulseLine: 'pulseLine calc(var(--motion-duration-lg) * 4) var(--motion-ease-in-out) infinite'
      }
    }
  }
};
