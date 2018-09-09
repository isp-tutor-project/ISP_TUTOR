//*********************************************************************************
//
//  Copyright(c) 2008,2018 Kevin Willows. All Rights Reserved
//
//	License: Proprietary
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
//
//*********************************************************************************

/// <reference path="../../../../dist/TutorEngineOne.d.ts" />

//** Imports

import { TObject }			from "thermite/TObject";

import { TMouseEvent } 		from "thermite/events/TMouseEvent";
import { CEFEvent }         from "events/CEFEvent";

import { CUtil } 			from "util/CUtil";
import { CONST }            from "util/CONST";

import Event     = createjs.Event;
import Tween     = createjs.Tween;
import Ease      = createjs.Ease;
import { CEFTimeLine } from "core/CEFTimeLine";




export class TTeacher extends TObject
{
	//************ Stage Symbols
    
    protected STeacherHead:TObject;
    protected STeacher1:TObject;
    protected STeacher2:TObject;
    protected STeacher3:TObject;
	
	// non-interactive elements
	
	
	//************ Stage Symbols				

	
	
	

	constructor()
	{
		super();
		this.init3();
	}


/*  ###########  START CREATEJS SUBCLASS SUPPORT ##########  */
/* ######################################################### */

	public TTeacherInitialize() {

		this.TObjectInitialize.call(this);
		this.init3();
	}

	public initialize() {

		this.TObjectInitialize.call(this);		
		this.init3();
	}

	private init3() {
		
		this.traceMode = true;
		if(this.traceMode) CUtil.trace("TTeacher:Constructor");

        this.effectTimeLine = new CEFTimeLine(null, null, {"useTicks":false, "loop":false, "paused":true }, this.tutorDoc);
        this.effectTweens   = new Array<Tween>();

		// Note the CreateJS(AnimateCC) parts of the button have not been created
		// at this point.
	}

/* ######################################################### */
/*  ###########  END CREATEJS SUBCLASS SUPPORT ###########   */


	public Destructor() : void
	{
		this.removeEventListener(TMouseEvent.WOZCLICKED, this.doMouseClicked);
		this.removeEventListener(TMouseEvent.WOZOVER   , this.doMouseOver);
		this.removeEventListener(TMouseEvent.WOZOUT    , this.doMouseOut);
		this.removeEventListener(TMouseEvent.WOZDOWN   , this.doMouseDown);
		this.removeEventListener(TMouseEvent.WOZUP     , this.doMouseUp);			
		
		super.Destructor();
	}

    
    public poseTeacher(newPose:string, type:string = CONST.EFFECT_FADE, dur:number = 500) {

        if(this._currPose) {

             if(this._currPose !== newPose) {

                this.effectNewPose = newPose;
                this.effectType    = type;
                this.effectTimeMS  = dur;

                switch(type) {

                    case CONST.EFFECT_FADE:

                        this.effectAlpha    = this.alpha;

                        // console.log("Pose from  " + this._currPose + " " + this[this._currPose].alpha);
                        this.effectTweens.push(new Tween(this[this._currPose]).to({alpha:0}, dur, Ease.cubicInOut));

                        // console.log("Pose to  " + this.effectNewPose + " " + this[this.effectNewPose].alpha);
                        this[this.effectNewPose].visible = true;
                        this.effectTweens.push(new Tween(this[this.effectNewPose]).to({alpha:1}, dur, Ease.cubicInOut));

                        // push the tween on to the run stack
                        //
                        this.effectTimeLine.addTween(...this.effectTweens);	
                        this.effectTimeLine.startTransition(this.effectFinished, this);								
                        break;

                    case CONST.EFFECT_SWAP:

                        this.swapPose(this.effectNewPose);
                        break;
                }
            }
        }
        else {
            this.swapPose(newPose);
        }

    }
            

    /**
     * 
     */	
    private swapPose(newPose:string) : void
    {
        this.pose1.alpha   = 0;
        this.pose2.alpha   = 0;
        this.pose3.alpha   = 0;
        this.pose1.visible = false;
        this.pose2.visible = false;
        this.pose3.visible = false;

        this[newPose].alpha   = 1;
        this[newPose].visible = true;

        this._currPose = newPose;
    }


    /**
	 * Object specific finalization behaviors - invoked through  reference in xnFinished
	 */
	private effectFinished() : void
	{			
        this.effectTimeLine.removeTween(...this.effectTweens);

        // console.log("Pose from => to: " + this._currPose + " " + this.effectNewPose);

        this.swapPose(this.effectNewPose);

		this.dispatchEvent(new Event(CEFEvent.COMPLETE,false,false));
	}				


    
//*************** Logging state management
	

	public captureLogState(obj:any = null) : Object
	{
		obj = super.captureLogState(obj);
					
		return obj;											   
	}						
	
	public captureXMLState() :any
	{		
		let stateVal:any   = {controller:{}};
		let controller:any = stateVal.controller;

		return stateVal;				
	}		

	public restoreXMLState(stateVal:any) : void
	{
	}		
	
	public compareXMLState(stateVal:any) :boolean
	{
		var bTest:boolean = true;

		return bTest;			
	}		
	
//*************** Logging state management
	
   /*
    * 
    */
   public deSerializeObj(objData:any) : void
   {
       console.log("deserializing: Teacher Custom Control");

       super.deSerializeObj(objData);				
   }
	
}
