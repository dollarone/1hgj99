import Ball from 'objects/Ball';
import Hairdryer from 'objects/Hairdryer';
import Bucket from 'objects/Bucket';
import Particle from 'objects/Particle';

class Main extends Phaser.State {

	create() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.game.stage.backgroundColor = '#98FB98';

		this.step = -1;
		this.statusLabel = this.add.text(this.game.world.width/2 - 360, 10, '');
		this.timeLabel = this.add.text(700, 10, '');
		this.speed = 0;

		this.bucket = new Bucket(this.game, this.walls, this.game.world.width/2, this.game.world.height-240);
		this.hairdryer = new Hairdryer(this.game, this.game.world.width/2, this.game.world.height/2);

        this.walls = this.bucket.getWalls();

		this.timeUsed = new Date(0);

        this.balls = this.game.add.group();
        this.balls.enableBody = true;

        this.particles = this.game.add.group();
        this.particles.enableBody = true;

        this.ballsOut = 0;
        this.ballsNotDead = 0;
        this.game.time.events.add(Phaser.Timer.SECOND * 30, this.endgame, this);
        this.gameover = false;

        this.rKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
    	this.rKey.onDown.add(this.restart, this);

	}

	restart() {
		this.game.state.restart();
	}

	endgame() {
		this.gameover = true;
	}
	killparticle(part, wall) {
		part.kill();
	}
	update() {
		this.step += 1;

		this.game.physics.arcade.collide(this.balls, this.balls);
		this.game.physics.arcade.collide(this.balls, this.particles);
		this.game.physics.arcade.collide(this.particles, this.bucket.walls, this.killparticle, null, this);
		this.game.physics.arcade.collide(this.balls, this.bucket.walls);
		if (this.gameover) {
			return;
		}
		if (this.step % 100 == 0) {
			let ball = new Ball(this.game, this.balls, this.game.world.width/2, this.game.world.height/2);
			this.game.world.bringToTop(this.bucket.front);
			this.ballsOut++;
			this.ballsNotDead++;
		}
		
		this.timeUsed.setTime(16 * this.step);
		this.timeLabel.text = "Time left: " + (this.game.time.events.duration/ 1000).toFixed(1) + "s";


		this.statusLabel.text = this.ballsNotDead + "/" + this.ballsOut + " balls still alive";
		this.hairdryer.update();
		if (this.step % 3 == 0) {
			let particle = new Particle(this.game, this.particles, this.hairdryer.sprite.x, this.hairdryer.sprite.y, this.hairdryer);
			particle = new Particle(this.game, this.particles, this.hairdryer.sprite.x, this.hairdryer.sprite.y, this.hairdryer);
			particle = new Particle(this.game, this.particles, this.hairdryer.sprite.x, this.hairdryer.sprite.y, this.hairdryer);
			particle = new Particle(this.game, this.particles, this.hairdryer.sprite.x, this.hairdryer.sprite.y, this.hairdryer);

			this.game.world.bringToTop(this.hairdryer.sprite);
			this.particles.forEach(function(part) {
				if(!part.dead) {
					if(part.y > this.game.world.height) {
						part.dead = true;
						part.kill();
					
					}
					else {
						part.body.velocity.x *= 0.92;
						part.body.velocity.y *= 0.92;
						if (Math.abs(part.body.velocity.y) < 130 && Math.abs(part.body.velocity.x) < 130) {
							part.kill();
							part.dead = true;
						}

					}
				}

			}, this);
		}

		this.balls.forEach(function(ball) {
			if(ball.y > this.game.world.height && !ball.dead) {
				ball.dead = true;
				this.ballsNotDead--;
			}

		}, this);

	}

	
	render() {
		//this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
	}
}

export default Main;