module.exports = {
  purge: [
    "./index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
          verydark: '#502050',
          softpink: '#ee68a4',
          darkgrayishmagenta: '#937b92',
          lightgrayishmagenta: '#f7f2f7',
          white: '#ffffff',
          a: '#3e52a3'
      },
      fontSize:{
        '3.5xl': ['32px', {
          letterSpacing: '-1.14px',
          lineHeight: '32px',
        }],
        'xs-0': ['13px', {
          lineHeight: '14.56px',
        }]
      },
      spacing:{
        '4.5': '18px',
        '6.5': '26px',
        '7.5': '30px',
        '22.5': '60px'
        
      },
      letterSpacing:{
        'quotes':'-0.23px'
      },
      backgroundImage: theme => ({
        'pattern-bottom-desktop': "url('/images/bg-pattern-bottom-desktop.svg')",
        'pattern-top-desktop': "url('/images/bg-pattern-top-desktop.svg')",
        'pattern-bottom-mobile': "url('/images/bg-pattern-bottom-mobile.svg')",
        'pattern-top-mobile': "url('/images/bg-pattern-top-mobile.svg')",
       }),
       zIndex: {
        '-1': '-1',
       },
       height: {
        bpbdh: '673px',
        bptdh:'362px',
        bptmh:'232px',
        },
        screens: {
          's': {'max': '1023px'},
          // => @media (max-width: 1023px) { ... }
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
