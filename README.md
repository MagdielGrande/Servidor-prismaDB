# Configuración 

 - Instala las dependencias
 - Crea un archivo .env y pon tu configuración
``DATABASE_URL="postgresql://USER:PASSWORD@localhost:PORT/TUBaseDatos?schema=public"``

En server.js se utiliza cors para conectarnos al cliente por el servidor ``http://localhost:8081``
```javascript
//Cors
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:8081"
}
app.use(cors(corsOptions));
```
- Ejecutamos nuestro servidor
***npm run server.js***

##### Vamos a la configuración del cliente

Este es el Link al repositorio:
[Cliente](https://github.com/MagdielGrande/client-launchx)
