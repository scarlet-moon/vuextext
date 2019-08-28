import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from "vuex-persistedstate"
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //存放所有组件都可以使用的数据
    loginUser: localStorage.getItem('user'),
    userList: []
  },
  mutations:{
    keepLogin(state, value){
      state.loginUser = value
      localStorage.setItem('user', value)
    },
    saveUser(state, value) {
      state.userList = value
    }
  },
  actions: {
    getUserList(ctx){
      return new Promise((resolve, reject)=>{
        axios.get('/api/userlist')
        .then(res=>{
          ctx.commit('saveUser', res.data)
        })
        resolve()
      })
    }
  },
  getters: {
    newUser: state => {
      return state.userList.filter(user => user.age<=30)
    },
    oldUser: state =>{
      return state.userList.filter(user => user.age>30)
    }
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage,
      reducer(val) {
        return { // 只储存state中的user
          userList: val.userList
        }
      }
  })]

})