const number = [1,2,3] ;

const nNum = [...number,4]

console.log(nNum) ;

const person = {
    n : 'Aryan'
};

const newP = {
    ...person ,
    age:28
}

console.log(newP);