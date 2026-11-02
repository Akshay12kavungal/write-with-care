/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: '#E8B4B8',
          light: '#F8E9EB',
          dark: '#D3969B',
          50: '#FDF8F8',
          100: '#F8E9EB',
          200: '#F0D1D4',
          300: '#E8B4B8',
          400: '#DC989E',
          500: '#C97F89',
          600: '#B66671',
        },
        beige: {
          DEFAULT: '#F5EBDD',
          light: '#FAF6F0',
          dark: '#E7D5BF',
          50: '#FDFAF6',
          100: '#FAF6F0',
          200: '#F5EBDD',
          300: '#EADBC6',
          400: '#DEC7AA',
          500: '#CEB291',
        },
        rose: {
          DEFAULT: '#C97F89',
          light: '#DE9FA8',
          dark: '#A65A65',
          deep: '#8A414B',
          50: '#FBF4F5',
          100: '#F5E4E6',
          200: '#EBCCD0',
          300: '#DE9FA8',
          400: '#C97F89',
          500: '#B76671',
          600: '#9E4E59',
          700: '#7E3A43',
        },
        charcoal: {
          DEFAULT: '#292524',
          light: '#44403C',
          dark: '#1C1917',
          muted: '#78716C',
          50: '#F5F5F4',
          100: '#E7E5E4',
          200: '#D6D3D1',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917',
          900: '#0C0A09',
        },
        paper: {
          DEFAULT: '#FAF6F0',
          pure: '#FFFFFF',
          cream: '#F7F2E9',
          ruled: '#EFE6D8',
          line: '#E2D5C3',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', '"Dancing Script"', 'cursive'],
        script: ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(41, 37, 36, 0.05)',
        'paper': '0 10px 30px -5px rgba(201, 127, 137, 0.08), 0 4px 12px -2px rgba(41, 37, 36, 0.04)',
        'card-hover': '0 16px 36px -4px rgba(201, 127, 137, 0.15), 0 6px 16px -2px rgba(41, 37, 36, 0.06)',
        'inner-paper': 'inset 0 2px 6px rgba(0,0,0,0.03)',
      },
      backgroundImage: {
        'lined-paper': 'repeating-linear-gradient(transparent, transparent 31px, rgba(201, 127, 137, 0.15) 31px, rgba(201, 127, 137, 0.15) 32px)',
        'grid-paper': 'linear-gradient(rgba(201, 127, 137, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 127, 137, 0.08) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}

