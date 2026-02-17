# pwa-ionos-Yamileth-Luna
# 🔍 Parte 1: Investigación Teórica – PWA

# 1. Web App Manifest (manifest.json)

El Web App Manifest es un archivo en formato JSON que contiene los metadatos de una Progressive Web App (PWA). Su función principal es permitir que el navegador reconozca la aplicación como instalable y definir su apariencia y comportamiento cuando el usuario la instala en su dispositivo. Este archivo es fundamental para que la aplicación pueda ejecutarse como una aplicación independiente.

● theme_color  

La propiedad `theme_color` define el color principal de la aplicación. Este color es utilizado por el navegador y el sistema operativo para personalizar elementos visuales como la barra superior o la interfaz cuando la aplicación está abierta. Su propósito es mejorar la apariencia visual y hacer que la aplicación tenga una apariencia más profesional y similar a una aplicación nativa.

Ejemplo:
```json
"theme_color": "#0f172a"
● background_color

La propiedad background_color define el color de fondo que se muestra mientras la aplicación se está cargando. Esto ayuda a mejorar la experiencia del usuario, evitando que aparezca una pantalla blanca y proporcionando una transición visual más agradable mientras se cargan los recursos.

Ejemplo:

"background_color": "#ffffff"
● display (standalone vs browser)

La propiedad display controla cómo se muestra la aplicación cuando se abre desde el dispositivo del usuario.

display: "browser"
La aplicación se comporta como una página web normal. Se muestra la barra de direcciones y los controles del navegador.

display: "standalone"
La aplicación se comporta como una aplicación nativa. No muestra la barra del navegador, lo que permite una experiencia más inmersiva y profesional.

Ejemplo:

"display": "standalone"
El modo standalone es importante porque permite que la aplicación funcione como una app independiente.

● Importancia del array de icons

La propiedad icons contiene un arreglo de íconos en diferentes tamaños y resoluciones. Estos íconos son utilizados por el sistema operativo para mostrar la aplicación en la pantalla de inicio, menú de aplicaciones y durante la instalación.

Es importante porque sin estos íconos el navegador no permitirá instalar la aplicación como una PWA.

Ejemplo:

"icons": [
  {
    "src": "/icons/icon-192.png",
    "sizes": "192x192",
    "type": "image/png"
  },
  {
    "src": "/icons/icon-512.png",
    "sizes": "512x512",
    "type": "image/png"
  }
]
# 2. Service Workers
Un Service Worker es un script que se ejecuta en segundo plano en el navegador. Permite interceptar solicitudes de red, almacenar recursos en caché y permitir que la aplicación funcione sin conexión a internet. Es uno de los componentes principales de una PWA.

● Proceso de registro

El Service Worker debe registrarse desde el archivo principal de la aplicación mediante JavaScript. El navegador verifica si soporta Service Workers y luego lo instala.

Ejemplo:

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
Este proceso permite que el navegador descargue e instale el Service Worker.

● Ciclo de vida (Installation, Activation, Fetching)

Installation
Es la primera fase. En esta etapa el Service Worker se instala y puede guardar archivos en caché para uso offline.

Activation
En esta fase el Service Worker se activa y toma control de la aplicación. También puede eliminar cachés antiguos.

Fetching
En esta fase el Service Worker intercepta las solicitudes de red y decide si responder desde el caché o desde la red.

Ejemplo:

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
● ¿Cómo actúan como un proxy de red?

El Service Worker actúa como un intermediario entre el navegador y el servidor. Intercepta las solicitudes de red y decide cómo responderlas. Puede responder con datos desde el caché o desde la red, lo que mejora el rendimiento y permite el funcionamiento sin conexión. Por esta razón se considera que funciona como un proxy de red.

# 3. Estrategias de Almacenamiento (Caching)
Las estrategias de caching determinan cómo se almacenan y recuperan los recursos de la aplicación. Estas estrategias permiten mejorar el rendimiento y permitir el funcionamiento offline.

● Cache First

Esta estrategia busca primero el recurso en el caché. Si no lo encuentra, lo solicita a la red y lo guarda en el caché.

Ventajas:

Alta velocidad

Funciona sin conexión

Desventaja:

Puede mostrar contenido desactualizado

Uso recomendado:

Imágenes

CSS

JavaScript

● Network First

Esta estrategia busca primero el recurso en la red. Si no hay conexión, utiliza el caché.

Ventajas:

Proporciona datos actualizados

Desventaja:

Depende de internet

Uso recomendado:

APIs

Datos dinámicos

● Stale-While-Revalidate

Esta estrategia muestra el recurso desde el caché inmediatamente y luego lo actualiza en segundo plano desde la red.

Ventajas:

Alta velocidad

Mantiene los datos actualizados

Uso recomendado:

Aplicaciones dinámicas

Contenido que cambia frecuentemente

● Comparativa técnica

Cache First
Prioriza velocidad, pero puede mostrar datos antiguos.

Network First
Prioriza datos actualizados, pero depende de internet.

Stale-While-Revalidate
Ofrece equilibrio entre velocidad y actualización.

4. Seguridad y TLS
TLS (Transport Layer Security) es el protocolo que permite cifrar la comunicación entre el navegador y el servidor mediante HTTPS.

● ¿Por qué HTTPS es un requisito habilitador para los Service Workers?

HTTPS es obligatorio porque el Service Worker puede interceptar solicitudes de red. Sin HTTPS, la información podría ser interceptada por terceros. HTTPS garantiza seguridad, integridad y protección de los datos.

Sin HTTPS, el navegador bloquea el Service Worker y la PWA no puede funcionar correctamente.

● Impacto de los certificados en el "Install Prompt" del navegador

El certificado SSL permite que el sitio funcione con HTTPS. Esto es necesario para que el navegador muestre la opción de instalar la aplicación.

Para que aparezca el Install Prompt se requiere:

HTTPS activo

Certificado SSL válido

Service Worker activo

Manifest configurado correctamente

Si el certificado no es válido, el navegador no permitirá instalar la aplicación y mostrará advertencias de seguridad.

