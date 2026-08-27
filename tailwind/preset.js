/* ── Tailwind v3 preset ───────────────────────────────────────
   For apps not yet on v4 (the studio site is one). Link styles.css so the
   custom properties exist, then extend from this preset:

     // tailwind.config.js
     module.exports = {
       darkMode: ['class'],
       presets: [require('@pts/design-system/tailwind/preset')],
       content: ['./client/index.html', './client/src/**/*.{js,jsx,ts,tsx}'],
     };
*/
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        // Marketing register
        hero: ['48px', { lineHeight: '1.1' }],
        section: ['36px', { lineHeight: '1.1' }],
        lede: ['20px', { lineHeight: '1.6' }],
        prose: ['18px', { lineHeight: '1.625' }],
        'card-title': ['20px', { lineHeight: '1.4' }],
        'card-body': ['16px', { lineHeight: '1.625' }],
        // Product register
        'display-lg': ['45px', '52px'],
        'display-sm': ['36px', '44px'],
        'headline-lg': ['32px', '40px'],
        'headline-md': ['28px', '36px'],
        'title-lg': ['22px', '28px'],
        'title-md': ['20px', '28px'],
        'title-sm': ['16px', '24px'],
        'body-lg': ['16px', '24px'],
        'body-md': ['14px', '20px'],
        'body-sm': ['12px', '16px'],
        'label-lg': ['14px', '20px'],
        overline: ['12px', '16px'],
      },
      letterSpacing: { label: '0.1px', overline: '0.025em' },
      colors: {
        primary: { DEFAULT: 'var(--color-primary)', hover: 'var(--color-primary-hover)', foreground: 'var(--color-on-primary)' },
        action: { DEFAULT: 'var(--color-action)', hover: 'var(--color-action-hover)', disabled: 'var(--color-action-disabled)', foreground: 'var(--color-on-action)' },
        surface: {
          DEFAULT: 'var(--color-surface)',
          raised: 'var(--color-surface-raised)',
          variant: 'var(--color-surface-variant)',
          alt: 'var(--color-surface-alt)',
          feature: 'var(--color-surface-feature)',
        },
        'on-surface': { DEFAULT: 'var(--color-on-surface)', variant: 'var(--color-on-surface-variant)', feature: 'var(--color-on-surface-feature)' },
        outline: { DEFAULT: 'var(--color-outline)', variant: 'var(--color-outline-variant)' },
        hairline: 'var(--color-hairline)',
        nav: { DEFAULT: 'var(--color-nav)', foreground: 'var(--color-on-nav)' },
        footer: { DEFAULT: 'var(--color-footer)', foreground: 'var(--color-on-footer)' },
        cycle: { blue: 'var(--cycle-blue)', green: 'var(--cycle-green)', yellow: 'var(--cycle-yellow)' },
        chart: { 1: 'var(--chart-1)', 2: 'var(--chart-2)', 3: 'var(--chart-3)', 4: 'var(--chart-4)', 5: 'var(--chart-5)' },
        status: { charter: 'var(--color-status-charter)', planned: 'var(--color-status-planned)', degraded: 'var(--color-status-degraded)' },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        container: 'var(--shape-container)',
        control: 'var(--shape-control)',
        chip: '9999px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'elevation-1': 'var(--shadow-elevation-1)',
        'elevation-2': 'var(--shadow-elevation-2)',
        'elevation-3': 'var(--shadow-elevation-3)',
      },
      spacing: { nav: '64px', 'brand-rule': '6px' },
      maxWidth: {
        marketing: '80rem', reading: '56rem', lede: '48rem',
        prose: '56rem', directory: '64rem', wide: '72rem',
      },
      transitionTimingFunction: { standard: 'cubic-bezier(0.2, 0, 0, 1)' },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        scaleIn: { from: { opacity: '0', transform: 'scale(0.9)' }, to: { opacity: '1', transform: 'scale(1)' } },
        bob: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } },
        'ferry-sail': {
          '0%': { transform: 'translateX(-60vw)', animationTimingFunction: 'linear' },
          '35%': { transform: 'translateX(-10vw)', animationTimingFunction: 'ease-out' },
          '45%': { transform: 'translateX(0)', animationTimingFunction: 'linear' },
          '60%': { transform: 'translateX(0)', animationTimingFunction: 'ease-in' },
          '70%': { transform: 'translateX(10vw)', animationTimingFunction: 'linear' },
          '100%': { transform: 'translateX(60vw)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        bob: 'bob 2s ease-in-out infinite',
        'ferry-sail': 'ferry-sail 5s linear infinite',
      },
    },
  },
};
