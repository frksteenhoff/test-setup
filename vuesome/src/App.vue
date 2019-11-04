<template>
  <div id="app">
    <b-alert dismissible show> Hello {{ name }}! </b-alert>
    <Header/>
    <router-view></router-view>
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
        name: "Henriette"
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