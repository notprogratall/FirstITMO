//todo: Написать функцию анаграммы
// 'finder', 'friend' === true
// 'test', 'sets' === false
// 'abc', 'aaa' === false
// 'abb', 'aab' === false
function checkAnagram(a, b) {
    if (a != b) {
        a = a.toLowerCase().replace(/\s+/g, '').split('').sort().join('')
        b = b.toLowerCase().replace(/\s+/g, '').split('').sort().join('')
        return a === b        
    } 
    else {return false}   
}
console.log(checkAnagram('finder', 'friend'))
console.log(checkAnagram('test', 'sets'))
console.log(checkAnagram('abc', 'aaa'))
console.log(checkAnagram('abb', 'aab'))
console.log(checkAnagram('abb', 'b  ab'))
console.log(checkAnagram('abb', 'abb'))