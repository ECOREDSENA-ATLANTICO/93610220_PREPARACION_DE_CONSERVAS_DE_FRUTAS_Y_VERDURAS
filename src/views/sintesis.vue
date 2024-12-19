<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En este componente se abordan los aspectos fundamentales sobre la clasificación, composición y conservación de frutas y verduras, destacando su importancia para garantizar la seguridad alimentaria. Se profundiza en la identificación de los ingredientes y las mejores prácticas de higiene para la preparación de conservas, haciendo énfasis en el control de factores como la temperatura y la humedad, que son determinantes para prevenir el deterioro o la contaminación de los alimentos.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis de generalidades, preparación de conservas, hace énfasis en las características de la materia prima, aspectos higiénicos y los ingredientes para la preparación de conservas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
