# Week 6 - Challenge 1

## ToDo App Redux

Desarrolla una aplicación para gestionar un CRUD de ToDos, con React + Redux. La app tendrá una sola página, donde aparecerá un formulario y un listado.

La app debe comunicarse con una API, donde estarán los ToDos.

Importante: testear la app.

# LISTADO DE RESPONSABILIDADES

# Componentes y responsabilidades

- App
  - renderizar el formulario, los botones, los input y la lista
  - obtener un elemento de la lista para modificarlo mediante el botón buscar
  - añadir un elemento introducido a la lista siempre que no sea vacío o no exista ya
  - borrar un elemento de la lista mediante el botón borrar
  - leer la lista y mostrarla en pantalla
- Form
  - renderizar los label, input y el Submit button
- Button
  - renderizar el button
  - recibir el click del usuario
- Input
  - renderizar el input
  - recibir el texto del usuario
- List
  - renderizar la lista de tareas

# Datos

- Tasks (será una lista de tareas ToDo) (se encargará la App)
