<template>
   <header>
      <div class="logo">
        <router-link to="/" class="Logo"> <img src="../assets/logo.png" height="48px"/></router-link>
      </div>
      <div class="main-navigation">
         <router-link to="/home">Home</router-link>
         <router-link to="/login">Login</router-link>
         <router-link to="/register">Register</router-link>
         <a @click.prevent.stop="logout">Logout</a>
      </div>
   </header>
</template>

<script>
   import firebase from 'firebase'

   export default {
      name: "Header-component",
      methods: {
         logout(){
            firebase.auth().signOut().then(() => {
               this.$router.replace('login');
            });
         }
      }
   }
</script>

<style scoped>
   .main-navigation a {
      color: white;
      padding: 10px; 
      font-size: 1.1em;
      text-transform: uppercase;
      text-decoration: none;
   }

   a:hover {
      background: #A6A2DC;   
   }

   .main-navigation {
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      justify-content: left;
   }

   .logo {
      padding: 10px;
   }
</style>