export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5e1890faa1d9eecf57f0c30a',
                  title: 'Sanity Studio',
                  name: 'gabewomble-studio',
                  apiId: '99e082a7-28cb-467e-b6b7-9d8011960393'
                },
                {
                  buildHookId: '5e1890fa5b143cb4d5ee893a',
                  title: 'Blog Website',
                  name: 'gabewomble',
                  apiId: 'd02298cf-ef68-4680-9351-fcf4e2ff3d4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabewomble/gabewomble',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gabewomble.netlify.com', category: 'apps'}
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
