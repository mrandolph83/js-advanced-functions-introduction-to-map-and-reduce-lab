// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1 )

}

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x )

}

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2 )

}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x )
}

// function reduceToTotal(sourceArray) {
//     sourceArray.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, num=0)}

function reduceToTotal(array, startingPoint = 0 ) {
    let reducer = (num , currentValue) => num + currentValue;
    return array.reduce(reducer, startingPoint);
}

function reduceToAllTrue(array) {
    for(let a of array){
        if(!a){
            return false; 
        }
    }
    return true;

}

function reduceToAnyTrue(array) {
    for(let a of array){
        if(a){
            return true; 
        }
    }
    return false;
}