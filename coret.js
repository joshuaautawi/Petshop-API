const e = {
    "name" : "joshua"
}
let obj = {a:true}
let x = {b:true}
e.name = obj
e.name.a = x

console.log(e)