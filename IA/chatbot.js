document.addEventListener("DOMContentLoaded", () => {
    const respostas = {
        "Edigar está em qual periodo da faculdade?": "Ele está no segundo semestre de Análise e Desenvolvimento de Sistemas!",
        "Onde ele mora?": "em Curitiba, Paraná.",
        "Quais os hobbies dele?": "Criar coisas com programação e jogar fifa!",
        "Onde ele se vê daqui a cinco anos?": "trabalhando com programação e muito rico!",
        "Quais são suas habilidades técnicas?": "HTML, CSS, JavaScript e Google Planilhas",
    };

    const respostaElement = document.getElementById("resposta");
    const botoesPerguntas = document.querySelectorAll("#perguntas-predefinidas button");

    function typeWriter(elemento, texto, velocidade = 20) {
        let i = 0;
        elemento.textContent = "";
        function escrever() {
            if (i < texto.length) {
                elemento.textContent += texto.charAt(i);
                i++;
                setTimeout(escrever, velocidade);
            }
        }
        escrever();
    }

    botoesPerguntas.forEach(botao => {
        botao.addEventListener("click", () => {
            const pergunta = botao.dataset.pergunta;
            const resposta = respostas[pergunta] || "Desculpe, não sei a resposta para essa pergunta.";
            typeWriter(respostaElement, resposta);
        });
    });
});