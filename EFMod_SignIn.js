(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"EFMod_SignIn_atlas_", frames: [[0,525,347,40],[0,302,351,221],[402,146,50,50],[454,146,50,50],[454,94,50,50],[454,42,50,50],[402,42,50,50],[402,94,50,50],[353,432,144,40],[402,0,82,40],[353,302,128,128],[0,0,400,300]]}
];


// symbols:



(lib.cmulogo = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Headphones = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.icon0 = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.icon3 = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.icon4 = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.icon5 = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.icon6 = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.iconStar = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ieslogo = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.klahrlogo = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.loginIcon = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.SpkrIcon = function() {
	this.spriteSheet = ss["EFMod_SignIn_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TC_TButton__Button1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Labels
	this.SLabel = new cjs.Text("Test Label", "bold 36px 'Arial'", "#000066");
	this.SLabel.name = "SLabel";
	this.SLabel.lineHeight = 42;
	this.SLabel.parent = this;
	this.SLabel.setTransform(-40,113.4);

	this.timeline.addTween(cjs.Tween.get(this.SLabel).wait(6));

	// Buttons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6600CC").s("#0000FF").ss(5.1,1,1).de(-43,-43,86,86);
	this.shape.setTransform(43,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s("#0000FF").ss(5.1,1,1).de(-43,-43,86,86);
	this.shape_1.setTransform(43,43);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s("#FFFF00").ss(5.1,1,1).de(-43,-43,86,86);
	this.shape_2.setTransform(43,43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s("#000000").ss(5.1,1,1).de(-43,-43,86,86);
	this.shape_3.setTransform(43,43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#339933").s("#003366").ss(5.1,1,1).de(-43,-43,86,86);
	this.shape_4.setTransform(43,43);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCFF33").s("#00CC00").ss(5.1,1,1).de(-43,-43,86,86);
	this.shape_5.setTransform(43,43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-2.5,182.2,158.2);


(lib.TC_TScene__HeadPhoneCheck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWBNIAAhSQAAgOgGgGQgFgGgKAAQgJABgGAHQgHAIAAAUIAABIIg5AAIAAiVIA1AAIAAAYQAMgPAMgHQAMgGASAAQAXAAAOAOQANAPAAAeIAABeg");
	this.shape.setTransform(1149.2,655.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcBoIAAiWIA5AAIAACWgAgchAIAAgnIA5AAIAAAng");
	this.shape_1.setTransform(1134.7,652.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag9BeQgRgNAAgYIAAgHIA4AGQADAIAEADQAGAEAJABQAMgBAHgGQAGgHAAgRIAAgWQgJAKgIAFQgNAGgPAAQgeAAgTgaQgNgSAAgeQAAgjARgTQARgSAcAAQARgBALAHQALAGAKAOIAAgXIA2AAIAACNIAAAHQAAAOgGANQgGANgKAHQgKAJgPADQgQADgUABQgsAAgRgOgAgSg5QgGAIAAATQAAAQAHAIQAGAHALAAQALAAAHgHQAHgIAAgRQAAgQgIgIQgHgJgKAAQgLAAgHAHg");
	this.shape_2.setTransform(1119.8,658.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_3.setTransform(1100.9,655.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhfBoIAAjPIB3AAQAeAAAQAPQAQAPAAAWQAAASgLANQgIAJgPAFQAXAGALAMQAKANAAAUQAAAQgIANQgIANgMAHQgJAFgQACIgdADgAgeA7IAgAAQAQAAAGgGQAIgGAAgKQgBgJgGgFQgHgGgRAAIgfAAgAgegVIAcAAQAOAAAFgGQAHgFgBgKQABgJgHgFQgFgFgOAAIgcAAg");
	this.shape_4.setTransform(1080.4,652.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_5.setTransform(1049.3,655.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfBoIAAicIhBAAIAAgzIDBAAIAAAzIhBAAIAACcg");
	this.shape_6.setTransform(1029.1,652.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_7.setTransform(999.4,655.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag6BNIAAiVIA2AAIAAAZQAGgRAJgGQAIgGAMAAQANAAAPAIIgSApQgKgEgGAAQgLAAgGAJQgIANAAAkIAAAyg");
	this.shape_8.setTransform(984.5,655.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_9.setTransform(967.2,655.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWBoIAAhTQAAgOgGgGQgFgFgJAAQgKAAgGAHQgHAIAAAVIAABIIg5AAIAAjPIA5AAIAABNQAMgNALgFQALgFAQAAQAXAAAOAOQANAPAAAcIAABgg");
	this.shape_10.setTransform(947.8,652.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAeBLIgehZIgdBZIgzAAIg4iVIA4AAIAYBeIAfheIAzAAIAfBeIAZheIA3AAIg3CVg");
	this.shape_11.setTransform(924.5,655.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhLBmIgFgoQANAEAPAAQAKAAAGgFQAHgEAEgMIg/iWIA9AAIAeBkIAdhkIA5AAIg8CgQgKAcgLAJQgOAOgfAAQgMAAgagEg");
	this.shape_12.setTransform(902,658.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAVBNIAAhSQAAgOgEgGQgGgGgKAAQgJABgHAHQgGAIAAAUIAABIIg6AAIAAiVIA2AAIAAAYQAMgPANgHQALgGARAAQAZAAANAOQAOAPAAAeIAABeg");
	this.shape_13.setTransform(883.4,655.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAuBoIgKgjIhIAAIgKAjIhCAAIBOjPIBFAAIBODPgAgXAZIAtAAIgWhKg");
	this.shape_14.setTransform(862.5,652.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAXBoIgdg9IgWAWIAAAnIg7AAIAAjPIA7AAIAABqIAqgxIBHAAIg2A0IA5Big");
	this.shape_15.setTransform(832.7,652.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiBKQgQgEgLgKQgMgKgGgOQgHgNAAgWQAAgWAIgQQAGgLAKgJQAKgJAKgFQARgHAaAAQAkAAAUAOQATANAIAZIg3AHQgCgJgHgFQgGgFgMAAQgNAAgJAKQgJALABATQgBATAJAJQAJAKANAAQALAAAHgGQAIgGAEgMIA3AHQgEARgLAMQgKANgQAHQgQAHgaAAQgWAAgQgFg");
	this.shape_16.setTransform(812.6,655.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgcBoIAAiWIA5AAIAACWgAgchAIAAgnIA5AAIAAAng");
	this.shape_17.setTransform(798,652.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcBoIAAjPIA5AAIAADPg");
	this.shape_18.setTransform(788.3,652.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgvBiQgWgKgPgZQgQgZAAgmQAAgzAcgcQAbgbAxAAQAoAAAWAPQAWAQALAhIg5ANQgDgKgCgEQgGgHgIgEQgIgEgKAAQgUAAgLARQgJANAAAcQAAAiAKAMQALANARAAQATAAAJgKQAKgLAEgTIA4ARQgFAXgMAQQgNAQgSAIQgSAIgcAAQghAAgVgJg");
	this.shape_19.setTransform(772.4,652.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWBNIAAhSQAAgOgGgGQgFgFgJAAQgKAAgGAHQgHAJAAATIAABIIg5AAIAAiVIA1AAIAAAYQAMgPAMgHQAMgGASAAQAXAAAOAOQANAPAAAdIAABfg");
	this.shape_20.setTransform(1016.5,610.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_21.setTransform(997.1,610.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWBoIAAhTQAAgOgGgGQgFgFgJAAQgKAAgGAHQgHAIAAAVIAABIIg5AAIAAjPIA5AAIAABNQAMgNALgFQALgFAQAAQAYAAANAOQANAPAAAcIAABgg");
	this.shape_22.setTransform(977.8,607.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOBkQgLgGgFgLQgEgLAAgZIAAg0IgWAAIAAgqIAWAAIAAgcIA4gdIAAA5IAgAAIAAAqIggAAIAAA0QAAAKACADQADAFAHgBQAGAAAMgDIAFAnQgWAGgTgBQgUAAgKgFg");
	this.shape_23.setTransform(961.7,607.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhBBSQgRgXAAgiQAAgkASgUQASgUAcAAQANAAAKAFQALAEAJAKIAAhIIA6AAIAADOIg2AAIAAgWQgLAOgKAFQgLAGgPAAQgfABgQgYgAgRAAQgHAIAAATQAAATAHAIQAHAJAKAAQAKAAAIgJQAHgIAAgUQAAgSgHgIQgIgIgKAAQgKABgHAHg");
	this.shape_24.setTransform(935.5,607.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWBNIAAhSQAAgOgGgGQgFgFgJAAQgKAAgGAHQgHAJAAATIAABIIg5AAIAAiVIA1AAIAAAYQAMgPAMgHQAMgGASAAQAXAAAOAOQANAPAAAdIAABfg");
	this.shape_25.setTransform(916.6,610.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhIBCQgOgMABgTQgBgRALgLQAKgKAagFIAqgJIAUgHQAAgLgFgEQgEgEgLAAQgNAAgHAEQgGAEgDAKIg3gGQADgPAGgIQAFgIAMgGQAHgFAPgCQAOgDAQAAQAZAAAPADQAQADAKAJQAIAHAEAMQAFALgBALIAABBIABARQACAGAEAJIg1AAIgFgJIgCgJQgLALgLAEQgOAHgVAAQgbAAgOgNgAgBALQgRAFgFAFQgFAEAAAGQAAAHAFAEQAFAFAJAAQAJAAAIgFQAIgFAEgGQADgHAAgLIAAgJQgMAEgMADg");
	this.shape_26.setTransform(897.2,610.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag5BDQgRgMgFgWIA5gFQAEAKAGAFQAGAEAKAAQAMAAAGgFQAGgEAAgFQgBgGgGgEQgFgCgTgEQgegFgLgEQgNgFgHgJQgIgLAAgOQgBgOAJgLQAJgLAPgFQAPgGAZAAQAbAAAMAFQANAEAJAIQAIAJAGAPIg3AFQgCgHgFgEQgGgEgJAAQgKAAgEADQgFAEAAAFQAAAFAGADQAFADATACQAcAEAOAFQAOAGAIAKQAHALAAAMQAAANgHANQgJAMgRAHQgQAIgdAAQgpAAgSgMg");
	this.shape_27.setTransform(1133.9,567.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_28.setTransform(1115.5,567.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAVBNIAAhRQAAgPgEgFQgGgHgKABQgJgBgHAJQgGAHAAAUIAABIIg6AAIAAiWIA2AAIAAAZQAMgPANgGQALgHARAAQAZAAANAOQAOAOAAAeIAABfg");
	this.shape_29.setTransform(1096.2,567.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_30.setTransform(1076.8,567.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAVBoIAAhTQAAgOgEgGQgGgFgKAAQgJAAgHAHQgGAIAAAVIAABIIg6AAIAAjPIA6AAIAABNQAMgNAKgFQAMgFAQAAQAXAAAOAOQAOAPAAAcIAABgg");
	this.shape_31.setTransform(1057.5,564.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhSBqIAAjPIA2AAIAAAWQAMgOAJgFQAMgGAPgBQAeABARAXQAQAXAAAiQAAAlgSATQgSAUgbAAQgOAAgKgFQgLgEgIgJIAABIgAgQg2QgIAKAAASQAAASAIAIQAHAJALAAQAKAAAHgJQAGgGAAgUQAAgTgHgJQgHgIgKAAQgKAAgHAIg");
	this.shape_32.setTransform(1038.4,570.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhBBSQgRgYAAghQAAgkASgUQASgUAcAAQANAAAKAFQALAEAJAKIAAhIIA6AAIAADOIg2AAIAAgWQgLAOgKAFQgLAHgPgBQgfAAgQgXgAgRAAQgHAIAAAUQAAASAHAJQAHAIAKAAQAKAAAIgIQAHgJAAgTQAAgTgHgIQgIgIgKABQgKAAgHAHg");
	this.shape_33.setTransform(1018.3,564.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhHBCQgPgMAAgTQABgRAJgLQALgKAbgFIAogJIAVgHQAAgLgEgEQgFgEgLAAQgNAAgHAEQgFAEgEAKIg3gGQADgPAGgIQAGgIALgGQAIgFANgCQAOgDAQAAQAZAAAQADQAQADALAJQAHAHAEAMQAEALABALIAABBIABARQABAGAFAJIg2AAIgFgJIgCgJQgLALgMAEQgOAHgUAAQgbAAgNgNgAgBALQgSAFgEAFQgFAEAAAGQAAAHAFAEQAFAFAJAAQAJAAAIgFQAIgFADgGQAEgHAAgLIAAgJQgMAEgMADg");
	this.shape_34.setTransform(999.4,567.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_35.setTransform(980.1,567.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAVBoIAAhTQAAgOgEgGQgGgFgKAAQgJAAgHAHQgGAIAAAVIAABIIg6AAIAAjPIA6AAIAABNQAMgNAKgFQAMgFAQAAQAXAAAOAOQAOAPAAAcIAABgg");
	this.shape_36.setTransform(960.7,564.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag6BNIAAiWIA2AAIAAAaQAGgQAJgGQAIgHAMAAQANAAAPAIIgSApQgKgEgGAAQgLAAgGAKQgIANAAAiIAAAzg");
	this.shape_37.setTransform(936.2,567.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhBA+QgNgOAAgdIAAhfIA5AAIAABSQAAAOAGAGQAEAGAKAAQAJAAAHgIQAGgIABgTIAAhJIA5AAIAACVIg2AAIAAgYQgMAPgLAGQgMAHgSAAQgXAAgOgPg");
	this.shape_38.setTransform(918.8,567.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_39.setTransform(899.5,567.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhLBmIgFgoQANAEAPAAQAKAAAGgFQAHgEAEgMIg/iWIA9AAIAeBkIAdhkIA5AAIg8CgQgKAcgLAJQgOAOgfAAQgMAAgagEg");
	this.shape_40.setTransform(881.1,570.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAVBNIAAhRQAAgPgEgFQgGgHgKABQgJgBgHAJQgGAHAAAUIAABIIg6AAIAAiWIA2AAIAAAZQAMgPANgGQALgHARAAQAZAAANAOQAOAOAAAeIAABfg");
	this.shape_41.setTransform(852.8,567.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_42.setTransform(833.4,567.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgPBkQgKgFgEgMQgGgLAAgZIAAg0IgUAAIAAgrIAUAAIAAgbIA5gdIAAA4IAgAAIAAArIggAAIAAA0QAAAJADAEQACAEAHABQAHgBALgDIAEAoQgVAEgSAAQgVABgLgGg");
	this.shape_43.setTransform(807.7,564.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhBA+QgNgOAAgdIAAhfIA5AAIAABSQAAAOAGAGQAEAGAKAAQAKAAAGgIQAGgIABgTIAAhJIA5AAIAACVIg2AAIAAgYQgMAPgLAGQgMAHgSAAQgXAAgOgPg");
	this.shape_44.setTransform(791.6,567.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhXBoIAAjPIBqAAQAiAAASARQARAQAAAfQAAAfgTARQgSASgnAAIgiAAIAABNgAgWgOIAPAAQASAAAHgHQAIgGgBgKQABgKgHgHQgHgHgRAAIgRAAg");
	this.shape_45.setTransform(771.9,564.7);

	this.instance = new lib.klahrlogo();
	this.instance.parent = this;
	this.instance.setTransform(1192,980);

	this.instance_1 = new lib.ieslogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(646,980);

	this.instance_2 = new lib.cmulogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(813,980);

	this.instance_3 = new lib.Headphones();
	this.instance_3.parent = this;
	this.instance_3.setTransform(763,244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__HeadPhoneCheck, new cjs.Rectangle(646,244,628,776), null);


(lib.IconSignIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.loginIcon();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,-29.5,0.461,0.461);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.IconSignIn, new cjs.Rectangle(-29.5,-29.5,59,59), null);


(lib.ef_TutorModule = function(options) {
	this._element = new $.ef.TutorModule(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.SceneRegion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// region
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).dr(-406.5,-337,813,674);
	this.shape.setTransform(958.8,549.4,2.264,1.51,0,0,0,-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000066").ss(2.5,1,1).rc(-960,-600,1920,1200,10,10,-123,-123);
	this.shape_1.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.SceneRegion, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__SoundCheck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SButton1 = new lib.TC_TButton__Button1();
	this.SButton1.name = "SButton1";
	this.SButton1.parent = this;
	this.SButton1.setTransform(911.8,759.2);
	new cjs.ButtonHelper(this.SButton1, 0, 1, 2, false, new lib.TC_TButton__Button1(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAfBoIgrhWIghAjIAAAzIhAAAIAAjPIBAAAIAABPIBChPIBVAAIhLBOIBPCBg");
	this.shape.setTransform(1069,704.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvBiQgWgKgPgZQgQgZAAgmQAAgzAbgcQAcgbAxAAQAnAAAXAPQAXAQAKAhIg5ANQgCgKgEgEQgFgHgIgEQgHgEgKAAQgVAAgMARQgIANgBAcQAAAiALAMQAKANATAAQASAAAKgKQAIgLAFgTIA4ARQgGAXgLAQQgNAQgSAIQgSAIgcAAQghAAgVgJg");
	this.shape_1.setTransform(1044.7,704.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhXBoIAAjPICrAAIAAAsIhqAAIAAAhIBiAAIAAAqIhiAAIAAApIBuAAIAAAvg");
	this.shape_2.setTransform(1023.2,704.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAjBoIAAhUIhFAAIAABUIhAAAIAAjPIBAAAIAABJIBFAAIAAhJIBAAAIAADPg");
	this.shape_3.setTransform(1000.2,704.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvBiQgWgKgPgZQgQgZAAgmQAAgzAbgcQAcgbAxAAQAnAAAXAPQAWAQALAhIg5ANQgCgKgDgEQgGgHgIgEQgIgEgKAAQgUAAgLARQgJANAAAcQgBAiALAMQALANARAAQATAAAJgKQAKgLAEgTIA4ARQgFAXgMAQQgNAQgSAIQgSAIgcAAQghAAgVgJg");
	this.shape_4.setTransform(977.1,704.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AheBoIAAjPIBeAAQAcAAARAIQASAHALAPQAMAOAEATQAGATAAAVQAAAhgIASQgHASgOANQgOAMgPAEQgVAGgRAAgAgeA5IAPAAQATAAAJgFQAJgEAEgLQAFgMAAgYQAAgggLgNQgKgMgZAAIgPAAg");
	this.shape_5.setTransform(945.2,704.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAnBoIhNhxIAABxIg8AAIAAjPIA8AAIBNByIAAhyIA8AAIAADPg");
	this.shape_6.setTransform(921.3,704.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgbBnQgSgCgMgGQgMgHgKgLQgKgLgEgNQgFgTgBgQIAAh6IBAAAIAAB9QAAARAKAKQAJAJAQAAQAQAAAKgJQAJgJAAgSIAAh9IBAAAIAAB6QAAASgFARQgGAQgMANQgNALgNAGQgTAGgaAAQgOAAgSgCg");
	this.shape_7.setTransform(897.2,704.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag3BgQgXgLgOgYQgPgZAAgkQAAgyAdgcQAcgcAyAAQAzAAAcAcQAdAbAAAyQAAAkgNAXQgMAXgXANQgXANgjAAQgiAAgXgLgAgfgsQgLAOAAAeQAAAgALAOQAMANATAAQAVAAALgNQALgOAAghQAAgegLgNQgMgOgUAAQgTAAgMAOg");
	this.shape_8.setTransform(873,704.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhGBXQgVgUgCggIA9gEQACAPAGAIQAKANARAAQAOAAAHgHQAIgGAAgJQAAgIgHgGQgHgHgZgFQgqgKgSgPQgSgPAAgZQAAgQAJgOQAJgOATgIQASgIAgAAQAoAAAVAOQAUAPAEAhIg8ADQgDgOgHgGQgIgHgNAAQgLAAgFAFQgGAFAAAHQAAAFAFADQAEAFARADQApAJASAKQATAJAIAMQAIAOAAARQAAAUgLARQgLARgUAJQgUAIgeAAQg0AAgUgUg");
	this.shape_9.setTransform(850.4,704.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhLBmIgFgoQANAEAPAAQAKAAAGgFQAHgEAEgMIg/iWIA9AAIAeBkIAdhkIA5AAIg8CgQgKAcgLAJQgOAOgfAAQgMAAgagEg");
	this.shape_10.setTransform(1231.6,295.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgcBoIAAjPIA5AAIAADPg");
	this.shape_11.setTransform(1217.8,289.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBjQgJgFgMgOIAAAWIg2AAIAAjPIA7AAIAABIQAIgIALgFQAKgFAOAAQAbAAASAUQASATAAAlQAAAZgIASQgIATgPAJQgOAKgSAAQgPgBgMgGgAgQAAQgIAIAAASQAAAUAIAIQAHAJAKAAQAKAAAHgJQAHgIAAgUQAAgSgGgIQgHgIgKAAQgLAAgHAIg");
	this.shape_12.setTransform(1203.6,289.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhIBCQgOgMABgTQgBgRAKgLQALgKAagFIAqgJIAUgHQAAgLgEgEQgFgEgLAAQgNAAgHAEQgFAEgEAKIg3gGQADgPAGgIQAFgIAMgGQAHgFAPgCQAOgDAQAAQAZAAAPADQAQADALAJQAHAHAEAMQAFALgBALIAABBIABARQACAGAEAJIg2AAIgEgJIgCgJQgLALgLAEQgOAHgVAAQgbAAgOgNgAgBALQgSAFgEAFQgFAEAAAGQAAAHAFAEQAFAFAJAAQAJAAAIgFQAIgFAEgGQADgHAAgLIAAgJQgMAEgMADg");
	this.shape_13.setTransform(1184,292.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOBkQgKgGgGgLQgEgLAAgZIAAg0IgWAAIAAgqIAWAAIAAgcIA4geIAAA6IAgAAIAAAqIggAAIAAA0QAAAJACAEQADAFAHgBQAGABAMgEIAFAnQgWAGgTAAQgUgBgKgFg");
	this.shape_14.setTransform(1167.9,289.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag6BNIAAiVIA2AAIAAAYQAGgQAJgGQAIgGAMAAQANAAAPAIIgSApQgKgEgGAAQgLAAgGAJQgIANAAAkIAAAyg");
	this.shape_15.setTransform(1156.3,292.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_16.setTransform(1138.9,292.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglBqIAAhrIgVAAIAAgrIAVAAIAAgHQAAgJACgLQACgLAFgHQAGgHAKgEQAKgFARAAQAPAAAdAEIgGAjIgQgCQgJAAgDADQgDADgBAFQgBADAAAKIAbAAIAAArIgbAAIAABrg");
	this.shape_17.setTransform(1124.1,289.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABGBNIAAhUQgBgLgDgFQgGgIgIAAQgKAAgHAIQgGAHAAAQIAABNIg5AAIAAhSIgBgNQgCgGgFgDQgEgEgGAAQgKAAgHAHQgGAIAAARIAABMIg5AAIAAiVIA1AAIAAAVQAMgNALgGQAMgGASAAQARAAAKAGQAKAHAHAMQAOgOAKgFQAMgGAQAAQAYAAAOAPQANAOAAAfIAABdg");
	this.shape_18.setTransform(1103.5,292.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_19.setTransform(1079.2,292.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiBKQgQgEgLgKQgMgKgGgOQgHgNAAgWQAAgWAIgQQAFgLALgJQAKgJAKgFQARgHAaAAQAkAAAUAOQATANAIAZIg2AHQgDgJgHgFQgHgFgLAAQgNAAgJAKQgJALAAATQAAATAJAJQAJAKANAAQALAAAHgGQAIgGAEgMIA3AHQgFARgKAMQgLANgPAHQgQAHgaAAQgWAAgQgFg");
	this.shape_20.setTransform(1060,292.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_21.setTransform(1030.9,292.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBKQgQgEgLgKQgMgKgGgOQgHgNAAgWQAAgWAIgQQAGgLAKgJQAKgJALgFQARgHAZAAQAkAAAUAOQATANAIAZIg2AHQgDgJgGgFQgIgFgKAAQgOAAgJAKQgJALAAATQAAATAJAJQAJAKANAAQALAAAIgGQAHgGAEgMIA3AHQgFARgKAMQgLANgPAHQgRAHgZAAQgWAAgQgFg");
	this.shape_22.setTransform(1011.6,292.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgcBoIAAiWIA5AAIAACWgAgchAIAAgnIA5AAIAAAng");
	this.shape_23.setTransform(997,289.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_24.setTransform(982.5,292.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZBLIg/iVIA8AAIAcBeIAfheIA6AAIhACVg");
	this.shape_25.setTransform(964.1,292.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_26.setTransform(935.9,292.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAVBoIAAhTQAAgOgEgGQgGgFgKAAQgJAAgHAHQgGAIAAAVIAABIIg6AAIAAjPIA6AAIAABNQAMgNAKgFQAMgFAQAAQAXAAAOAOQAOAPAAAcIAABgg");
	this.shape_27.setTransform(916.5,289.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgPBkQgKgGgEgLQgGgLAAgZIAAg0IgUAAIAAgqIAUAAIAAgcIA5geIAAA6IAgAAIAAAqIggAAIAAA0QABAJACAEQACAFAHgBQAHABALgEIAEAnQgVAGgSAAQgVgBgLgFg");
	this.shape_28.setTransform(900.4,289.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag6BNIAAiVIA2AAIAAAYQAGgQAJgGQAIgGAMAAQANAAAPAIIgSApQgKgEgGAAQgLAAgGAJQgIANAAAkIAAAyg");
	this.shape_29.setTransform(879.2,292.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhIBCQgOgMAAgTQAAgRALgLQAJgKAcgFIAogJIAVgHQAAgLgFgEQgEgEgLAAQgNAAgHAEQgGAEgDAKIg3gGQADgPAGgIQAFgIAMgGQAIgFANgCQAOgDARAAQAYAAAQADQAQADAKAJQAIAHAEAMQAEALABALIAABBIAAARQACAGAFAJIg2AAIgFgJIgCgJQgLALgMAEQgNAHgVAAQgbAAgOgNgAgBALQgSAFgEAFQgFAEAAAGQAAAHAFAEQAFAFAJAAQAJAAAIgFQAIgFADgGQAEgHAAgLIAAgJQgMAEgMADg");
	this.shape_30.setTransform(861.8,292.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_31.setTransform(842.5,292.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAVBoIAAhTQAAgOgEgGQgGgFgKAAQgJAAgHAHQgGAIAAAVIAABIIg6AAIAAjPIA6AAIAABNQAMgNAKgFQAMgFAQAAQAXAAAOAOQAOAPAAAcIAABgg");
	this.shape_32.setTransform(823.1,289.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAVBNIAAhSQAAgOgEgGQgGgFgJgBQgKABgHAHQgGAIAAAUIAABIIg6AAIAAiVIA2AAIAAAYQAMgPANgHQALgGASAAQAYAAANAPQAOAOAAAeIAABeg");
	this.shape_33.setTransform(794.1,292.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhHBCQgOgMgBgTQABgRAJgLQAKgKAbgFIApgJIAVgHQAAgLgEgEQgFgEgLAAQgNAAgHAEQgFAEgEAKIg3gGQADgPAGgIQAGgIALgGQAIgFANgCQAOgDAQAAQAZAAAQADQAQADALAJQAHAHAEAMQAFALAAALIAABBIABARQABAGAEAJIg2AAIgEgJIgCgJQgLALgMAEQgOAHgUAAQgbAAgNgNgAgBALQgRAFgFAFQgFAEAAAGQAAAHAFAEQAEAFAKAAQAJAAAIgFQAIgFAEgGQADgHAAgLIAAgJQgMAEgMADg");
	this.shape_34.setTransform(774.8,292.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgiBKQgQgEgMgKQgLgKgHgOQgGgNAAgWQAAgWAIgQQAGgLAKgJQAKgJALgFQAQgHAZAAQAmAAATAOQATANAIAZIg2AHQgDgJgGgFQgIgFgKAAQgOAAgJAKQgJALAAATQAAATAJAJQAJAKANAAQALAAAIgGQAHgGAEgMIA3AHQgFARgKAMQgKANgRAHQgPAHgZAAQgXAAgQgFg");
	this.shape_35.setTransform(755.5,292.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhBA/QgOgOAAgeIAAhfIA7AAIAABSQAAAOAEAGQAGAGAJAAQAKAAAGgIQAHgIgBgUIAAhIIA7AAIAACWIg2AAIAAgZQgNAPgMAHQgLAGgSAAQgXAAgOgOg");
	this.shape_36.setTransform(726.4,292.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_37.setTransform(707,292.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhLBmIgFgoQANAEAPAAQAKAAAGgFQAHgEAEgMIg/iWIA9AAIAeBkIAdhkIA5AAIg8CgQgKAcgLAJQgOAOgfAAQgMAAgagEg");
	this.shape_38.setTransform(688.6,295.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcBoIAAjPIA5AAIAADPg");
	this.shape_39.setTransform(1147.6,246.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgcBoIAAiWIA5AAIAACWgAgchAIAAgnIA5AAIAAAng");
	this.shape_40.setTransform(1138,246.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgPBkQgKgFgFgMQgFgLAAgZIAAg0IgUAAIAAgrIAUAAIAAgbIA5gdIAAA4IAgAAIAAArIggAAIAAA0QAAAJADAEQACAFAHAAQAHAAALgEIAEAoQgVAEgSAAQgVAAgLgFg");
	this.shape_41.setTransform(1126.8,247);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAVBNIAAhRQAAgPgEgGQgGgFgKAAQgJAAgHAIQgGAIAAATIAABIIg6AAIAAiWIA2AAIAAAZQAMgPANgHQALgGARAAQAZAAANAOQAOAOAAAeIAABfg");
	this.shape_42.setTransform(1110.7,249.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhBA+QgNgNAAgeIAAhfIA5AAIAABSQAAAOAGAGQAEAGAKAAQAJAAAHgIQAGgIABgTIAAhJIA5AAIAACVIg2AAIAAgYQgMAPgLAHQgMAGgSAAQgXAAgOgPg");
	this.shape_43.setTransform(1091.3,249.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AguBGQgSgIgLgSQgLgTAAgZQAAgiAXgWQAWgWAoAAQAfAAATAKQATAKAJATQAKASAAAdIAAAGIhyAAQABAOAGAHQAIAKANAAQAIAAAIgEQAFgDAFgHIA5AFQgNAXgTAKQgSAKgiAAQgdAAgRgJgAgVggQgFAGgBAOIA3AAQgBgRgHgHQgIgHgMAAQgMAAgJALg");
	this.shape_44.setTransform(1062.3,249.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("ABFBNIAAhVQABgKgEgFQgGgIgJABQgKgBgGAIQgGAHAAAQIAABNIg5AAIAAhSIgBgNQgCgGgFgEQgEgDgGAAQgKAAgHAHQgGAIAAAQIAABNIg6AAIAAiWIA2AAIAAAWQAMgNAMgGQAMgGAQAAQASAAAJAGQALAHAHAMQAOgOALgGQALgFAQAAQAZAAANAOQAOAPAAAeIAABeg");
	this.shape_45.setTransform(1038.2,249.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhBA+QgOgNAAgeIAAhfIA7AAIAABSQAAAOAEAGQAGAGAJAAQAKAAAGgIQAHgIgBgTIAAhJIA7AAIAACVIg2AAIAAgYQgNAPgMAHQgLAGgSAAQgXAAgOgPg");
	this.shape_46.setTransform(1013.9,249.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgcBoIAAjPIA5AAIAADPg");
	this.shape_47.setTransform(999.4,246.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_48.setTransform(984.9,249.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgZBLIg/iVIA8AAIAcBeIAfheIA6AAIhACVg");
	this.shape_49.setTransform(966.5,249.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag6BNIAAiWIA2AAIAAAaQAGgQAJgHQAIgGAMAAQANAAAPAIIgSApQgKgEgGAAQgLAAgGAKQgIAMAAAjIAAAzg");
	this.shape_50.setTransform(942.8,249.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhBA+QgOgNAAgeIAAhfIA7AAIAABSQAAAOAEAGQAGAGAJAAQAKAAAGgIQAHgIAAgTIAAhJIA5AAIAACVIg2AAIAAgYQgMAPgMAHQgLAGgSAAQgXAAgOgPg");
	this.shape_51.setTransform(925.4,249.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag6A8QgbgXAAglQAAghAXgWQAXgXAnAAQAtAAAXAbQASAVAAAeQAAAigXAXQgXAWgoAAQgkAAgWgTgAgTgcQgJAKAAASQAAAUAJAKQAIAKALAAQAMAAAIgKQAIgJAAgVQAAgTgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_52.setTransform(906,249.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhLBmIgFgoQANAEAPAAQAKAAAGgFQAHgEAEgMIg/iWIA9AAIAeBkIAdhkIA5AAIg8CgQgKAcgLAJQgOAOgfAAQgMAAgagEg");
	this.shape_53.setTransform(887.6,252.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgPBkQgKgFgEgMQgGgLAAgZIAAg0IgUAAIAAgrIAUAAIAAgbIA5gdIAAA4IAgAAIAAArIggAAIAAA0QABAJACAEQACAFAHAAQAHAAALgEIAEAoQgVAEgSAAQgVAAgLgFg");
	this.shape_54.setTransform(862.6,247);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag4BDQgSgMgFgWIA6gFQADAKAHAFQAFAEALAAQALAAAHgFQAEgEAAgFQABgGgHgEQgFgCgTgEQgegFgMgEQgLgFgJgJQgIgLAAgOQAAgOAJgLQAJgLAPgFQAPgGAZAAQAbAAANAFQAMAEAJAIQAIAJAGAPIg2AFQgDgHgEgEQgIgEgIAAQgKAAgFADQgEAEAAAFQAAAFAGADQAFADASACQAdAEAOAFQAOAGAHAKQAIALAAAMQAAANgIANQgHAMgRAHQgRAIgeAAQgoAAgRgMg");
	this.shape_55.setTransform(847.2,249.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhBA+QgNgNgBgeIAAhfIA6AAIAABSQABAOAEAGQAFAGAKAAQAJAAAHgIQAGgIAAgTIAAhJIA7AAIAACVIg2AAIAAgYQgMAPgNAHQgLAGgSAAQgYAAgNgPg");
	this.shape_56.setTransform(828.8,249.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgtCBIAJgqIAKACQAHAAAEgFQAEgFAAgPIAAiMIA5AAIAACRQAAAcgEALQgEAMgLAHQgLAHgTAAQgRAAgZgFgAgLheIAAgnIA5AAIAAAng");
	this.shape_57.setTransform(812.6,249.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhBBSQgRgXAAgiQAAgkASgUQASgUAcAAQANAAAKAFQALAEAJAKIAAhIIA6AAIAADOIg2AAIAAgWQgLAOgKAFQgLAGgPAAQgfABgQgYgAgRAAQgHAIAAATQAAATAHAIQAHAJAKAAQAKAAAIgJQAHgIAAgUQAAgRgHgJQgIgIgKAAQgKABgHAHg");
	this.shape_58.setTransform(799.4,247);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAuBoIgKgjIhIAAIgKAjIhCAAIBOjPIBFAAIBODPgAgXAZIAtAAIgWhKg");
	this.shape_59.setTransform(778.9,246.8);

	this.instance = new lib.SpkrIcon();
	this.instance.parent = this;
	this.instance.setTransform(760,350);

	this.instance_1 = new lib.iconStar();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1117,939);

	this.instance_2 = new lib.icon6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1238,939);

	this.instance_3 = new lib.icon5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(753,939);

	this.instance_4 = new lib.icon4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(874,939);

	this.instance_5 = new lib.icon3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(996,939);

	this.instance_6 = new lib.icon0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(632,939);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.SButton1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__SoundCheck, new cjs.Rectangle(632,223.3,656,765.8), null);


(lib.TC_TScene__SignIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.IconSignIn();
	this.instance.parent = this;
	this.instance.setTransform(792,402.9);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D4218").s().p("AgwAZIAAgxIBgAAIAAAxg");
	this.shape.setTransform(989.2,519.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D4218").s().p("AgvAZIAAgxIBgAAIAAAxg");
	this.shape_1.setTransform(923.1,519.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D4218").s().p("AgHAfIAAgRIAPAAIAAARgAgHgOIAAgQIAPAAIAAAQg");
	this.shape_2.setTransform(857.7,574.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5D4218").s().p("AgjArIAAhVIAgAAQAJAAAGACQAIACAFAGQAGAGADAHQACAJAAALQAAALgCAHQgEAKgFAFQgFAEgIADQgGACgIAAgAgRAdIAMAAIAKgBQAEgCADgCQACgDADgFQACgGAAgKQAAgJgCgFQgDgFgDgDQgCgDgGgCIgMgBIgIAAg");
	this.shape_3.setTransform(848.1,572.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D4218").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_4.setTransform(842,572.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D4218").s().p("AgTAgIAAg9IAPAAIAAAIQAEgGADgCQADgCADAAQAGAAAFADIgFAPQgEgDgEAAQgDAAgCACQgCACgBAFQgBAFgBAPIAAATg");
	this.shape_5.setTransform(835.1,574);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D4218").s().p("AgWAWQgGgJAAgMQAAgPAIgJQAIgJAMAAQANABAIAIQAIAKAAARIgpAAQABAIADAEQAEAEAFAAQAEAAACgCQADgCABgFIARADQgDAJgHAFQgHAEgKAAQgPABgIgLgAgIgPQgDAEAAAGIAXAAQAAgGgDgFQgEgDgFAAQgEAAgEAEg");
	this.shape_6.setTransform(829,574.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D4218").s().p("AgSAcQgIgGgCgJIARgDQABAFACADQAEACAEAAQAHAAADgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgFgBQgTgFgFgDQgIgFAAgJQAAgHAHgGQAGgFANgBQAMAAAGAFQAGADADAJIgQACQgBgDgCgCQgEgCgEAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIABADQADACAMADQANADAFAEQAFAEAAAHQAAAJgHAHQgIAFgOAAQgLAAgHgEg");
	this.shape_7.setTransform(822.2,574.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D4218").s().p("AgQApQgHgDgEgEQgDgFgBgFQgCgHAAgPIAAgtIARAAIAAAuIABAOQABAGAEADQAEADAHAAQAHAAAEgDQADgDABgFIABgOIAAgvIARAAIAAAsQAAAQgBAGQgBAHgEAEQgEAFgGACQgHADgKAAQgLAAgGgDg");
	this.shape_8.setTransform(814.6,572.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A7782B").ss(1,1,1).p("Ai/hoIF/AAIAADRIl/AAg");
	this.shape_9.setTransform(977.6,572.9,5.476,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai/BpIAAjRIF/AAIAADRg");
	this.shape_10.setTransform(977.6,572.9,5.476,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A7782B").ss(1,1,1).p("AjWhoIGtAAIAADRImtAAg");
	this.shape_11.setTransform(1021.9,518.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjWBpIAAjRIGtAAIAADRg");
	this.shape_12.setTransform(1021.9,518.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A7782B").ss(1,1,1).p("AjWhoIGtAAIAADRImtAAg");
	this.shape_13.setTransform(958.9,518.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjWBpIAAjRIGtAAIAADRg");
	this.shape_14.setTransform(958.9,518.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5D4218").s().p("AgHAfIAAgRIAPAAIAAARgAgHgOIAAgQIAPAAIAAAQg");
	this.shape_15.setTransform(863,520.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5D4218").s().p("AgjArIAAhVIAgAAQAKAAAFABQAIADAFAFQAGAGACAJQADAIAAALQAAAKgDAIQgDAJgGAHQgEADgIADQgFACgJAAgAgSAcIAOAAIAJgBQAEgBADgCQACgCACgGQACgGAAgKQAAgJgCgFQgBgGgDgDQgEgDgEgBIgOAAIgIAAg");
	this.shape_16.setTransform(853.5,518.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D4218").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_17.setTransform(847.3,518.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5D4218").s().p("AgSAbQgIgFgCgJIARgCQABAFACACQAEADAEAAQAHAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAAAIgFgDQgTgEgFgEQgIgDAAgJQAAgJAHgFQAGgGANABQAMAAAGADQAGAEADAJIgQADQgBgEgCgCQgEgCgEAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABACIAPAFQANADAFAEQAFAEAAAIQAAAIgHAGQgIAHgOgBQgLABgHgGg");
	this.shape_18.setTransform(838.9,520.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5D4218").s().p("AgTAbQgHgFgCgJIARgCQABAFACACQAEADAEAAQAHAAADgDQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAAAIgFgDQgTgEgGgEQgHgDAAgJQAAgJAHgFQAGgGANABQAMAAAGADQAGAEADAJIgQADQgBgEgCgCQgEgCgEAAQgGAAgDACQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABACIAPAFQANADAFAEQAFAEAAAIQAAAIgHAGQgHAHgPgBQgLABgIgGg");
	this.shape_19.setTransform(832.2,520.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5D4218").s().p("AgXAbQgFgFAAgIQAAgGACgDQADgEAFgCQAEgCAIgBQALgDAEgCIAAgBQAAgFgCgCQgCgCgFAAQgFAAgDABQgCACgBAFIgPgDQACgJAGgFQAHgDALAAQALgBAFADQAFACADAFQACAEAAAKIAAATIABAMIACAIIgQAAIgCgFIgBgCQgEAFgFACQgDABgGAAQgJAAgGgFgAAAAEQgHABgBABQgEADAAAEQAAADADACQADADAEAAQADAAAEgDQADgCABgDIAAgIIAAgEIgJADg");
	this.shape_20.setTransform(825.7,520.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5D4218").s().p("AgHArIAAhVIAPAAIAABVg");
	this.shape_21.setTransform(820.7,518.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5D4218").s().p("AgaAhQgLgMAAgUQAAgVAMgMQALgLARgBQAQAAAJAKQAHAGACAKIgRAEQgBgHgFgEQgFgDgHAAQgJgBgFAIQgHAGABAPQgBAQAHAHQAGAGAHAAQAHABAGgFQAEgEACgKIARAGQgDAOgJAGQgKAIgNgBQgQAAgMgLg");
	this.shape_22.setTransform(814.7,518.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A7782B").ss(1,1,1).p("AjWhoIGtAAIAADRImtAAg");
	this.shape_23.setTransform(891.9,518.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjWBpIAAjRIGtAAIAADRg");
	this.shape_24.setTransform(891.9,518.9);

	this.SstatusMessage = new cjs.Text("Status text", "12px 'Arial'", "#FF00FF");
	this.SstatusMessage.name = "SstatusMessage";
	this.SstatusMessage.textAlign = "center";
	this.SstatusMessage.lineHeight = 15;
	this.SstatusMessage.lineWidth = 384;
	this.SstatusMessage.parent = this;
	this.SstatusMessage.setTransform(945.5,445.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_25.setTransform(1138.7,700.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_26.setTransform(1133.7,697.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgDgDQgCgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_27.setTransform(1125.4,697.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWAbQgGgEAAgIQAAgFADgDQABgEAEgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgEgEgIAAQgGAAgFADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEACADIgLAAIgDgHQgGAEgFACQgEACgGABQgKgBgGgFgAgCAEQgGABgDABQgDABgBACQgBACAAAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_28.setTransform(1117,697.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_29.setTransform(1110.4,697.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_30.setTransform(1102.1,696.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAbQgHgEgCgLIAKgBQABAGAFADQADADAHABQAHAAADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFADIAIACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgEAGgFACQgGADgHAAQgMgBgFgFg");
	this.shape_31.setTransform(1097.3,697.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_32.setTransform(1092.8,697.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_33.setTransform(1089,696.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_34.setTransform(1086.3,696.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_35.setTransform(1079.5,697.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_36.setTransform(1073.6,698);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_37.setTransform(1067,697.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgYg9IAMAAIANAkIAEANIADgNIAOgkIALAAIgYA+IgFAOQgDAGgDACQgEADgFAAIgHgCg");
	this.shape_38.setTransform(1060.8,699.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_39.setTransform(1052.9,696.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_40.setTransform(1047.7,697.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAEADAGABQAIAAAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgEQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEACAGIgLABQgBgEgDgDQgDgDgGAAQgHAAgDADQgDACAAADIACAEIADADIAJACIAPAFQAFABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_41.setTransform(1038,697.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_42.setTransform(1033.5,697.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_43.setTransform(1027.7,697.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_44.setTransform(1022.7,696.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_45.setTransform(1019.4,696.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_46.setTransform(1014.3,697.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_47.setTransform(1009.6,696.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgbArQAAgEABgDQACgGAFgGQAEgFAJgIQAOgLAEgGQAGgGAAgHQgBgGgEgEQgFgFgGABQgIgBgEAFQgEAEgBAJIgKgBQABgNAHgGQAIgGALAAQAMAAAHAHQAHAHABAJQgBAGgCAFQgCAFgFAEQgFAGgLAJIgLALIgFAGIAqAAIAAAKg");
	this.shape_48.setTransform(1001.6,696.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_49.setTransform(993.4,696.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgRAbQgGgEgCgLIAKgBQABAGAFADQADADAGABQAIAAADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgBgEQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQACAEACAGIgLABQAAgEgEgDQgDgDgGAAQgHAAgCADQgEACAAADIACAEIADADIAJACIAQAFQAEABADADQACAFAAAEQAAAGgDAEQgEAGgFACQgGADgHAAQgMgBgGgFg");
	this.shape_50.setTransform(988.6,697.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_51.setTransform(984.1,697.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_52.setTransform(980.3,696.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_53.setTransform(977.6,696.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_54.setTransform(969,697.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAPArIAAgoQAAgHgEgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAEAAAHIAAAiIgKAAIAAhVIAKAAIAAAfQAIgJAKAAQAHAAAFADQAFADACAEQACAFAAAIIAAAog");
	this.shape_55.setTransform(962.3,696.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_56.setTransform(957.4,696.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgXg9IALAAIANAkIAEANIADgNIAOgkIALAAIgYA+IgFAOQgDAGgEACQgDADgFAAIgHgCg");
	this.shape_57.setTransform(949.4,699.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgRAiIAAAIIgJAAIAAhVIAKAAIAAAfQAHgIAKAAQAFAAAFACQAFACAEAEQADAFACAGQACAEAAAHQAAAQgIAJQgIAJgLAAQgKAAgHgKgAgLgGQgGAGAAALQAAALADAFQAGAIAIAAQAGAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgGAAQgHAAgEAGg");
	this.shape_58.setTransform(943.2,696.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgNAoQgGgFgDgHQgEgHAAgKQAAgJADgHQADgHAHgEQAGgEAHAAQAFAAAEACQAFACACAEIAAgfIALAAIAABVIgKAAIAAgIQgFAKgMAAQgHAAgGgEgAgLgGQgEAGAAALQAAAMAFAGQAFAGAGAAQAHAAAFgGQAEgFAAgMQAAgMgEgGQgGgGgHAAQgGAAgFAGg");
	this.shape_59.setTransform(932.8,696.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_60.setTransform(926.3,697.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAMAfIgKglIgCgKIgMAvIgLAAIgTg9IALAAIAKAiIAEAOIADgNIAKgjIAKAAIAJAjIADAMIAEgMIAKgjIAKAAIgTA9g");
	this.shape_61.setTransform(918.7,697.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_62.setTransform(911,697.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_63.setTransform(906.3,696.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_64.setTransform(903.7,696.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_65.setTransform(899.1,697.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgIAsIAAg1IgJAAIAAgIIAJAAIAAgHIABgJQACgFAEgCQACgDAHAAIAKABIgBAKIgHgBQgEAAgCACQgCACAAAGIAAAGIAMAAIAAAIIgMAAIAAA1g");
	this.shape_66.setTransform(894.3,696.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_67.setTransform(885.7,697.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAgAgIAAgmIgBgKIgEgEQgCgCgEAAQgHAAgEAFQgEAEAAAKIAAAjIgKAAIAAgoQAAgHgCgDQgDgEgGAAQgEAAgEADQgEACgCAEQgCAFABAIIAAAgIgLAAIAAg9IAKAAIAAAIQADgEAEgDQAFgDAGAAQAHAAAEADQAEADACAFQAHgLAMAAQAKAAAEAFQAFAFAAALIAAAqg");
	this.shape_68.setTransform(877.4,697.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgWAbQgGgEAAgIQAAgFADgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgEgEgIAAQgGAAgFADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACADADQACADABAEIAAAKIAAANIABATQABAEACADIgLAAIgDgHQgGAEgFACQgEACgGABQgLgBgFgFgAgCAEQgGABgDABQgDABgBACQgBACAAAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQACgDgBgIIAAgDIgQAEg");
	this.shape_69.setTransform(869.1,697.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAPAgIAAglQAAgHgCgDQgBgDgDgCQgDgCgEAAQgGAAgFAFQgFAEAAAMIAAAhIgKAAIAAg9IAJAAIAAAIQAHgKAMAAQAGAAAEACQAFACACADQADAEABAEIAAAKIAAAmg");
	this.shape_70.setTransform(862.4,697.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgBApIgEgFQgBgDAAgJIAAgjIgIAAIAAgJIAIAAIAAgPIAJgGIAAAVIALAAIAAAJIgLAAIAAAjIABAGIABACIAEABIAFgBIABAKIgIAAQgFAAgDgBg");
	this.shape_71.setTransform(854.1,696.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgQAbQgHgEgCgLIAKgBQABAGAFADQADADAHABQAHAAADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgFgCgCgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEAAAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgCADQgEACAAADIABAEIAFADIAIACIAQAFQAEABACADQADAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgMgBgFgFg");
	this.shape_72.setTransform(849.4,697.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgWAbQgGgEABgIQAAgFACgDQACgEADgDIAHgCIAKgCQAMgCAFgCIAAgCQAAgGgCgDQgFgEgHAAQgGAAgFADQgDADgBAGIgLgCQABgGAEgEQADgEAGgCQAGgDAHAAQAIAAAFACQAFACACADQADADABAEIABAKIAAANIAAATQABAEACADIgLAAIgDgHQgFAEgGACQgEACgGABQgLgBgFgFgAgCAEQgGABgDABQgCABgCACQgCACABAEQgBADAEADQADADAGAAQAFAAAFgDQAEgCADgFQABgDAAgIIAAgDIgQAEg");
	this.shape_73.setTransform(843.1,697.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_74.setTransform(838.4,696.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_75.setTransform(832.2,697.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgNAeQgFgDgCgDQgCgDgBgFIgBgJIAAgmIAKAAIAAAiIABALQABAEADACQAEADAEAAQAEAAAEgDQAEgCACgEQACgFAAgIIAAggIAKAAIAAA9IgJAAIAAgJQgHALgMAAQgFAAgFgCg");
	this.shape_76.setTransform(826.4,698);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgUAYQgIgIAAgQQAAgQAJgJQAIgGALgBQANAAAIAJQAIAIAAAPQAAALgEAHQgDAHgHADQgHAEgIABQgMAAgIgJgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgGgIAAQgHAAgFAGg");
	this.shape_77.setTransform(819.8,697.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgWAqIgBgKIAGABIAFgBIAEgDIADgIIABgDIgYg9IAMAAIANAkIADANIAFgNIANgkIALAAIgYA+IgFAOQgDAGgDACQgEADgFAAIgHgCg");
	this.shape_78.setTransform(813.5,699.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgRAbQgGgEgCgLIALgBQABAGADADQAEADAGABQAIAAAEgDQADgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgDgEQgCgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAGABACAEQACAEABAGIgKABQgBgEgDgDQgDgDgGAAQgHAAgDADQgDACAAADIABAEIAEADIAJACIAPAFQAFABACADQADAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_79.setTransform(804.1,697.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgEArIAAg9IAJAAIAAA9gAgEgeIAAgMIAJAAIAAAMg");
	this.shape_80.setTransform(799.8,696.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgiArIAAhVIAdAAQAJAAAFABQAIACAEAFQAIAFADAJQADAJABALQgBAJgCAIQgCAHgEAGQgEAFgEADIgKADQgGACgHAAgAgYAhIATAAQAHAAAGgCIAHgEQAEgEACgHQACgHAAgJQABgNgFgIQgFgGgFgDQgFgCgKAAIgSAAg");
	this.shape_81.setTransform(791,696.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_82.setTransform(784.8,696.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgQAgIAAg9IAKAAIAAAJQADgHADgCQACgCAEAAQAFAAAGAEIgEAJQgEgCgEAAQgDAAgCACQgCACgCAEQgBAFAAAHIAAAgg");
	this.shape_83.setTransform(778.2,697.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgUAYQgIgJAAgOQAAgQAIgIQAIgJAMAAQANAAAIAJQAIAIAAAPIgBACIgtAAQABALAFAGQAFAEAHABQAGgBAEgDQAEgDACgGIALABQgCAKgHAFQgHAGgLAAQgNAAgIgJgAgLgSQgFAFAAAIIAhAAQAAgIgEgEQgFgGgIAAQgGAAgFAFg");
	this.shape_84.setTransform(772.4,697.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgRAbQgGgEgCgLIAKgBQABAGAFADQAEADAFABQAIAAADgDQAEgDAAgEQAAgEgDgCIgLgEIgPgEQgEgCgCgEQgDgDAAgFQAAgEACgEIAFgFIAHgEIAJgBQAGAAAGADQAFABADAEQADAEABAGIgLABQgBgEgDgDQgDgDgGAAQgGAAgDADQgEACAAADIACAEIADADIAJACIAQAFQAEABADADQACAFAAAEQAAAGgDAEQgDAGgGACQgGADgHAAQgLgBgHgFg");
	this.shape_85.setTransform(766.1,697.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgTAoQgHgFgEgHQgDgIAAgOIAAgxIAMAAIAAAxQAAALACAFQACAGAFADQAFACAHAAQAMAAAFgFQAFgGAAgQIAAgxIAMAAIAAAxQAAANgDAIQgDAHgIAFQgHAFgNAAQgLAAgIgEg");
	this.shape_86.setTransform(758.8,696.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AASAwIAAgwQAAgOgCgEQgBgFgEgCQgDgDgFAAQgGAAgFAEQgFADgCAGQgCAGAAAOIAAArIgZAAIAAhdIAXAAIAAAOQANgQARAAQAIAAAHADQAHADADAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_87.setTransform(968.6,634.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgMBAIAAiAIAZAAIAACAg");
	this.shape_88.setTransform(960.7,632.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgXAMIAAgXIAvAAIAAAXg");
	this.shape_89.setTransform(955.5,634.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AASAwIAAgwQAAgOgCgEQgBgFgEgCQgDgDgFAAQgGAAgFAEQgFADgCAGQgCAGAAAOIAAArIgZAAIAAhdIAXAAIAAAOQANgQARAAQAIAAAHADQAHADADAFQAEAEABAGQACAGAAALIAAA5g");
	this.shape_90.setTransform(946.6,634.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AggA7QgKgJAAgMIAAgDIAdADQABAFACACQAEADAGAAQAKAAAEgDQAEgCABgEIABgMIAAgNQgLAPgPAAQgTAAgLgQQgIgNAAgRQgBgYAMgMQALgNARAAQAQAAALAQIAAgOIAYAAIAABTQAAARgDAIQgDAIgFAFQgFAEgIADQgJADgMAAQgWAAgLgIgAgOgoQgFAHAAAOQAAAPAFAGQAGAHAIAAQAIAAAHgHQAGgGAAgOQAAgPgGgHQgGgHgJAAQgIAAgGAHg");
	this.shape_91.setTransform(935.4,636.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgLBAIAAhcIAXAAIAABcgAgLgoIAAgYIAXAAIAAAYg");
	this.shape_92.setTransform(927.6,632.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgkA3QgNgLgCgWIAZgCQACANAHAGQAHAGALAAQANAAAGgGQAHgFAAgHQgBgFgDgDQgCgDgHgDIgTgFQgWgFgIgHQgMgLAAgPQAAgKAGgIQAFgJALgEQALgFAOAAQAYAAAMALQAMAKAAASIgaABQgBgKgGgEQgFgEgKAAQgMAAgGAEQgEADAAAFQAAAFAEADQAFAEASAFQATAEAJAFQAJAFAFAHQAGAJgBAMQABALgHAJQgGAKgLAFQgMAFgQAAQgYAAgNgMg");
	this.shape_93.setTransform(919,632.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#A7782B").ss(5,1,1).p("AlijHILFAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAIrFAAQhTAAg7g7Qg6g6AAhTQAAhSA6g7QA7g6BTAAg");
	this.shape_94.setTransform(943.7,633.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AliDIQhTAAg6g6Qg7g7AAhTQAAhSA7g7QA6g6BTAAILFAAQBTAAA6A6QA7A7AABSQAABTg7A7Qg6A6hTAAg");
	this.shape_95.setTransform(943.7,633.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#A7782B").ss(5,1,1).p("A8HvnMA4PAAAQDIAAAADIIAAY/QAADIjIAAMg4PAAAQjIAAAAjIIAA4/QAAjIDIAAg");
	this.shape_96.setTransform(947.5,568.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EEAE1E").s().p("A8HPoQjIAAAAjIIAA4/QAAjIDIAAMA4PAAAQDIAAAADIIAAY/QAADIjIAAg");
	this.shape_97.setTransform(947.5,568.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAkBgIAAhgQAAgdgDgJQgEgJgGgEQgIgGgKAAQgMAAgKAIQgKAGgDAMQgFAMAAAeIAABVIgxAAIAAi6IAuAAIAAAbQAYggAlABQAPAAAOAFQAOAGAHAJQAGAKADALQADAMAAAVIAAB0g");
	this.shape_98.setTransform(1086.6,405.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgXCBIAAi6IAvAAIAAC6gAgXhSIAAguIAvAAIAAAug");
	this.shape_99.setTransform(1070.6,402.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgvAZIAAgxIBfAAIAAAxg");
	this.shape_100.setTransform(1060.4,406);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAkBgIAAhgQAAgdgEgJQgDgJgGgEQgIgGgKAAQgMAAgKAIQgKAGgDAMQgEAMgBAeIAABVIgxAAIAAi6IAuAAIAAAbQAYggAlABQAPAAAOAFQAOAGAHAJQAGAKAEALQACAMAAAVIAAB0g");
	this.shape_101.setTransform(1042.6,405.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AhAB1QgUgRAAgYIABgGIA4AGQABALAFADQAHAGAPgBQASAAAKgFQAHgEADgJQADgGAAgQIAAgbQgWAegiAAQglAAgWghQgRgYAAglQAAgvAWgYQAXgZAiAAQAhgBAXAfIAAgaIAuAAIAACnQAAAggGAQQgFARgKAJQgJAKgRAFQgQAGgagBQguAAgUgQgAgchQQgMANAAAcQAAAeAMANQAMAOAQAAQARAAANgPQANgNAAgcQAAgcgNgOQgMgOgSgBQgRABgLAOg");
	this.shape_102.setTransform(1020.1,409.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgYCBIAAi6IAxAAIAAC6gAgYhSIAAguIAxAAIAAAug");
	this.shape_103.setTransform(1004.6,402.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AhIBvQgbgXgFgrIAzgFQAEAZAPAMQANAMAXAAQAZAAANgKQANgLAAgOQAAgJgGgHQgFgGgNgFQgJgDgggIQgqgKgRgPQgXgVAAgeQAAgUALgRQALgRAVgJQAVgJAeAAQAvAAAZAVQAYAVABAkIg0ACQgDgUgLgIQgLgJgVAAQgXAAgMAJQgJAGAAAKQAAAJAIAHQAKAIAlAJQAmAJASAKQASAJALAQQAKAQAAAZQAAAWgNATQgMAUgWAJQgXAJghAAQgwAAgagWg");
	this.shape_104.setTransform(987.3,402.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgHB8QgLgEgFgIQgFgHgCgMQgBgIAAgbIAAhQIgXAAIAAgnIAXAAIAAgmIAwgcIAABCIAiAAIAAAnIgiAAIAABKQAAAXABAEQABAEAEACQADADAFAAQAHAAANgFIAEAmQgRAHgWAAQgNAAgKgEg");
	this.shape_105.setTransform(959.6,402.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAkBgIAAhgQAAgdgDgJQgEgJgGgEQgIgGgKAAQgLAAgLAIQgKAGgDAMQgFAMAAAeIAABVIgxAAIAAi6IAuAAIAAAbQAYggAlABQAPAAAOAFQAOAGAHAJQAGAKADALQADAMAAAVIAAB0g");
	this.shape_106.setTransform(942.6,405.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AhEBCQgSgZAAgnQAAguAYgaQAYgbAlABQApgBAYAcQAYAbgBA4Ih7AAQABAXALAMQAMAMAQAAQALAAAIgGQAIgHAEgOIAxAIQgJAbgUAPQgVANgfAAQgvABgYgggAgYgvQgLAMAAAUIBJAAQgBgVgKgMQgLgLgPAAQgPAAgKAMg");
	this.shape_107.setTransform(921.4,406);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhDBpQgXgaAAguQAAgvAWgYQAXgZAhAAQAfAAAWAaIAAhdIAyAAIAAEBIguAAIAAgcQgMAQgOAIQgRAIgOAAQghAAgWgagAgcgLQgMANAAAbQAAAeAIAOQANATAUAAQARAAAMgOQAMgPAAgdQAAgggMgNQgLgOgSAAQgRAAgMAOg");
	this.shape_108.setTransform(900.1,402.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("Ag4BXQgPgIgGgPQgHgPAAgaIAAh1IAxAAIAABVQAAAnADAJQADAIAHAGQAHAFALAAQAMAAAKgHQAKgHAEgKQADgLAAgnIAAhOIAyAAIAAC5IguAAIAAgcQgKAPgRAJQgPAIgTAAQgTAAgPgIg");
	this.shape_109.setTransform(878.5,406.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgHB8QgLgEgFgIQgFgHgCgMQgBgIAAgbIAAhQIgXAAIAAgnIAXAAIAAgmIAwgcIAABCIAiAAIAAAnIgiAAIAABKQAAAXABAEQABAEAEACQADADAFAAQAHAAANgFIAEAmQgRAHgWAAQgNAAgKgEg");
	this.shape_110.setTransform(861.6,402.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AhIBvQgbgXgFgrIAzgFQAEAZAPAMQANAMAXAAQAZAAANgKQANgLAAgOQAAgJgGgHQgFgGgNgFQgJgDgggIQgqgKgRgPQgXgVAAgeQAAgUALgRQALgRAVgJQAVgJAeAAQAvAAAZAVQAYAVABAkIg0ACQgDgUgLgIQgLgJgVAAQgXAAgMAJQgJAGAAAKQAAAJAIAHQAKAIAlAJQAmAJASAKQASAJALAQQAKAQAAAZQAAAWgNATQgMAUgWAJQgXAJghAAQgwAAgagWg");
	this.shape_111.setTransform(843.3,402.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.SstatusMessage},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__SignIn, new cjs.Rectangle(745,370.4,427.5,335.3), null);


// stage content:
(lib.EFMod_SignIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Scene Bounds
	this.instance = new lib.SceneRegion();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// Module Content
	this.instance_1 = new lib.TC_TScene__SignIn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.3,0,1,1,0,0,0,-1.3,0);

	this.instance_2 = new lib.TC_TScene__HeadPhoneCheck();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,632,1,1,0,0,0,960,632);

	this.instance_3 = new lib.TC_TScene__SoundCheck();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,606.1,1,1,0,0,0,960,606.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(11));

	// Module Component
	this.instance_4 = new lib.ef_TutorModule({'id': 'instance_4', 'compositionID':'8413BCBA72CC587897F41BF9190750A5'});

	this.instance_4.setTransform(960,600,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958.8,598.8,1922.5,1202.5);
// library properties:
lib.properties = {
	id: '8413BCBA72CC587897F41BF9190750A5',
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/EFMod_SignIn_atlas_.png", id:"EFMod_SignIn_atlas_"},
		{src:"components/EFComponents/src/ef_loadManager.js", id:"EFComponents/src/ef_loadManager.js"},
		{src:"components/EFComponents/src/ef_module.js", id:"ef.TutorModule"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8413BCBA72CC587897F41BF9190750A5'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;