
class Play extends Phaser.Scene {
    constructor() {
        super({key: 'Play'});
    }
    
    create() {
        // console.log('Scene: Play');
        this.TG.on(() => {
            console.log('Funciona los eventos');
        });
        // this.add.text(100, 100, this.TG.tr('test'));

        // this.TG.tr('test')

    }

    update(time, delta) {

    }
}

export default Play;
