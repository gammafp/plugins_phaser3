class TG extends Phaser.Plugins.BasePlugin {

    constructor(pluginManager) {
        super(pluginManager);
    }

    init(config) {
        const those = this;
        this.pluginManager.registerFileType('lang', function() {
            those.upload(this, config);
        });
        this.setVars(config);
    }

    getUserLang() {
        return (["ca", "gl", "es", "eu"].indexOf(navigator.language.split('-')[0]) != -1) ?
                "es" :
                "en";
    }

    upload(loader, config) {
        const mapLang = config.disponibleLang.map(lang => ({
             key: lang,
             url: `${(loader.path === '') ? '.' : '..'}/${config.path}/${lang}.json`
        }));
        // console.log()
        loader.json(mapLang);
    }
    
    setVars(config) {
        this.actualLang = config.defaultLang;
        this.lang_cache = null;
    }

    tr(toTranslate, params = null) {
        // Registramos en el cache para no tener que estar llamando al cache de Phaser siempre
        if(this.lang_cache === null) {
            this.lang_cache = this.game.cache.json.get(this.actualLang);
        } 

        // Asignamos
        let translate = this.lang_cache[toTranslate];

        if(params !== null) {
           for(let key in params) {
               const regex =  new RegExp(`{{[ ]{0,}(${key})[ ]{0,}}}`, 'g');
               translate = translate.replace(regex, params[key]);
           }
        }

        return translate;
    }

    setLang(lang) {
        this.lang_cache = this.game.cache.json.get(lang);
    }
}
export default TG;