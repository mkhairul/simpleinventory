<template>
  <div class="container">
    <h1>Inventory</h1>
    <div class="row">
      <div v-for="n in inventory" :key="n.id" class="col s12 m4">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{ n.name }}</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inventory: [{ name: 'woot1', id: 1 }, { name: 'woot2', id: 2 }, { name: 'woot3', id: 3 }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
