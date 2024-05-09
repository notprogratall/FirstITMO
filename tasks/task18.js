const user = {
    id: 7,
    name: 'Bob',
    token: 12343423
}

//todo 9.1 Получите из объекта user значение id и разместите его в константу userId не используя выражение user.id.
// const { id } = user
// const userId = id
let { id: userId } = user
console.log("todo 9.1: " + userId)

//todo 9.2 Создайте новый объект на базе объекта user без свойства token через деструктуризацию объекта
const { token, ...newUser } = user
console.log("todo 9.2: " + JSON.stringify(newUser))
//todo 9.3 Заморозьте объект user, так чтобы в него нельзя было добавить свойства.
Object.freeze(user)
user.id += 1
console.log("todo 9.3: " + JSON.stringify(user))
//todo 9.4 Создайте на базе объекта user новый объкт с доп. полями login и password
const tmpUser = { login: 'login', password: 'password', ...user}
console.log("todo 9.4: " + JSON.stringify(tmpUser));
//todo 9.5 Добавьте к объекту user метод getId который возвращает свойство id
let unfrozenUser = {
    getId: function () {
        return this.id
    },
    ...user
}
console.log("todo 9.5: " + JSON.stringify(unfrozenUser) + unfrozenUser.getId());
//todo 9.6 Добавьте к объекту user метод setId который утанавливает свойство id
unfrozenUser.setId = function (newId) {
        this.id = newId;
        return this.id
    }
console.log("todo 9.6: " + JSON.stringify(user) + unfrozenUser.setId(444));
//todo 9.7 Проитерируйте объект user так чтобы при итерации можно было получить его ключ и значение.
console.log("todo 9.7: " + Object.entries(unfrozenUser));
//todo 9.8 Сериализуйте объект в json
console.log("todo 9.8: " + JSON.stringify(Object.entries(unfrozenUser)));
//todo 9.9 Преобразуйте объект в ассоциативный массив.
//Ассоциативный массив и есть объект 
const associativeArray = {}
for (const [key, value] of Object.entries(unfrozenUser)) {
    associativeArray[key] = value;
}
console.log("todo 9.9: " + JSON.stringify(associativeArray));







