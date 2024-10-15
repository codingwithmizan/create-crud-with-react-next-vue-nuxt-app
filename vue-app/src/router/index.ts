import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import About from '@/pages/about/index.vue'
import Contact from '@/pages/contact/index.vue'
import Documents from '@/pages/documents/index.vue'
import UserList from '@/pages/users/index.vue'
import UserAdd from '@/pages/users/add/index.vue'
import UserEdit from '@/pages/users/edit/index.vue'
import UserDetails from '@/pages/users/details/index.vue'
import ProductList from '@/pages/products/index.vue'
import NewProducts from '@/pages/products/new/index.vue'
import FeaturedProducts from '@/pages/products/featured/index.vue'
import NotFound from '@/pages/not-found/index.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/users',
      children: [
        {
          path: '',
          name: 'user-list',
          component: UserList
        },
        {
          path: ':id',
          name: 'user-details',
          component: UserDetails
        },
        {
          path: 'add',
          name: 'user-add',
          component: UserAdd
        },
        {
          path: ':id/edit',
          name: 'user-edit',
          component: UserEdit
        }
      ]
    },
    {
      path: '/documents',
      children: [
        {
          path: ':slug(.*)*',
          component: Documents
        }
      ]
    },
    {
      path: '/products',
      name: 'product-list',
      component: ProductList,
      children: [
        {
          path: 'new',
          name: 'new-products',
          component: NewProducts
        },
        {
          path: 'featured',
          name: 'featured-products',
          component: FeaturedProducts
        }
      ]
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ]
})
