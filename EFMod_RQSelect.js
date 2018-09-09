(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"EFMod_RQSelect_atlas_", frames: [[552,0,400,400],[0,0,550,400]]}
];


// symbols:



(lib.Arrows = function() {
	this.spriteSheet = ss["EFMod_RQSelect_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.tshirtstickfigures = function() {
	this.spriteSheet = ss["EFMod_RQSelect_atlas_"];
	this.gotoAndStop(1);
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


(lib.ForceSpriteSheetKludge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tshirtstickfigures();
	this.instance.parent = this;
	this.instance.setTransform(-376,192);

	this.instance_1 = new lib.Arrows();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-563,-343);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ForceSpriteSheetKludge, new cjs.Rectangle(-563,-343,737,935), null);


(lib.TC_TObject__RedShirtGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tshirtstickfigures();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__RedShirtGraphic, new cjs.Rectangle(0,0,550,400), null);


(lib.ButtonShadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().rr(-298.5,-101,597,202,22.8);
	this.shape.setTransform(265.5,68.2,0.889,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonShadow, new cjs.Rectangle(0,0,531,136.4), null);


(lib.ButtonSelected = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005EFF").s("#00CCFF").ss(12.2,1,1).rr(-298.5,-101,597,202,22.8);
	this.shape.setTransform(265.5,68.2,0.889,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonSelected, new cjs.Rectangle(-6,-6,543.1,148.5), null);


(lib.ButtonNormal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s("#999999").ss(9,1,1).rr(-298.5,-101,597,202,22.8);
	this.shape.setTransform(265.5,68.2,0.889,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ButtonNormal, new cjs.Rectangle(-4.5,-4.5,540,145.4), null);


(lib.BubbleShadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().de(-151,-97.5,302,195);
	this.shape.setTransform(151,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BubbleShadow, new cjs.Rectangle(0,0,302,195), null);


(lib.BubbleSelected = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005EFF").s("#00CCFF").ss(10.1,1,1).de(-151,-97.5,302,195);
	this.shape.setTransform(151,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BubbleSelected, new cjs.Rectangle(-5,-5,312.1,205.1), null);


(lib.BubbleNormal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s("#999999").ss(10.1,1,1).de(-151,-97.5,302,195);
	this.shape.setTransform(151,97.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BubbleNormal, new cjs.Rectangle(-5,-5,312.1,205.1), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnenqIAAERIBAgDQBNABBAAQQDNA2AAC/IjuAAIGXHCIF6nWIj4AAQgCgfgMgxQgahgg5hQQi3kBmtABg");
	this.shape.setTransform(47.9,42.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AkxApIDtAAQABi+jOg2QhAgQhNgBIhAACIAAkQQGtgBC3EAQA5BQAaBhQANAxABAfID4AAIl6HVg");
	this.shape_1.setTransform(47.9,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-1,-7.3,97.8,100.3), null);


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



(lib.TC_TVirtual__SceneRgn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FF00FF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-110,-110);
	this.shape.setTransform(960,587.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(210,210,210,0.047)").s("#99FFFF").ss(0.1,1,1).rc(-960,-600,1920,1200,10,10,-240,-240);
	this.shape_1.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TVirtual__SceneRgn, new cjs.Rectangle(-1,-1,1922,1202), null);


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


(lib.TC_TObject__NavBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E9FD").s("#AAAAAA").ss(2.5,1,1).rr(-960,-600,1920,1200,10);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__NavBackground, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.NextOutline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(35.8,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextOutline, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.NextButtonDisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EEEEEE").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_2.setTransform(39,11);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape_3.setTransform(39,-77,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonDisabled, new cjs.Rectangle(-52.3,-126,182.6,228.3), null);


(lib.SpinOutline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(35.8,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpinOutline, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.SpinFocusOutline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(35.8,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpinFocusOutline, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.contentFrame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-110,-110);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.contentFrame, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextArea, new cjs.Rectangle(-1,-1,102,102), null);


(lib.NextButtonUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8000").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8000").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.NextOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonUp, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.NextButtonOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.SpinOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonOver, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.NextButtonFocus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EEEEEE").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.SpinFocusOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonFocus, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.NextButtonDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.SpinOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonDown, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.navnextup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonUp();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navnextup, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.navnextover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonOver();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navnextover, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.navnexthit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonFocus();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navnexthit, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.navnextdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDown();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navnextdown, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.navnextdisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDisabled();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navnextdisabled, new cjs.Rectangle(0,-5.3,231.3,182.8), null);


(lib.navbackup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonUp();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navbackup, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.navbackover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonOver();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navbackover, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.navbackhit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonFocus();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navbackhit, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.navbackdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDown();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navbackdown, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.navbackdisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDisabled();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navbackdisabled, new cjs.Rectangle(-5.3,-5.3,228.3,182.8), null);


(lib.TC_THtmlText__Text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.TextArea();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;
	this.SControlContainer.setTransform(50,50,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlText__Text1, new cjs.Rectangle(-0.5,-0.5,101,101), null);


(lib.TC_TIntroControl__RQIntro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Arrow
	this.Sarrow = new lib.arrow();
	this.Sarrow.name = "Sarrow";
	this.Sarrow.parent = this;
	this.Sarrow.setTransform(560,134.2,1,1,0,0,0,47.9,42.9);

	this.timeline.addTween(cjs.Tween.get(this.Sarrow).wait(1));

	// Bubble Text
	this.STextBox2 = new lib.TC_THtmlText__Text1();
	this.STextBox2.name = "STextBox2";
	this.STextBox2.parent = this;
	this.STextBox2.setTransform(632.2,-19.1,2.74,1.58,0,0,0,50.1,49.9);

	this.timeline.addTween(cjs.Tween.get(this.STextBox2).wait(1));

	// BubbleSelect
	this.SbubbleSelect = new lib.BubbleSelected();
	this.SbubbleSelect.name = "SbubbleSelect";
	this.SbubbleSelect.parent = this;
	this.SbubbleSelect.setTransform(632,-18.5,1,1,0,0,0,151,97.5);

	this.timeline.addTween(cjs.Tween.get(this.SbubbleSelect).wait(1));

	// BubbleNormal
	this.SbubbleNormal = new lib.BubbleNormal();
	this.SbubbleNormal.name = "SbubbleNormal";
	this.SbubbleNormal.parent = this;
	this.SbubbleNormal.setTransform(632,-18.5,1,1,0,0,0,151,97.5);

	this.timeline.addTween(cjs.Tween.get(this.SbubbleNormal).wait(1));

	// BubbleShadow
	this.SbubbleShadow = new lib.BubbleShadow();
	this.SbubbleShadow.name = "SbubbleShadow";
	this.SbubbleShadow.parent = this;
	this.SbubbleShadow.setTransform(632,-18.5,1,1,0,0,0,151,97.5);
	this.SbubbleShadow.shadow = new cjs.Shadow("rgba(153,153,153,1)",21,21,30);

	this.timeline.addTween(cjs.Tween.get(this.SbubbleShadow).wait(1));

	// Box Text
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(266.1,68.3,5.06,1.12,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// BoxSelect
	this.SboxSelect = new lib.ButtonSelected();
	this.SboxSelect.name = "SboxSelect";
	this.SboxSelect.parent = this;
	this.SboxSelect.setTransform(265.5,68.2,1,1,0,0,0,265.5,68.2);

	this.timeline.addTween(cjs.Tween.get(this.SboxSelect).wait(1));

	// BoxNormal
	this.SboxNormal = new lib.ButtonNormal();
	this.SboxNormal.name = "SboxNormal";
	this.SboxNormal.parent = this;
	this.SboxNormal.setTransform(265.5,68.2,1,1,0,0,0,265.5,68.2);

	this.timeline.addTween(cjs.Tween.get(this.SboxNormal).wait(1));

	// Box1Float
	this.SboxShadow = new lib.ButtonShadow();
	this.SboxShadow.name = "SboxShadow";
	this.SboxShadow.parent = this;
	this.SboxShadow.setTransform(265.5,68.2,1,1,0,0,0,265.5,68.2);
	this.SboxShadow.shadow = new cjs.Shadow("rgba(153,153,153,1)",11,11,15);

	this.timeline.addTween(cjs.Tween.get(this.SboxShadow).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TIntroControl__RQIntro, new cjs.Rectangle(-6,-127,846.1,310.8), null);


(lib.TC_TButton__PrevButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.instance = new lib.navbackup();
	this.instance.parent = this;
	this.instance.setTransform(61.9,11,1,1,0,0,0,108.9,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// SpinButtonOver
	this.instance_1 = new lib.navbackover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.9,11,1,1,0,0,0,108.9,86);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// SpinButtonDown
	this.instance_2 = new lib.navbackdown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.9,11,1,1,0,0,0,108.9,86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// SpinButtonFocus
	this.instance_3 = new lib.navbackhit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.9,11,1,1,0,0,0,108.9,86);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// SpinButtonDisabled
	this.instance_4 = new lib.navbackdisabled();
	this.instance_4.parent = this;
	this.instance_4.setTransform(61.9,11.1,1,1,0,0,0,108.9,86.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-80.3,228.3,182.6);


(lib.TC_TButton__NextButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.instance = new lib.navnextup();
	this.instance.parent = this;
	this.instance.setTransform(14.7,11,1,1,0,0,0,115.7,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// SpinButtonOver
	this.instance_1 = new lib.navnextover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,11,1,1,0,0,0,115.7,86);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// SpinButtonDown
	this.instance_2 = new lib.navnextdown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.7,11,1,1,0,0,0,115.7,86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// SpinButtonDisabled
	this.instance_3 = new lib.navnextdisabled();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.7,11.1,1,1,0,0,0,115.7,86.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// SpinButtonFocus
	this.instance_4 = new lib.navnexthit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(14.7,11,1,1,0,0,0,115.7,86);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-80.3,231.3,182.6);


(lib.TC_TScene__Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SIntro1
	this.Sintro1 = new lib.TC_TIntroControl__RQIntro();
	this.Sintro1.name = "Sintro1";
	this.Sintro1.parent = this;
	this.Sintro1.setTransform(413.5,230.3,1.064,1.064,0,0,0,265.5,68.2);

	this.timeline.addTween(cjs.Tween.get(this.Sintro1).wait(1));

	// SIntro2
	this.Sintro2 = new lib.TC_TIntroControl__RQIntro();
	this.Sintro2.name = "Sintro2";
	this.Sintro2.parent = this;
	this.Sintro2.setTransform(718.5,456,1.064,1.064,0,0,0,265.5,68.2);

	this.timeline.addTween(cjs.Tween.get(this.Sintro2).wait(1));

	// SIntro3
	this.Sintro3 = new lib.TC_TIntroControl__RQIntro();
	this.Sintro3.name = "Sintro3";
	this.Sintro3.parent = this;
	this.Sintro3.setTransform(1023.5,681.6,1.064,1.064,0,0,0,265.5,68.2);

	this.timeline.addTween(cjs.Tween.get(this.Sintro3).wait(1));

	// SIntro4
	this.Sintro4 = new lib.TC_TIntroControl__RQIntro();
	this.Sintro4.name = "Sintro4";
	this.Sintro4.parent = this;
	this.Sintro4.setTransform(1328.5,907.3,1.064,1.064,0,0,0,265.5,68.2);

	this.timeline.addTween(cjs.Tween.get(this.Sintro4).wait(1));

	// Sample
	this.Ssample = new lib.TC_TObject__RedShirtGraphic();
	this.Ssample.name = "Ssample";
	this.Ssample.parent = this;
	this.Ssample.setTransform(423.9,791.5,1.065,1.065,0,0,0,275.1,200.1);
	this.Ssample.cache(-2,-2,554,404);

	this.timeline.addTween(cjs.Tween.get(this.Ssample).wait(1));

	// SceneRegion
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene1, new cjs.Rectangle(0,0,1935.8,1200.1), null);


(lib.TC_TNavPanel__Navigator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Snext
	this.Snext = new lib.TC_TButton__NextButton();
	this.Snext.name = "Snext";
	this.Snext.parent = this;
	this.Snext.setTransform(1782.9,1092.1);
	new cjs.ButtonHelper(this.Snext, 0, 1, 2, false, new lib.TC_TButton__NextButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Snext).wait(1));

	// Sback
	this.Sback = new lib.TC_TButton__PrevButton();
	this.Sback.name = "Sback";
	this.Sback.parent = this;
	this.Sback.setTransform(59.5,1092.1);
	new cjs.ButtonHelper(this.Sback, 0, 1, 2, false, new lib.TC_TButton__PrevButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sback).wait(1));

	// SbackMask
	this.instance = new lib.contentFrame();
	this.instance.parent = this;
	this.instance.setTransform(960,587.5,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Sbackground
	this.Sbackground = new lib.TC_TObject__NavBackground();
	this.Sbackground.name = "Sbackground";
	this.Sbackground.parent = this;
	this.Sbackground.setTransform(275,200,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get(this.Sbackground).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TNavPanel__Navigator, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


// stage content:
(lib.EFMod_RQSelect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Module Content
	this.instance = new lib.TC_TNavPanel__Navigator();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.instance_1 = new lib.TC_TScene__Scene1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,600,1,1,0,0,0,960,600);

	this.instance_2 = new lib.ForceSpriteSheetKludge();
	this.instance_2.parent = this;
	this.instance_2.setTransform(958.3,610.4,1,1,0,0,0,-194.5,124.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},7).wait(1));

	// Scene Bounds
	this.instance_3 = new lib.SceneRegion();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

	// Module Component
	this.instance_4 = new lib.ef_TutorModule({'id': 'instance_4', 'compositionID':'F2AAB060E6A643B152F88DFFCB60C58D'});

	this.instance_4.setTransform(960,600,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958.8,598.8,1922.5,1202.5);
// library properties:
lib.properties = {
	id: 'F2AAB060E6A643B152F88DFFCB60C58D',
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/EFMod_RQSelect_atlas_.png", id:"EFMod_RQSelect_atlas_"},
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
an.compositions['F2AAB060E6A643B152F88DFFCB60C58D'] = {
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