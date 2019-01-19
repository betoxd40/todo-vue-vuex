
import Axios from 'axios'



const state = {
    todos : null
},
getters = {
   TODOS : state => {
     return state.todos;
   }
},
mutations = {
  SET_TODO : (state,payload) => {
     state.todos = payload
  },
  ADD_TODO : (state,payload) => {
     state.todos.push(payload)
  },
},
actions = {
  GET_TODO : async (context) => {
      let { data } = await Axios.get('https://jsonplaceholder.typicode.com/todos')
      context.commit('SET_TODO',data)
  },
  SAVE_TODO : async (context,payload) => {
      // let { data } = await Axios.post('http://yourwebsite.com/api/todo')
      context.commit('ADD_TODO',payload)
  }
}

export default {
  state,getters,mutations,actions
}