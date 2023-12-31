# __``HOTEL ALPHUS DALY:``__
Aplicación Backend que se enfoca en el desarrollo de una __``API RESTFUL``__ para la gestión de las solicitudes que se pueden realizar en la prestación de servicios. La aplicación tiene como objetivo el mantenimientoy  gestión de las habitaciones del hotel así como los productos brindados allí, así mismo, la gestión de los clientes y empleados del hotel y el manejo de reservaciones así como consumos dentro de las instalaciones. La aplicación expondrá la información adecuada para los End Point en la respectiva documentación software, misma que en este documento explicaremos como acceder a ella.
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://www.pngall.com/wp-content/uploads/5/Hotel-PNG.png" width="120" alt="Nest Logo" /></a>
</p>
<p>La aplicación está fuertemente inspirada en el modelo de servicios de un hotel/motel, donde las habitaciones tienen categorizaciones donde se plantean precios de estadías y tiempos respectivos, así mismo, la venta de productos con una escala más maximizada y un aparado de consumos dentro de la estadía, así mismol em manejo de reservaciones y el control de usuarios/clientes/empleados dentro del sistema, donde se tipifican las peticiones a realizar según sea el caso. La aplicación se irán extendiendo aún más las funcionalidades, llegando a posteriori, en una versión 2 de la misma, a la implementación de Graphql y otras tecnologías que ayuden a su uso.</p>

<p>Este documento consolidará la información necesaria para entender el negocio y los pasos requeridos para poner la aplicación en funcionamiento <b>en el ambiente de desarrollo</b>. </p>

#
# __``STACK DE TRABAJO UTILIZADO:``__
<p align="center">
  <a href="#" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="80" alt="Nest Logo" /></a>
  <a href="#" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" width="75" alt="Postgres Logo" /></a>
  <a href="#" target="blank"><img src="https://seeklogo.com/images/T/typeorm-logo-F243B34DEE-seeklogo.com.png" width="80" alt="TypeORM Logo" /></a>
  <a href="#" target="blank"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253696/docker-icon-icon-md.png" width="100" alt="Docker Logo" /></a>
  <a href="#" target="blank"><img src="https://icon-library.com/images/rest-api-icon/rest-api-icon-8.jpg" width="75" alt="APIRESTFul Logo" /></a>
</p>

Para el desarrollo de la API RESTFUL, se han venido usando las siguientes tecnologías y herramientas:

- __``Entorno de trabajo:``__ NodeJS.
- __``Framework principal:``__ NestJS.
- __``Framework alterno:``__ Express.
- __``Lenguaje Fuente:``__ Vanilla JavaScript y TypeScript.
___
- __``Base de Datos:``__ PostgreSQL.
- __``Tipo de Base de Datos:``__ Relacional.
- __``Lenguaje Base de Datos:``__ SQL.
- __``Control de Base de Datos:``__ Contenedores Docker.
- __``Versión de Base de Datos:``__ 15.4.
- __``Puerto (Genérico):``__ 5432
- __``Puerto (Docker):``__ 7400
___
- __``Gestión de Entidades:``__ Migraciones.
- __``Mapa Relación de Objetos:``__ TypeORM.
- __``Documentación End Point:``__ Swagger.
- __``Gestor de paquetes Node:``__ NPM.
- __``Patrones de trabajo:``__ Repositorio (Estandarizado NestJS).
___
- __``Editor de Código:``__ Visual Studio Code.
- __``Gestor de Base de Datos:``__ DBeaver 23.2.0.
- __``Imagen de Base de Datos:``__ Docker UI.
- __``Gestor de Peticiones HTTP:``__ Postman.
- __``Terminal de Comandos:``__ Terminal Espacial Windows y Cmder.
- __``Manejador de Versiones y Respaldos:``__ GitHub.
- __``Gestión de Proyectos:``__ Azure Devops.
___

## __``DESCRIPCIÓN / INSTALACIONES PROYECTO``__
___
## Instalación Proyecto:
Después de descargar el proyecto, ejecute la siguiente línea para que se ``instalen los módulos de Node`` respectivos, si es necesario, revise el archivo de package.json para que todo esté en orden:

```bash
$ npm install
```

