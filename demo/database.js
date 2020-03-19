
// NOTE: this API must use promises to be compatible with any db
// we may be using, which may be either sync or async
function DB() {

    this.getUserInfo = function() {
        let data = {
            condition: "cond1"
        };
        this.getJSONValue("rqted")
        .then((rqted) => {
            if (rqted) {
                data.rqted = rqted;
            } else {
                data.rqted = {
                    moduleState: {
                        selectedArea: {
                            index: 1
                        },
                        selectedTopic: {
                            index: 1
                        },
                        selectedVariable: {
                            index: 1
                        },
                        selectedRQ: {
                            index: 1
                        }
                    }
                };
            }
        })
        this.getTextValue("firstPrediction")
        .then((pred1) => {
            data.firstPrediction = pred1;
        })
        .catch()
        .then(() => this.getJSONValue("initialHypo"))
        .then((initHypo) => {
            data.initialHypo = initHypo;
        })
        .catch()
        .then(() => this.getTextValue("secondPrediction"))
        .then((pred2) => {
            data.secondPrediction = pred2;
        })
        .catch()
        .then(() => this.getJSONValue("finalHypo"))
        .then((finalHypo) => {
            data.finalHypo = finalHypo;
        })
        .catch();
    }

    this.saveValue = function (varName, value) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem(varName, value);
                resolve(value);
            } catch(err) {
                reject(err);
            }
        })
    };

    this.saveJSONValue = function(varName, object) {
        return new Promise((resolve, reject) => {
            try {
                let value = JSON.stringify(object);
                localStorage.setItem(varName, value);
                resolve(object);
            } catch(err) {
                reject(err);
            }
        });
    };

    this.getBoolValue = function(varName) {
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

    this.getIntValue = function(varName) {
        return new Promise((resolve, reject) => {
            try {    
               let value = localStorage.getItem(varName);
                if (value) {
                    value = parseInt(value, 10);
                }
                resolve(value);
            } catch(err) {
                reject(err);
            }
        });
    };

    this.getFloatValue = function(varName) {
        return new Promise((resolve, reject) => {
            try {    
                let value = localStorage.getItem(varName);
                if (value) {
                    value = parseFloat(value);
                }
                resolve(value);
            } catch(err) {
                reject(err);
            }
        });
    };

    this.getTextValue = function(varName) {
        return new Promise((resolve, reject) => {
            try {    
                let value = localStorage.getItem(varName);
                resolve(value);
            } catch(err) {
                reject(err);
            }
        });
    };

    this.getJSONValue = function(varName) {
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
    };
}

let db = DB();