# Experiencia turista. Proyecto back-end.

## Tecnologias Utilizadas

Node.js, TypeScript, Sequelize, MySQL.

## Requisitos

### Dependencias del Proyecto

- `@types/sequelize`: ^4.28.19
- `bcrypt`: ^5.1.1
- `cors`: ^2.8.5
- `dotenv`: ^16.3.1
- `express`: ^4.18.2
- `jsonwebtoken`: ^9.0.2
- `mercadopago`: ^1.5.17
- `morgan`: ^1.10.0
- `mysql2`: ^3.6.2
- `sequelize`: ^6.33.0

### Dependencias de Desarrollo

- `@types/bcrypt`: ^5.0.1
- `@types/cors`: ^2.8.15
- `@types/express`: ^4.17.20
- `@types/jsonwebtoken`: ^9.0.4
- `@types/mercadopago`: ^1.5.11
- `@types/morgan`: ^1.9.9
- `nodemon`: ^3.0.1
- `typescript`: ^5.2.2

## Instalacion

Pasos para instalar y configurar el proyecto localmente:

Crear un archivo .env en la raiz del proyecto con la siguiente informacion:

(Completar los datos con su configuracion de MySQL)

\```
DB_USERNAME= ""
DB_PASSWORD= ""
DATABASE= "expturista"
DB_PORT= "3001"
DB_HOST= "localhost"

MERCADOPAGO_API_KEY= "" // Completar con la key de su cuenta de mercado pago.
SECRET_KEY = ""
\```

npm install

npm run type

npm run dev

## Uso

### Login/Register para Administracion:

POST:
\```
http://localhost:3001/api/users/register

http://localhost:3001/api/users/login

JSON:
{
"username": "",
"password": ""
}
\```

Devuelve un token de validacion si el usuario es correcto.

### Operaciones CRUD para actividades:

POST/GET:
\```
http://localhost:3001/api/activities/

PUT/DELETE/GET:
http://localhost:3001/api/activities/:id

JSON:
{
"name": "",
"price": "",
"detail": "",
"activity_type": "",
"departure_times": "",
"is_excursion": "",
"image": "",
"notes": ""
}
\```

### Comenzar Checkout:

POST:
\```
http://localhost:3001/api/checkout/start

JSON:
{
"user_name": "",
"user_phone": "",
"activityId":
}
\```

### Crear orden de Mercado Pago:

POST:
\```
http://localhost:3001/api/create-order

JSON:
{
"items": [
{
"title": "",
"unit_price": ,
"currency_id": "ARS",
"quantity":
}
]
}
\```

Devuelve un init_point con el link para redireccionar a la pagina de MP y completar el pago.

### Para hacer:

- Al realizar el pago guardar los datos del pago, usuario y actividad seleccionada en la base de datos.
