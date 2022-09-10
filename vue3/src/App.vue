<template>
  <div>
    <h1>Tareas</h1>
    <ul>
     <li v-for="(hero,index) in dcHeros" v-bind:key="index"> {{index}}-{{hero.name}} </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dcHeros: [
          {name: "Tareas1" },
          {name: "Tareas2" },
          {name: "Tareas3" },
          {name: "Tareas4" },
          {name: "Tareas5" },
        ],
      };
    },
  }
</script>