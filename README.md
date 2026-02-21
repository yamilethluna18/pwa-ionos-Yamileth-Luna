# 📱 PWA -- Investigación Teórica

**Proyecto:** pwa-ionos-Yamileth-Luna

------------------------------------------------------------------------

# 🔍 Parte 1: Investigación Teórica -- Progressive Web Apps (PWA)

------------------------------------------------------------------------

# 1.  Web App Manifest (`manifest.json`)

El **Web App Manifest** es un archivo en formato JSON que contiene los
metadatos de una Progressive Web App. Su función principal es permitir
que el navegador reconozca la aplicación como instalable y definir su
apariencia y comportamiento cuando el usuario la instala en su
dispositivo.

## Propiedades principales

### `theme_color`

Define el color principal de la aplicación. Este color es utilizado por
el navegador y el sistema operativo para personalizar elementos visuales
como:

-   Barra superior del navegador
-   Barra de estado del sistema
-   Color del encabezado de la aplicación

Esto mejora la integración visual con el sistema operativo.

### `background_color`

Define el color de fondo que se muestra mientras la aplicación se está
cargando.

Beneficios:

-   Evita que aparezca una pantalla blanca
-   Mejora la experiencia visual
-   Hace que la carga se vea más profesional

------------------------------------------------------------------------

### `display`

Controla cómo se muestra la aplicación.

Valores comunes:

-   **standalone** → Se comporta como una app nativa, sin barra del
    navegador
-   **browser** → Se muestra como una página web normal
-   **fullscreen** → Usa toda la pantalla
-   **minimal-ui** → Interfaz mínima del navegador

El valor más usado en PWA es: `standalone`.

------------------------------------------------------------------------

### `icons`

El array de icons es una propiedad fundamental del archivo manifest.json, ya que define los íconos que representan visualmente la Progressive Web App en el dispositivo del usuario. Estos íconos permiten que la aplicación se identifique correctamente y se integre con el sistema operativo de forma similar a una aplicación nativa.

------------------------------------------------------------------------

# 2. Service Workers

Los **Service Workers** son scripts que se ejecutan en segundo plano y
permiten funcionalidades avanzadas como:

-   Funcionamiento offline
-   Cache inteligente
-   Notificaciones push
-   Mejor rendimiento

------------------------------------------------------------------------

## Proceso de registro

El registro es el primer paso para habilitar un Service Worker.

Proceso:

1.  Se verifica si el navegador es compatible
2.  Se especifica la ruta del archivo Service Worker
3.  El navegador lo descarga e instala
4.  Queda listo para ejecutarse en segundo plano

Esto se realiza normalmente cuando carga la aplicación.

------------------------------------------------------------------------

## Ciclo de vida del Service Worker

### Installation

En esta fase:

-   Se descarga el Service Worker
-   Se ejecuta por primera vez
-   Se pueden guardar archivos en caché

Ejemplos:

-   HTML
-   CSS
-   JavaScript
-   Imágenes

Si falla, no se activa.

------------------------------------------------------------------------

### Activation

En esta fase:

-   El Service Worker toma control de la aplicación
-   Elimina cachés antiguos
-   Prepara el entorno

Después de esto, puede manejar eventos.

------------------------------------------------------------------------

### Fetch

En esta fase:

-   Intercepta solicitudes de red
-   Decide cómo responder

Puede:

-   Usar caché
-   Usar red
-   Usar ambos

Esta fase ocurre continuamente.

------------------------------------------------------------------------

## Service Worker como Proxy

Actúan como un **proxy entre el navegador y el servidor**.

Funciones:

-   Interceptar solicitudes
-   Modificar respuestas
-   Servir contenido desde caché
-   Permitir funcionamiento offline

Esto mejora:

-   Rendimiento
-   Velocidad
-   Experiencia del usuario

------------------------------------------------------------------------

# 3. Estrategias de Almacenamiento en Caché

------------------------------------------------------------------------

## Cache First

Proceso:

1.  Busca en caché
2.  Si existe → lo usa
3.  Si no → usa red y guarda en caché

Ventajas:

-   Muy rápido
-   Funciona offline

Desventajas:

-   Puede mostrar contenido viejo

Uso ideal:

-   CSS
-   JS
-   Imágenes
-   HTML

------------------------------------------------------------------------

## Network First

Proceso:

1.  Busca en red
2.  Si funciona → guarda en caché
3.  Si falla → usa caché

Ventajas:

-   Contenido actualizado

Desventajas:

-   Depende de internet

Uso ideal:

-   APIs
-   Datos dinámicos

------------------------------------------------------------------------

## Stale‑While‑Revalidate

Proceso:

1.  Muestra caché inmediatamente
2.  Descarga nueva versión en segundo plano
3.  Actualiza caché

Ventajas:

-   Muy rápido
-   Se mantiene actualizado

Uso ideal:

-   Listas
-   Feeds
-   Contenido frecuente

------------------------------------------------------------------------

# 4. Seguridad y TLS

------------------------------------------------------------------------

## ¿Por qué HTTPS es obligatorio?

HTTPS es obligatorio porque los Service Workers pueden:

-   Interceptar tráfico
-   Modificar solicitudes
-   Controlar la aplicación

HTTPS garantiza:

-   Cifrado
-   Seguridad
-   Protección contra ataques

Sin HTTPS, el navegador bloquea el Service Worker.

------------------------------------------------------------------------

## Impacto del certificado en el Install Prompt

El **Install Prompt** permite instalar la PWA.

Requisitos:

-   HTTPS válido
-   Service Worker activo
-   Manifest válido

Si el certificado:

-   Está expirado
-   Es inválido
-   Es autofirmado

Entonces:

-   No aparece el Install Prompt
-   No se puede instalar la PWA

