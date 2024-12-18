<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Generalidades de frutas y verduras

    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.mb-2
        p Este material de estudio te ayudará a comprender las características, beneficios y clasificación de las frutas y verduras, esenciales para una alimentación saludable y equilibrada. Aprenderás sobre sus propiedades nutricionales, su papel en la prevención de enfermedades y cómo incorporarlas de forma efectiva a tu dieta. En este componente se exponen los temas relacionados con las características, clasificación, propiedades y componentes de las frutas y verduras, además se describen las sustancias bioactivas (antioxidantes) y los mecanismos que alteran la calidad de estos alimentos.

    .bg_img_1
      .row.justify-content-center.align-items-center
        .col-md-6.col-lg-5.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img_2.png', alt='Texto que describa la imagen').mx-auto
        .col-lg-7.mb-2
          .div.mb-3(data-aos="fade-right")
            h3.bgr_3.position-relative Importancia de las frutas y verduras para la salud
              img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

          p.mb-2 Las frutas y verduras son alimentos esenciales que proporcionan numerosos beneficios para nuestra salud. Son ricas en vitaminas, minerales, fibra y antioxidantes que ayudan a mantener un cuerpo sano y a prevenir enfermedades.
          p Su alto contenido de fibra mejora la digestión, regula los niveles de colesterol y previene el estreñimiento. Las frutas y verduras también son bajas en calorías y ricas en agua, lo que las convierte en una opción ideal para controlar el peso y mantener una buena hidratación. 
        
          .cajon.bg-1.g_18.mb-3
            .row.mb-4
              .col-lg-12.p-4.ps-5 
                p Además, poseen antioxidantes que protegen nuestras células del daño causado por los radicales libres, ayudando a prevenir enfermedades como el cáncer y las enfermedades cardíacas. 
        
    Separador

    #t_1_1.titulo-segundo
      .h2(data-aos="fade-right") 1.1 Diferencia entre frutas y verduras

    .bg_img_2.mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.mb-2
          p Las frutas y verduras son ambas partes comestibles de las plantas, pero se diferencian en su origen y función dentro del ciclo de vida de la planta. Las frutas se desarrollan a partir de la flor y contienen las semillas de la planta. Slos elementos reproductivos de las plantas denominados ovarios, estas contienen semillas en su interior y son de colores llamativos para atraer a los animales que después de comerlas expulsan las semillas al suelo en donde comienza nuevamente el ciclo reproductivo de la planta con su germinación.

        .col-md-12.col-lg-10.mb-2
          figure
            img(src='@/assets/curso/temas/tema1/img_4.png', alt='Texto que describa la imagen').mx-auto

    .row.justify-content-center.align-items-center.mb-0
      .tarjeta--container.mb-2.row.justify-content-center.align-items-center.ordenar_tarjeta_lg
        .col-md-6.col-lg-5.col-xl-4.tarjeta.bg-03.p-5.pos_1.mb-4
          .row.justify-content-center.mb-4
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/img_5.png', alt='Texto que describa la imagen').mx-auto

        .col-md-12.col-lg-8.col-xl-5.tarjeta.bg-04.p-5.mb-4
          p.mb-2 Su función es la de proteger y dispersar las semillas para la reproducción de la planta. Por lo general, son dulces o ácidas y tienen una textura jugosa. 
          p.mb-2 Las verduras, por otro lado, son otras partes de la planta, como las raíces, los tallos, las hojas y las flores. No tienen la función de reproducir la planta, pero aportan nutrientes esenciales para su crecimiento y desarrollo.
          p Aunque algunas frutas como los tomates, los pepinos o las calabazas se consumen como verduras, en realidad son frutos que se han adaptado para ser utilizados en platos salados. 

        .col-md-5.col-lg-4.col-xl-3.tarjeta.mb-4.pos_2
          .row.justify-content-center.mb-4
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/img_6.png', alt='Texto que describa la imagen').mx-auto
            
    Separador

    .row.justify-content-center.align-items-center.mb-3
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Clasificación de las frutas
          img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.bg-09.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_7.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Existen diferentes tipos de frutas y todas se diferencian por sus colores, formas y sabores, esta gran variedad se clasifica de diferentes maneras según las características de las frutas de la siguiente manera:
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.mb-2
        .titulo-sexto.bg-11.mb-4
          h5 Tabla 1. 
          span.text-dark Clasificación de las frutas
        
        .tabla-a.mb-5 
          table
            caption Nota: Sena (2024).
            thead
              tr
                th Clasificación
                th Descripción
                th Ejemplo
            tbody
              tr
                td(rowspan="3").bg-table-01 Tipo de semilla
                td.bg-table-02 Frutas de hueso: poseen una semilla dura y cubierta por una cáscara, como el melocotón, la ciruela o el albaricoque.
                td.bg-table-02 Melocotón
              tr
                td.bg-table-01 Frutas de pepitas: contienen numerosas semillas pequeñas, como la manzana, la pera, la granada, el kiwi, etc.
                td.bg-table-01 Manzana
              tr
                td.bg-table-02 Frutas de grano: contienen pequeñas semillas diminutas, como las fresas, las frambuesas, las moras, etc.
                td.bg-table-02 Fresa
              tr
                td(rowspan="2").bg-table-02 Tiempo de recolección
                td.bg-table-01 Frutas frescas: corresponde a las frutas que están destinadas para ser consumidas a los pocos días después de ser recolectadas. Se recolectan maduras y se consumen en fresco, como la fresa, la uva, el plátano, etc.
                td.bg-table-01 Plátano, Banano
              tr
                td.bg-table-02 Frutas secas: son las frutas que se han sometido a un proceso de desecación. Este proceso consiste en deshidratar las frutas con el fin de que tengan un mayor tiempo de conservación, se elimina gran parte de su contenido de agua y de igual manera se disminuye su nivel de vitaminas.
                td.bg-table-02 Pasas, dátiles
              tr
                td(rowspan="2").bg-table-01 Climatéricas <br> (Esta es posiblemente la clasificación más relevante a la hora de determinar un sistema de cultivo y cosecha)
                td.bg-table-01 Frutas climatéricas: se dice que un fruto es climatérico cuando al desprenderse de la planta su proceso de respiración se incrementa, lo que conlleva a que se active la maduración y comience a producir etileno. Es decir, una fruta climatérica es aquella que se puede adquirir antes de que esté madura y se come después de la cosecha, como el plátano, el aguacate, el tomate, etc.
                td.bg-table-01 Manzana, pera, plátano, ciruela, higo, melón, aguacate, kiwi, tomate, mango, chirimoya, melocotón, melón, membrillo, sandía, papaya, entre otras
              tr
                td.bg-table-02 Frutas no climatéricas: estas son frutas que no se maduran después de que son recolectadas, por lo cual la cosecha debe realizarse cuando la fruta está casi lista para el consumo. Si son recolectadas cuando aún están verdes, solo se ablandarán.
                td.bg-table-02 Naranja, limón, cereza, frambuesa, uva, aceituna, pimiento, pepino, piña, mora, arándano, berenjena, pomelo, granada, calabaza, calabacín, lima, fresa, entre otros

    .row.justify-content-center.align-items-center.mb-3
      .div.mb-3(data-aos="fade-right")
        h3.text-center Otras clasificaciones para las frutas son las siguientes: 

    .bg_img_3
      .row.justify-content-center.align-items-center.mb-3
        .col-md-6.col-lg-4.mb-3
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img_8.png", alt="alt").img400.m-auto
        .col-lg-8.mb-3
          SlyderF.custom(columnas="col-md-6 col-lg-6 col-xl-6")
            .tarjeta.tarjeta--slyder.bg-white.p-4
              .row.justify-content-center.align-items-center.mb-3
                .col-4.mb-3
                  img(src="@/assets/curso/temas/tema1/img_9.svg", alt="alt").img100.m-auto
                h4.text-center Frutas cítricas
                p.text-center.mb-0 Son las que contienen ácido cítrico como el limón. 

            .tarjeta.tarjeta--slyder.bg-white.p-4
              .row.justify-content-center.mb-3
                .col-4.mb-3
                  img(src="@/assets/curso/temas/tema1/img_10.svg", alt="alt").img100.m-auto
                h4.text-center Frutas tropicales
                p.text-center.mb-0 Son aquellas provenientes de climas tropicales y que deben mantenerse a temperaturas por encima de los 4 °C, de lo contrario pueden echarse a perder. 

            .tarjeta.tarjeta--slyder.bg-white.p-4
              .row.justify-content-center.mb-3
                .col-4.mb-3
                  img(src="@/assets/curso/temas/tema1/img_11.svg", alt="alt").img100.m-auto
                h4.text-center Frutas del bosque
                p.text-center.mb-0 Son las que crecen en zonas boscosas como por ejemplo las moras o las frambuesas.

            .tarjeta.tarjeta--slyder.bg-white.p-4
              .row.justify-content-center.mb-3
                .col-4.mb-3
                  img(src="@/assets/curso/temas/tema1/img_12.svg", alt="alt").img100.m-auto
                h4.text-center Frutas secos
                p.text-center.mb-0 Correspondiente a las frutas que naturalmente tienen un nivel inferior al 50% de agua y son ricos en grasas y proteínas, por lo cual aportan mucha energía a quienes los consumen.

    .bg_img_4
      .row.justify-content-center.align-items-center.mb-3
        .div.mb-3(data-aos="fade-right")
          h3.bgr_3.position-relative Clasificación de verduras
            img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-12.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/img_14.png', alt='Texto que describa la imagen').mx-auto

        .col-lg-12
          p Se entiende por verduras aquellas partes comestibles de las plantas; la forma en que estas se clasifican está determinada según la parte de la planta a la que corresponden. A continuación, se encuentra un listado de las clasificaciones y su respectiva descripción:

        .col-md-12.col-lg-10.mb-2
          .titulo-sexto.bg-11.mb-4
            h5 Tabla 1. 
            span.text-dark Clasificación de verduras
          
          .tabla-a.mb-0
            table
              caption Nota: Sena (2024).
              thead
                th Clasificación
                th Descripción
                th Ejemplo
              tbody
                tr
                  td.bg-table-02 Hoja
                  td.bg-table-02 Se conocen como las verduras cuyas hojas son comestibles.
                  td.bg-table-02 Lechuga, espinaca, col rizada
                tr
                  td.bg-table-01 Raíz
                  td.bg-table-01 Corresponden a la parte de la planta que crece bajo la tierra y que se puede comer, por lo general son ricas en carbohidratos y azúcares.
                  td.bg-table-01 Zanahoria, remolacha, nabo
                tr
                  td.bg-table-02 Tallo
                  td.bg-table-02 Estos se componen por el tallo y la raíz de la planta.
                  td.bg-table-02 Apio, espárrago
                tr
                  td.bg-table-01 Flor
                  td.bg-table-01 Son aquellas que se consumen principalmente por sus flores, que son la parte de la planta que se desarrolla antes de ser fertilizada.
                  td.bg-table-01 Coliflor, brócoli, alcachofa
                tr
                  td.bg-table-02 Bulbo
                  td.bg-table-02 Estos hacen parte de ciertas plantas y se conforman por un tallo cubierto por escamas comestibles.
                  td.bg-table-02 Cebolla, ajo
                tr
                  td.bg-table-01 Fruto
                  td.bg-table-01 Aunque se consumen como verduras, en realidad son frutos que se han adaptado para ser utilizados en platos salados.
                  td.bg-table-01 Tomate, pepino, calabaza
                tr
                  td.bg-table-02 Tubérculo
                  td.bg-table-02 Corresponden a la parte de la planta que cumple la función de reservar temporalmente las sustancias que esta necesita para su supervivencia tales como nutrientes y carbohidratos.
                  td.bg-table-02 Papa, camote

    Separador

    .row.justify-content-center.align-items-center.mb-3
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Componentes de las frutas y verduras
          img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-md-6.col-lg-5.mb-2
        figure
          img(src='@/assets/curso/temas/tema1/img_15.png', alt='Texto que describa la imagen').mx-auto

      .col-lg-7.mb-2
        p La composición de las frutas y las verduras varía según la clasificación a la que corresponden y el grado de maduración en que se encuentran. Pero a manera general, se puede decir que ambos están compuestos de una serie de elementos básicos que se encuentran en la extensa mayoría de frutas y verduras. A continuación se describen los componentes más importantes que se pueden encontrar tanto en frutas como en las verduras.

    .row.justify-content-center.align-items-center.mb-0.ordenar_tarjeta_lg
      .col-lg-9.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA").color-primario
          .row(titulo="Agua")
            .col-md-12.mb-4.mb-md-0
              p Las frutas y verduras por regla general se componen principalmente por agua, para el caso de las frutas sus niveles oscilan generalmente entre 50 % y 90 %, en las verduras los niveles están entre 75 % y 90 %. El agua proporciona la posibilidad a las frutas y verduras de mantenerse frescas e incluso poseer aromas, también influye directamente en su conservación porque aporta componentes a las células.

          .row(titulo="Carbohidratos")
            .col-md-12.mb-4.mb-md-0
              p Los carbohidratos representan entre el 5 % y 30 % de las frutas y verduras a modo general, pero naturalmente los valores varían dependiendo de cada caso específico de fruta o verdura. Los carbohidratos corresponden a los azúcares que dan la energía a quienes consumen los alimentos y son una parte esencial de la dieta del ser humano.

          .row(titulo="Fibras")
            .col-md-12.mb-4.mb-md-0
              p Uno de los componentes más importantes de las frutas y verduras es la fibra y en ambos casos resultan ser ricas fuentes de esta, por lo general su contenido es del 2%. Se le llama comúnmente fibra dietética o fibra vegetal a aquella que se encuentra en los alimentos y normalmente la mayor concentración de fibra está presente en la piel o cáscara de la fruta o verdura. 

              p <b>Fibra soluble:</b> Retiene agua y se convierte en gel durante la digestión, lo que retrasa el proceso digestivo y permite una mejor absorción de nutrientes. También ayuda a reducir los niveles de colesterol en la sangre y regula el pH. Un tipo común de fibra soluble es la pectina, que se encuentra en frutas y verduras.
              p <b>Fibra insoluble:</b> Es la más abundante en los alimentos y acelera el tránsito intestinal, actuando como un laxante. Aumenta el peso de la materia fecal en el intestino.
              p La fibra dietética tiene una gran capacidad de absorción de agua y es resistente a la digestión. Aunque no aporta valor nutricional directo, es crucial para la adecuada función de las contracciones musculares en los intestinos.

          .row(titulo="Proteínas")
            .col-md-12.mb-4.mb-md-0
              p Las frutas y verduras también poseen proteínas dentro de su composición química, sin embargo su contenido es inferior al 1%, así que no son consideradas como una fuente rica de estas. Las proteínas son compuestos orgánicos a base de carbono y otros elementos como el hidrógeno, el nitrógeno y el oxígeno.¿

      .col-md-5.col-lg-3.mb-3.pos_1
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_16.png", alt="alt").mx-auto

      .col-md-5.col-lg-3.mb-3
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img_17.png", alt="alt").mx-auto
      .col-lg-9.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA").color-primario
          .row(titulo="Pigmentos")
            .col-md-12.mb-4.mb-md-0
              p Un componente encontrado en frutas y verduras son los pigmentos, estos son las sustancias encargadas de darle el color a las frutas y verduras. La concentración de pigmentos varía con el tiempo de vida de la planta, a medida que esta avanza a través de las etapas de maduración. Existen tres tipos relevantes de pigmentos en las frutas y verduras: la clorofila, los carotenoides y los flavonoides.

          .row(titulo="Vitaminas")
            .col-md-12.mb-4.mb-md-0
              p Las vitaminas son sustancias que el cuerpo necesita para funcionar apropiadamente, sin embargo no tiene la capacidad de sintetizarlas por sí mismo, por lo tanto necesita de fuentes externas para poder obtenerlas. 
              p Las frutas y verduras son una buena fuente de vitaminas, en ellas se encuentra una variedad de estas sustancias que cumplen diversas funciones en el cuerpo humano tales como: prevenir enfermedades y deficiencias corporales, también sirven para efectuar diferentes reacciones metabólicas del organismo.

          .row(titulo="Minerales")
            .col-md-12.mb-4.mb-md-0
              p Minerales	Los minerales son nutrientes inorgánicos muy importantes para los sistemas del cuerpo humano, hacen parte de los órganos y elementos internos de este. Se adquieren a través de la ingesta de una gran serie de alimentos como las frutas y verduras.

    Separador

    .row.justify-content-center.align-items-center.mb-3
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Importancia de las vitaminas
          img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

    .bg_img_5
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12.mb-3
          p Las vitaminas son sustancias que el cuerpo necesita para funcionar apropiadamente, sin embargo no tiene la capacidad de sintetizarlas por sí mismo, por lo tanto necesita de fuentes externas para poder obtenerlas. 

        .col-md-6.col-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema1/img_18.png', alt='Texto que describa la imagen').mx-auto

        .col-lg-7.mb-3
          p.mb-2 Las frutas y verduras son una buena fuente de vitaminas, en ellas se encuentra una variedad de estas sustancias que cumplen diversas funciones en el cuerpo humano tales como: prevenir enfermedades y deficiencias corporales, también sirven para efectuar diferentes reacciones metabólicas del organismo.
          p Entre las vitaminas más importantes está la vitamina C, esta se encuentra contenida de manera natural en la mayoría de las frutas y verduras, especialmente aquellas del grupo de los cítricos. Después están las vitaminas del complejo B, que corresponden a un grupo de vitaminas diferentes que desempeñan importantes funciones del cuerpo desde complementar los ácidos nucleicos, desintoxicar el organismo, participar en las reacciones que generan energía, sintetizar proteínas, grasas y carbohidratos, entre otras.

        .col-lg-12       
          .cajon.bg-1.g_18.mb-3
            .row.mb-4
              .col-lg-12.p-4.ps-5 
                p También está la vitamina A, que es la que se encarga de generar pigmentos que la retina ocular de las personas necesita para funcionar adecuadamente, por lo cual es de gran importancia para tener una buena visión; esa vitamina se encuentra en alimentos como las zanahorias, el mango y la lechuga. Finamente está la vitamina E presente en vegetales de hoja verde tales como: las espinacas y el brócoli; esta vitamina es de un gran beneficio para el sistema circulatorio y adicional a eso tiene propiedades antioxidantes que ayudan a la prevención de algunas enfermedades como el párkinson. 
    
    .bg_img_6
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8.mb-2
          .titulo-sexto.bg-11.mb-4
            h5 Figura 1. 
            span.text-dark Vitaminas en las frutas y verduras 

          figure
            img.mb-3(src='@/assets/curso/temas/tema1/img_19.png', alt='Proceso de siembra para aguacate.').mx-auto.w-75
            figcaption Nota: Sena (2024)

    Separador

    .row.justify-content-center.align-items-center.mb-3
      .div.mb-3(data-aos="fade-right")
        h3.bgr_3.position-relative Función de los minerales
          img.pst(src='@/assets/curso/temas/tema1/img_3.svg', alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.mb-3
        .bloque-texto-g.bloque-texto-g.bg-13.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img_20.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los minerales son nutrientes inorgánicos muy importantes para los sistemas del cuerpo humano, hacen parte de los órganos y elementos internos de este. Se adquieren a través de la ingesta de una gran serie de alimentos como las frutas y verduras. Los minerales contribuyen en la salud de los seres humanos, manteniendo el funcionando correctamente a las células de todos los órganos de del cuerpo, son responsables de activar la producción de líquidos y otras sustancias como las hormonas y las enzimas, también intervienen en procesos vitales de los seres vivos como la respiración, la digestión y la circulación de la sangre.
    
      .col-lg-11.mb-3
        h5.text-center Los siguientes minerales hacen parte de los más importantes que necesitan los seres humanos para sobrevivir y se encuentran en diversas frutas y verduras.
        
      .col-md-12.col-lg-10.mb-2
        .titulo-sexto.bg-11.mb-4
          h5 Tabla 3. 
          span.text-dark Minerales en las frutas y verduras
        
        .tabla-a.mb-0
          table
            caption Nota: Sena (2024).
            thead
              th Mineral
              th Función
              th Procedencia
            tbody
              tr
                td.bg-table-02 Hierro
                td.bg-table-02 Se encarga de producir hemoglobina en la sangre y participa en el transporte del oxígeno a través de todo el torrente sanguíneo.
                td.bg-table-02 Puede encontrarse en verduras de hojas verdes y en higos.
              tr
                td.bg-table-01 Magnesio
                td.bg-table-01 Ayuda al correcto funcionamiento de los músculos, conserva sanos a los huesos y a los dientes; además es de gran ayuda para las articulaciones de brazos y piernas.
                td.bg-table-01 El trigo, los fríjoles, el maíz, la avena, las almendras, las nueces, los higos y las verduras de hojas verdes.
              tr
                td.bg-table-02 Calcio
                td.bg-table-02 Es un mineral esencial para la formación de los huesos y los dientes, participa en las acciones que le permiten a la sangre coagularse, ayuda en las funciones musculares.
                td.bg-table-02 Puede encontrarse en verduras de hojas verdes y en semillas de ajonjolí y perejil.
              tr
                td.bg-table-01 Fósforo
                td.bg-table-01 Hace parte del proceso mediante el cual se forman los huesos y los dientes, también participa en la creación de las células.
                td.bg-table-01 Puede obtenerse de los cereales naturales, los fríjoles y las lentejas.
              tr
                td.bg-table-02 Selenio
                td.bg-table-02 Tiene propiedades antioxidantes y ayuda a prevenir el cáncer, además de facilitar el funcionamiento del corazón, el hígado y los órganos reproductivos.
                td.bg-table-02 Puede encontrarse en los cereales integrales y en gran parte de las verduras.
              tr
                td.bg-table-01 Potasio
                td.bg-table-01 Sirve para el funcionamiento adecuado de los riñones y del corazón. Participa en la transmisión de señales nerviosas y controla los niveles de agua en el cuerpo.
                td.bg-table-01 Todas las frutas, vegetales de hojas verdes y papas.
              tr
                td.bg-table-02 Sodio
                td.bg-table-02 Se ocupa del funcionamiento de los músculos y los nervios, regula los líquidos del cuerpo, contribuye a la correcta digestión de los alimentos y previene la deshidratación.
                td.bg-table-02 Puede encontrarse en los cereales.
              tr
                td.bg-table-01 Flúor
                td.bg-table-01 Hace parte de la composición de los huesos y dientes, además previene la aparición de caries dentales.
                td.bg-table-01 Se obtiene de frutas y verduras en general.
              tr
                td.bg-table-02 Zinc
                td.bg-table-02 Es importante para tener un adecuado desarrollo del cuerpo y sus tejidos como es el caso de la piel y el cabello.
                td.bg-table-02 Se le puede encontrar en legumbres, frutos secos y semillas de girasol.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
