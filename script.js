const produkty = [];

function addProduct(produkt) {
    produkty.push(produkt);
}
document.addEventListener("DOMContentLoaded", () => {
    const skaner = document.querySelector("#skaner");
    const kod = document.querySelector("#kod");

    let kodProduktu;

    skaner.addEventListener("submit", (e) => {
        e.preventDefault();
        kodProduktu = kod.value;
        kod.value = "";

        console.log(kodProduktu);
    });
});