<template>
  <div id="app">
    <div class="container-fluid">
      <Menu id="menu" /> 
      <b-breadcrumb :items="items" ></b-breadcrumb>
      <router-view />
    <Footer /> 
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
  data() {
      return {
        items: [
          {
            text: 'Home',
            href: '/home',
            to:"/home"
          },
          {
            text: 'Página actual',
            active: true
          }
        ]
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #717171  ;
}


nav {
  font-weight: bold;
  color: #f7f4f4;
}

nav a.router-link-exact-active {
  color: #c5bfbf  ;
}
</style>
