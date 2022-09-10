<template>
  <div>
    <!---convertir a mayusculas-->
    <h1 v-show="isShowing" v-html="title"></h1>
    
  <!-- <h3 v-else-if="isShowing === null">se muestra si no cumple las condiciones</h3>
    <h2 v-else>Parte dos v-else</h2>--> 
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "<h1>Titulo grande con etiqueta</h1>",
      
      isShowing: true,
    }
  }
}
</script>