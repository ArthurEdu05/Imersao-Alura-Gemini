let dados = [
    {
        nome: "Arsenal",
        descricao: "O Arsenal Football Club, fundado em 1886, é um dos clubes mais tradicionais da Inglaterra, com uma rica história de títulos nacionais e internacionais.",
        link: "https://www.arsenal.com",
        estadio: "Emirates Stadium",
        cores: ["Vermelho", "Branco"],
        mascote: "Gunnersaurus"
    },
    {
        nome: "Aston Villa",
        descricao: "O Aston Villa Football Club, fundado em 1874, é um dos clubes mais antigos da Inglaterra, com várias conquistas no cenário doméstico e internacional.",
        link: "https://www.avfc.co.uk",
        estadio: "Villa Park",
        cores: ["Vinho", "Azul Céu"],
        mascote: "Hercules the Lion"
    },
    {
        nome: "Bournemouth",
        descricao: "O AFC Bournemouth, conhecido como 'The Cherries', é um clube que tem mostrado crescimento constante na Premier League.",
        link: "https://www.afcb.co.uk",
        estadio: "Vitality Stadium",
        cores: ["Vermelho", "Preto"],
        mascote: "Cherry Bear"
    },
    {
        nome: "Brentford",
        descricao: "O Brentford Football Club, fundado em 1889, é conhecido por seu estilo de jogo atraente e por sua abordagem inovadora no futebol inglês.",
        link: "https://www.brentfordfc.com",
        estadio: "Gtech Community Stadium",
        cores: ["Vermelho", "Branco"],
        mascote: "Buzz Bee"
    },
    {
        nome: "Brighton & Hove Albion",
        descricao: "O Brighton & Hove Albion Football Club, fundado em 1901, tem se destacado na Premier League por sua solidez defensiva e jogo coletivo.",
        link: "https://www.brightonandhovealbion.com",
        estadio: "Falmer Stadium",
        cores: ["Azul", "Branco"],
        mascote: "Gully the Seagull"
    },
    {
        nome: "Chelsea",
        descricao: "O Chelsea Football Club, fundado em 1905, é um dos clubes mais bem-sucedidos da Inglaterra, com múltiplos títulos nacionais e europeus.",
        link: "https://www.chelseafc.com",
        estadio: "Stamford Bridge",
        cores: ["Azul", "Branco"],
        mascote: "Stamford the Lion"
    },
    {
        nome: "Crystal Palace",
        descricao: "O Crystal Palace Football Club, fundado em 1905, é um clube londrino conhecido por sua base de fãs leal e por seu desempenho consistente na Premier League.",
        link: "https://www.cpfc.co.uk",
        estadio: "Selhurst Park",
        cores: ["Vermelho", "Azul"],
        mascote: "Pete the Eagle"
    },
    {
        nome: "Everton",
        descricao: "O Everton Football Club, fundado em 1878, é um dos clubes mais antigos e tradicionais da Inglaterra, com uma rica história na primeira divisão.",
        link: "https://www.evertonfc.com",
        estadio: "Goodison Park",
        cores: ["Azul", "Branco"],
        mascote: "Changy the Elephant"
    },
    {
        nome: "Fulham",
        descricao: "O Fulham Football Club, fundado em 1879, é conhecido por sua localização icônica em Craven Cottage e por seu futebol ofensivo e envolvente.",
        link: "https://www.fulhamfc.com",
        estadio: "Craven Cottage",
        cores: ["Branco", "Preto"],
        mascote: "Billy the Badger"
    },
    {
        nome: "Ipswich Town",
        descricao: "O Ipswich Town Football Club, fundado em 1878, retornou à Premier League com grandes expectativas, trazendo consigo uma rica história e uma base de fãs dedicada.",
        link: "https://www.itfc.co.uk",
        estadio: "Portman Road",
        cores: ["Azul", "Branco"],
        mascote: "Bluey the Horse"
    },
    {
        nome: "Leicester City",
        descricao: "O Leicester City Football Club, fundado em 1884, fez história ao vencer a Premier League em 2016 e continua sendo uma força competitiva no futebol inglês.",
        link: "https://www.lcfc.com",
        estadio: "King Power Stadium",
        cores: ["Azul", "Branco"],
        mascote: "Filbert Fox"
    },
    {
        nome: "Liverpool",
        descricao: "O Liverpool Football Club, fundado em 1892, é um dos clubes mais bem-sucedidos da história do futebol inglês, com inúmeros títulos nacionais e internacionais.",
        link: "https://www.liverpoolfc.com",
        estadio: "Anfield",
        cores: ["Vermelho", "Branco"],
        mascote: "Mighty Red"
    },
    {
        nome: "Manchester City",
        descricao: "O Manchester City Football Club, fundado em 1880, é atualmente um dos clubes mais dominantes da Europa, com múltiplos títulos da Premier League e sucesso na Liga dos Campeões.",
        link: "https://www.mancity.com",
        estadio: "Etihad Stadium",
        cores: ["Azul Céu", "Branco"],
        mascote: "Moonchester"
    },
    {
        nome: "Manchester United",
        descricao: "O Manchester United Football Club, fundado em 1878, é um dos clubes mais icônicos do mundo, com uma rica história de conquistas na Inglaterra e na Europa.",
        link: "https://www.manutd.com",
        estadio: "Old Trafford",
        cores: ["Vermelho", "Branco"],
        mascote: "Fred the Red"
    },
    {
        nome: "Newcastle United",
        descricao: "O Newcastle United Football Club, fundado em 1892, é conhecido por sua apaixonada base de torcedores e por ser um dos clubes mais tradicionais do norte da Inglaterra.",
        link: "https://www.nufc.co.uk",
        estadio: "St James' Park",
        cores: ["Preto", "Branco"],
        mascote: "Monty Magpie"
    },
    {
        nome: "Nottingham Forest",
        descricao: "O Nottingham Forest Football Club, fundado em 1865, é um clube histórico com dois títulos da Liga dos Campeões, sendo uma lenda do futebol inglês.",
        link: "https://www.nottinghamforest.co.uk",
        estadio: "City Ground",
        cores: ["Vermelho", "Branco"],
        mascote: "Robin Hood"
    },
    {
        nome: "Southampton",
        descricao: "O Southampton Football Club, fundado em 1885, é conhecido por sua academia de jovens talentos e por ser um clube com forte ligação com sua comunidade local.",
        link: "https://www.southamptonfc.com",
        estadio: "St Mary's Stadium",
        cores: ["Vermelho", "Branco"],
        mascote: "Sammy Saint"
    },
    {
        nome: "Tottenham Hotspur",
        descricao: "O Tottenham Hotspur Football Club, fundado em 1882, é conhecido por sua forte presença em Londres e por seu futebol ofensivo e atraente.",
        link: "https://www.tottenhamhotspur.com",
        estadio: "Tottenham Hotspur Stadium",
        cores: ["Branco", "Azul Marinho"],
        mascote: "Chirpy the Cockerel"
    },
    {
        nome: "West Ham United",
        descricao: "O West Ham United Football Club, fundado em 1895, é famoso por sua rica história e por ser uma das principais forças do futebol londrino.",
        link: "https://www.whufc.com",
        estadio: "London Stadium",
        cores: ["Vinho", "Azul Céu"],
        mascote: "Hammerhead"
    },
    {
        nome: "Wolverhampton Wanderers",
        descricao: "O Wolverhampton Wanderers Football Club, fundado em 1877, é um clube com uma história rica e uma reputação de ser um competidor forte e resiliente.",
        link: "https://www.wolves.co.uk",
        estadio: "Molineux Stadium",
        cores: ["Dourado", "Preto"],
        mascote: "Wolfie the Wolf"
    }
];