# pwa-ionos-Yamileth-Luna# 🔍 Parte 1: Investigación Teórica – PWA

## 1. Web App Manifest (`manifest.json`)
  El Web App Manifest es un archivo JSON que contiene los metadatos de una Progressive Web App. Su función principal es permitir que el navegador reconozca la aplicación       como instalable y definir su apariencia cuando el usuario la instala en su dispositivo.
  
  La propiedad theme_color define el color principal de la aplicación. Este color es utilizado por el navegador y el sistema operativo para personalizar elementos visuales     como la barra superior cuando la aplicación está abierta.
  
  La propiedad background_color define el color de fondo que se muestra mientras la aplicación se está cargando. Esto evita que aparezca una pantalla blanca y proporciona      una transición visual más agradable.
  
  La propiedad display controla cómo se muestra la aplicación. Con el valor "standalone" la aplicación se comporta como una aplicación nativa, sin la barra del navegador.      Con "browser" se muestra como una página web normal con todos los controles del navegador.
  
  El array de icons contiene los íconos de la aplicación en diferentes tamaños. Estos son utilizados por el sistema operativo para mostrar la aplicación en la pantalla de      inicio y durante la instalación. Sin estos íconos, el navegador no permitirá instalar la aplicación.

## 2. Service workers
○	Describir el proceso de registro y el ciclo de vida (Installation, Activation, Fetching).
  Proceso de registro
  El registro es el primer paso para habilitar un Service Worker en una aplicación. Este proceso se realiza desde el archivo JavaScript principal de la página.
  
  Primero se verifica si el navegador es compatible con Service Workers. Luego se especifica la ruta del archivo del Service Worker para que el navegador lo descargue e        instale. El registro puede realizarse cuando la página carga, asegurando que el Service Worker esté disponible para futuras interacciones.
  
  Ciclo de vida
  Installation
  Durante la fase de instalación, el Service Worker se descarga y ejecuta por primera vez. En este momento se pueden precargar recursos estáticos como HTML, CSS, JavaScript    e imágenes en el caché. Esta fase solo ocurre una vez por cada versión del Service Worker. Si la instalación falla, el Service Worker no se activará.
  
  Activation
  En la fase de activación, el Service Worker toma el control de la aplicación. Puede limpiar cachés antiguos de versiones anteriores y preparar el nuevo entorno de trabajo.   Una vez activado, comienza a manejar eventos como solicitudes de red y notificaciones push.
  
  Fetching
  En la fase de fetch, el Service Worker intercepta las solicitudes de red que realiza la aplicación. Escucha cada solicitud y decide cómo responder, ya sea sirviendo          recursos desde el caché, obteniéndolos de la red o combinando ambas estrategias. Esta fase se ejecuta continuamente mientras la aplicación está en uso.
  
○	¿Cómo actúan como un proxy de red?
  Los Service Workers como proxy de red
  Los Service Workers actúan como un proxy de red porque se colocan estratégicamente entre el navegador y el servidor.          Interceptan todas las solicitudes que salen de la aplicación y pueden modificar las respuestas antes de entregarlas.
  
  Esta capacidad les permite tomar decisiones inteligentes sobre cada solicitud. Pueden servir contenido desde el caché         cuando no hay conexión, pasar solicitudes a la red cuando se necesita información actualizada, o combinar ambas opciones      para ofrecer el mejor rendimiento posible.
  
  Al funcionar como proxy, los Service Workers tienen control total sobre el tráfico de red de la aplicación, lo que permite    que las PWA funcionen sin conexión y ofrezcan una experiencia de usuario superior.
