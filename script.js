const produkty = [];
const kategorie = [];
const koszyk = [];

function dodajProdukt(produkt) {
    produkty.push(produkt);
}
function dodajKategorie(kategoria) {
    kategorie.push(kategoria);
}
document.addEventListener("DOMContentLoaded", () => {
    const skaner = document.querySelector("#skaner");
    const kod = document.querySelector("#kod");
    const cenaDiv = document.querySelector("#cena");
    const koszykTabela = document.querySelector("#koszyk-tabela");
    const zaplac = document.querySelector("#zaplac");

    let suma = 0;

    function aktualizujCene(wartosc) {
        suma += parseInt(wartosc);
        cenaDiv.innerHTML = suma;
    }
    function aktualizujKoszyk(produkt) {
        koszyk.push(produkt);

        let produktChild = koszykTabela.appendChild(document.createElement("tr"));
        produktChild.innerHTML = 
            "<td><img src='zdjecia/" + produkt.zdjecie + "'></td>" +
            "<td>" + produkt.nazwa + "</td>" +
            "<td>" + kategorie[produkt.id_kategoria-1].nazwa + "</td>" +
            "<td>" + produkt.cena + "</td>";
        window.scrollTo(0, document.body.scrollHeight);
    }

    zaplac.addEventListener("click", () => {
        koszyk.length = 0;
        const children = koszykTabela.children;
        // usuwanie wszystkich dzieci w koszuku prócz pierwszego, aby została tabela z nazwami pól
        for(let i = children.length - 1; i > 0; i--) {
            koszykTabela.removeChild(children[i]);
        }
        suma = 0;
        cenaDiv.innerHTML = 0;
    });

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

    // zablokowanie odświeżania gdy koszyk nie jest pusty
    document.addEventListener("keydown", (e) => {
        if(e.key == "F5" && koszyk.length > 0) {
            if(!confirm("Odświeżenie spowoduje usunięcie zawartości koszyka. Czy na pewno chcesz kontynuować?")) {
                e.preventDefault();
            }
        }
    });
});