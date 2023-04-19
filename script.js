const produkty = [];
const koszyk = [];

let inputToggle = false;

function dodajProdukt(produkt) {
    produkty.push(produkt);
}
function toggleScanner() {
    const kod = document.querySelector("#kod");
    if(inputToggle) {
        kod.style.position = "absolute";
        kod.style.left = "-1000px";
        inputToggle = false;
    }
    else {
        kod.style.position = "static";
        inputToggle = true;
    }
}
function usunRachunek() {
    const koszykTabela = document.querySelector(".koszyk-tabela");
    document.body.removeChild(document.body.lastChild)
    document.querySelector(".container").style.filter = "blur(0px)";

    koszyk.length = 0;
    const children = koszykTabela.children;
    // usuwanie wszystkich dzieci w koszuku prócz pierwszego, aby została tabela z nazwami pól
    for(let i = children.length - 1; i > 0; i--) {
        koszykTabela.removeChild(children[i]);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const skaner = document.querySelector("#skaner");
    const kod = document.querySelector("#kod");
    const cenaDiv = document.querySelector("#cena");
    const koszykDiv = document.querySelector(".koszyk");
    const koszykTabela = document.querySelector(".koszyk-tabela");
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
            "<td style='font-weight: bold'>" + produkt.nazwa + "</td>" +
            "<td style='font-weight: bold'>" + produkt.cena + "zł</td>";
        koszykDiv.scrollTo(0, koszykDiv.scrollHeight);
    }

    zaplac.addEventListener("click", () => {
        let rachunek = document.body.appendChild(document.createElement("div"));
        let container = document.querySelector(".container");
        
        rachunek.style.position = "absolute";
        rachunek.style.width = "20%";
        rachunek.style.height = "50%";
        rachunek.style.top = "100px";
        rachunek.style.left = "40%";
        rachunek.style.border = "1px solid black";
        rachunek.style.backgroundColor = "white";
        container.style.filter = "blur(10px)";


        rachunek.innerHTML = "<h3 class='text-center'>Rachunek</h3>" +
            "<button onclick='usunRachunek()' style='position: absolute; right: 0; top: 0; width: 50px; height: 50px; border-radius: 50px;' class='btn'>X</button>" +
            "<div style='height: 100px; overflow-y: auto;'>";
        
        for(let i = 0; i < produkty.length; i++) {
            let ilosc = 0;

            for(let j = 0; j < koszyk.length; j++) {
                if(koszyk[j].kod == produkty[i].kod) {
                    ilosc++;
                }
            }

            if(ilosc > 0) {
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
                rachunek.innerHTML += "<p>" + produkty[i].nazwa + " " + produkty[i].cena +  "zł x " + ilosc + " " + "<span style='position: absolute; right: 10px'>" + parseFloat(ilosc) * produkty[i].cena + "zł</span></p>";
            }
        }

        rachunek.innerHTML += "</div><h5 style='position: absolute; left: 10px; bottom: 0'>Suma: " + suma + "zł</h5>";

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