module.exports = {
  title: 'Skipper Dudi briefs',
  description: 'These are some major introduction security and safety briefs for the new guest crew',
  theme: require.resolve('../../'), // replace it with ==> theme: 'modern-blog' to use this example project as a boilerplate.
  summaryLength: 700,
  themeConfig: {
    translations: {
      read_more: 'Ostali saveti:',
      read_this_post: 'Pogledaj',
    },

    // cookies: {
    //   theme: 'dark-lime',
    //   buttonText: 'Got it!',
    //   message: 'We use cookies!',
    // },

    summary: true,

    // Example of advanced summary usage
    /*
    summary: {
      // Use the first two paragraphs
      paragraphs: 2,

      // Let's assume that a paragraph is anything that ends with "..." and a new line
      paragraphsSeparator: "...\n",

      // And let's assume that we want to join back the extracted paragraphs with an empty space.
      paragraphsJoiner: "",

      // If we didn't want to use the "paragraphs" functionality, and instead we
      // want to extract a summary up until the first occurrence of a text, we'd
      // use the "stopSymbol" functionality. Let's assume that we want to get
      // all the text up until the first ";" followed by a new line appears in
      // our text.
      stopSymbol: ";\n",

      // How about we add an emoji at the beginning of our summary?
      prepend: "🔈",

      // ... what about at the end?
      append: "📖",
    },
    */
    nav: [
      {
        text: 'Briefs',
        link: '/',
        icon: 'el-icon-house',
      },
      {
        text: 'Exercises',
        link: '/exercises/',
        icon: 'el-icon-folder',
      },

      {
        text: 'Check in',
        link: '/checkin/',
        icon: 'el-icon-folder',
      },
    ],
    // Let's say that we want to add a small message at the beginning or at the
    // end of each post. This is the place!
    posts: {
      prepend: "Hi, I hope you'll <i>enjoy</i> this post!",
      append: "Hi, I hope you've <b>enjoyed</b> this post!",
    },
    disqus: 'disquswebsiteshortname', // if you want to incorporate Disqus for comments replace this value else just get rid of it
    about: {
      fullName: 'Dudi Milanovic',
      bio: 'I ♥ sailing',
      image: '/dudi2.jpg',
    },
    footer: {
      contact: [
        // {
        //   type: 'github',
        //   link: 'https://github.com/z3by',
        // },
        {
          type: 'instagram',
          link: 'https://instagram.com/dudi_milanovic',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/dudimilanovic/',
        },
        // {
        //   type: 'twitter',
        //   link: 'https://twitter.com',
        // },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'Copyright ©skipperdudi 2021',
          link: '',
        },
      ],
    },
  },
  plugins: [
    'crisp',
    'seo',
    'smooth-scroll',
    'reading-progress',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    'social-share',
    '@vuepress/google-analytics',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      'sitemap',
      {
        hostname: 'https://vp-modern.z3by.com',
      },
    ],
  ],
}
