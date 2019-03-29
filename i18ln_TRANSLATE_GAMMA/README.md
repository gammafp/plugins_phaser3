# Translate Gamma (TG)

Es un plugin útil para la traducción de juegos con Phaser 3, el plugin es capaz de guardar y recuperar automáticamente el idioma ya que hace uso de localStorage.

### Archivo JSON
El archivo de configuración lo guardamos dentro de src y creamos una carpeta llamada i18ln, la estructura de ejemplo es la siguiente: 

```
{
    "test": "HOLA EN ESPAÑOL {{palabra}}"
}
```

### Uso:
1) Se importa el archivo en el main.js: 
 ```javascript
 import TG from './plugin/TG.js';
 ```
2) Se carga el plugin en el main.js (en la configuración): 
```javascript
    plugins: {
        global: [{
            key: 'TG',
            plugin: TG,
            mapping: 'TG',
            data: {
                path: './src/i18ln',
                disponibleLangs: ['en', 'es'],
                fallbackLang: 'en',
                spanishLangs: ["ca", "gl", "es", "eu"]
            }
        }]
    },
```
3) Se inicializan los archivos en el loader (bootloader.js): 
```js
this.load.lang();
```

### Uso final: 
Para cambiar un nuevo idioma hay que setearlo: 
```js
this.TG.setLang('es');
```
Para volver al idioma automático: 
```js
this.TG.setDefaultLang();
```

Para obtener el idioma actual seleccionado: 
```js
this.TG.getUserLang()
```
Para obtener el idioma del dispositivo: 
```js
this.TG.getDeviceLang();
```

Para obtener una traducción:
```js
this.TG.tr('test', {palabra: 'CAMBIO DE PALABRA'})
```

Si se cambia el idioma se puede obtener el evento en tiempo real: 
```js
// Lang tiene el idioma que se está pasando
this.TG.on((lang) => {
    this.staticText.setText(this.TG.tr('traduccion'));
});
```