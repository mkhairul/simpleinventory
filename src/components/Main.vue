<template>
  <div class="container">
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons" v-on:click="createNew">add_circle</i>
      </a>
      <ul>
        <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
        <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
        <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
        <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
      </ul>
    </div>
    <div class="row">
      <transition-group name="list" tag="p">
        <div v-for="n in inventory" :key="n.id" v-bind:id="inventoryId(n.id)" class="col s12 m4">
            <div class="card blue-grey darken-1 test">
              <div class="card-content white-text">
                <span class="card-title">{{ n.name }} ({{ n.id }})</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#" v-on:click="deleteItem(n.id)">Delete</a>
              </div>
            </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inv_id: 3,
      inventory: [{ name: 'woot1', id: 1 }, { name: 'woot2', id: 2 }, { name: 'woot3', id: 3 }]
    }
  },
  methods: {
    createNew () {
      this.inv_id++
      this.inventory.push({ name: 'New Container', id: this.inv_id })
    },
    deleteItem (id) {
      var self = this
      this.$dialog.confirm('Please confirm to continue')
        .then(function () {
          var invIndex = self.inventory.findIndex(function (item, index) {
            return item.id === id
          })
          console.log(invIndex)
          self.inventory.splice(invIndex, 1)
        })
        .catch(function () {
          console.log('Clicked on cancel')
        })
      document.activeElement.blur()
    },
    inventoryId (id) {
      return 'inventory_' + id
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
