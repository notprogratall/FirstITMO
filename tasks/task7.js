//todo: Из предыдущего задания (task6) сгенерируйте динамически шахматное поле из массива в HTML
// и раставьте шахматы в соответсвующем порядке.
console.log('-- Седьмое задание --');

data = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', 'b pawn', '', '', 'b pawn', '', 'b pawn'],
    ['', '', 'w pawn', '', '', 'w pawn', '', 'b king'],
    ['', '', '', '', 'b pawn', 'w pawn', '', 'w pawn'],
    ['', '', '', '', 'w pawn', '', 'w king', 'w pawn'],
    ['', '', '', '', '', 'w bishop', 'w knight', 'w rook'],
]
str = "<table>"
for (var i = 0; i < 8; i++) {
    if (i % 2 != 0) {
        str += '<tr class="chet">'
    }
    else {
        str += '<tr class="nechet">'
    }
    
    for (var j = 0; j < 8; j++) {
        str += '<td>' + data[i][j] + '</td>'
    }
    str += '</tr>'
    console.log(str)
}
str += '</table>'
node = document.querySelector('#main')
node.innerHTML = str