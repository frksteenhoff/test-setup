<template>
  <div id="app">
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

</style>