# 1. ENCA2023

dataviz project

- [1. ENCA2023](#1-enca2023)
  - [1.1. Introduccion](#11-introduccion)
- [2. enca-frontend](#2-enca-frontend)
  - [2.1. Creación del proyecto e instalación de dependencias](#21-creación-del-proyecto-e-instalación-de-dependencias)
    - [2.1.1. Crea una nueva carpeta para tu proyecto](#211-crea-una-nueva-carpeta-para-tu-proyecto)
    - [2.1.2. Inicializa un proyecto de Node.js](#212-inicializa-un-proyecto-de-nodejs)
    - [2.1.3. Instalar React, Next.js y otras dependencias](#213-instalar-react-nextjs-y-otras-dependencias)
    - [2.1.4. Asegurse de tener Next instalado](#214-asegurse-de-tener-next-instalado)
    - [2.1.5. Instala React Bootstrap y React Router](#215-instala-react-bootstrap-y-react-router)
    - [2.1.6. Instale sass](#216-instale-sass)
    - [2.1.7. Instalar webpack](#217-instalar-webpack)
    - [2.1.8. Instalar is-plain-object](#218-instalar-is-plain-object)
    - [2.1.9. Instalar require-hook](#219-instalar-require-hook)
    - [Instale cross-env en dev __si esta utilizando Windows__](#instale-cross-env-en-dev-si-esta-utilizando-windows)
    - [Instalar Apexcharts para los graficos](#instalar-apexcharts-para-los-graficos)
    - [Instalar recharts para los graficos](#instalar-recharts-para-los-graficos)
    - [Instalar FontAwesome](#instalar-fontawesome)
  - [2.2. Iniciar el proyecto](#22-iniciar-el-proyecto)
    - [2.2.1. Limpie el cache de node](#221-limpie-el-cache-de-node)
    - [2.2.2. Compile el proyecto](#222-compile-el-proyecto)
- [3. enca-backend](#3-enca-backend)

---

## 1.1. Introduccion

este proyecto hace parte del desarrollo del portal web de ENCA.
consta de dos proyectos principalmente:

1. El front-end, ubicado en la carpeta enca-frontend
2. El backend, que esta ubicado en la carpeta enca-backend

---

---

# 2. enca-frontend

## 2.1. Creación del proyecto e instalación de dependencias

### 2.1.1. Crea una nueva carpeta para tu proyecto

```
mkdir enca-frontend
cd enca-frontend
```

### 2.1.2. Inicializa un proyecto de Node.js

```
npm init -y
```

> Tenfa en cuenta que el proyecto se hará con la versión 6.14.18 de node.

### 2.1.3. Instalar React, Next.js y otras dependencias

```
npm install react react-dom
```

### 2.1.4. Asegurse de tener Next instalado

```
npm install -g next@12.1.4
```

> Tenga en cuenta que es importante usar la versión 12 de Next.

### 2.1.5. Instala React Bootstrap y React Router

```
npm install react-bootstrap react-router-dom bootstrap-icons
```

### 2.1.6. Instale sass

```
npm install -g sass
```

### 2.1.7. Instalar webpack

```
npm install -g webpack
```

### 2.1.8. Instalar is-plain-object

```
npm install -g --save is-plain-object
```

### 2.1.9. Instalar require-hook

```
npm install -g require-hook
```
### Instale cross-env en dev __si esta utilizando Windows__
```
npm install -D cross-env
```

### Instalar Apexcharts para los graficos
```
npm install --save react-apexcharts apexcharts
```

### Instalar recharts para los graficos 
```
npm install recharts
```
### Instalar FontAwesome
```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

---

## 2.2. Iniciar el proyecto

---

### 2.2.1. Limpie el cache de node

Este paso no es estrictamente necesario, pero en caso de tener errores de compilación deberia correr los siguientes comandos y luego volver a [2.1.3. Instalar React, Next.js y otras dependencias](#213-instalar-react-nextjs-y-otras-dependencias):

```
rmdir /Q /S node_modules
del package-lock.json
npm cache clean --force
```

### 2.2.2. Compile el proyecto

```
npm run dev
```

---

---

# 3. enca-backend

---
