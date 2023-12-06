module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // ms: '320px',
      ms: '321px',
      mm: '375px',
      ml: '425px',
      sm: '641px',
      // tablet: '768px',
      md: '769px',
      lg2: '975px',
      lg: '1025px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '-10': '-10',
        '-20': '-20',
      },
      colors: {
        'white-off': '#F6F6F6',
      },
      spacing: {
        xxl: '100rem',
        l50: '50rem',
        h40: '40rem',
        h30: '30rem',
        w63: '64rem',
      },
      minHeight:{
        xxl: '100rem',
        l50: '50rem',
        h40: '40rem',
        h30: '30rem',
        w63: '64rem',
      },
      height: {
        footer: 'calc(100vh - 174px)',
        footerlogo: 'calc(100vh - 194px)',
        footermobile: 'calc(100vh + 140px)',
      },
      fontFamily: {
        body: ['Raleway'],
        head: ['Orbitron'],
        oswald: ['Oswald']
      },
      backgroundImage: (theme) => ({
        intro: "url('/src/img/Section-01-03.png')",
        mesh: "url('/src/img/BG-Mesh.png')",
        frame: "url('/src/img/Frame.png')",
        comb: "url('/src/img/templates/dark/background/black-hex.png')",
        neon: "url('/src/img/Section-3.png')",
        blog: "url('/src/img/blog.png')",
        bio: "url('/src/img/bio.png')",
        sponsors: "url('/src/img/sponsors.png')",
        photoFrame: "url('/src/img/dashboard/desktop/Frame-Photo.png')",
        buildteam: "url('/src/img/dashboard/desktop/buildteam.png')",
        nameGorilla: "url('/src/img/templates/Intro-Gorilla.png')",
        namePro: "url('/src/img/templates/Intro-Pro.png')",
        bioGorilla: "url('/src/img/templates/Bio-Gorilla.png')",
        bioPro: "url('/src/img/templates/Bio-Pro.png')",
        blogGorilla: "url('/src/img/templates/Blog-Gorilla.png')",
        blogPro: "url('/src/img/templates/Blog-Pro.png')",
        contactGorilla: "url('/src/img/templates/Contact-Gorilla.png')",
        contactPro: "url('/src/img/templates/Contact-Pro.png')",
        profileGorilla: "url('/src/img/templates/Profile-Gorilla.png')",
        profilePro: "url('/src/img/templates/Profile-Pro.png')",
        sponsorsGorilla: "url('/src/img/templates/Sponsors-Gorilla.png')",
        sponsorsPro: "url('/src/img/templates/Sponsors-Pro.png')",
        statsGorilla: "url('/src/img/templates/Stats-Gorilla.png')",
        statsPro: "url('/src/img/templates/Stats-Pro.png')",
        streamsGorilla: "url('/src/img/templates/Streams-Gorilla.png')",
        streamsPro: "url('/src/img/templates/Streams-Pro.png')",
        homeCreate: "url('/src/img/Home/header-bg-light.jpg')",
        pricing: "url('/src/img/Home/pricing.png')",
        egirl: "url('/src/img/Home/egirl-bg.jpg')",
        teamCard: "url('/src/img/team-bg-crop.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
