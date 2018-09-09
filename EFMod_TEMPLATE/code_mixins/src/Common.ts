
namespace EFTut_Suppl.EFMod_RENAME {
    
    export class $Common {

        // This is a special signature to avoid typescript error "because <type> has no index signature."
        // on this[<element name>]
        // 
        [key: string]: any;
    
        // Place any common code here 

        // public $var1:string = "test1";
        // public $var2:string = "test2";
        // public $var3:string = "test3";
        // public $var4:string = "";

        // Place empty defaults here - these just avoid unnecessary exceptions for missing methods.

        //***********************************************
        // Tutor graph methods
        //

        public $preCreateScene() { /* empty */  }        
        public $onCreateScene() { /* empty */  }

        public $preEnterScene() { /* empty */  }
        public $onEnterScene()  { /* empty */  }
        
        public $preExitScene() { /* empty */  }
        public $onExitScene()  { /* empty */  }

        public $preShowScene() { /* empty */  }        
        public $preHideScene() { /* empty */  }

        public $demoInitScene() { /* empty */  }

        public $logScene() { /* empty */  }

        public $rewindScene() { /* empty */  }

        public $resolveTemplate(templID:string) { /* empty */  }

        public $handleEvent() { /* empty */  }           

        //***********************************************
        // Scene graph methods
        //
        public $nodePreEnter(nodeId:string) { /* empty */  }

        public $nodePreExit(nodeId:string) { /* empty */  }

        public $nodeAction(actionId:string) : void { /* empty */  }
                
        public $nodeConstraint(constrainId:string) : boolean {

            let result:boolean = false;

            /* empty */ 

            return result;
        }

        // Track methods.
        // 
        public $cuePoints(id:string) { /* empty */  }

        public $timedEvents(id:string) { /* empty */  }

        //***********************************************
        // Scene State methods
        //

		public $updateNav() : void {

			// Update the Navigation
			//
			if(!this.sceneState.sceneComplete)
				this.tutorDoc.TutAutomator.SNavigator._instance.enableNext(false);		
			else	
                this.tutorDoc.TutAutomator.SNavigator._instance.enableNext(true);		
		}
    }   
}