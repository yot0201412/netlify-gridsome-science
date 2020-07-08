// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'yo-science',
  plugins: [
    // {
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     typeName: 'Tag',
    //     baseDir: './content/tags',
    //     pathPrefix: '/tags',
    //     template: './src/templates/Tag.vue',
    //   },
    // },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './content/posts',
        pathPrefix: '/posts',
        template: './src/templates/Post.vue',
        refs: {
          tags: {
            typeName: `Tag`,
            create: true,
          },
        }
      }
    }
  ],
  template: {
    Tag: './src/templates/Tag.vue'
  }
}
