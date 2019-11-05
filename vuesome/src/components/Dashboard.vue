<template>
   <div class="wrapper">
         <h1>Dashboard</h1>
         <!-- Piping name to fallback, always ensuring content then to capitalize, can be chained -->
         <h3>Hi {{name1 | fallback | capitalize}}!</h3>
         <p>Arriving here, means that you have successfully logged in to the system!</p>
         <div id="app-3">
            <span v-if="this.$store.state.store.seen">Now you see me</span>
         </div>
         <button @click="toggle">ChangeState</button>
         <h2>List of important things</h2>
         <ol>
               <b-list-group-item v-for="(todo, index) in this.$store.state.store.todos" v-bind:key="todo">
                     {{index+1}}) {{todo}}
               </b-list-group-item>
         </ol>
         <p>Count</p>
         <p>{{this.$store.state.store.count}}</p>
         <button @click="increment">Inc</button><button @click="decrement">Dec</button><button @click="incrementN(20)">Inc 20</button>
         <button @click="handleClick"></button>
         <p id="tst">Message: {{this.$store.state.store.message}}</p>
         <p>Reversed: {{reverseMessage()}}</p>

         <button class="btn btn-primary" @click="changeName()">{{name1}}</button>

         <div class="container">
               <div class="row row-no-gutters">
                     <div class="col-xs-4">
                        <ImageBox/>
                        </div>
                    <div class="col-xs-4">
                        <ImageBox/>
                    </div>
                    <div class="col-xs-4">
                        <ImageBox/>
                    </div>
            </div>        
      </div>
   </div>
</template>

<script>
   import { mapActions } from 'vuex'
   import ImageBox from './ImageBox'
   
   export default {
      name: 'Dashboard',
      components: {
            ImageBox
      },
      data: function() {
            return {
                  name1 : "Henriette"
            }
      },
      methods: { // dispatching actions in components
            ...mapActions([
                  'toggle',
                  'increment',
                  'incrementN',
                  'decrement',
                  'reverseMessage'
            ]),
            reverseMessage() { // computed
            return this.$store.state.store.message.split('').reverse().join('')
                  },
            changeName: function() {
                  this.name1 = "newName"
            },
            handleClick: function() {
                  this.$emit('clickedSomething')
            }
      },
      watch : {
            name1 : function() {
                  console.log(this.name1);
            }
      },
      filters: { 
            fallback: function(name) {
                  return name ? name : "there"
            },
            capitalize: function(text) {
                  return text.toUpperCase()
            }
      }
   }
</script>

<style>
      div.list-group-item {
            color: black;
      }
</style>