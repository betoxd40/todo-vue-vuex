<template>
  <div class="hello">
    <div class="todo-item" v-for="item in TODOS" :key="item.id">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'HelloWorld',
  mounted(){
    this.$store.dispatch('GET_TODO')
  },
  computed : {
    ...mapGetters(['TODOS']),
      //Other computed properties
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
