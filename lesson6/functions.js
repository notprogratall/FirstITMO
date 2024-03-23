let obj = { age: 10 }
obj.name = 'Peter'
obj.get = function () { console.log(this.name) } //== console.log(obj.name)

obj.set = function (val) {
    this.name = val
    console.log(this.name)
}
obj.get()
obj.set('Alena')



