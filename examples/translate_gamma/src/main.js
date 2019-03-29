import Play from './scenes/Play.js';
import Bootloader from './Bootloader.js';
import TG from './plugin/TG.js';

const config = {
    title: "Plugin Translate Gamma",
    version: "0.0.1",
    width: 640,
    height: 360,
    type: Phaser.AUTO,
    parent: "container",
    backgroundColor: "#22a6b3",
    pixelArt: true,
    plugins: {
        global: [{
            key: 'TG',
            plugin: TG,
            mapping: 'TG',
            data: {
                path: './src/i18ln',
                disponibleLangs: ['en', 'es', 'gl'],
                fallbackLang: 'en',
                spanishLangs: ["ca", "es", "eu"]
            }
        }]
    },
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader, Play]
};

new Phaser.Game(config);