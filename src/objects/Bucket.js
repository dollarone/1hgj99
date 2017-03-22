class Bucket {

	constructor(game, walls, x, y){
		this.game = game;
		this.sprite = this.game.add.sprite(x, y, 'bucket');
		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.scale.setTo(0.3);
        this.walls = this.game.add.group();
        this.walls.enableBody = true;
        this.front = this.game.add.sprite(x, y, 'bucket_front');
		this.front.anchor.setTo(0.5, 0.5);
		this.front.scale.setTo(0.3);


		let wall = this.walls.create(x-140, y-110, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+5, y-110+40, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+10, y-110+80, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+15, y-110+120, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+20, y-110+160, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+25, y-110+200, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+50, y-110+230, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+90, y-110+230, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+130, y-110+230, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+170, y-110+230, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x-140+210, y-110+230, 'ball');
		wall.visible = false;
		wall.body.immovable = true;

		wall = this.walls.create(x+110, y-110, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x+110-5, y-110+40, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x+110-10, y-110+80, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x+110-15, y-110+120, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x+110-20, y-110+160, 'ball');
		wall.visible = false;
		wall.body.immovable = true;
		wall = this.walls.create(x+110-25, y-110+195, 'ball');
		wall.visible = false;
		wall.body.immovable = true;

	}

	getWalls() {
		return this.walls;
	}
	update() {
	}

}


export default Bucket;