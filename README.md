# Tripleten web_project_around_es

# Around The U.S.

## Descripción

Proyecto web desarrollado durante el curso de TripleTen.

En este proyecto se ha trabajado con HTML, CSS y JavaScript para crear una página interactiva con tarjetas y un perfil editable.

## Cambios realizados en Sprint 6

### Etapa 1

- Se creó la carpeta `scripts`.
- Se creó el archivo `index.js`.
- Se conectó `index.js` con `index.html`.
- Se creó el array `initialCards`.
- El array contiene seis objetos con las propiedades `name` y `link`.
- Se utilizó `forEach()` para recorrer el array.
- Se mostraron los nombres de las tarjetas en la consola.

### Etapa 2

- Se agregó funcionalidad al modal de edición del perfil.
- Se seleccionaron elementos del DOM utilizando `querySelector()`.
- Se creó la función `openModal()` para abrir el popup.
- Se creó la función `closeModal()` para cerrar el popup.
- Se creó `fillProfileForm()` para rellenar los campos del formulario con los datos actuales del perfil.
- Se creó `handleOpenEditModal()` para abrir el modal y cargar los datos del perfil.
- Se creó `handleProfileFormSubmit()` para actualizar el nombre y la descripción del perfil.
- Se utilizó `addEventListener()` para manejar los eventos `click` y `submit`.
- Se utilizó `preventDefault()` para evitar que el formulario recargue la página.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
