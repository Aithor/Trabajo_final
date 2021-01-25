<template >

    <b-navbar toggleable="md" variant="info" id="menu">
    <b-navbar-brand id="text">Animales de la Sabana</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto"> 
            <b-nav-item class="nav-link" to="/home">Inicio</b-nav-item>
            <b-nav-item class="nav-link" to="/listaanimales">Nuestros Animales</b-nav-item>
            <b-nav-item class="nav-link" to="/addanimales">AddAnimales</b-nav-item>
            <b-nav-item class="nav-link" to="/autores">Autores</b-nav-item>
            <b-nav-item class="nav-link" to="/Documental">Documental</b-nav-item>
            <b-nav-item class="nav-link" to="/Contacto">Contacto</b-nav-item>
            <b-nav-item class="nav-link" to="/Tabla">Tabla</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
  </b-navbar>
</template>




<script>
export default {


}
</script>


<style scoped>


#menu{
  background-color: rgb(209, 167, 29) !important;
}

#text{
  color: white;
}

.router-link-exact-active, .router-link-active {
  background-color: rgb(235, 188, 34);

}
</style>