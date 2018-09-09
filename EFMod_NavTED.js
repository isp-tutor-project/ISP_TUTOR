(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.IntroBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E9FD").s("#AAAAAA").ss(2.5,1,1).rc(-960,-600,1920,1200,10,10,-120,10);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.IntroBackground, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


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


(lib.CPrevButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.Sup = new lib.NextButtonUp();
	this.Sup.name = "Sup";
	this.Sup.parent = this;
	this.Sup.setTransform(29.1,11,1,1,0,90,-90,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sup).wait(1));

	// SpinButtonOver
	this.Sover = new lib.NextButtonOver();
	this.Sover.name = "Sover";
	this.Sover.parent = this;
	this.Sover.setTransform(29.1,11,1,1,0,90,-90,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sover).wait(1));

	// SpinButtonDown
	this.Sdown = new lib.NextButtonDown();
	this.Sdown.name = "Sdown";
	this.Sdown.parent = this;
	this.Sdown.setTransform(29.1,11,1,1,0,90,-90,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sdown).wait(1));

	// SpinButtonDisabled
	this.Sdisabled = new lib.NextButtonDisabled();
	this.Sdisabled.name = "Sdisabled";
	this.Sdisabled.parent = this;
	this.Sdisabled.setTransform(29.1,11,1,1,0,90,-90,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sdisabled).wait(1));

	// SpinButtonFocus
	this.Sfocus = new lib.NextButtonFocus();
	this.Sfocus.name = "Sfocus";
	this.Sfocus.parent = this;
	this.Sfocus.setTransform(29.1,11,1,1,0,90,-90,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sfocus).wait(1));

	// BACK
	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(124,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(121,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Circle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(39,11,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CPrevButton, new cjs.Rectangle(-52.3,-80.3,228.3,182.8), null);


(lib.CNextButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.Sup = new lib.NextButtonUp();
	this.Sup.name = "Sup";
	this.Sup.parent = this;
	this.Sup.setTransform(49,11,1,1,-90,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sup).wait(1));

	// SpinButtonOver
	this.Sover = new lib.NextButtonOver();
	this.Sover.name = "Sover";
	this.Sover.parent = this;
	this.Sover.setTransform(49,11,1,1,-90,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sover).wait(1));

	// SpinButtonDown
	this.Sdown = new lib.NextButtonDown();
	this.Sdown.name = "Sdown";
	this.Sdown.parent = this;
	this.Sdown.setTransform(49,11,1,1,-90,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sdown).wait(1));

	// SpinButtonDisabled
	this.Sdisabled = new lib.NextButtonDisabled();
	this.Sdisabled.name = "Sdisabled";
	this.Sdisabled.parent = this;
	this.Sdisabled.setTransform(49,11,1,1,-90,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sdisabled).wait(1));

	// SpinButtonFocus
	this.Sfocus = new lib.NextButtonFocus();
	this.Sfocus.name = "Sfocus";
	this.Sfocus.parent = this;
	this.Sfocus.setTransform(49,11,1,1,-90,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.Sfocus).wait(1));

	// NEXT
	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-49,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(-52,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Circle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(39,11,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CNextButton, new cjs.Rectangle(-101,-80.3,231.3,182.8), null);


(lib.CNavPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nextButton
	this.SnextButton = new lib.CNextButton();
	this.SnextButton.name = "SnextButton";
	this.SnextButton.parent = this;
	this.SnextButton.setTransform(1856.7,1148.6,0.427,0.427);

	this.timeline.addTween(cjs.Tween.get(this.SnextButton).wait(1));

	// NavBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B9DBFF").s().p("EhD7AR9IhWABQgigBgNgIQgZgQgBhtMAABgh5QAeB3BWB9QBkCTCbBzQGLEmJsgBMBgFAAIQGoABFFDOQEHCoC7EpQCLDgBQEMQA6DDABBdIAAAwg");
	this.shape.setTransform(451.8,1121.7,1,0.843,0,0,0,1.1,22.5);

	this.instance = new lib.IntroBackground();
	this.instance.parent = this;
	this.instance.setTransform(275,200,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	// backButton
	this.SbackButton = new lib.CPrevButton();
	this.SbackButton.name = "SbackButton";
	this.SbackButton.parent = this;
	this.SbackButton.setTransform(30.4,1149,0.433,0.432);

	this.timeline.addTween(cjs.Tween.get(this.SbackButton).wait(1));

	// FlexMask
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").ss(0.1,1,1).dr(-960,-600,1920,1200);
	this.shape_1.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CNavPanel, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


// stage content:
(lib.EFMod_NavTED = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Scene Bounds
	this.instance = new lib.SceneRegion();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Module Content
	this.instance_1 = new lib.CNavPanel();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,600,1,1,0,0,0,960,600);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Module Component
	this.instance_2 = new lib.ef_TutorModule({'id': 'instance_2', 'compositionID':'copy id from init() in Published HTML'});

	this.instance_2.setTransform(960,600,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958.8,598.8,1922.5,1202.5);
// library properties:
lib.properties = {
	id: 'C3F506BEAFD9B44984B03939FB5E1447',
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
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
an.compositions['C3F506BEAFD9B44984B03939FB5E1447'] = {
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