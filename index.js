let str = 'aaa@bbb@ccc'
console.log(
    str.replace("@", "!",).replace("@", "!")
)

let str_helloworld = "HELLOWORLD"
console.log(
    str_helloworld = str_helloworld.charAt(0) + str_helloworld.slice(1, 5).toLowerCase() + " " + str_helloworld.slice(5, 10).toLowerCase()
)


let srt_html = "Hello, it is HTML"
console.log(
    srt_html.split(",").join("").split("HTML").join("not JS")
)

let name = "ALex"
console.log(
    name[0].toUpperCase() + name.slice(1)
)



// расширенная форма записи
/*let number = Math.random() * 100;
number = Math.round(number)
alert(number)*/

// Сокращенная форма записи
let number = Math.round(Math.random() * 100)
alert(number)