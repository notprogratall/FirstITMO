// todo: Сохраните результат шахматной партии в виде двухмерного массива board, называть фигуры можно
// произвольно, например “black queen”.
console.log('-- Шестое задание --');
//Первый вариант
board = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', 'b pawn', '', '', 'b pawn', '', 'b pawn'],
    ['', '', 'w pawn', '', '', 'w pawn', '', 'b king'],
    ['', '', '', '', 'b pawn', 'w pawn', '', 'w pawn'],
    ['', '', '', '', 'w pawn', '', 'w king', 'w pawn'],
    ['', '', '', '', '', 'w bishop', 'w knight', 'w rook'],
]
//Второй вариант

for (let i = 0; i < 2; i++) { //исправить в конце количество строк
    a = prompt('Введите все 8 значений клеток ряда номер ' + Number(i+1) + ' через запятую');
    board[i] = a.split(',', 8)
    console.log(board[i]);
}
console.log(board);

//Третий вариант
let board2 = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
]

for (i = 0; i < 2; i++) {
    a = prompt('Введите название фигуры, номер ряда (1-8) в котором она находится и номер ее столбца (1-8) через пробел');
    a = a.split(' ', 3)
    console.log(a);
    board2[Number(a[1] - 1)][Number(a[2] - 1)] = a[0]
}
console.log(board2);

