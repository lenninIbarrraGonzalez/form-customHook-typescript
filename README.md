# Formulario con Custom Hook y TypeScript

Este proyecto es una aplicación React creada con Create React App, que implementa un formulario utilizando un custom hook en TypeScript para manejar el estado del formulario.

## Características

- Formulario controlado con campos para nombre y correo electrónico.
- Manejo del estado del formulario usando un custom hook ([`useForm`](src/hooks/useForm.ts)).
- Tipado estricto con TypeScript usando la interfaz [`DataForm`](src/interfaces/interface.ts).
- Estilos con Bootstrap 5.
- Botón para reiniciar el formulario.

## Estructura del Proyecto

```
src/
  components/
    Form.tsx
  hooks/
    useForm.ts
  interfaces/
    interface.ts
  App.tsx
  index.tsx
  ...
```

## Scripts Disponibles

En el directorio del proyecto puedes ejecutar:

- `npm start`  
  Inicia la aplicación en modo desarrollo.

- `npm run build`  
  Genera una versión optimizada para producción en la carpeta `build`.

- `npm test`  
  Ejecuta los tests en modo interactivo.

- `npm run eject`  
  Expulsa la configuración de Create React App (acción irreversible).

## Instalación

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar la aplicación.

## Personalización

Puedes modificar la interfaz del formulario editando [`Form.tsx`](src/components/Form.tsx) y el hook de manejo de formulario en [`useForm.ts`](src/hooks/useForm.ts).

## Licencia

Este proyecto está bajo la licencia MIT.
