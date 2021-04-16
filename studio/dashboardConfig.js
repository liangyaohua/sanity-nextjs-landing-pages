export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '607a1038266fa810f940eeda',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hiket7rq',
                  apiId: 'b39fa9b9-e690-4968-9508-23da33c80f58'
                },
                {
                  buildHookId: '607a103800743700c56d237f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c1b2ivvq',
                  apiId: '5002f8fc-c2f0-4145-bee9-3b0109a22537'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liangyaohua/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c1b2ivvq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
