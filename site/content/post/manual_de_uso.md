---
title: Manual de uso
date: 2025-11-20
description: Una breve guía para los usuarios y editores de La Crítica del Derecho. Es APB, pero son todas características optativas, no obligatorias. 
categories:
  - ensayos
author:
  - Ramiro Álvarez Ugarte
thumbnail: 
  - src: "/img/edward.png"
    epigraph: "Edward Tufte"
    copyright: 
highlight: true
callouts:
  - Los destacados se arman rápidamente, sirven para que nos vean, para compartir. No abusaría de ellos, con uno ---creo--- alcanza. 
---

Este documento explica algunas peculiaridades del uso de La Crítica del Derecho, un sitio basado en [Hugo](https://gohugo.io/), un *framework* para sitios estáticos construido en Go. Está hosteado en Netlify para poder tener un administrador de contenido accesible.

Hugo permite un nivel casi total de customización. Hay algunas características del sitio que necesitan entender cómo se pueden "activar" esas características. Las mismas son optativas, y quedan a elección del autor / editor usarlas o no. Pero, en caso de querer usarlas, es sencillo hacerlo y requiere entender brevemente qué son los `shortcodes`. 

Los `shortcodes` son formas de convocar elementos artesanales del sitio, diseñados a nuestro propio gusto y placer. se convocan con algunos símbolos de apertura y de cierre. Y, como es usual, una vez abiertos deben ser cerrados usando el famoso símbolo `/`.

Van entonces dos usos (por ahora) de los `shortcodes` en **La Crítica**. 

# Callouts / frases destacadas

Son los elementos de lectura rápida que fueron solicitados a la hora de diseño. No les amo, pero ahí están. Usarlos requiere dos pasos. 

1. Cargar las "frases destacadas" en la sección correspondiente del editor Decap CMS. 
2. En el texto simplemente hay que decir dónde se pone usando el siguiente código: 

{{< callout 0 >}}

Eso para la primera frase. Si se quiere poner la segunda hay que poner `1`, la tercera `2`, y así. Vean. 

![](/img/ejemplo1.png)

# Notas al márgen

Sigue al espíritu de [Edward Tufte](https://en.wikipedia.org/wiki/Edward_Tufte). Básicamente, hace lo que dice: permite agregar notas al margen, un recurso que puede ser interesante de usar en el marco de una argumentación pero está pensado para visualización en pantallas grandes --- en teléfonos, lo que queremos es un gran flujo de texto que no sea interrumpido. En esos casos, la "buena práctica" para textos pensados para leerse en un teléfono es usar las tradicionales notas al pie [^1].

[^1]: Así.  

Pero habilitar la *marginalia* no está mal, y también resulta fácil de usar. {{< sidenote >}} Por ejemplo, precisamente aquí. Se pueden poner también [links](https://lacritica.ar/). {{< /sidenote >}} Simplemente es necesario usar ese `shortcode` justo después del lugar donde se quiere hacer la anotación. 

Para que se entienda, los párrafos anteriores se ven así escritos en Markdown, con los símbolos que convocan. 

![](/img/ejemplo2.png)

# Importante sobre las notas "destacadas"

Si queremos que no desaparezcan en el eter, cuando reemplazamos una nota destacada por otra la que "sale" de la sección tiene que editarse, para *desseleccionar* las opción *highlight*. 