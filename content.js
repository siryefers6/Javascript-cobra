const optionAriba = document.getElementById("type");

const numeroAsn = document.getElementById("asn");

const searchButton = document.querySelector("#search-form > div > div.form-group.col-md-1 > button");
searchButton.addEventListener('click', descargarVolver);

//document.addEventListener("keydown", captureKey)

function descargarVolver() {
    setTimeout(()=>document.getElementsByClassName("card-body text-center btn btn-light export")[0].click(),900);
    setTimeout(()=>document.getElementsByClassName("card-body text-center btn btn-light export")[1].click(),900);
    setTimeout(()=>location.href = 'https://cobra.prisa.cl/external/codelco/packinglist',1000);
}

function rellenar() {
    optionAriba.value = 2;
    numeroAsn.value = 1;
}

rellenar()