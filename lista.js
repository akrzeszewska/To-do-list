function nowyElementListy(tenElement, tresc){
    const nowyElementListy = document.createElement(tenElement);
    nowyElementListy.textContent = tresc;
    return nowyElementListy;
}

function znajdzCos(toCoDoZnalezienia){
    return document.querySelector(toCoDoZnalezienia);
}

const trescNowegoLi = znajdzCos("input");
const klikniecie = znajdzCos("span");

klikniecie.addEventListener("click", () => {
    let tresc = trescNowegoLi.value;
    const nowyLi = nowyElementListy("li", tresc);
    const znajdzRodzica = znajdzCos("ul");
    const dodajZaRodzica = znajdzRodzica.appendChild(nowyLi);
    trescNowegoLi.value = "";
})



