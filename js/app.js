// ## FIZZBUZZ


// - Dichiarare il ciclo dei numeri

 for (let i = 0; i < 100; i++){
    n = i + 1
    m3 = n % 3
    m5 = n % 5


    // - SE sono multipli di 3 e 5
    //   - stampare "FizzBuzz"
    if (m3 === 0 && m5 === 0){
        console.log ("FizzBuzz")
    } 
    // ALTRIMENTI SE sono multipli di 3
    //   - stampare "Fizz"
    else if (m3 === 0){
        console.log ("Fizz")
    }

    // - ALTRIMENTI SE sono multipli di 5
    //   - stampare"Buzz"
    else if (m5 === 0){
        console.log("Buzz")
    }
    else {
        console.log(n)
    }
    
}


