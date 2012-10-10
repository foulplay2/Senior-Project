ig.module(
	'game.entities.firefistprojectile'
)
.requires(
	'impact.entity'
)
.defines(function(){


EntityFirefistprojectile = ig.Entity.extend({

	collides: ig.Entity.COLLIDES.NONE,
	type: ig.Entity.TYPE.NONE,
	checkAgainst: ig.Entity.TYPE.B,

	size: {x: 20, y: 20},
	health: 100,

	animSheet: new ig.AnimationSheet( 'media/fireball.png', 20, 20),

	init: function(x, y, settings) {
		// idle animation
		this.parent( x, y, settings );
		this.global = false;
		this.addAnim('shot', 1, [0] );
		this.currentAnim = this.anims.shot;
		this.selfDestructTimer = new ig.Timer(.3);
		this.maxVel.x = 700;
		this.maxVel.y = 700;
		this.inGame = true;
	},

	update: function() {
		if (this.inGame) {
			this.parent();
			this.selfDestructTimer.unpause();
			this.currentAnim.angle += Math.PI * 10 * ig.system.tick;

			if(this.selfDestructTimer.delta() > 0) {
				this.kill();
			}

			this.handleHittingEnemies();
		} else {
			this.selfDestructTimer.pause();
		}
	},

	draw: function() {
		if (this.inGame) {
			this.parent();
		}
	},

	handleHittingEnemies: function() {
		this.detectCollisionsWithMages();
		this.detectCollisionsWithArchers();
	},

	detectCollisionsWithMages: function() {
		var mages = ig.game.getEntitiesByType(EntityMage);
		for (var i=0; i < mages.length; i++) {
			var mage = mages[i];
			if(this.touches(mage))
			{
				mage.receiveDamage(20, this);
				this.kill();
			}
		}
	},

	detectCollisionsWithArchers: function() {
		var archers = ig.game.getEntitiesByType(EntityArcher);
		for (var i=0; i < archers.length; i++) {
			var archer = archers[i];
			if(this.touches(archer))
			{
				archer.receiveDamage(20, this);
				this.kill();
			}
		}
	},

	handleMovementTrace: function( res ) {
    	// This completely ignores the trace result (res) and always
    	// moves the entity according to its velocity
    	if( res.collision.y || res.collision.x ) {
	        this.kill();
	    }
	    this.parent(res);
	}

});

});