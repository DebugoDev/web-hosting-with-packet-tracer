function escolherPirata(){

    const piratas = [
        "Luffy acabou de pedir carne!",
        "Sanji recomenda o prato do dia!",
        "Nami aprovou a sobremesa!",
        "Zoro quer algo com carne.",
        "Usopp contou uma história sobre esta receita."
    ];

    const sorteio =
        Math.floor(Math.random() * piratas.length);

    document.getElementById("pirata").innerHTML =
        piratas[sorteio];
}

function calcularPorcoes(){

    let pessoas =
        document.getElementById("pessoas").value;

    if(pessoas <= 0){
        alert("Digite um valor válido.");
        return;
    }

    let massa = pessoas * 150;

    document.getElementById("resultado").innerHTML =
        "Para " + pessoas +
        " pessoa(s), utilize aproximadamente " +
        massa +
        " gramas de massa.";
}

function calcularChurrasco() {
    var pessoas = document.getElementById("pessoasChurrasco").value;
    var resultado = document.getElementById("resultadoChurrasco");

    if (pessoas <= 0 || pessoas == "") {
        alert("Digite uma quantidade válida de piratas.");
        return;
    }

    var monstroMarinho = pessoas * 250;
    var aveSkypiea = pessoas * 120;
    var salsichaoBaratie = pessoas * 100;
    var paoAlho = pessoas * 2;
    var bebidaSunny = pessoas * 600;

    resultado.innerHTML =
        "<h3>Quantidade para o Banquete</h3>" +
        "<p><b>Carne de Monstro Marinho:</b> " + monstroMarinho + "g</p>" +
        "<p><b>Ave Gigante de Skypiea:</b> " + aveSkypiea + "g</p>" +
        "<p><b>Salsichão do Baratie:</b> " + salsichaoBaratie + "g</p>" +
        "<p><b>Pão de Alho dos Chapéus de Palha:</b> " + paoAlho + " unidades</p>" +
        "<p><b>Bebida Gelada do Thousand Sunny:</b> " + bebidaSunny + "ml</p>";
}