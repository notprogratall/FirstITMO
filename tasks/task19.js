class Car {
   constructor(fuel, fuelConsumption) {
      this.fuel = fuel;
      this.fuelConsumption = fuelConsumption/100;
      console.log('Машина создана. Бак заправлен на ' + this.fuel + '%');
      console.log('Потребление топлива составляет ' + this.fuelConsumption*100 + '% на 100 км');
   }
   reFuel (q) {
      let diff = (this.fuel + q) - 100
      this.fuel = (this.fuel + q) <= 100 ? (this.fuel + q) : 100
      return (this.fuel + q) > 100 ? diff : 0
   }
   get fuelLevel() {
      console.log("Бак заправлен на " + this.fuel + "%")
      return this.fuel
   }
   set consumedFuel(percent) {
      let rest = this.fuel - percent
      if (rest >= 0) {
         this.fuel -= percent
         console.log("Бак теперь заполнен на " + this.fuel + "%")
      }
      else {
         this.fuel = 0
         console.log("Бак теперь пуст")
      }
      return this.fuel
   }
   go(distance) {
      console.log(`Начинается поездка длиною в ${distance} км.`);
      const fuelUsed = this.fuelConsumption * distance
      if (this.fuel >= fuelUsed) {
         this.consumedFuel = fuelUsed
         console.log(`Проехали весь путь`);
      } else {
         let restDistanse = (fuelUsed - this.fuel) / this.fuelConsumption
         this.consumedFuel = fuelUsed
         console.log(`Проехали ${(distance - restDistanse).toFixed(1) } км. Оставшееся расстояние - примерно ${(restDistanse).toFixed(1)} км`);
      }
   }

}

let mercedesBenz = new Car(71, 15)
let mercedesBumz = new Car(50, 13)
mercedesBumz.fuelLevel
mercedesBumz.consumedFuel = 60

mercedesBenz.go(474)