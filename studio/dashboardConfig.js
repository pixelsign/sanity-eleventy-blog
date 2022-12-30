export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63af59ac8592e6132549e5f6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-43pkond4',
                  apiId: '92529515-3509-4a91-afec-dbb3ff99879e'
                },
                {
                  buildHookId: '63af59ad238dde12b534ab84',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-p9fkjkha',
                  apiId: 'e2089ca4-3bb0-407c-860d-7f58dc5e37c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixelsign/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-p9fkjkha.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
