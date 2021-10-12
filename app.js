
// Prendo id quadretti e aggiungo classe container-fluid
const quadrettiContainer = document.getElementsByClassName("quadretti-container");
quadrettiContainer.classList.add("container-fluid");


// Creo div e aggiungo classi "row" "col-rows-7"
const row = document.createElement("div");
row.classList.add("row","col-row-7");

// Aggiungo la row al container-fluid e container-fluid al quadretti-container
quadrettiContainer.append(container);
container.append(row);


for(let i = 1; i <=100; i++){
    // Creo colonna
    const col = document.createElement("div");
    col.classList.add("col");


    // Creo quadretto con ratio 1x1
    const quadretto = document.createElement("div");
    quadretto.classList.add("ratio", "ratio-1x1");

//    Aggiungo colore e testo al quadretto
    if(i % 3 === 0 && i % 5 === 0){
        quadretto.style.background = "red";
        quadretto.textContent = "fizzbuzz";    
    }else if(i % 3 === 0){
        quadretto.style.background = "green";
        quadretto.textContent = "fizz";
    }else if(i % 5 === 0){
        quadretto.style.background = "yellow";
        quadretto.textContent = "buzz";
    }else{
        quadretto.style.background = "blue";
        quadretto.textContent = i.toString;
    }

    // Inserisco al interno della colonna quadretto
    col.append(quadretto);

    // Inserisco colonna al row
    row.append("col");
    
}
    


