<template>
  <div>
      <b-card
        :title="titulo"
        :img-src="srcimg"
        :img-alt="alt"
        img-top
        :footer="autor"
        tag="proyecto"
        style="max-width: 20rem;"
        class="mb-2"
      >

        <b-card-text>
          {{texto}}
        </b-card-text>

        <b-button id="boton"
          v-b-tooltip.hover
          title="Ir a la página del proyecto"
          variant="primary"
          :href="url"
          >Wikipedia</b-button>

      </b-card>

      
  </div>
</template>

<script>
export default {
  props: ["id", "autor", "titulo", "srcimg", "alt", "texto", "url"]
};
</script>

<style scoped>
#boton{
  background-color: rgb(235, 188, 34);
  border:rgb(235, 188, 34);
  color: black;
}
</style>