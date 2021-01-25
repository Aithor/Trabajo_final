<template>
  <div>

    <h1 class="pb-2">
     <icons :icon="['fas', 'award']" /> 
      Nuestros Animales
     <icons :icon="['fas', 'award']" /> 
     </h1>  
      <p> Los animales más importantes de <strong>la Sabana. </strong> 
        <b-link href="https://www.ecologiaverde.com/que-animales-viven-en-la-sabana-africana-1239.html">Para más información</b-link> 
        </p>

      <div class="container-md">
          <b-card-group columns>
            <div columns v-for="proyecto in proyectos" :key="proyecto.id">
             <Card2 :autor="proyecto.autor" :srcimg="proyecto.srcimg" :alt="proyecto.alt" :titulo="proyecto.titulo" :texto="proyecto.texto" :url="proyecto.url"></Card2> 
            </div>
           </b-card-group>
       </div>
        <br><br><br>
       <div class="container">
                    <header class="text-center">
                        <h1 class="section-heading text-uppercase">Tipos</h1>
                        <p class="section-subheading text-muted">¿Qué tipos de dietas tienen nuestros animales?</p>
                        <br><br><br>
                    </header>
         <div class="row text-center">
                        <article class="col-md-4">
                            <img class="mx-auto rounded-circle" src="../assets/carnivoro.jpg" width="250" height="250" alt="imagen carne" />
                            <h4 class="my-3">Carnivoro</h4>
                            <p class="text-muted">Exlusivamente carne. </p>
                        </article>
                        <article class="col-md-4">
                            <img class="mx-auto rounded-circle" src="../assets/vegetales.jpg" width="250" height="250" alt="imagen vegetales" />
                            <h4 class="my-3">Herbívoro</h4>
                            <p class="text-muted">Exclusivamente vegetales</p>
                        </article>
                        <article class="col-md-4">
                            <img class="mx-auto rounded-circle" src="../assets/omnivoro.jpg" width="250" height="250" alt="imagen carne y vegetales" />
                            <h4 class="my-3">Omnívoro</h4>
                            <p class="text-muted">Combinación de carne y vegetales.</p>
                        </article>    
           </div>
           <br><br><br>
        </div>

 </div>
</template>

<script>
import Card2 from '../components/Card2.vue' 
//(para utilizar en localhos)
//para utilizar en produccion
const lstProysJson = '../animales.json';

export default {
  props: {  
   name: {
      type: String,
      default: 'ListaProyectos'
    }
  },
  components: {
        Card2
      },
  data() {
      return {
        proyectos:[],
        githubPage: 1,
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData()
    },
    
    methods: {
        async fetchData() {
          const res = await fetch (lstProysJson);
          const val= await res.json();
          this.proyectos=val;
          console.log(val);
        }
      
    }
  }
</script>
