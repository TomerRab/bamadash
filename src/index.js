const bamadash = {

    calc(operand1, operand2, operator){

        let ret;
        switch(operator){

            case "+":
                 ret = operand1 + operand2;
                break;
            case "-":
                ret = operand1 - operand2;
                break;
            case "*":
                ret = operand1 * operand2;
                break;
            case "/":
                ret = operand1 / operand2;
                break;
            default:
                ret = "wrong input"
                break;
        }
        return ret;
    },

    compact(array){
        
        let arr = array.filter((value) =>{
            return (value != false && value != '' && value != null && value != undefined && value != NaN)
            
        })
        return arr;

    },

    intersection(array1,array2, isStrict){
        
        const arr = [];

        switch(isstrict){
           
            case true:
                
                array1.forEach(element1 => {
                    array2.forEach(element2 => {
                    }) 
                });
            
                break;

            case false:
                
                array1.forEach(element => {
                    if (array2.includes(element)){
                        arr.add(element);
                    }
                });
                break;

            default:

                break;
        }
    },
    filter(array) {
        throw new Error("Method not implimented.");
    },
    size(collection) { 
        throw new Error("Method not implimented.");
    },
    castArray(value) {
        throw new Error("Method not implimented.");
    }
}


module.exports = bamadash;
//console.log(bamadash.calc(2,3,"-"));
//const arr = bamadash.compact([0, 1, false, 2, '', 3]);
const arr = bamadash.intersection([0, 1, 3], [0, '1', 3]);
console.log(arr.toString());