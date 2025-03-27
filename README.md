# ✨ React Native SWAPI App

Este es un proyecto de **React Native** basado en la API de **Star Wars (SWAPI)**, que permite explorar información sobre **Películas, Personajes y Planetas**.

## 🚀 Características

- 🎢 **Movies**: Lista de todas las películas de Star Wars con detalles clave.
- 👤 **People**: Lista de personajes con un buscador para filtrar por nombre.
- 💐 **Planets**: Lista de planetas con información relevante.
- 🔍 **Buscador**: Filtra personajes en tiempo real por su nombre.
- 📜 **Detalles del Personaje**: Accede a más información al seleccionar un personaje.

---

## 📺 **Cómo Funciona la App**

### 📌 **1. Navegación**

La aplicación tiene **3 secciones principales**, accesibles mediante una barra de navegación:

- **Movies** → Muestra una lista de películas con información como título, episodio, director y fecha de lanzamiento.
- **People** → Lista de personajes con nombre, género, y fecha de nacimiento.
- **Planets** → Muestra detalles de los planetas como nombre, poblacion, diametro, gravedad y terreno.

### 📌 **2. Buscador de Personajes**

En la sección **People**, hay un buscador en la parte superior para filtrar los personajes por su nombre en tiempo real.

🔍 **Cómo funciona:**

- Escribe en el campo de búsqueda y la lista se actualizará automáticamente.
- Filtra los personajes sin necesidad de presionar un botón.

### 📌 **3. Detalle del Personaje**

Al seleccionar un personaje en la sección **People**, se abre la pantalla **Details**, que muestra:

✅ Nombre\
✅ Género\
✅ Altura\
✅ Color de ojos\
✅ Color de pelo\
✅ Color de piel\
✅ Peso\
✅ Año de nacimiento\
✅ Películas en las que aparece
✅ Especie
✅ Planeta
✅ Naves espaciales
✅ Vehiculos

### 📌 **4. Modo oscuro**

El modo oscuro funciona dependiendo de la configuración del sistema operativo.


---

## 📆 **Instalación y Ejecución**



> **Nota**: Asegúrate de haber completado la guía de [Configuración de tu entorno](https://reactnative.dev/docs/set-up-your-environment) antes de continuar.

### 🔹 **1. Clonar el Repositorio**

```sh
git clone https://github.com/NavarroEmiliano/codeaunichallenge
cd codeaunichallenge
```

### 🔹 **2. Instalar Dependencias**

```sh
npm install
```

### 🔹 **3. Ejecutar la Aplicación**

#### Iniciar Metro

Primero, necesitarás ejecutar **Metro**, la herramienta de construcción de JavaScript para React Native.

Para iniciar el servidor de desarrollo de Metro, ejecuta el siguiente comando desde la raíz de tu proyecto de React Native:

```sh
# Usando npm
npm start

# O usando Yarn
yarn start
``` 



#### ▶️ **Android**

```sh
npx react-native run-android
```

#### 🍏 **iOS (MacOS)**

```sh
cd ios && pod install && cd ..
npx react-native run-ios
```

---

## 🛠️ **Tecnologías Utilizadas**

- ⚛️ **React Native** - Framework principal.
- 🏢 **React Navigation** - Manejo de navegación entre pantallas.
- 🔄 **React Query** - Para manejo eficiente de datos.
- 🛡️ **SWAPI API** - Fuente de datos de Star Wars.

---

## ❓ **Problemas y Soluciones**

Si tienes problemas para ejecutar el proyecto, revisa la sección [Troubleshooting](https://reactnative.dev/docs/troubleshooting).

