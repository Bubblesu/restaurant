//search-bar animation
let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})

//filter logic
function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('price');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentElement.style.display="none";
        }
        else {
            x[i].parentElement.style.display="block";                 
        }
    }
}

//select product
function selectProduct(id) {
    window.location.href = "./pages/details/index.html?id="+id;
}

//ir para produtos
function goToProducts(){
    document.getElementById('trending').scrollIntoView({behavior: 'smooth'})
}

