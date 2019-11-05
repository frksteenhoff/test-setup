<template>
  <div id="app">
    <b-alert dismissible show> Hello {{ name }}! </b-alert>
    <p v-if="this.isShown">Hi there!!</p>
    <Header/>
    <router-view v-on:clickedSomething="handleClickInParent"></router-view>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'app',
    components: {
      Header
    },
    data : function() {
      return {
        name: "Henriette",
        isShown: false
      }
    },
    methods: {
      handleClickInParent: function() {
        this.isShown = true
        console.log("Got it!")
      }
    }
  }
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background: #565C98; 
  margin: 30px;
  color: white;
}

h1 {
  font-family: 'Courier New', Courier, monospace;
}

button {
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>