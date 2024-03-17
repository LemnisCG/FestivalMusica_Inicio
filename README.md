# Creando una PAGINA WEB PARA Festival Music

# CREANDO SASS 
## Instalando SASS y GULP
1. Inicializando tu PACKJSON
`npm init`
> [!note]
> Tan solo tienes que rellenar los datos de Descripcion,Git repository, Author y con eso estariamos listo los deman solo `ENTER`

2. Installando sass y sus dependencias
2.1 Instalacion de sass 
    `npm install sass`
2.2 Instalacion de Dependencias de desarrollo
`npm install sass --save-dev`

> [!IMPORTANT] 
>Si se te borra la carpeta de node_modules, puedes volver a instalarla con   
`npm install` o `npm i`

3. Copilar SASS con NPM
- Crear una carpeta con el nombre "SRC"
- Crear dentro de la carpeta "SRC" otra carpeta con el nonmbre de "SCSS". Dentro de la carpeta SCSS crear un archivo con el nombre de "app.scss".
>[!NOTE] 
>Para crear variables en SASS hay que poner el caracter "$nombre" seguido del nombre que vas a poner.

  - Copilar sass en PACKJSON con --
    "scripts": {
    "sass": "sass --watch src/scss:build/css"
  },

  -  Hacer correr el programa con `npm run sass`
  - Luego vincular la carpeta creada en html
    `<link href="build/css/app.css">`

 