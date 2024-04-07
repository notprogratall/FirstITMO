//Дефолтные значения
function add(part1, part2 = 100) {
    console.log(part2)
}
add(1)

//Колбэк
function live(fn) {
    fn()
}

const terminator = () => {
    
    console.log('I will be back')
}
live(terminator)

