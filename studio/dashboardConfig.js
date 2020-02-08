export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e3ed8036e99cdbfdc725ca6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tvgi9qri',
                  apiId: '2ecd9a44-6966-4e5e-8a48-e6fa62f5eb5e'
                },
                {
                  buildHookId: '5e3ed803e963cd4ba854f671',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-f1k76tdb',
                  apiId: '41b3809c-65cc-40de-9c42-e06fce335996'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sahar10/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-f1k76tdb.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
