Demo.Preloader = function (game) { };

Demo.Preloader.prototype = {

	preload: function () {
		// load story json
		this.load.json("story", "assets/story/test.json");
		
		// load images
		this.load.spritesheet("button", "assets/images/buttons.png", 620, 26);
	},

	create: function () {
		this.state.start('Game');
	}

};
