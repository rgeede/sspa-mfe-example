import { registerApplication, start, LifeCycles } from 'single-spa'

// registerApplication({
//   name: '@single-spa/welcome',
//   app: () => System.import<LifeCycles>('https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'),
//   activeWhen: ['/'],
// })

// load the default component
// registerApplication({
//   name: 'card',
//   app: () => System.import<LifeCycles>('http://localhost:8080/sys-remote.js'),
//   activeWhen: ['/'],
// })

// load only the component
registerApplication({
  name: 'card',
  app: () => System.import<LifeCycles>('http://localhost:8080/card.js'),
  activeWhen: ['/'],
  customProps: {
    title: "Card Component",
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
  },
})

// load module federation
// registerApplication({
//   name: 'test',
//   app: () => import('remote/Card'),
//   activeWhen: ['/'],
// })

start({
  urlRerouteOnly: true,
})
