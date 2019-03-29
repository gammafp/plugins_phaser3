class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }

    preload() {
        // console.log('Bootloader');
        this.load.path = './assets/';
        this.load.image(['btn_es', 'btn_en', 'btn_gl']);
        this.load.lang();
    }

    create() {
        this.puntos = 0;
        this.puntosText =  this.add.text(10, 10, this.TG.tr('puntuacion', {puntos: 0}), {
            fontSize: 36,
            color: '#000000',
            fontStyle: 'bold'
        });
        this.staticText = this.add.text(10, 100, this.TG.tr('estatico'), {
            fontSize: 36,
            color: '#000000',
            fontStyle: 'bold'
        });

        this.btn_es = this.add.image(this.sys.game.config.width/2 - 80, this.sys.game.config.height - 70, 'btn_es').setInteractive();
        this.btn_en = this.add.image(this.sys.game.config.width/2, this.sys.game.config.height - 70, 'btn_en').setInteractive();
        this.btn_gl = this.add.image(this.sys.game.config.width/2 + 80, this.sys.game.config.height - 70, 'btn_gl').setInteractive();

        this.btn_en.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.TG.setLang('en');
        });
        this.btn_es.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.TG.setLang('es');
        });
        this.btn_gl.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.TG.setLang('gl');
        });

        this.TG.on((lang) => {
            console.log(lang);
            this.staticText.setText(this.TG.tr('estatico'));
        });

    }
    update() {
        this.puntos++;
        this.puntosText.setText(this.TG.tr('puntuacion', {puntos: this.puntos}));
    }
}
export default Bootloader;