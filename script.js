const produkty = [];

function addProduct(produkt) {
    produkty.push(produkt);
}
document.addEventListener("DOMContentLoaded", () => {
    const skaner = document.querySelector("#skaner");
    const kod = document.querySelector("#kod");
    const info = document.querySelector("#info");

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

        info.innerHTML = "<p>" + produkty[indexProduktu][1] + "</p>";
    });
});