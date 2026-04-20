# Preguntas
---
### 1. Asincronismo: ¿Por qué usamos un Observable y un .subscribe() en lugar de simplemente asignar el resultado de la función http.get() a nuestra variable?
`http.get()` no te devuelve los datos de una, sino algo que los va a traer más adelante (un *Observable*). Entonces, si lo asignas directo, no obtienes los datos sino ese “contenedor”.

Con `.subscribe()` básicamente cuando angular tenga los datos va a correr la funcion que le pasemos. Así la interfaz no se queda congelada esperando, sino que sigue funcionando normal mientras llegan los datos.

### 2. Modularización: ¿Qué sucede si olvidamos declarar nuestro SerieListComponent en el arreglo de declarations del módulo, pero intentamos usar su selector en el app.component.html?
Angular lanzaría un error de compilación: "'app-serie-list' is not a known element". El compilador no reconoce el selector porque el componente no está registrado en ningún módulo accesible desde AppModule. Para solucionarlo se debe declarar el componente en `declarations` del módulo correspondiente y exportarlo si se usa fuera del mismo módulo.