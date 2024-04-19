
let form = {
    inputs: [],
    root: document.querySelector('form'),

    init: function () {

        if (window.sessionStorage.getItem('form')) {
            let savedInputs = JSON.parse(window.sessionStorage.getItem('form'))
            console.log('savedInputs');
            console.log(savedInputs);
            for (let index = 0; index < savedInputs.length; index++) {
                document.getElementById(savedInputs[index].inputID).value = savedInputs[index].inputValue;
            }
        }

        document.getElementById('del').addEventListener("click", () => {
            this.root.reset();
            console.log('Deleted')
        });

        document.getElementById('send').addEventListener("click", () => {
            this.manageFormIputs()
            this.saveInputs()
            console.log('Sent')
        });

        window.onbeforeunload = (event) => { 
            this.manageFormIputs();
            this.saveInputs();
        };
    },

    saveInputs: function () {
        if (this.inputs.length != 0) {
            window.sessionStorage.removeItem("form")
            window.sessionStorage.setItem('form', JSON.stringify(this.inputs))
        }     
    },

    manageFormIputs: function () {
        this.inputs = []
        for (let i = 0; i < this.root.length; i++) {
            if (this.root[i].value) {
                this.inputs.push({ inputID: this.root[i].id, inputValue: this.root[i].value})
            }
        }
        if (this.inputs.length != 0) {
            console.log(this.inputs);
        }
        else {
            console.log('Inputs are empty');
        }
    },
}

form.init()