Verifique que los módulos se hayan instalado correctamente y adicional, los siguientes estén anexados también:
```bash
# Para configuraciones
$ npm i joi
# Configuraciones nest
$ npm i @nestjs/config
# Para los validadores DTO
$ npm i class-validator class-transformer
# Para Type ORM, decoradores y el driver Postgres
$ npm i @nestjs/typeorm typeorm pg
# Para el manejo de los UUID
$ npm i uuid
# Para el tipado de UUID
$ npm i @types/uuid
# Para manejo de fechas
$ npm i moment
# Para subir imagenes a un servidor aparte (Cloudinary)
$ npm i cloudinary
# Tipado Multer para subir archivos
$ npm i -D @types/multer
# Para convertir imágen en elemento buffer
$ npm i streamifier
```

## Instalación Base de Datos:
- ``Paso 1.`` Clonamos el archivo ``.env.template`` y renombrarlo a ``.env``
- ``Paso 2.`` Configurar las variables de entorno
- ``Paso 3.`` Levantar el contenedor de base de datos con el comando:
```bash
$ docker-compose up -d
```

## Levantar proyecto:
Para levantar nuestra aplicación NEST, basta con ejecutar el comando:
```bash
$ npm run start:dev
```

## Poblar base de datos:
Antes de poblar la base de datos, `debe garantizar que los índices estén comenzando desde el índice 1, es decir, resetear los índices auto incrementales, esto porque habrán algunas tablas que traerán datos vínculados entre tablas` y evitar trastornar las relaciones. Para la base de datos, preliminarmente poblaremos datos en las tablas que se listan a continuación:
- Temática de Habitación.
- Habitción.
- Imágenes de Habitación.
- Productos.
- Imágenes de Productos.
- Personas.
- Usuarios.

Para poblar la base de datos, haremos uso de ``SEMILLAS``, pero por practicidad y porque no siempre será usado, solo por terminos genéricos de data para nuevos desarrolladores, se tendrán diferentes ``semillas para cada tabla que se desee poblar`` (a excepción de la tabla de imágenes de productos y habitación que se agregan en paralelo en primera instancia), a continuación, los End Point (__no olvide el reset de indices__ __``Y EJECUTARLAS EN EL ORDEN QUE SE INDICA PUES UNAS DEPENDEN DE OTRAS``__):

```bash
# Poblar tabla de temáticas de habitación
$ http://localhost:8050/api-alphus/v1/seed/thematics
# Poblar tabla de habitaciones e imágenes de habitación
$ http://localhost:8050/api-alphus/v1/seed/rooms
```


# Migraciones:
Si dado el caso requiere modificar algún modelo o crear uno nuevo, la aplicación trabaja con migraciones, para ello configuramos en la carpeta `db` en la raíz de proyecto un archivo ``data-source.ts`` donde se alojan las configuraciones, así como modificamos el archivo ``package.json`` con los ``scripts`` que deseamos se ejecuten, y en la carpeta generamos una subcarpeta donde se alojarán las migraciones, a continuación, las líneas de comandos de consola que usaremos para crear migraciones y correrlas:

```bash
# Para generar una migración.
# [migrationName] -> Cambiarlo por el nombre deseado.
$ npm run migration:generate -- db/migrations/migrationName

# Correr la/las migraciones pendientes.
$ npm run migration:run
```









___
## __``INFORMACIÓN DEl DESARROLLO``__
- __Desarrollador__: Juan Sebastian Medina Toro.
- __Cargo__: Desarrollador de Software.
- __Título__: Ingeniero Informático.

## __Redes sociales:__
__Puede encontrarme en__:
- ``LinkedIn:`` < [Link](https://www.linkedin.com/in/juan-sebastian-medina-toro-887491249/) > Juan Sebastian Medina Toro. Desarrollador.
- ``Facebook:`` < [Link](https://www.facebook.com/sebastyan.medyna/) > Juan Sebastian Medina Toro.

__Correo electrónico__:
- ``Gmail:`` JSebastian19952011@gmail.com
- ``Outlock:`` JSebastian19952011@hotmail.com

__Cuenta de Git__:
- ``Git Hub:`` https://github.com/SebasMedina95
___