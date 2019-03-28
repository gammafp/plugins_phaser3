# Translate Gamma (TG)

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
            disponibleLang: ['en', 'es'],
            defaultLang: 'en'
        }
    }]
}
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
Para obtener una traducción:
```js
this.TG.tr('test', {palabra: 'CAMBIO DE PALABRA'})
```