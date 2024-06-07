//tipe data primitif
const dataString = "Akhmad Rijal Syukri"
const dataNumber = 22
const dataBoolean = true
const dataNull = null
let dataUndefined
const dataBigInt = 9007199254740992n
const dataSymbol = Symbol()

// tipe data non primitif
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
