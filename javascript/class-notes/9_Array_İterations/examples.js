



let numbers=[2,5,8,11,3,20]

let kareküp=numbers.map(function(value,indeks){
    if(indeks%2==0){
        return Math.pow(value,2)
    }
    else{
        return Math.pow(value,3)
    }
})

console.log(kareküp);
