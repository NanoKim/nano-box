import { createRouter, createWebHistory } from 'vue-router'
import Introduce from '../view/introduce/Introduce.vue'
import ComponentLayout from '../layout/Main.vue'
import Guide from '../view/component/Guide.vue'
import Input from '../view/component/form/Input.vue'
import Menu from '../view/component/navigation/Menu.vue'
import Github from '../view/github/Github.vue'

const routes = [
  {
    path: '/',
    name: 'Introduce',
    component: Introduce,
  },
  {
    path: '/github',
    name: 'Github',
    component: Github,
  },
  {
    path: '/component',
    component: ComponentLayout,
    children: [
      {
        path: 'guide',
        name: 'ComponentGuide',
        component: Guide,
      },
      {
        path: 'form/input',
        name: 'ComponentInput',
        component: Input,
      },
      {
        path: 'navigation/menu',
        name: 'ComponentMenu',
        component: Menu,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router