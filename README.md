# Tripleten web_project_around_es

# Around The U.S.

## Descripción

Proyecto web desarrollado durante el curso de TripleTen.

La página permite mostrar tarjetas de lugares, editar la información del perfil, agregar nuevas tarjetas, indicar "Me gusta", eliminar tarjetas y abrir las imágenes en una vista ampliada.

## Funcionalidades

- Editar el nombre y la descripción del perfil.
- Abrir y cerrar ventanas emergentes.
- Generar tarjetas dinámicamente desde un array de datos.
- Crear nuevas tarjetas mediante un formulario.
- Marcar y desmarcar tarjetas con "Me gusta".
- Eliminar tarjetas.
- Abrir las imágenes de las tarjetas en un modal ampliado.
- Utilizar una plantilla HTML `<template>` para crear las tarjetas.

## Cambios realizados en Sprint 6

### Etapa 1

- Se creó la carpeta `scripts`.
- Se creó el archivo `index.js`.
- Se conectó `index.js` con `index.html`.
- Se creó el array `initialCards`.
- El array contiene seis objetos con las propiedades `name` y `link`.
- Se utilizó `forEach()` para recorrer el array.

### Etapa 2

- Se agregó funcionalidad al modal de edición del perfil.
- Se seleccionaron elementos del DOM utilizando `querySelector()`.
- Se creó la función `openModal()` para abrir los popups.
- Se creó la función `closeModal()` para cerrar los popups.
- Se creó `fillProfileForm()` para rellenar los campos con los datos actuales del perfil.
- Se creó `handleOpenEditModal()` para abrir el modal de edición.
- Se creó `handleProfileFormSubmit()` para actualizar el nombre y la descripción.
- Se utilizaron eventos `click` y `submit`.
- Se utilizó `preventDefault()` para evitar la recarga del formulario.

### Etapa final

- Se creó un elemento `<template>` para las tarjetas.
- Las tarjetas iniciales se generan dinámicamente desde `initialCards`.
- Se creó `getCardElement()` para clonar y configurar cada tarjeta.
- Se agregaron valores predeterminados para el nombre y la imagen de una tarjeta.
- Se creó `renderCard()` para insertar tarjetas en la página.
- Se agregó el modal para crear nuevas tarjetas.
- Se implementó el botón "Me gusta" mediante `classList.toggle()`.
- Se implementó la eliminación de tarjetas mediante `remove()`.
- Se agregó un modal para mostrar las imágenes en tamaño ampliado.
- Se reutilizaron `openModal()` y `closeModal()` para los distintos popups.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- DOM
- Git
- GitHub

## GitHub Pages

https://github.com/JdPimentel/web_project_around_es
