// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// programma che stampa i numeri da 1 a cento

// SE il numero e multiplo di 3
//     SE e anche multiplo di 5 allora metti fizz buzz
//     ALTRIMENMTI metti buzz
// ALTRIMENMTI SE e multiplo di 5
//      metti fizz
//      ALTRIMETNI non mettere niente 

for (let i = 0; i <=100; i++){
    let buzzFizz = "";
    if (i % 3 == 0){
        if (i % 5 == 0){
            buzzFizz = "buzzFizz";
        } else {
            buzzFizz = "fizz";
        }
    } else if(i % 5 == 0){
        buzzFizz = "buzz";
    } else{
        buzzFizz = i;
    }
    

    let div = document.createElement ("div");
    div.className = "box"
    div.append(buzzFizz)
    console.log(div.outerHTML);
    document.getElementById(result).innerHTML = box
}

