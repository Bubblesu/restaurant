//lista de produtos
const products = {
    "1": {
        "name": "Biscoito de chocolate Miffy",
        "description": "Os biscoitos de chocolate Miffy combinam o sabor do chocolate com a personagem Miffy, apresentando pedaços de chocolate em uma massa crocante. São uma opção saborosa para fãs da personagem e amantes de doces.",
        "price": "R$10,00",
    },
    "2": {
        "name": "Taiyaki com sorvete de baunilha",
        "description": "Taiyaki de chocolate com sorvete de baunilha: Sobremesa japonesa de peixe recheado com chocolate e sorvete de baunilha. Deliciosa mistura de sabores e texturas.",
        "price": "R$10,00",
    },
    "3": {
        "name": "Café do Totoro",
        "description": "Um café temático inspirado no filme 'Meu Vizinho Totoro', com decoração encantadora e bebidas quentes servidas em copos temáticos. Ideal para fãs do filme e um lugar acolhedor para relaxar.",
        "price": "R$5,00",
    },
    "4": {
        "name": "Temaki - Salmão com cream cheese",
        "description": "Cone de alga nori recheado com salmão cru e cream cheese cremoso, uma combinação deliciosa e popular na culinária japonesa. Ideal para amantes de sushi.",
        "price": "R$25,00",
    },
    "5": {
        "name": "Onigiri",
        "description": "Onigiri é um bolinho de arroz japonês, muitas vezes em forma triangular, envolto em alga nori, e pode conter diversos recheios, como salmão grelhado ou umeboshi. É um lanche popular e portátil na culinária japonesa.",
        "price": "R$5,00",
    }, 
    "6": {
        "name": "Miso",
        "description": "Miso é uma pasta fermentada japonesa feita de soja, sal e grãos, com diversos sabores. É usado em sopas, molhos e pratos japoneses, conhecido por seu sabor único e valor nutricional, incluindo benefícios probióticos para a saúde digestiva.",
        "price": "R$30,00",
        "off": "R$25,00"
    }, 
    "7": {
        "name": "Bubble tea de nuvem",
        "description": "Variação do Bubble Tea com espuma na superfície, semelhante a uma nuvem. Pode ser preparado com chá ou leite, adoçado e com pérolas de tapioca ou bolhas de frutas. Uma opção criativa e diferenciada.",
        "price": "R$10,00",
        "off": "R$9,00"
    }, 
    "8": {
        "name": "Omorice",
        "description": "Omorice é um prato coreano que consiste em uma omelete recheada com arroz frito, legumes e carne, geralmente servido com molho de ketchup ou molho de tomate por cima. É conhecido tanto pelo sabor delicioso quanto pela apresentação visual atraente.",
        "price": "R$10,00",
    }, 
    "9": {
        "name": "Mochi",
        "description": "Mochi é um doce japonês feito de arroz glutinoso moído até ficar elástico e pegajoso. Pode ter diversos recheios, sendo consumido em ocasiões especiais ou como lanche. Tem uma textura suave e é conhecido por sua versatilidade.",
        "price": "R$5,00",
    }, 
    "10": {
        "name": "Sorvete temático Cinnamonroll",
        "description": "É uma sobremesa que combina o sabor e textura de um cinnamon roll com a cremosidade do sorvete. Geralmente, inclui pedaços da massa de cinnamon roll e uma mistura de canela e açúcar para recriar o sabor característico dessa iguaria. É uma opção indulgente para os amantes de doces.",
        "price": "R$5,00",
    }, 
    "11": {
        "name": "Nikuman de carne",
        "description": "É um prato japonês composto por pãezinhos cozidos no vapor recheados com carne de porco temperada. É um lanche ou refeição rápida apreciado pela sua textura macia e sabor reconfortante.",
        "price": "R$5,00",
    }, 
    "12": {
        "name": "Dango de três cores",
        "description": "O dango de três cores é uma sobremesa japonesa feita de bolinhos de arroz coloridos (verde, rosa e branco), geralmente servidos em palitos e acompanhados de molho doce. Cada cor representa uma estação do ano e é uma iguaria tradicional e adorável da culinária japonesa.",
        "price": "R$5,00",
    }, 
}

//preencher a página com o produto correto
const currentId = window.location.search.substring(4)
let pName = document.getElementById("product-name"); 
let pDescription = document.getElementById("product-description"); 
let pPrice = document.getElementById("product-price"); 
let pOff = document.getElementById("product-off");

let pImage = document.getElementById('select-image')
let pt1 = document.getElementById('t-1')
let pt2 = document.getElementById('t-2')
let pt3 = document.getElementById('t-3')
let pt4 = document.getElementById('t-4')

pName.innerText = products[currentId].name 
pDescription.innerText = products[currentId].description 
pPrice.innerText = products[currentId].price 
if(products[currentId].off){
    pOff.innerText = products[currentId].off
}
pImage.src = "./assets/"+currentId+".jpg"
pt1.src = "./assets/"+currentId+".jpg"
pt2.src = "./assets/"+currentId+"-2.jpg"
pt3.src = "./assets/"+currentId+"-3.jpg"
pt4.src = "./assets/"+currentId+"-4.jpg"

let thumbs = document.getElementsByClassName('thumbnails');

for (i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].parentElement.style.display="none";
    }
    else {
        x[i].parentElement.style.display="block";                 
    }
}

//trocar imagem
function changeImage(id){
    let newImage = document.getElementById(id).src;
    let path = newImage.split("assets/")
    let pImage = document.getElementById('select-image')
    pImage.src = "./assets/"+path[1];
}

