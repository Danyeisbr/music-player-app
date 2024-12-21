# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Descripción del proyecto
Debes implementar la lógica de un reproductor de música. Se te proporcionan dos componentes principales: ControlBar y Songs. Tu tarea es programar la lógica que hará funcionar este reproductor, utilizando un Context para compartir el estado entre los componentes.
________________________________________
Detalles del proyecto y componentes
1.	ControlBar: Este componente muestra:
o	El título y el autor de la canción que se está reproduciendo.
o	Un botón para pasar a la siguiente canción.
o	Un botón para regresar a la canción anterior.
o	Un botón que controla el modo de bucle:
	"Not replaying": No se repite ninguna canción.
	"Replaying all": Todas las canciones se reproducen en un bucle continuo.
	"Replaying one": La canción actual se repite continuamente.
2.	Songs: Este componente:
o	Muestra una lista de canciones con sus títulos y autores.
o	Permite seleccionar una canción al hacer clic en ella.
o	Resalta la canción que está activa (por ejemplo, cambiando el color del texto).
3.	PlayerProvider y Context:
o	Toda la lógica y sincronización entre ControlBar y Songs debe manejarse a través de un Context (PlayerProvider).
o	No se permite pasar datos entre componentes por medio de props.
________________________________________
Requisitos específicos
1. Seleccionar canciones en el componente Songs
•	Cuando se hace clic en una canción, debe marcarse como la canción activa.
•	La canción activa debe tener la propiedad active configurada como true. Visualmente, el texto de la canción activa debe cambiar (por ejemplo, ser de color verde).
2. Mostrar la canción actual en ControlBar
•	En el componente ControlBar, se debe mostrar el título y el autor de la canción activa con este formato: Autor - Título.
•	Si no hay una canción seleccionada, el título debe ser una cadena vacía ("").
3. Cambiar el modo de bucle
•	El botón de "modo actual" (currentModeButton) en ControlBar debe alternar entre tres modos de reproducción:
1.	Not replaying: No se repiten canciones.
2.	Replaying all: Todas las canciones se reproducen en bucle.
3.	Replaying one: Solo se repite la canción actual.
•	El botón debe mostrar el nombre del modo actual.
4. Implementar la lógica de los modos de bucle
•	Not replaying:
o	Si se presiona "Previous" y no hay una canción anterior, la canción actual no debe cambiar.
o	Si se presiona "Next" y no hay una canción siguiente, no debe haber ninguna canción activa.
•	Replaying all:
o	Si se presiona "Previous" en la primera canción, debe reproducirse la última canción.
o	Si se presiona "Next" en la última canción, debe reproducirse la primera canción.
•	Replaying one:
o	Al presionar "Previous" o "Next", la canción activa no debe cambiar.
5. Cambiar entre canciones
•	El botón "Previous" debe cambiar a la canción anterior.
•	El botón "Next" debe cambiar a la canción siguiente.
•	Si no hay una canción anterior o siguiente, debe seguir las reglas del modo de bucle activo.
6. Manejo de errores en el contexto
•	Debes crear un mecanismo que lance un error si usePlayerContext se usa fuera de PlayerProvider. Este error debe decir:
"usePlayerContext must be used within a PlayerProvider".
________________________________________
Estructura de los datos de las canciones
El archivo constants.js contiene un arreglo songList con la siguiente estructura:
```javascript
[
  {
    title: "My heart will go on",
    author: "Celine Dion",
    id: "a5ff0896"
  },
  {
    title: "Court of the Crimson King",
    author: "King Crimson",
    id: "a5ff0cb0",
  },
]
```
Este arreglo representa las canciones que se mostrarán en la lista. Cada canción tiene un título (title), autor (author) y un identificador único (id).
________________________________________
Ejemplo de flujo esperado
1.	Hacer clic en la primera canción.
o	La canción se resalta (el texto cambia de color).
2.	Presionar el botón "Next".
o	La segunda canción se activa y se resalta.
3.	Seguir presionando "Next" hasta llegar a la última canción.
4.	Presionar "Next" en la última canción:
o	Si el modo es "Not replaying", no hay ninguna canción activa.
o	Si el modo es "Replaying all", se activa la primera canción.
o	Si el modo es "Replaying one", sigue activa la misma canción.
5.	Cambiar el modo de reproducción:
o	Presionar el botón de modo cambia entre "Not replaying", "Replaying all" y "Replaying one".
6.	Probar los botones "Previous" y "Next" con cada modo de bucle para verificar que la lógica funciona como se especifica.
________________________________________
Qué evaluarían en esta prueba técnica
1.	Manejo de estados globales con Context:
o	Evaluarán si sabes usar React Context para compartir estado entre múltiples componentes.
2.	Lógica de los botones y modos de reproducción:
o	Verificarán si implementaste correctamente los tres modos de reproducción.
3.	Resaltado de la canción activa:
o	Asegurarse de que la canción activa se identifica correctamente en la lista.
4.	Uso adecuado del Context y manejo de errores:
o	Debes asegurar que usePlayerContext no se usa fuera de PlayerProvider.
5.	Calidad del código:
o	Que el código esté limpio, organizado y fácil de entender.


Codigo original proveído:


```javascript
import React from 'react';
import {
  BarSongTitle,
  BottomBar,
  Button,
  PlayList,
  Song,
  SongTitle,
} from './styles.js';
import { songList } from './constants.js';

const buttonLabels = ['Not replaying', 'Replaying all', 'Replaying one'];

const PlayerProvider = ({ children }) => {
  return children;
};

const usePlayerContext = () => {};

const ControlBar = () => {
  const title = 'test - song';
  return (
    <BottomBar>
      <BarSongTitle data-testid="barTitle">{title}</BarSongTitle>
      <div>
        <Button data-testid="previousButton">Previous</Button>
        <Button data-testid="nextButton">Next</Button>
        <Button data-testid="currentModeButton">{'replay mode'}</Button>
      </div>
    </BottomBar>
  );
};

const Songs = () => {
  return (
    <PlayList>
      {songList.map(({ title, author, id }) => (
        <Song key={id}>
          <SongTitle data-testid={id} active={false}>
            {title}
          </SongTitle>
          <p>{author}</p>
        </Song>
      ))}
    </PlayList>
  );
};

export { PlayerProvider, Songs, ControlBar };

```