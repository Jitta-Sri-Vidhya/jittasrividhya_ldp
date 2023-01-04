// Refactor the following function into a one-liner:
        // const printName = (name) => {
        //              return “Hi” + name;
        //    }
        const printName=name=> "Hi "+name ;
        console.log(printName('vidhya'));

        // Rewrite the following code using template literals
        // const printBill = (name, bill) => {
        //              return “Hi “ + name + “, please pay: “ + bill;
        //    }

        const printBill=(name, bill) => `Hi ${name} please pay: ${bill}`;
        console.log(printBill('vidhya',1000));

//         Modify the following code such that the object properties are destructured and logged.
//             const person = {
//                       name: “Noam Chomsky”,
//                       age: 92
//             }
           
//            let name = person.name;
//            let age = person.age;
//            console.log(name);
//            console.log(age);


            const person = {
                    name: 'Noam Chomsky',
                    age: 92
             };
             //let { property1: variable1, property2: variable2 } = object;
             let { name, age } = person;//variable has same name as property
             console.log(name);
             console.log(age);
             let {name: fname, age: fage}= person;
             console.log(fname);
             console.log(fage);
