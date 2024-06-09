// Tipe data primitif adalah tipe data yang tidak dapat dipecah menjadi bagian yang lebih kecil lagi.
// Tipe data primitif meliputi string, number, boolean, null, undefined, BigInt, dan Symbol.


const dataString = "Akhmad Rijal Syukri"
const dataNumber = 22
const dataBoolean = true
const dataNull = null
let dataUndefined
const dataBigInt = 9007199254740992n
const dataSymbol = Symbol()


// Tipe data non primitif adalah tipe data yang terdiri dari beberapa nilai yang dikelompokkan menjadi satu kesatuan. 
// Tipe data non primitif meliputi array, object, function, dan lain-lain.
const dataArray = ["apel", "anggur", "pisang"]
console.log(dataArray[1])
dataArray[0] = "jeruk"
dataArray.push("pir", "manggis")
dataArray.unshift("mangga", "dukuh")
console.log(dataArray)
dataArray.pop()
dataArray.shift()
console.log(dataArray)


const dataObject = {
    nama : "Akhmad Rijal Syukri",
    umur : 22,
    nim : 2003033
}
dataObject.jenisKelamin = "Laki-laki"
const dataNama = dataObject.nama
console.log(dataNama)
console.log(dataObject.umur)
console.log(dataObject)
delete dataObject.nim
console.log(dataObject)
