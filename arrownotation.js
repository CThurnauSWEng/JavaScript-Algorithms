        "use strict";
        console.log("Algorithms: Arrow notation  ");
        console.log("---------------------------------------------------------------------------------------------------");

        // using arrow notation
        const coffee = [1,2,3,4];

        const test = digits => digits + 3.14;
        console.log("test: ", test(1));

        console.log(coffee.map(digits => digits + 3.14))

        var myObj = { digits: 1, 
                      increment: 4};

        const newtest = myObj => myObj.digits + myObj.increment;

        console.log(newtest(myObj));

        /*
        Definition and Usage
        The map() method creates a new array with the results of calling a function for every array element.

        The map() method calls the provided function once for each element in an array, in order.

        Note: map() does not execute the function for array elements without values.

        Note: map() does not change the original array.
        */




