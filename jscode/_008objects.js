
function objectsinarrays(){
    const Person = {
        firstname: "Arun",
        lastname: "Singh",
        city:"Bengaluru",
        state: 'KA'
    }

    console.log(Person)
    console.log(Person.city)
    console.log(Person.firstname)

    // iterate over object

    for(const [key, value] of Object.entries(Person)){
        console.log(`${key} : ${value}`)
    }
   console.log("-----------------")
    // iterate only on keys
    for(const key of Object.keys(Person)){
        console.log(`${key} : ${Person[key]}`)
    }
 console.log("-----------------")
    //iterate only on value

    for(const value of Object.values(Person)){
        console.log(`${value}`)
    }

}
objectsinarrays()