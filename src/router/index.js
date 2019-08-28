import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import User from '@/components/User'
import UserList from '@/components/UserList'
import OldUser from '@/components/OldUser'
import NewUser from '@/components/NewUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginLink',
      component: login
    },
    {
      path: '/user',
      name: 'userLink',
      component: User,
      children: [
        {
          path: 'userlist',
          component: UserList
        },
        {
          path: 'olduser',
          component: OldUser
        }, {
          path: 'newuser',
          component: NewUser
        },
      ]
    },

  ]
})
