//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];  // Criado um array vazio para armazenar os nomes dos Amigos

// Funcao para adicionar amigo  
function adicionarAmigo() {  
    let campo = document.getElementById("amigo");  
    let nomeAmigo = campo.value.trim(); // Remove espaços em branco  

    if (nomeAmigo) {  
       amigos.push(nomeAmigo); // Adiciona o nome ao array  
       exibirAmigos(); // Atualiza a lista exibida  
       campo.value = ''; // Limpa o input  
    } else {  
        alert("Por favor, insira o nome de um(a) amigo(a) para o sorteio!"); // Alerta se o campo estiver em branco  
    }  
} 

function exibirAmigos() {  
    let lista = document.getElementById("listaAmigos");  
    lista.innerHTML = ''; // Limpa a lista existente  

    amigos.forEach(function(amigoSecreto) {  
        let li = document.createElement("li");  
        li.textContent = amigoSecreto; // Adiciona o nome na lista  
        lista.appendChild(li);  
    });  
}  

// Funcao para sortear um amigo secreto
function sortearAmigo() {  
    if (amigos.length > 0) {  
        let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Faz o Sorteio aleatório  
        let resultado = document.getElementById("resultado");  
        resultado.innerHTML = `<li>"Você acabou de sortear: ${nomeSorteado} como amigo(a) secretro(a)! Uhuuulll"</li>`; // Exibe mensagem com nome do amigo secreto  
    } else {  
        alert("Não há amigos para sortear."); // Alerta se não houver amigos para sortear
    }  
}  