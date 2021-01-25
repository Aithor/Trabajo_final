<template>
<div id="home">
     <h1>¡Nuestros Animales!</h1>  
      <p>Todo sobre ellos<strong> DESCÚBRENOS</strong> 
      <b-link href="https://twitter.com/movemosalmundo"></b-link> 
      </p>
    <p>Consulta nuestro
      <b-link href="https://www.instagram.com/sabanaveterinaria/?hl=es">Instagram</b-link>
      para ver más información sobre nosotros.
    </p>

     <Diapos/>
 </div>
</template>

<script>
import Diapos from '../components/Diapos.vue' 

export default {
   name: 'Home',
   components: {
        Diapos
  }
}
</script>