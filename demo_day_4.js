let backpack = []

backpack.push("snacks")
backpack.push("sunscreen")
backpack.push("water")
backpack.push("sunglasses", "hat")

// console.log(backpack)

backpack.splice(1 , 1)

// console.log(backpack)

backpack.unshift("shiny rock")

// console.log(backpack)

let fannyPack = backpack.splice(0 , 3)

console.log(backpack)
console.log(fannyPack)

console.log(fannyPack[0])
// ^^^ we want to console log just the first item in the fanny pack

for (let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
}
// ^^^ we want to console log the items in the backpack ---- 

for (let i = 0; i < fannyPack.length; i++){
    console.log(fannyPack[i])
}

for (let i = 0; i < fannyPack.length;){

    // ^^^ THIS is a very specific case where the for loop does not need an i++, with it going up by one every time in the loop, the indexes in the arrays
    // eventually pass each other and then cannot fully move over to the backpack.
    // OR let item = fannyPack.splice(x,1)
    // backpack.push(item)
    // backpack.push(fannyPack.splice(0,1))
    backpack.push(fannyPack.shift())
// ^^ .shift() means takes the first item, since this is in a loop, it keeps taking the first item til it goes down to 0.
}

console.log(backpack)
console.log(fannyPack)

// let arr =[]
// arr.shift() remove the first item from an array -- takes NO ARGUMENTS (always blank)
// arr.pop() removes the last item from an array -- takes NO ARGUMENTS (always blank)
// arr.unshift( arg1, arg2, arg3, arg4, etc.) attaches something to the front of an array --- takes any number of arguments
// arr.push() attaches items to the end of an array --- takes any number of arguments

//arr.slice(3,5) creates a copy of a part of an array, takes a starting idex and an ending index, ending index is not included in the copy. if left empty will copy entire array.
// does not change original data
// ^^ this example you would start at fourth index item, and copy the next two items, then stop at the 5th index item.
//arr.splice(0,1, "newvalue") remove/inserts values into an array, takes up to 3 arguments, a starting index, the number of items removed, and any new values to be inserted.