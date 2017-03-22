class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		this.game.load.image('ball', 'assets/ball.png');
		this.game.load.image('ball2', 'assets/ball2.png');
		this.game.load.image('bucket', 'assets/bucket.png');
		this.game.load.image('bucket_front', 'assets/bucket_front.png');
		this.game.load.image('hairdryer', 'assets/hairdryer.png');

		this.game.load.spritesheet('logo-tiles', 'assets/logo-tiles.png', 17, 16);
		this.game.load.audio('dollarone', 'assets/dollarone.ogg');
		this.game.load.image('onehourgamejamlogo', 'assets/onehourgamejamlogo.png');
		this.game.load.audio('onehourgamejamsplash', 'assets/onehourgamejamsplash.ogg');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
	}

	create() {
		//this.game.state.start("Logo");
		this.game.state.start("Logo", true, false, "#98FB98");
	}

}

export default Preload;
