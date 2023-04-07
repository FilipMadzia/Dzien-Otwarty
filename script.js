const produkty = [];
const indexID = 0;
const indexNazwy = 1;
const indexKodu = 2;
const indexDatyDodania = 3;
const indexIDKategorii = 4;
const indexCeny = 5;
const indexZdjecia = 6;

function addProduct(produkt) {
    produkty.push(produkt);
}
document.addEventListener("DOMContentLoaded", () => {
    const skaner = document.querySelector("#skaner");
    const kod = document.querySelector("#kod");
    const koszyk = document.querySelector("#koszyk");
    const sumaDiv = document.querySelector("#suma");

    let suma = 0;

    skaner.addEventListener("submit", (e) => {
        e.preventDefault();

        let kodProduktu = kod.value;
        let indexProduktu;

        // resetuje pole wprowadzania
        kod.value = "";

        // znajduje index produktu w tablicy
        for(let i = 0; i < produkty.length; i++) {
            if(parseInt(produkty[i][2]) == kodProduktu) {
                indexProduktu = i;
                break;
            }
        }

        if(indexProduktu == undefined) {
            alert("Nie znaleziono produktu!");
            return;
        }

        suma += parseInt(produkty[indexProduktu][indexCeny]);

        sumaDiv.innerHTML = "Suma: " + suma + "zł";
    });

    // zablokowanie odświeżania
    document.addEventListener("keydown", (e) => {
        if(e.key == "F5") {
            if(!confirm("Odświeżenie spowoduje usunięcie zawartości koszyka!")) {
                e.preventDefault();
            }
        }
    });
});