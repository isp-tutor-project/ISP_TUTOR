(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"EFMod_TEDInstr_atlas_", frames: [[0,390,267,353],[0,0,300,388]]}
];


// symbols:



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["EFMod_TEDInstr_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["EFMod_TEDInstr_atlas_"];
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


(lib.TC_TVirtual__ExptRgn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,255,255,0.988)").s().dr(-475,-329.5,950,659);
	this.shape.setTransform(475,329.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TVirtual__ExptRgn, new cjs.Rectangle(0,0,950,659), null);


(lib.TC_TObject__CondTitle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Condition #2", "bold 41px 'PT Sans'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 244;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__CondTitle2, new cjs.Rectangle(0,0,248,59.4), null);


(lib.TC_TObject__CondTitle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Condition #1", "bold 41px 'PT Sans'");
	this.text.lineHeight = 55;
	this.text.lineWidth = 255;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__CondTitle1, new cjs.Rectangle(0,0,259,61.4), null);


(lib.TC_TObject__StudentIcon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.394,1.394);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__StudentIcon2, new cjs.Rectangle(0,0,418.1,540.8), null);


(lib.TC_TObject__StudentIcon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.519,1.519);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__StudentIcon1, new cjs.Rectangle(0,0,405.7,536.3), null);


(lib.TC_TObject__QuestionBorder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FFFF").ss(3,1,1).rr(-652,-40.05,1304,80.1,10);
	this.shape.setTransform(652,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__QuestionBorder, new cjs.Rectangle(-1.5,-1.5,1307,83.1), null);


(lib.TC_TButton__S18Vector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - POST", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 447;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.3,27.1);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(5));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.3,85.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.3,85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.3,85.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.3,85.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


(lib.TC_TButton__S15VectorB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - FFocus2", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 564;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.3,27.1);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(4).to({text:"TED - EXP1",color:"#999999",lineWidth:447},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.3,85.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.3,85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.3,85.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.3,85.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


(lib.TC_TButton__S15VectorA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - FFocus1", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 564;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.3,27.1);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(4).to({text:"TED - EXP1",color:"#999999",lineWidth:447},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.3,85.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.3,85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.3,85.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.3,85.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


(lib.TC_TButton__S7VectorB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - EXP2", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 447;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.3,27.1);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(4).to({text:"TED - EXP1",color:"#999999"},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.3,85.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.3,85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.3,85.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.3,85.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


(lib.TC_TButton__S7VectorA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("TED - EXP1", "bold 90px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 118;
	this.Slabel.lineWidth = 447;
	this.Slabel.parent = this;
	this.Slabel.setTransform(316.3,27.1);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(5));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape.setTransform(316.3,85.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7695FC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_1.setTransform(316.3,85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_2.setTransform(316.3,85.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().rr(-316.25,-85.3,632.5,170.6,10);
	this.shape_3.setTransform(316.3,85.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,632.5,170.6);


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



(lib.TC_TObject__NavBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E9FD").s("#AAAAAA").ss(2.5,1,1).rr(-960,-600,1920,1200,10);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__NavBackground, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TObject__contentFrame3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-113,-113);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame3, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TC_TObject__contentFrame2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-113,11.4);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame2, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TC_TObject__contentFrame1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,11.4,-113);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame1, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TC_TObject__contentFrame0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rr(-866.5,-523.4,1733,1046.8,11.4);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame0, new cjs.Rectangle(-1,-1,1735,1048.8), null);


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

}).prototype = getMCSymbolPrototype(lib.NextButtonFocus, new cjs.Rectangle(-15,-15,108.5,71.9), null);


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


(lib.contentFrame2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-113,11.4);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.contentFrame2, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextArea, new cjs.Rectangle(-1,-1,102,102), null);


(lib.tablearea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tablearea, new cjs.Rectangle(-1,-1,102,102), null);


(lib.listbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.listbox, new cjs.Rectangle(-1,-1,102,102), null);


(lib.TC_TTEDContainer__AllDomains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Region
	this.ScontrolRegion = new lib.TC_TVirtual__ExptRgn();
	this.ScontrolRegion.name = "ScontrolRegion";
	this.ScontrolRegion.parent = this;
	this.ScontrolRegion.setTransform(473.9,328.5,1,1,0,0,0,474.9,329.4);

	this.timeline.addTween(cjs.Tween.get(this.ScontrolRegion).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TTEDContainer__AllDomains, new cjs.Rectangle(-1,-0.9,950,659), null);


(lib.TC_TVirtual__SceneRgn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// region
	this.instance = new lib.contentFrame2();
	this.instance.parent = this;
	this.instance.setTransform(960,595.4,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(210,210,210,0.047)").s("#000066").ss(2.5,1,1).rr(-960,-600,1920,1200,10);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TVirtual__SceneRgn, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TObject__navnexthit = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnexthit, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.TC_TObject__navnextdisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// NextButtonDisabled
	this.instance = new lib.NextButtonDisabled();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// NEXT
	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.alpha = 0.00000000;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextdisabled, new cjs.Rectangle(0,-5.3,231.3,182.8), null);


(lib.TC_TObject__navbackhit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// NextButtonFocus
	this.instance = new lib.NextButtonFocus();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackhit, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.TC_TObject__navbackdisabled = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackdisabled, new cjs.Rectangle(-5.3,-5.3,228.3,182.8), null);


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


(lib.TC_THtmlText__Text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.TextArea();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;
	this.SControlContainer.setTransform(45.6,63.5,1.09,1.208,0,0,0,50,50.1);

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlText__Text1, new cjs.Rectangle(-9.5,2.4,110.1,122), null);


(lib.TC_THtmlTable__Table1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.tablearea();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlTable__Table1, new cjs.Rectangle(-0.5,-0.5,101,101), null);


(lib.TC_THtmlList1__CustomList1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.listbox();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlList1__CustomList1, new cjs.Rectangle(-0.5,-0.5,101,101), null);


(lib.TC_TScene__TEDQuest4B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.4,631.5,0.844,0.844,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,631.5,0.844,0.844,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// Layer_4
	this.instance = new lib.TC_TObject__QuestionBorder();
	this.instance.parent = this;
	this.instance.setTransform(960.2,200.9,1.036,2.198,0,0,0,652.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(955.3,363.4,15.717,0.794,0,0,0,49.4,50.3);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// Squestion
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(955.8,200.2,13.047,1.363,0,0,0,49.6,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// TC_TObject__CondTitle2
	this.instance_1 = new lib.TC_TObject__CondTitle2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1420,1053.4,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// TC_TObject__CondTitle1
	this.instance_2 = new lib.TC_TObject__CondTitle1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(535.5,1054.4,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// TC_TVirtual__SceneRgn
	this.instance_3 = new lib.TC_TVirtual__SceneRgn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest4B, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__TEDQuest4A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.4,601.5,0.844,0.844,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,601.5,0.844,0.844,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// Layer_4
	this.instance = new lib.TC_TObject__QuestionBorder();
	this.instance.parent = this;
	this.instance.setTransform(960.2,200.9,1.036,2.198,0,0,0,652.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Squestion
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(955.8,200.2,13.047,1.363,0,0,0,49.6,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(953.1,361.5,9.9,0.68,0,0,0,49.3,50);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// TC_TObject__CondTitle2
	this.instance_1 = new lib.TC_TObject__CondTitle2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1420,1033.4,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// TC_TObject__CondTitle1
	this.instance_2 = new lib.TC_TObject__CondTitle1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(535.5,1034.4,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// TC_TVirtual__SceneRgn
	this.instance_3 = new lib.TC_TVirtual__SceneRgn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest4A, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__TEDQuest4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.4,581.5,0.844,0.844,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,581.5,0.844,0.844,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// Stitle
	this.Stitle = new lib.TC_THtmlText__Text1();
	this.Stitle.name = "Stitle";
	this.Stitle.parent = this;
	this.Stitle.setTransform(974.4,240.5,13.121,2.255,0,0,0,50.9,50.2);

	this.timeline.addTween(cjs.Tween.get(this.Stitle).wait(1));

	// TC_TObject__CondTitle2
	this.instance = new lib.TC_TObject__CondTitle2();
	this.instance.parent = this;
	this.instance.setTransform(1420,1013.4,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TC_TObject__CondTitle1
	this.instance_1 = new lib.TC_TObject__CondTitle1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(535.5,1014.4,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// TC_TVirtual__SceneRgn
	this.instance_2 = new lib.TC_TVirtual__SceneRgn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest4, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__TEDQuest1AB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.4,631.5,0.844,0.844,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,631.5,0.844,0.844,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// Stitle
	this.Stitle = new lib.TC_THtmlText__Text1();
	this.Stitle.name = "Stitle";
	this.Stitle.parent = this;
	this.Stitle.setTransform(973.7,138.2,16.785,0.988,0,0,0,50.9,50.2);
	this.Stitle.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.Stitle).wait(1));

	// Layer_5
	this.instance = new lib.TC_TObject__QuestionBorder();
	this.instance.parent = this;
	this.instance.setTransform(960.1,253.4,0.66,1,0,0,0,652,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_6
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(955.8,253.1,8.473,0.62,0,0,0,49.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(955.3,363.4,15.717,0.794,0,0,0,49.4,50.3);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// TC_TObject__CondTitle2
	this.instance_1 = new lib.TC_TObject__CondTitle2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1420,1053.4,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// TC_TObject__CondTitle1
	this.instance_2 = new lib.TC_TObject__CondTitle1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(535.5,1054.4,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_1
	this.instance_3 = new lib.TC_TVirtual__SceneRgn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest1AB, new cjs.Rectangle(-40,-1.2,1961.3,1202.5), null);


(lib.TC_TScene__TEDQuest1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Stitle
	this.Stitle = new lib.TC_THtmlText__Text1();
	this.Stitle.name = "Stitle";
	this.Stitle.parent = this;
	this.Stitle.setTransform(973.7,138.2,16.785,0.988,0,0,0,50.9,50.2);
	this.Stitle.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.Stitle).wait(1));

	// QBorder
	this.QBorder = new lib.TC_TObject__QuestionBorder();
	this.QBorder.name = "QBorder";
	this.QBorder.parent = this;
	this.QBorder.setTransform(960.1,253.4,0.66,1,0,0,0,652,40.1);

	this.timeline.addTween(cjs.Tween.get(this.QBorder).wait(1));

	// Squestion
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(955.8,253.1,8.473,0.62,0,0,0,49.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.4,591.5,0.844,0.844,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,591.5,0.844,0.844,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(953.1,344,9.9,0.68,0,0,0,49.3,50);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// TC_TObject__CondTitle2
	this.instance = new lib.TC_TObject__CondTitle2();
	this.instance.parent = this;
	this.instance.setTransform(1420,1003.4,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TC_TObject__CondTitle1
	this.instance_1 = new lib.TC_TObject__CondTitle1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(535.5,1004.4,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.instance_2 = new lib.TC_TVirtual__SceneRgn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQuest1, new cjs.Rectangle(-40,-1.2,1961.3,1202.5), null);


(lib.TC_TScene__TEDQ1Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sexpt2
	this.Sexpt2 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt2.name = "Sexpt2";
	this.Sexpt2.parent = this;
	this.Sexpt2.setTransform(1234.4,541.5,0.844,0.844,0,0,0,276.2,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt2).wait(1));

	// Sexpt1
	this.Sexpt1 = new lib.TC_TTEDContainer__AllDomains();
	this.Sexpt1.name = "Sexpt1";
	this.Sexpt1.parent = this;
	this.Sexpt1.setTransform(354.4,541.5,0.844,0.844,0,0,0,276.3,215.2);

	this.timeline.addTween(cjs.Tween.get(this.Sexpt1).wait(1));

	// Stitle
	this.Stitle = new lib.TC_THtmlText__Text1();
	this.Stitle.name = "Stitle";
	this.Stitle.parent = this;
	this.Stitle.setTransform(973.7,184.7,16.785,0.988,0,0,0,50.9,50.2);

	this.timeline.addTween(cjs.Tween.get(this.Stitle).wait(1));

	// TC_TObject__CondTitle2
	this.instance = new lib.TC_TObject__CondTitle2();
	this.instance.parent = this;
	this.instance.setTransform(1420,982.4,1,1,0,0,0,124,29.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TC_TObject__CondTitle1
	this.instance_1 = new lib.TC_TObject__CondTitle1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(525.5,983.4,1,1,0,0,0,129.5,30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.instance_2 = new lib.TC_TVirtual__SceneRgn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__TEDQ1Intro, new cjs.Rectangle(-40,-1.2,1961.3,1202.5), null);


(lib.TC_TScene__Scene21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.4,601.5,15.065,8.343,0,0,0,49.8,50.2);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene21, new cjs.Rectangle(-1.2,-1.2,1922.5,1221.4), null);


(lib.TC_TScene__Scene20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STable1 = new lib.TC_THtmlTable__Table1();
	this.STable1.name = "STable1";
	this.STable1.parent = this;
	this.STable1.setTransform(546.4,450.6,8.339,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STable1).wait(1));

	// QBorder
	this.QBorder = new lib.TC_TObject__QuestionBorder();
	this.QBorder.name = "QBorder";
	this.QBorder.parent = this;
	this.QBorder.setTransform(960.1,201,0.892,1.351,0,0,0,652.1,40.1);

	this.timeline.addTween(cjs.Tween.get(this.QBorder).wait(1));

	// Squestion
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(954.3,200.5,11.45,0.838,0,0,0,49.5,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Squestion).wait(1));

	// Sanswer
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(953.3,336.6,14.826,0.68,0,0,0,49.3,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// Layer_1
	this.SBoundry = new lib.TC_TVirtual__SceneRgn();
	this.SBoundry.name = "SBoundry";
	this.SBoundry.parent = this;
	this.SBoundry.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.SBoundry).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene20, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STable1 = new lib.TC_THtmlTable__Table1();
	this.STable1.name = "STable1";
	this.STable1.parent = this;
	this.STable1.setTransform(546.4,524,8.339,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STable1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(961.7,300.9,16.439,3.169,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.SBoundry = new lib.TC_TVirtual__SceneRgn();
	this.SBoundry.name = "SBoundry";
	this.SBoundry.parent = this;
	this.SBoundry.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.SBoundry).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene19, new cjs.Rectangle(-18,-1.2,1939.3,1202.5), null);


(lib.TC_TScene__Scene18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,600.4,14.019,3.589,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene18, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Sanswer = new lib.TC_THtmlList1__CustomList1();
	this.Sanswer.name = "Sanswer";
	this.Sanswer.parent = this;
	this.Sanswer.setTransform(960.4,472.6,15.814,1.033,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.Sanswer).wait(1));

	// STable1
	this.STblExp1 = new lib.TC_THtmlTable__Table1();
	this.STblExp1.name = "STblExp1";
	this.STblExp1.parent = this;
	this.STblExp1.setTransform(546.4,570.6,8.339,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STblExp1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(961.7,246.9,16.439,3.169,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene17, new cjs.Rectangle(-18,-1.2,1939.3,1202.5), null);


(lib.TC_TScene__Scene16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STblExp1 = new lib.TC_THtmlTable__Table1();
	this.STblExp1.name = "STblExp1";
	this.STblExp1.parent = this;
	this.STblExp1.setTransform(546.4,496.8,8.339,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STblExp1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(958.1,300.9,16.439,3.169,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene16, new cjs.Rectangle(-21.6,-1.2,1942.9,1202.5), null);


(lib.TC_TScene__Scene15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STblExp1 = new lib.TC_THtmlTable__Table1();
	this.STblExp1.name = "STblExp1";
	this.STblExp1.parent = this;
	this.STblExp1.setTransform(960.5,676,10.583,3.04,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.STblExp1).wait(1));

	// STextBox1
	this.Squestion = new lib.TC_THtmlText__Text1();
	this.Squestion.name = "Squestion";
	this.Squestion.parent = this;
	this.Squestion.setTransform(958.1,387.2,16.439,1.7,0,0,0,50.1,50.1);

	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(958.1,192.3,16.439,1.7,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.STextBox1},{t:this.Squestion}]}).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene15, new cjs.Rectangle(-21.6,-1.2,1942.9,1202.5), null);


(lib.TC_TScene__Scene6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,600.4,14.019,3.589,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene6, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,600.4,14.019,3.589,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene5, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.TC_TObject__StudentIcon2();
	this.instance.parent = this;
	this.instance.setTransform(363.1,705.4,1,1,0,0,0,209.1,270.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.STextBox2 = new lib.TC_THtmlText__Text1();
	this.STextBox2.name = "STextBox2";
	this.STextBox2.parent = this;
	this.STextBox2.setTransform(1140,574.1,10.419,2.629,0,0,0,50,50.2);

	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,234.4,14.019,2.319,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.STextBox1},{t:this.STextBox2}]}).wait(1));

	// Layer_1
	this.instance_1 = new lib.TC_TVirtual__SceneRgn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene4, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.TC_TObject__StudentIcon1();
	this.instance.parent = this;
	this.instance.setTransform(954.8,698.1,1,1,0,0,0,202.8,268.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(957.2,253.9,14.019,2.319,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance_1 = new lib.TC_TVirtual__SceneRgn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene3, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STable1 = new lib.TC_THtmlTable__Table1();
	this.STable1.name = "STable1";
	this.STable1.parent = this;
	this.STable1.setTransform(960.5,676,10.583,3.04,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.STable1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(961.7,300.9,16.439,3.169,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene2, new cjs.Rectangle(-18,-1.2,1939.3,1202.5), null);


(lib.TC_TScene__Scene1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sbutton4
	this.Sbutton5 = new lib.TC_TButton__S18Vector();
	this.Sbutton5.name = "Sbutton5";
	this.Sbutton5.parent = this;
	this.Sbutton5.setTransform(1157.1,894.8,0.864,0.864);
	new cjs.ButtonHelper(this.Sbutton5, 0, 1, 2, false, new lib.TC_TButton__S18Vector(), 3);

	this.Sbutton4 = new lib.TC_TButton__S15VectorB();
	this.Sbutton4.name = "Sbutton4";
	this.Sbutton4.parent = this;
	this.Sbutton4.setTransform(1157.1,707.6,0.864,0.864);
	new cjs.ButtonHelper(this.Sbutton4, 0, 1, 2, false, new lib.TC_TButton__S15VectorB(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Sbutton4},{t:this.Sbutton5}]}).wait(1));

	// Sbutton3
	this.Sbutton3 = new lib.TC_TButton__S15VectorA();
	this.Sbutton3.name = "Sbutton3";
	this.Sbutton3.parent = this;
	this.Sbutton3.setTransform(1157.1,507.5,0.864,0.864);
	new cjs.ButtonHelper(this.Sbutton3, 0, 1, 2, false, new lib.TC_TButton__S15VectorA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sbutton3).wait(1));

	// Sbutton2
	this.Sbutton2 = new lib.TC_TButton__S7VectorB();
	this.Sbutton2.name = "Sbutton2";
	this.Sbutton2.parent = this;
	this.Sbutton2.setTransform(1157.1,307.5,0.864,0.864);
	new cjs.ButtonHelper(this.Sbutton2, 0, 1, 2, false, new lib.TC_TButton__S7VectorB(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sbutton2).wait(1));

	// Sbutton1
	this.Sbutton1 = new lib.TC_TButton__S7VectorA();
	this.Sbutton1.name = "Sbutton1";
	this.Sbutton1.parent = this;
	this.Sbutton1.setTransform(1157.1,107.4,0.864,0.864);
	new cjs.ButtonHelper(this.Sbutton1, 0, 1, 2, false, new lib.TC_TButton__S7VectorA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sbutton1).wait(1));

	// Layer_2
	this.text = new cjs.Text("Target Variable", "bold 63px 'Arial Black'");
	this.text.lineHeight = 91;
	this.text.lineWidth = 602;
	this.text.parent = this;
	this.text.setTransform(170.5,707.8);

	this.SListBox3 = new lib.TC_THtmlList1__CustomList1();
	this.SListBox3.name = "SListBox3";
	this.SListBox3.parent = this;
	this.SListBox3.setTransform(599.9,839.8,8.612,0.637,0,0,0,50.1,50);

	this.text_1 = new cjs.Text("Topic", "bold 63px 'Arial Black'");
	this.text_1.lineHeight = 91;
	this.text_1.lineWidth = 602;
	this.text_1.parent = this;
	this.text_1.setTransform(170.5,432.8);

	this.text_2 = new cjs.Text("Area of Science", "bold 63px 'Arial Black'");
	this.text_2.lineHeight = 91;
	this.text_2.lineWidth = 602;
	this.text_2.parent = this;
	this.text_2.setTransform(170.5,152.5);

	this.SListBox2 = new lib.TC_THtmlList1__CustomList1();
	this.SListBox2.name = "SListBox2";
	this.SListBox2.parent = this;
	this.SListBox2.setTransform(599.9,565.1,8.612,0.637,0,0,0,50.1,50);

	this.SListBox1 = new lib.TC_THtmlList1__CustomList1();
	this.SListBox1.name = "SListBox1";
	this.SListBox1.parent = this;
	this.SListBox1.setTransform(599.9,290.4,8.612,0.637,0,0,0,50.1,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.SListBox1},{t:this.SListBox2},{t:this.text_2},{t:this.text_1},{t:this.SListBox3},{t:this.text}]}).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene1a, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// STable1
	this.STable1 = new lib.TC_THtmlTable__Table1();
	this.STable1.name = "STable1";
	this.STable1.parent = this;
	this.STable1.setTransform(546.4,524,8.339,3.04,0,0,0,0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.STable1).wait(1));

	// STextBox1
	this.STextBox1 = new lib.TC_THtmlText__Text1();
	this.STextBox1.name = "STextBox1";
	this.STextBox1.parent = this;
	this.STextBox1.setTransform(961.7,300.9,16.439,3.169,0,0,0,50.1,50.1);

	this.timeline.addTween(cjs.Tween.get(this.STextBox1).wait(1));

	// Layer_1
	this.SBoundry = new lib.TC_TVirtual__SceneRgn();
	this.SBoundry.name = "SBoundry";
	this.SBoundry.parent = this;
	this.SBoundry.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.SBoundry).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene1, new cjs.Rectangle(-18,-1.2,1939.3,1202.5), null);


(lib.TC_TScene__EndCloak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.text = new cjs.Text("You are finished.\n\nThank you \nfor using TED", "bold 90px 'PT Sans'", "#999999");
	this.text.textAlign = "center";
	this.text.lineHeight = 118;
	this.text.lineWidth = 948;
	this.text.parent = this;
	this.text.setTransform(960,350.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(56.6,1,1).dr(-960,-600,1920,1200);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__EndCloak, new cjs.Rectangle(-28.3,-28.3,1976.6,1256.6), null);


(lib.TC_TObject__navnextup = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextup, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.TC_TObject__navnextover = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextover, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.TC_TObject__navnextdown = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextdown, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.TC_TObject__navbackup = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackup, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.TC_TObject__navbackover = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackover, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.TC_TObject__navbackdown = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackdown, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.TC_TButton__PrevButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.instance = new lib.TC_TObject__navbackup();
	this.instance.parent = this;
	this.instance.setTransform(61.9,11,1,1,0,0,0,108.9,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// SpinButtonOver
	this.instance_1 = new lib.TC_TObject__navbackover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.9,11,1,1,0,0,0,108.9,86);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// SpinButtonDown
	this.instance_2 = new lib.TC_TObject__navbackdown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.9,11,1,1,0,0,0,108.9,86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// SpinButtonFocus
	this.instance_3 = new lib.TC_TObject__navbackhit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.9,11,1,1,0,0,0,108.9,86);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// SpinButtonDisabled
	this.instance_4 = new lib.TC_TObject__navbackdisabled();
	this.instance_4.parent = this;
	this.instance_4.setTransform(61.9,11.1,1,1,0,0,0,108.9,86.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-80.3,228.3,182.6);


(lib.TC_TButton__NextButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.instance = new lib.TC_TObject__navnextup();
	this.instance.parent = this;
	this.instance.setTransform(14.7,11,1,1,0,0,0,115.7,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// SpinButtonOver
	this.instance_1 = new lib.TC_TObject__navnextover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,11,1,1,0,0,0,115.7,86);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// SpinButtonDown
	this.instance_2 = new lib.TC_TObject__navnextdown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.7,11,1,1,0,0,0,115.7,86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// SpinButtonDisabled
	this.instance_3 = new lib.TC_TObject__navnextdisabled();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.7,11.1,1,1,0,0,0,115.7,86.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// SpinButtonFocus
	this.instance_4 = new lib.TC_TObject__navnexthit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(14.7,11,1,1,0,0,0,115.7,86);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-80.3,231.3,182.6);


(lib.TC_TNavPanel__Navigator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SbreadCrumbs
	this.SbreadCrumbs = new lib.TC_THtmlText__Text1();
	this.SbreadCrumbs.name = "SbreadCrumbs";
	this.SbreadCrumbs.parent = this;
	this.SbreadCrumbs.setTransform(520.2,27.9,8.569,0.38,0,0,0,49.8,50.2);

	this.timeline.addTween(cjs.Tween.get(this.SbreadCrumbs).wait(1));

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

	// Smask3
	this.Smask3 = new lib.TC_TObject__contentFrame3();
	this.Smask3.name = "Smask3";
	this.Smask3.parent = this;
	this.Smask3.setTransform(960,587.5,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask3).wait(1));

	// Smask2
	this.Smask2 = new lib.TC_TObject__contentFrame2();
	this.Smask2.name = "Smask2";
	this.Smask2.parent = this;
	this.Smask2.setTransform(960,587.5,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask2).wait(1));

	// Smask1
	this.Smask1 = new lib.TC_TObject__contentFrame1();
	this.Smask1.name = "Smask1";
	this.Smask1.parent = this;
	this.Smask1.setTransform(960,587.5,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask1).wait(1));

	// Smask0
	this.Smask0 = new lib.TC_TObject__contentFrame0();
	this.Smask0.name = "Smask0";
	this.Smask0.parent = this;
	this.Smask0.setTransform(960,587.5,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask0).wait(1));

	// Sbackground
	this.Sbackground = new lib.TC_TObject__NavBackground();
	this.Sbackground.name = "Sbackground";
	this.Sbackground.parent = this;
	this.Sbackground.setTransform(275,200,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get(this.Sbackground).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TNavPanel__Navigator, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


// stage content:
(lib.EFMod_TEDInstr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Scene Bounds
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Module Component
	this.instance_1 = new lib.ef_TutorModule({'id': 'instance_1', 'compositionID':'8927091D547A30DADEC29278A6AEC965'});

	this.instance_1.setTransform(960,600,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958.8,598.8,1922.5,1202.5);
// library properties:
lib.properties = {
	id: '8927091D547A30DADEC29278A6AEC965',
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/EFMod_TEDInstr_atlas_.png", id:"EFMod_TEDInstr_atlas_"},
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
an.compositions['8927091D547A30DADEC29278A6AEC965'] = {
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