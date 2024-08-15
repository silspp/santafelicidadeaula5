const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1 - Como o uso excessivo de agrotoxicos pode afetar a qualidade da água ",
        alternativas: [
            "A - Agrotoxicos aplicados em campos agricolas podem ser arrastados pela chuva",
            "B - Agrotoxicos aplicaddos excessivamente podem infiltrar no solo e alcançar lençol  freáticos. "
        ]
    },
    {
        enunciado: " Qual é o impacto do folclore e da mitologia em uma sociedade?",
        alternativas: [
            "A -  Aumenta a taxa de alfabetização da população",
            "B -  b) Influencia a identidade cultural e as tradições de um povo",
        ]
    },
    {
        enunciado: "3 - Como a alimentação pode influenciar a saúde mental?",
        alternativas: [
            "A - Uma alimentação balanceada pode melhorar o humor e reduzir os níveis de estresse.",
            "B - A alimentação não tem impacto significativo na saúde mental."
        ]
    }
    
    
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();

