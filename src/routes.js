import Home from './views/Home.vue'
import VocaBook from './views/VocaBook.vue'
import NotFound from './views/NotFound.vue'
import CardDisplay from './views/VocaBook/CardDisplay.vue'
import StarredDisplay from './views/VocaBook/StarredDisplay.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/VocaBook',
    meta: { title: 'VocaBook' },
    component: VocaBook,
    children: [{
      path: 'Display',
      component: CardDisplay
    },
    {
      path: 'Starred',
      component: StarredDisplay
    }
      
    ]
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
