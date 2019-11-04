<template>
   <div class="wrapper">
         <h1>Dashboard</h1>
         <p>Arriving here, means that you have successfully logged in to the system!</p>
         <div id="app-3">
            <span v-if="this.$store.state.store.seen">Now you see me</span>
         </div>
         <button @click="toggle">ChangeState</button>
         <h2>List of important things</h2>
         <ol>
               <li v-for="todo in this.$store.state.store.todos" v-bind:key="todo">
                     {{todo}}
               </li>
         </ol>
         <p>Count</p>
         <p>{{this.$store.state.store.count}}</p>
         <button @click="increment">Inc</button><button @click="decrement">Dec</button><button @click="incrementN(20)">Inc 20</button>

         <p id="tst">Message: {{this.$store.state.store.message}}</p>
         <p>Reversed: {{reverseMessage()}}</p>

         <ImageBox/>
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
            }
      }
   }
</script>