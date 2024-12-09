<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.col-lg-3.mb-2
        figure
          img(src='@/assets/curso/introduccion/img_1.png', alt='Texto que describa la imagen').mx-auto
      .col-lg-9.mb-2
        p.mb-0 Este componente ofrece una formación integral en la elaboración de conservas de frutas y verduras, con un enfoque en la inocuidad y la calidad del producto final. A lo largo del programa, el aprendiz adquirirá conocimientos sobre los principios fundamentales de conservación, los métodos de esterilización, y las mejores prácticas de higiene y manipulación de alimentos. Se profundizará en la composición de frutas y verduras, analizando las sustancias bioactivas y sus beneficios para la salud, y se abordarán los factores que afectan la calidad poscosecha, proporcionando herramientas para optimizar la duración de las conservas. Al finalizar, el aprendiz estará capacitado para seleccionar ingredientes de calidad y elaborar conservas de manera segura y eficiente.

      
      .video.mb-5
        //- <iframe width="560" height="315" src="https://www.youtube.com/embed/6AGqGgSEQ2g?si=ErpkvXxiI8TMyktw" title="Ecología y conducción de grupos turísticos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
