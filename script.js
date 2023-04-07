const produkty = [];
const koszyk = [];

function dodajProdukt(produkt) {
    produkty.push(produkt);
}
document.addEventListener("DOMContentLoaded", () => {
    const skaner = document.querySelector("#skaner");
    const kod = document.querySelector("#kod");
    const cenaDiv = document.querySelector("#cena");
    const koszykDiv = document.querySelector("#koszyk-div");

    let suma = 0;

    function aktualizujCene(wartosc) {
        suma += parseInt(wartosc);
        cenaDiv.innerHTML = "Suma: " + suma + "zł";
    }
    function aktualizujKoszyk(produkt) {
        koszyk.push(produkt);
        koszyk.forEach(produkt => {
            let produktChild = koszykDiv.appendChild(document.createElement("p"));;
            produktChild.innerHTML = produkt.nazwa + " " + produkt.kod
        });
    }

    skaner.addEventListener("submit", (e) => {
        e.preventDefault();

        let kodProduktu = kod.value;
        let indexProduktu;

        // resetuje pole wprowadzania
        kod.value = "";

        // znajduje index produktu w tablicy
        for(let i = 0; i < produkty.length; i++) {
            if(parseInt(produkty[i].kod) == kodProduktu) {
                indexProduktu = i;
                break;
            }
        }

        if(indexProduktu == undefined) {
            alert("Nie znaleziono produktu!");
            return;
        }

        aktualizujCene(produkty[indexProduktu].cena);
        aktualizujKoszyk(produkty[indexProduktu]);
    });

    // zablokowanie odświeżania
    document.addEventListener("keydown", (e) => {
        if(e.key == "F5") {
            if(!confirm("Odświeżenie spowoduje usunięcie zawartości koszyka. Czy na pewno chcesz kontynuować?")) {
                e.preventDefault();
            }
        }
    });
});