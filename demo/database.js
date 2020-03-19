
// NOTE: this API must use promises to be compatible with any db
// we may be using, which may be either sync or async
class Database {

    constructor(classCode, userID) {
        Promise.all([
            this.saveValue("classCode", classCode),
            this.saveValue("userID", userID),
            this.saveValue("condition", "cond1")
        ]).then(([result1, result2, result3]) => { });
    }
    
    getUserData() {
        let data = {};
        return Promise.all([
            this.getTextValue("classCode"),
            this.getTextValue("userID"),
            this.getTextValue("condition"),
            this.getRQData(),
            this.getIntialHypoData(),
            this.getFinalHypoData()
        ]).then(([ccRes, uidRes, condRes, rqRes, ihRes, fhRes]) => {
            data.classCode = ccRes;
            data.userID = uidRes;
            data.condition = condRes;
            data.rqted = rqRes;
            if (ihRes) {
                data.firstPrediction = ihRes.firstPrediction;
                data.initialHypo = ihRes.initialHypo;
            }
            if (fhRes) {
                data.secondPrediction = fhRes.secondPrediction;
                data.finalHypo = fhRes.finalHypo;
            }
            return data;
        });
        // let moduleData = data.rqted.moduleState;

        //     let area = moduleData['selectedArea']['index'];
        //     let topic = moduleData['selectedTopic']['index'];
        //     let variable = moduleData['selectedVariable']['index'];
        //     // ontology stuff
        //     let ontologyTopic = ontology['_ONTOLOGY']['S']['A' + area]['T' + topic];
        //     let iv = ontologyTopic['enumValue' + variable];
        //     let dv = ontologyTopic['DVs'];
        //     let dvabb = ontologyTopic['DVabb'];
        //     let hypoOntologyTopic = hypoOntology['A' + area]['T' + topic]['V' + variable];
        //     if (hypoOntologyTopic['IV'] != "") {
        //         iv = hypoOntologyTopic['IV'];
        //     }
        //     if (hypoOntologyTopic['DV'] != "") {
        //         dv = hypoOntologyTopic['DV'];
        //     }
        //     if (hypoOntologyTopic['DVabb'] != "") {
        //         dvabb = hypoOntologyTopic['DVabb'];
        //     }
        //     nodes = hypoOntologyTopic['NODES'];
        //     console.log(area + "," + topic + "," + variable);
        //     console.log(hypoOntologyTopic)
        //     console.log(nodes);
        //     nodes[-2] = iv;
        //     nodes[-1] = dvabb;
        //     causes = hypoOntologyTopic['CAUSES'];
        //     data.iv = iv;
        //     data.dv = dv;
        //     data.dvabb = dvabb;
        //     data.nodes = nodes;
        //     data.causes = causes;        
    }

    getRQData() {
        let retVal;
        
        return this.getJSONValue("rqted")
            .then((rqted) => {
                if (rqted) {
                    retVal = rqted;
                } else {
                    retVal = {
                        moduleState: {
                            selectedArea: { index: 1 },
                            selectedTopic: { index: 1 },
                            selectedVariable: { index: 1 },
                            selectedRQ: { index: 1 }
                        }
                    };
                }
                return retVal;
            })
            .catch((err) => {
                console.error(err);
                return retVal;
            });
    }

    getIntialHypoData() {
        let data = {};
        this.getTextValue("firstPrediction")
            .then((pred1) => {
                data.firstPrediction = pred1;
                return this.getJSONValue("initialHypo");
            })
            .then((initHypo) => {
                data.initialHypo = initHypo;
                return data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    getFinalHypoData() {
        let data = {};
        return this.getTextValue("secondPrediction")
            .then((pred2) => {
                data.secondPrediction = pred2;
                return this.getJSONValue("finalHypo");
            })
            .then((hypo2) => {
                data.finalHypo = hypo2;
                return data;
            })
            .catch((err) => {
                console.error(err);
                return data;
            });
    }

    saveValue(varName, value) {
        return new Promise((resolve, reject) => {
            try {
                resolve(localStorage.setItem(varName, value));
            } catch(err) {
                reject(err);
            }
        })
    }

    saveJSONValue(varName, object) {
        return new Promise((resolve, reject) => {
            try {
                let value = JSON.stringify(object);
                resolve(localStorage.setItem(varName, value));
            } catch(err) {
                reject(err);
            }
        });
    }

    getBoolValue(varName) {
        return new Promise((resolve, reject) => {
            try {
                let value = localStorage.getItem(varName);
                if (undefined === value) {
                    resolve(value);
                }
                if ("true" === value) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            } catch(err) {
                reject(err);
            }
        });
    }

    getIntValue(varName) {
        let retVal;
        return new Promise((resolve, reject) => {
            try {    
               let value = localStorage.getItem(varName);
                if (value) {
                    retVal = parseInt(value, 10);
                }
                resolve(retVal);
            } catch(err) {
                reject(err);
            }
        });
    }

    getFloatValue(varName) {
        let retVal;
        return new Promise((resolve, reject) => {
            try {    
                let value = localStorage.getItem(varName);
                if (value) {
                    retVal = parseFloat(value);
                }
                resolve(retVal);
            } catch(err) {
                reject(err);
            }
        });
    }

    getTextValue(varName) {
        let retVal;
        return new Promise((resolve, reject) => {
            try {    
                let value = localStorage.getItem(varName);
                if (value) {
                    retVal = value;
                }
                resolve(value);
            } catch(err) {
                reject(err);
            }
        });
    };

    getJSONValue(varName) {
        return new Promise((resolve, reject) => {
            try {    
                let value = localStorage.getItem(varName);
                if (value) {
                    value = JSON.parse(value);
                }
                resolve(value);
            } catch(err) {
                reject(err);
            }
        });
    }
};

let db = new Database("BOGUS_CLASS", "BOGUS_STUDENT");

