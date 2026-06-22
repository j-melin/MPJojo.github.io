const btn = document.querySelector('#click');

let compteur = 0;
let point_par_clic = 1;

function click_on_button(event) {
    compteur += point_par_clic
    document.querySelector('#affichage').innerHTML = compteur
}

btn.addEventListener('click', click_on_button)



const btn_multi = document.querySelector('#four');

let multiplicateur_amount = 1;

  compteur -= 50

function buy_multi(event) {
    if(compteur >=50){
        multiplicateur_amount += 1
        document.querySelector('#multiplier').innerHtml = multiplicateur_amount
        point_par_clic += 1
        compteur -= 50
    } else {
        alert('BAHAHAHA IL EST PAUVRE POINTEZ LE DU DOIGT BAAAAHAHAHAHAH')
    }
}

btn_multi.addEventListener('click', buy_multi)



let prix_multi = 50;

