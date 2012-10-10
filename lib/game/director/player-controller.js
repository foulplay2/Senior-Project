ig.module(
	'game.director.player-controller'
)
.requires(
	'impact.impact'
)
.defines(function(){

ig.PlayerController = ig.Class.extend({

	boomerangLevel: 0,
	swordLevel: 0,
	firefistLevel: 0,
	bowLevel: 0,
	grapplinghookLevel: 0,
	magicwandLevel: 0,
	magiccloakLevel: 0,
	keyCount: 0,
	score: 0,
	currentLife: 1000,
	pos: {x: 200, y: 200},
	
	playerCharacter: null,


	init: function(){
	  
	},

	addPlayerEntity: function(playerEntity){
		this.playerCharacter = playerEntity;
		this.playerCharacter.setBoomerangLevel(this.boomerangLevel);
		this.playerCharacter.setSwordLevel(this.swordLevel);
		this.playerCharacter.setFirefistLevel(this.firefistLevel);
		this.playerCharacter.setBowLevel(this.bowLevel);
		this.playerCharacter.setGrapplinghookLevel(this.grapplinghookLevel);
		this.playerCharacter.setMagicwandLevel(this.magicwandLevel);
		this.playerCharacter.setMagiccloakLevel(this.magiccloakLevel);
		this.playerCharacter.setHealth(this.currentLife);
		this.playerCharacter.setPosition(this.pos.x, this.pos.y);
		this.playerCharacter.setKeyCount(this.keyCount);
	},

	storeSettings: function() {
		this.currentLife = this.playerCharacter.getHealth();
		this.boomerangLevel = this.playerCharacter.getBoomerangLevel();
		this.swordLevel = this.playerCharacter.getSwordLevel();
		this.firefistLevel = this.playerCharacter.getFirefistLevel();
		this.bowLevel = this.playerCharacter.getBowLevel();
		this.grapplinghookLevel = this.playerCharacter.getGrapplinghookLevel();
		this.magicwandLevel = this.playerCharacter.getMagicwandLevel();
		this.magiccloakLevel = this.playerCharacter.getMagiccloakLevel();
		this.keyCount = this.playerCharacter.getKeyCount();
	},

	increaseScore: function(amount) {
		this.score += amount;
	},

	setPosition: function(position) {
		this.pos.x = position.x;
		this.pos.y = position.y + 30;
	},

	getScore: function(){
		return(this.score);
	}
  
});

});