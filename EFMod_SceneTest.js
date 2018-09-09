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


(lib.textFocusBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9AEBFE").ss(2,1,1).dr(-367.5,-23,735,46);
	this.shape.setTransform(367.5,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.textFocusBox, new cjs.Rectangle(-1,-1,737,48), null);


(lib.TC_TObject__STRectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s("#CCCCCC").ss(9,1,1).dr(-304.25,-98.6,608.5,197.2);
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__STRectangle, new cjs.Rectangle(-308.2,-102.5,617.5,206.2), null);


(lib.TC_TButton__PurpleCircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s("#000000").ss(9,1,1).de(-111.7,-111.7,223.5,223.5);
	this.shape.setTransform(111.8,111.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s("#000000").ss(9,1,1).de(-111.7,-111.7,223.5,223.5);
	this.shape_1.setTransform(111.8,111.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s("#000000").ss(9,1,1).de(-111.7,-111.7,223.5,223.5);
	this.shape_2.setTransform(111.8,111.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s("#CCCCCC").ss(9,1,1).de(-111.7,-111.7,223.5,223.5);
	this.shape_3.setTransform(111.8,111.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,232.5,232.5);


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


(lib.TC_TTextInput__CTextControl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// focusBox
	this.SfocusBox = new lib.textFocusBox();
	this.SfocusBox.name = "SfocusBox";
	this.SfocusBox.parent = this;
	this.SfocusBox.setTransform(381.4,36.9,1,1,0,0,0,367.4,22.9);

	this.timeline.addTween(cjs.Tween.get(this.SfocusBox).wait(1));

	// txtField
	this.StxtField = new cjs.Text("", "17px 'Arial'", "#333333");
	this.StxtField.name = "StxtField";
	this.StxtField.lineHeight = 31;
	this.StxtField.lineWidth = 731;
	this.StxtField.parent = this;
	this.StxtField.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.StxtField).wait(1));

	// frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.271)").s("#000000").ss(2,1,1).rr(-383,-37,766,74,10);
	this.shape.setTransform(383,37);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TTextInput__CTextControl, new cjs.Rectangle(-1,-1,768,76), null);


(lib.TC_TScene__Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SPurpleCircle = new lib.TC_TButton__PurpleCircle();
	this.SPurpleCircle.name = "SPurpleCircle";
	this.SPurpleCircle.parent = this;
	this.SPurpleCircle.setTransform(217.1,922.2,1,1,0,0,0,111.8,111.8);
	new cjs.ButtonHelper(this.SPurpleCircle, 0, 1, 2, false, new lib.TC_TButton__PurpleCircle(), 3);

	this.timeline.addTween(cjs.Tween.get(this.SPurpleCircle).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene4, new cjs.Rectangle(100.8,805.9,232.5,232.5), null);


(lib.TC_TScene__Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SPurpleCircle = new lib.TC_TButton__PurpleCircle();
	this.SPurpleCircle.name = "SPurpleCircle";
	this.SPurpleCircle.parent = this;
	this.SPurpleCircle.setTransform(1203.2,586,1,1,0,0,0,111.8,111.8);
	new cjs.ButtonHelper(this.SPurpleCircle, 0, 1, 2, false, new lib.TC_TButton__PurpleCircle(), 3);

	this.timeline.addTween(cjs.Tween.get(this.SPurpleCircle).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene3, new cjs.Rectangle(1086.9,469.7,232.5,232.5), null);


(lib.TC_TScene__Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SRect1 = new lib.TC_TObject__STRectangle();
	this.SRect1.name = "SRect1";
	this.SRect1.parent = this;
	this.SRect1.setTransform(1337.3,751.5,0.781,0.781,-90,0,0,0.5,0.5);

	this.SInput = new lib.TC_TTextInput__CTextControl();
	this.SInput.name = "SInput";
	this.SInput.parent = this;
	this.SInput.setTransform(983.8,201.2,0.541,0.541,12.4,0,0,383,37.1);

	this.SButton1 = new lib.TC_TButton__PurpleCircle();
	this.SButton1.name = "SButton1";
	this.SButton1.parent = this;
	this.SButton1.setTransform(1357.2,563.3);
	new cjs.ButtonHelper(this.SButton1, 0, 1, 2, false, new lib.TC_TButton__PurpleCircle(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s("#CCCCCC").ss(9,1,1).dr(-304.25,-98.6,608.5,197.2);
	this.shape.setTransform(723.4,868.9);

	this.SPurpleCircle = new lib.TC_TButton__PurpleCircle();
	this.SPurpleCircle.name = "SPurpleCircle";
	this.SPurpleCircle.parent = this;
	this.SPurpleCircle.setTransform(1703.5,154.8,1,1,0,0,0,111.8,111.8);
	new cjs.ButtonHelper(this.SPurpleCircle, 0, 1, 2, false, new lib.TC_TButton__PurpleCircle(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SPurpleCircle},{t:this.shape},{t:this.SButton1},{t:this.SInput},{t:this.SRect1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene2, new cjs.Rectangle(414.6,38.5,1405.1,954.2), null);


(lib.TC_TScene__Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SRect1 = new lib.TC_TObject__STRectangle();
	this.SRect1.name = "SRect1";
	this.SRect1.parent = this;
	this.SRect1.setTransform(950.9,236.1,0.401,0.401,0,0,0,0.5,0.5);

	this.SInput = new lib.TC_TTextInput__CTextControl();
	this.SInput.name = "SInput";
	this.SInput.parent = this;
	this.SInput.setTransform(980.6,876.1,1,1,0,0,0,382.9,37);

	this.SButton1 = new lib.TC_TButton__PurpleCircle();
	this.SButton1.name = "SButton1";
	this.SButton1.parent = this;
	this.SButton1.setTransform(292.3,343.3);
	new cjs.ButtonHelper(this.SButton1, 0, 1, 2, false, new lib.TC_TButton__PurpleCircle(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s("#CCCCCC").ss(9,1,1).dr(-203.5,-104,407,208);
	this.shape.setTransform(310.5,150);

	this.SPurpleCircle = new lib.TC_TButton__PurpleCircle();
	this.SPurpleCircle.name = "SPurpleCircle";
	this.SPurpleCircle.parent = this;
	this.SPurpleCircle.setTransform(915.2,531.7,1,1,0,0,0,111.8,111.8);
	new cjs.ButtonHelper(this.SPurpleCircle, 0, 1, 2, false, new lib.TC_TButton__PurpleCircle(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SPurpleCircle},{t:this.shape},{t:this.SButton1},{t:this.SInput},{t:this.SRect1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene1, new cjs.Rectangle(102.6,41.6,1262.1,872.5), null);


// stage content:
(lib.EFMod_SceneTest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Scene Bounds
	this.instance = new lib.SceneRegion();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// Module Content
	this.instance_1 = new lib.TC_TScene__Scene1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.8,133.8,1,1,0,0,0,134.8,133.8);

	this.instance_2 = new lib.TC_TScene__Scene2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(134.8,133.8,1,1,0,0,0,134.8,133.8);

	this.instance_3 = new lib.TC_TScene__Scene3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(134.8,133.8,1,1,0,0,0,134.8,133.8);

	this.instance_4 = new lib.TC_TScene__Scene4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(134.8,133.8,1,1,0,0,0,134.8,133.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(3));

	// Module Component
	this.instance_5 = new lib.ef_TutorModule({'id': 'instance_5', 'compositionID':'ADCEC5F55B066D0D1D87308464BFAB2B'});

	this.instance_5.setTransform(960,600,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958.8,598.8,1922.5,1202.5);
// library properties:
lib.properties = {
	id: 'ADCEC5F55B066D0D1D87308464BFAB2B',
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
an.compositions['ADCEC5F55B066D0D1D87308464BFAB2B'] = {
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