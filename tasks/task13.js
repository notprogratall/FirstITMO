//todo: В массиве размерности 10, найти минимальный и максимальный элементы, поменять их местами.
arr = []
for (let i = 0; i <= 9; i++) {
    arr.push(Number(Math.floor(Math.random() * 120)))
}
console.log(arr);
indexMax = arr.indexOf(Math.max.apply(null, arr))
//console.log(indexMax);
indexMin = arr.indexOf(Math.min.apply(null, arr))
//console.log(indexMin);

c = arr[indexMax]
arr[indexMax] = arr[indexMin]
arr[indexMin] = c
console.log(arr);