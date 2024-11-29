const questions = [
    {
        question: "Qual é a linguagem mais utilizada para programação de sistemas financeiros?",
        answers: [
            { text: "Java", correct: true },
            { text: "Python", correct: false },
            { text: "C++", correct: false }
        ]
    },
    {
        question: "Qual tecnologia é frequentemente utilizada para garantir a segurança de transações financeiras online?",
        answers: [
            { text: "Blockchain", correct: true },
            { text: "Machine Learning", correct: false },
            { text: "IoT", correct: false }
        ]
    },
    {
        question: "Qual é a sigla usada para referir-se a um sistema de pagamentos instantâneos no Brasil?",
        answers: [
            { text: "SEPA", correct: false },
            { text: "PIX", correct: true },
            { text: "SWIFT", correct: false }
        ]
    },
    {
        question: "Qual das seguintes criptomoedas é amplamente aceita como moeda de pagamento?",
        answers: [
            { text: "Bitcoin", correct: true },
            { text: "Dogecoin", correct: false },
            { text: "Litecoin", correct: false }
        ]
    },
    {
        question: "Qual é a função do 'Blockchain' em sistemas financeiros?",
        answers: [
            { text: "Armazenamento de dados criptografados", correct: false },
            { text: "Registro seguro e descentralizado de transações", correct: true },
            { text: "Controle de pagamento de taxas bancárias", correct: false }
        ]
    },
    {
        question: "O que significa a sigla 'API' no contexto de sistemas financeiros?",
        answers: [
            { text: "Automated Payment Interface", correct: false },
            { text: "Application Programming Interface", correct: true },
            { text: "Advanced Payment Interface", correct: false }
        ]
    },
    {
        question: "Qual plataforma de pagamentos oferece soluções financeiras para empresas e consumidores de forma online?",
        answers: [
            { text: "PayPal", correct: true },
            { text: "Skrill", correct: false },
            { text: "Venmo", correct: false }
        ]
    },
    {
        question: "O que é o termo 'FinTech'?",
        answers: [
            { text: "Tecnologia para empresas de marketing financeiro", correct: false },
            { text: "Tecnologia utilizada para novos produtos e serviços financeiros", correct: true },
            { text: "Sistema de pagamento baseado em criptomoedas", correct: false }
        ]
    },
    {
        question: "Qual é o objetivo da Inteligência Artificial no setor bancário?",
        answers: [
            { text: "Reduzir o tempo de processamento de transações", correct: false },
            { text: "Automatizar a análise de crédito e fraudadores", correct: true },
            { text: "Gerar lucro para os bancos", correct: false }
        ]
    },
    {
        question: "O que significa a sigla 'KYC' no contexto de segurança financeira?",
        answers: [
            { text: "Know Your Customer", correct: true },
            { text: "Know Your Credit", correct: false },
            { text: "Know Your Corporation", correct: false }
        ]
    },
    {
        question: "Qual dessas tecnologias é um exemplo de inovação em 'open banking'?",
        answers: [
            { text: "API de pagamento de crédito", correct: false },
            { text: "Plataforma de compartilhamento de dados bancários entre diferentes instituições", correct: true },
            { text: "Sistema de pagamento por QR code", correct: false }
        ]
    },
    {
        question: "Qual é o principal benefício do uso de blockchain no setor financeiro?",
        answers: [
            { text: "Maior controle dos governos sobre as transações", correct: false },
            { text: "Redução da necessidade de intermediários em transações", correct: true },
            { text: "Aumento do custo das transações", correct: false }
        ]
    },
    {
        question: "O que caracteriza uma criptomoeda como 'descentralizada'?",
        answers: [
            { text: "Não existe um banco central controlando as transações", correct: true },
            { text: "Ela é regulamentada pelos governos", correct: false },
            { text: "Ela depende de uma rede bancária tradicional", correct: false }
        ]
    },
    {
        question: "Quais dessas criptomoedas é conhecida por ser a mais segura?",
        answers: [
            { text: "Bitcoin", correct: true },
            { text: "Ethereum", correct: false },
            { text: "Ripple", correct: false }
        ]
    },
    {
        question: "Qual é o termo para a prática de usar dados financeiros para criar soluções inovadoras em produtos bancários?",
        answers: [
            { text: "Data Mining", correct: false },
            { text: "Open Banking", correct: true },
            { text: "Big Data Analytics", correct: false }
        ]
    },
    {
        question: "O que é 'crowdfunding' no setor financeiro?",
        answers: [
            { text: "Financiamento coletivo para novos projetos", correct: true },
            { text: "Sistema de investimentos automáticos", correct: false },
            { text: "Empréstimos para empresas grandes", correct: false }
        ]
    },
    {
        question: "O que é 'tokenização' no contexto de ativos financeiros?",
        answers: [
            { text: "Substituir ativos reais por tokens digitais", correct: true },
            { text: "Criar novos tipos de moedas digitais", correct: false },
            { text: "Armazenar informações bancárias em formato de tokens", correct: false }
        ]
    },
    {
        question: "O que é uma 'wallet' no contexto financeiro digital?",
        answers: [
            { text: "Carteira física para guardar dinheiro", correct: false },
            { text: "Aplicativo para armazenar e transacionar criptomoedas", correct: true },
            { text: "Cartão bancário virtual", correct: false }
        ]
    },
    {
        question: "Qual é a principal vantagem do uso de 'smart contracts' em transações financeiras?",
        answers: [
            { text: "Aumentar a taxa de juros das transações", correct: false },
            { text: "Automatizar a execução de contratos de maneira segura", correct: true },
            { text: "Facilitar o rastreamento das transações bancárias", correct: false }
        ]
    },
    {
        question: "O que é um 'robo-advisor' no setor financeiro?",
        answers: [
            { text: "Sistema que analisa o crédito de pessoas físicas", correct: false },
            { text: "Plataforma que usa IA para gerenciar investimentos", correct: true },
            { text: "Aplicativo para transferências bancárias rápidas", correct: false }
        ]
    },
    {
        question: "Qual é a função da API 'Open Banking'?",
        answers: [
            { text: "Permitir que bancos compartilhem dados dos clientes com fintechs autorizadas", correct: true },
            { text: "Facilitar o pagamento de impostos", correct: false },
            { text: "Automatizar o processo de empréstimos bancários", correct: false }
        ]
    },
    {
        question: "O que é 'RegTech' no setor financeiro?",
        answers: [
            { text: "Tecnologia usada para regulamentar criptomoedas", correct: false },
            { text: "Tecnologia usada para facilitar a conformidade regulatória", correct: true },
            { text: "Tecnologia usada para criar novos tipos de investimentos", correct: false }
        ]
    },
    {
        question: "O que é 'big data' no contexto financeiro?",
        answers: [
            { text: "Armazenamento de grandes volumes de dados financeiros", correct: true },
            { text: "Análise de dados pessoais de clientes", correct: false },
            { text: "O uso de dados para gerar novos produtos bancários", correct: false }
        ]
    },

        {
            question: "O que é 'insurtech' no setor financeiro?",
            answers: [
                { text: "Tecnologia usada para automatizar seguros", correct: true },
                { text: "Tecnologia usada para investimentos em criptomoedas", correct: false },
                { text: "Tecnologia de controle de fraudes em sistemas bancários", correct: false }
            ]
        },
        {
            question: "Qual é a principal função do 'machine learning' em fintechs?",
            answers: [
                { text: "Automatizar a criação de novos tipos de criptomoedas", correct: false },
                { text: "Analisar grandes volumes de dados financeiros para tomar decisões automáticas", correct: true },
                { text: "Criar novos sistemas de pagamento em tempo real", correct: false }
            ]
        },
        {
            question: "O que significa a sigla 'RPA' no contexto de automação financeira?",
            answers: [
                { text: "Robotic Process Automation", correct: true },
                { text: "Recurrent Payment Algorithm", correct: false },
                { text: "Real-time Payment Automation", correct: false }
            ]
        },
        {
            question: "Qual é a função da tecnologia de 'Deep Learning' no setor financeiro?",
            answers: [
                { text: "Aumentar a velocidade de transações bancárias", correct: false },
                { text: "Analisar padrões complexos em grandes conjuntos de dados financeiros", correct: true },
                { text: "Criar sistemas de pagamento baseados em inteligência artificial", correct: false }
            ]
        },
        {
            question: "O que é 'Peer-to-Peer' (P2P) no setor financeiro?",
            answers: [
                { text: "Uma rede de pagamentos em tempo real", correct: false },
                { text: "Uma plataforma de empréstimos entre pessoas sem intermediários", correct: true },
                { text: "Um sistema de controle de investimentos bancários", correct: false }
            ]
        },
        {
            question: "Qual é o principal benefício do uso de 'cryptographic tokens' no setor financeiro?",
            answers: [
                { text: "Facilitar o armazenamento de grandes quantidades de dinheiro", correct: false },
                { text: "Representar digitalmente ativos financeiros de forma segura e transparente", correct: true },
                { text: "Aumentar o volume de transações bancárias", correct: false }
            ]
        },
        {
            question: "Qual é a principal diferença entre 'cryptocurrencies' e 'central bank digital currencies' (CBDCs)?",
            answers: [
                { text: "As CBDCs são emitidas por governos, enquanto as criptomoedas são descentralizadas", correct: true },
                { text: "As criptomoedas são regulamentadas pelos governos, enquanto as CBDCs não são", correct: false },
                { text: "Ambos os sistemas são totalmente descentralizados", correct: false }
            ]
        },
        {
            question: "O que é um 'financial data aggregator'?",
            answers: [
                { text: "Uma plataforma para automatizar pagamentos entre diferentes bancos", correct: false },
                { text: "Uma ferramenta que coleta dados financeiros de várias fontes para análise", correct: true },
                { text: "Um sistema de empréstimos online para consumidores", correct: false }
            ]
        },
        {
            question: "Qual é o papel do 'Regulador Financeiro' no uso de tecnologia no setor financeiro?",
            answers: [
                { text: "Criar novas criptomoedas", correct: false },
                { text: "Garantir que as inovações tecnológicas estejam em conformidade com as leis financeiras", correct: true },
                { text: "Aumentar o volume de transações financeiras", correct: false }
            ]
        },
        {
            question: "O que são 'altcoins'?",
            answers: [
                { text: "Criptomoedas alternativas ao Bitcoin", correct: true },
                { text: "Uma rede de pagamentos online", correct: false },
                { text: "A tecnologia de blockchain", correct: false }
            ]
        },
        {
            question: "Qual é a vantagem do uso de 'smart contracts' em blockchain no setor financeiro?",
            answers: [
                { text: "Aumentar a velocidade das transações internacionais", correct: false },
                { text: "Garantir a execução automática e segura de acordos financeiros sem intermediários", correct: true },
                { text: "Substituir o papel dos bancos em transações financeiras", correct: false }
            ]
        },
        {
            question: "Qual é a função dos 'credit scoring systems' no setor financeiro?",
            answers: [
                { text: "Avaliar a solvência de empresas usando dados financeiros", correct: false },
                { text: "Determinar a probabilidade de um cliente pagar suas dívidas com base em seu histórico", correct: true },
                { text: "Gerar taxas de juros dinâmicas para investimentos", correct: false }
            ]
        },
        {
            question: "O que é 'insight' em análise de dados financeiros?",
            answers: [
                { text: "Resultado direto de uma transação bancária", correct: false },
                { text: "Informação extraída de grandes volumes de dados que pode influenciar decisões financeiras", correct: true },
                { text: "Preço das ações baseado em notícias", correct: false }
            ]
        },
        {
            question: "O que significa a sigla 'AML' no setor financeiro?",
            answers: [
                { text: "Anti-Money Laundering", correct: true },
                { text: "Automated Money Lending", correct: false },
                { text: "Algorithmic Market Lending", correct: false }
            ]
        },
        {
            question: "Qual dessas tecnologias é usada para otimizar o atendimento ao cliente em bancos e fintechs?",
            answers: [
                { text: "Chatbots e IA", correct: true },
                { text: "Tecnologia de Blockchain", correct: false },
                { text: "Realidade Aumentada", correct: false }
            ]
        },
        {
            question: "Qual é o principal uso de 'big data' para as instituições financeiras?",
            answers: [
                { text: "Criar novos tipos de criptomoedas", correct: false },
                { text: "Analisar padrões de comportamento de clientes e otimizar serviços", correct: true },
                { text: "Automatizar processos bancários", correct: false }
            ]
        },
        {
            question: "O que é um 'digital wallet' (carteira digital)?",
            answers: [
                { text: "Aplicativo para realizar transações bancárias físicas", correct: false },
                { text: "Plataforma que armazena dinheiro e informações de pagamento digital", correct: true },
                { text: "Sistema de pontos de recompensa de cartões de crédito", correct: false }
            ]
        },
        {
            question: "O que são 'robo-advisors' no contexto financeiro?",
            answers: [
                { text: "Plataformas automáticas para investimentos com base em algoritmos", correct: true },
                { text: "Consultores financeiros humanos que usam IA", correct: false },
                { text: "Ferramentas de análise de dados de crédito", correct: false }
            ]
        },
        {
            question: "Qual é o papel das 'fintechs' no setor bancário tradicional?",
            answers: [
                { text: "Desafiar os bancos tradicionais oferecendo serviços mais rápidos e acessíveis", correct: true },
                { text: "Substituir os bancos em todos os aspectos financeiros", correct: false },
                { text: "Criar criptomoedas para transações internacionais", correct: false }
            ]
        },
        {
            question: "O que é o conceito de 'Open Banking'?",
            answers: [
                { text: "Permitir que os bancos compartilhem dados de clientes com terceiros autorizados", correct: true },
                { text: "Criar novos bancos digitais sem agências físicas", correct: false },
                { text: "Garantir a privacidade total dos dados bancários", correct: false }
            ]
        },
        {
            question: "O que é o 'token de segurança' em sistemas financeiros?",
            answers: [
                { text: "Identificador único para autorizar transações financeiras online", correct: true },
                { text: "Chave criptografada usada para transferir criptomoedas", correct: false },
                { text: "Método de investimento para ativos digitais", correct: false }
            ]
        },
        {
            question: "Qual é a principal vantagem da 'tokenização de ativos'?",
            answers: [
                { text: "Transformar ativos físicos em tokens digitais que podem ser facilmente transferidos e comercializados", correct: true },
                { text: "Automatizar a negociação de ações em bolsas internacionais", correct: false },
                { text: "Reduzir os custos de transações bancárias", correct: false }
            ]
        }
    ];

let currentQuestionIndex = 0;
let score = 0;

const totalQuestions = questions.length;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const finalScoreElement = document.getElementById("final-score");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => checkAnswer(answer));
        answersElement.appendChild(button);
    });

    currentQuestionElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = totalQuestions;

    nextButton.classList.add("hidden");
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer-btn");

    answerButtons.forEach(button => {
        button.disabled = true;  // Desabilita os botões após uma escolha
        if (button.textContent === selectedAnswer.text) {
            if (selectedAnswer.correct) {
                button.classList.add("correct");
                score++;
            } else {
                button.classList.add("wrong");
            }
        }
    });

    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    finalScoreElement.textContent = `Você acertou ${score} de ${totalQuestions} perguntas!`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizSection.classList.remove("hidden");
    resultSection.classList.add("hidden");
    loadQuestion();
}

loadQuestion();

nextButton.addEventListener("click", nextQuestion);
document.getElementById("restart-btn").addEventListener("click", restartQuiz);