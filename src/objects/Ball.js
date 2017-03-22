class Ball {

	constructor(game, group, x, y){
		this.game = game;
		y = -100;
		x = this.game.rnd.integerInRange(0, 1);
		x = x*1200 + this.game.rnd.integerInRange(-300, 300);
		
		if (x < this.game.world.width/2) {
			this.direction = 1;
		}
		else {
			this.direction = -1;
		}
		

		this.sprite = group.create(x, y, 'ball2');
		this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.bounce.y = 0.1;
        this.sprite.body.bounce.x = 0.1;
        this.sprite.body.gravity.y = 400;

        this.sprite.body.velocity.x = (100 + this.game.rnd.integerInRange(0, 300)) *this.direction;
        
        this.sprite.body.collideWorldBounds = false;

	}

	update() {
	}

}


export default Ball;