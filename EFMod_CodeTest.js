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


(lib.TC_TScene__Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SMouseMemoirs = new cjs.Text("This is a test of PT SANS", "85px 'PT Sans'");
	this.SMouseMemoirs.name = "SMouseMemoirs";
	this.SMouseMemoirs.textAlign = "center";
	this.SMouseMemoirs.lineHeight = 112;
	this.SMouseMemoirs.lineWidth = 738;
	this.SMouseMemoirs.parent = this;
	this.SMouseMemoirs.setTransform(960,501.7);

	this.timeline.addTween(cjs.Tween.get(this.SMouseMemoirs).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene4, new cjs.Rectangle(589.3,499.7,741.6,226), null);


(lib.TC_TScene__Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Stext = new cjs.Text("This is a test of OCR", "85px 'OCR A Std'");
	this.Stext.name = "Stext";
	this.Stext.textAlign = "center";
	this.Stext.lineHeight = 92;
	this.Stext.lineWidth = 738;
	this.Stext.parent = this;
	this.Stext.setTransform(960,501.7);

	this.timeline.addTween(cjs.Tween.get(this.Stext).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene3, new cjs.Rectangle(589.3,499.7,741.6,371), null);


(lib.TC_TButton__NavButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s("#CCCCCC").ss(1,1,1).de(-114,-114,228,228);
	this.shape.setTransform(114,114);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC66").s("#CCCCCC").ss(1,1,1).de(-114,-114,228,228);
	this.shape_1.setTransform(114,114);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF33").s("#CCCCCC").ss(1,1,1).de(-114,-114,228,228);
	this.shape_2.setTransform(114,114);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF33").s("#CCCCCC").ss(1,1,1).de(-114,-114,228,228);
	this.shape_3.setTransform(114,114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,230,230);


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


(lib.TC_TObject__BlueOval = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3366CC").s("#CCCCCC").ss(1,1,1).de(-100.1,-214.2,200.2,428.4);
	this.shape.setTransform(100.1,214.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__BlueOval, new cjs.Rectangle(-1,-1,202.2,430.4), null);


(lib.TextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(0,0,1,1,0,0,0,-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextArea, new cjs.Rectangle(-1,-1,102,102), null);


(lib.InputContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(0,0,1,1,0,0,0,-50,-50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.InputContainer, new cjs.Rectangle(-1,-1,102,102), null);


(lib.TC_TScene__Navigator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Snext = new lib.TC_TButton__NavButton();
	this.Snext.name = "Snext";
	this.Snext.parent = this;
	this.Snext.setTransform(1920,1200,1,1,0,0,0,114,114);
	new cjs.ButtonHelper(this.Snext, 0, 1, 2, false, new lib.TC_TButton__NavButton(), 3);

	this.Sback = new lib.TC_TButton__NavButton();
	this.Sback.name = "Sback";
	this.Sback.parent = this;
	this.Sback.setTransform(0,1200,1,1,0,0,0,114,114);
	new cjs.ButtonHelper(this.Sback, 0, 1, 2, false, new lib.TC_TButton__NavButton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Sback},{t:this.Snext}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Navigator, new cjs.Rectangle(-115,1085,2150,230), null);


(lib.TC_THtmlText__Text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.TextArea();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlText__Text1, new cjs.Rectangle(-0.5,-0.5,101,101), null);


(lib.TC_THtmlInput__Input1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.InputContainer();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlInput__Input1, new cjs.Rectangle(-0.5,-0.5,101,101), null);


(lib.TC_TScene__Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(258.2,649.9,2.436,1.827,-30,0,0,50,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// SShape1
	this.SShape1 = new lib.TC_TObject__BlueOval();
	this.SShape1.name = "SShape1";
	this.SShape1.parent = this;
	this.SShape1.setTransform(467.6,354,0.916,0.916,0,0,0,100.2,214.3);

	this.timeline.addTween(cjs.Tween.get(this.SShape1).wait(1));

	// SShape2
	this.SShape2 = new lib.TC_TObject__BlueOval();
	this.SShape2.name = "SShape2";
	this.SShape2.parent = this;
	this.SShape2.setTransform(746.2,884,0.309,1.187,-90,0,0,100.2,214.4);

	this.timeline.addTween(cjs.Tween.get(this.SShape2).wait(1));

	// Layer_1
	this.SMouseMemoirs = new cjs.Text("This is a test of Pangolin", "85px 'Pangolin'");
	this.SMouseMemoirs.name = "SMouseMemoirs";
	this.SMouseMemoirs.textAlign = "center";
	this.SMouseMemoirs.lineHeight = 131;
	this.SMouseMemoirs.lineWidth = 738;
	this.SMouseMemoirs.parent = this;
	this.SMouseMemoirs.setTransform(960,501.7);

	this.timeline.addTween(cjs.Tween.get(this.SMouseMemoirs).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene2, new cjs.Rectangle(105.4,157.3,1225.4,757.8), null);


(lib.TC_TScene__Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SShape1
	this.SShape1 = new lib.TC_TObject__BlueOval();
	this.SShape1.name = "SShape1";
	this.SShape1.parent = this;
	this.SShape1.setTransform(1433.4,284.9,0.426,0.426,0,0,0,100,214.2);

	this.timeline.addTween(cjs.Tween.get(this.SShape1).wait(1));

	// SShape2
	this.SShape2 = new lib.TC_TObject__BlueOval();
	this.SShape2.name = "SShape2";
	this.SShape2.parent = this;
	this.SShape2.setTransform(521,346.1,0.309,0.309,-90,0,0,100.2,214.2);

	this.timeline.addTween(cjs.Tween.get(this.SShape2).wait(1));

	// STextBox1
	this.SInput1 = new lib.TC_THtmlInput__Input1();
	this.SInput1.name = "SInput1";
	this.SInput1.parent = this;
	this.SInput1.setTransform(691.4,728,4.83,0.46,0,0,0,0.3,0);

	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(793,338.3,1.64,2.639,0,0,0,50,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.STextBox1},{t:this.SInput1}]}).wait(1));

	// SMouseMemoirs
	this.SMouseMemoirs = new cjs.Text("This is a test of Mouse Memoirs", "85px 'Mouse Memoirs'");
	this.SMouseMemoirs.name = "SMouseMemoirs";
	this.SMouseMemoirs.textAlign = "center";
	this.SMouseMemoirs.lineHeight = 99;
	this.SMouseMemoirs.lineWidth = 738;
	this.SMouseMemoirs.parent = this;
	this.SMouseMemoirs.setTransform(960,501.7);

	this.timeline.addTween(cjs.Tween.get(this.SMouseMemoirs).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene1, new cjs.Rectangle(454.7,193.5,1021.6,580.8), null);


// stage content:
(lib.EFMod_CodeTest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Scene Bounds
	this.instance = new lib.SceneRegion();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Module Content
	this.instance_1 = new lib.TC_TScene__Navigator();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,1200,1,1,0,0,0,960,1200);

	this.instance_2 = new lib.TC_TScene__Scene1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,600,1,1,0,0,0,960,600);

	this.instance_3 = new lib.TC_TScene__Scene2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,631.4,1,1,0,0,0,960,631.4);

	this.instance_4 = new lib.TC_TScene__Scene3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(960,685.2,1,1,0,0,0,960,685.2);

	this.instance_5 = new lib.TC_TScene__Scene4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(960,612.7,1,1,0,0,0,960,612.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(4));

	// Module Component
	this.instance_6 = new lib.ef_TutorModule({'id': 'instance_6', 'compositionID':'C00BF3F247422186D8141305DD9F12A2'});

	this.instance_6.setTransform(960,600,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958.8,598.8,1922.5,1202.5);
// library properties:
lib.properties = {
	id: 'C00BF3F247422186D8141305DD9F12A2',
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
an.compositions['C00BF3F247422186D8141305DD9F12A2'] = {
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