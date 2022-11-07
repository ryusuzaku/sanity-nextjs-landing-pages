export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6369612eda8fea006ac93077',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2je8uht8',
                  apiId: '60278140-0179-434d-90e6-35d542cd8112'
                },
                {
                  buildHookId: '6369612ea40a8f06abbf6ee8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-do5fdb7w',
                  apiId: '6961c26e-50c3-400c-a561-c1ca323e9665'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryusuzaku/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-do5fdb7w.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
