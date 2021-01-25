<template>
  <div>

    <h1 class="pb-2">
     <icons :icon="['fas', 'star']" /> 
     Ahora estas en <strong> DOCUMENTAL</strong>
     </h1>  
      <p> Aquí os dejamos un documental para poder apreciar estos preciosos seres vivos. <b-link href="https://www.ecologiaverde.com/que-animales-viven-en-la-sabana-africana-1239.html"></b-link>.</p>

    <div>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/Rlw5KHSS9qk"
        allowfullscreen
      ></b-embed>
    </div>

 </div>

</template>

<script>


export default {
  props: {  
   name: {
      type: String,
      default: 'Documental'
    }
  }
}
</script>