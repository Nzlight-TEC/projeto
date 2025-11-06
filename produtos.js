const produtos = {
  vestido_verde: {
    nome: "Vestido Longo Verde Escuro",
    categoria: "vestido",
    preco: 249.90,
    descricao: "Este vestido longo em tom verde escuro é puro charme e sofisticação. Feito em tecido acetinado, tem um caimento fluido que valoriza as curvas com elegância. O busto estruturado com alças finas e decote em “V” traz um toque delicado, enquanto o drapeado lateral ajuda a definir a silhueta. O detalhe das costas com amarração cruzada e a leve cauda completam o visual com um ar de glamour ideal para eventos noturnos e ocasiões formais.",
    imagem: "img/Vestido longo verde - Copia.jpg"
  },

  blusa_bege: {
    nome: "Blusa Bege Leve",
    categoria: "blusa",
    preco: 89.90,
    descricao: "A blusa bege é leve, fluida e tem um corte simples, mas elegante. O tecido acetinado garante conforto e brilho sutil, enquanto o decote em formato de gota com amarração adiciona um charme delicado. As mangas soltinhas e o caimento leve tornam a peça perfeita para combinações versáteis — do casual ao sofisticado.",
    imagem: "img/blusabege.png"
  },

  blusa_azul: {
    nome: "Blusa Azul-Marinho com Amarração",
    categoria: "blusa",
    preco: 99.90,
    descricao: "Essa blusa azul-marinho apresenta um design moderno e elegante. Seu decote profundo em “V” valoriza o colo, enquanto a amarração na nuca cria um toque delicado e feminino. O tecido é macio, com leve elasticidade, garantindo conforto e caimento perfeito. Ideal para composições casuais ou produções noturnas mais sofisticadas.",
    imagem: "img/brusa azul - Copia.jpg"
  },

  outfit_1: {
    nome: "Conjunto Renda e Saia Longa",
    categoria: "outfit",
    preco: 279.90,
    descricao: "Esse conjunto exala atitude e romantismo. O top rendado, com amarração frontal e transparência delicada, contrasta com a saia longa fluida, levemente translúcida, que confere leveza ao visual. O look é ideal para quem busca um estilo ousado, poético e cheio de personalidade — perfeito para festivais ou eventos alternativos.",
    imagem: "img/shared image (1).jpg"
  },

  outfit_2: {
    nome: "Conjunto Branco Minimalista",
    categoria: "outfit",
    preco: 199.90,
    descricao: "Um conjunto elegante e atemporal. A parte superior apresenta um corte reto e limpo, enquanto a calça acompanha o corpo de forma natural, valorizando a silhueta sem abrir mão do conforto. O tom claro e o design minimalista tornam este look ideal para ocasiões que pedem leveza e sofisticação.",
    imagem: "img/shared image (2).jpg"
  },

  outfit_3: {
    nome: "Conjunto Preto Moderno",
    categoria: "outfit",
    preco: 189.90,
    descricao: "Com um toque urbano e moderno, este conjunto preto traz linhas retas e acabamento refinado. A blusa ajustada valoriza o corpo, enquanto a calça solta cria equilíbrio e movimento. O contraste entre as texturas do tecido adiciona profundidade e estilo ao visual, tornando-o perfeito para eventos noturnos ou encontros casuais com elegância.",
    imagem: "img/shared image (3).jpg"
  },

  outfit_4: {
    nome: "Conjunto Boho Transparente",
    categoria: "outfit",
    preco: 289.90,
    descricao: "Inspirado no estilo boho contemporâneo, este conjunto mistura leveza e sensualidade. O top com recortes sutis e a saia fluida transparente criam um jogo de movimento e mistério. A combinação é ideal para quem aprecia liberdade estética e quer se destacar com um toque artístico e etéreo.",
    imagem: "img/shared image (4).jpg"
  },

  outfit_5: {
    nome: "Conjunto Streetwear Místico",
    categoria: "outfit",
    preco: 239.90,
    descricao: "Um visual urbano com alma artística. A camisa de corte solto apresenta uma estampa mística de olhos, simbolizando energia e intuição, enquanto a calça jeans cinza traz desenhos tribais e detalhes em correntes metálicas. O contraste entre o tecido leve da camisa e a textura firme do jeans cria um equilíbrio perfeito entre conforto e ousadia.",
    imagem: "img/shared image (6).jpg"
  },

  outfit_6: {
    nome: "Conjunto Preto Assimétrico",
    categoria: "outfit",
    preco: 259.90,
    descricao: "Este conjunto une sensualidade e modernidade em uma só composição. A blusa preta transparente, com modelagem assimétrica e um ombro à mostra, transmite elegância e ousadia. A saia curta ajustada, com fivela lateral e cinto embutido, completa o visual com uma pegada rocker e urbana — ideal para noites cheias de atitude.",
    imagem: "img/shared image.jpg"
  },

  outfit_7: {
    nome: "Vestido com Estampa Animal Print",
    categoria: "outfit",
    preco: 229.90,
    descricao: "Um vestido vibrante que mistura força e feminilidade. O busto preto justo contrasta com a saia em camadas de estampa animal print, criando movimento e impacto visual. As camadas franzidas dão volume e fluidez, resultando em um look selvagem e cheio de estilo — perfeito para quem gosta de se destacar.",
    imagem: "img/Roupa feminina1 - Copia.jpg"
  },

  outfit_8: {
    nome: "Conjunto Feminino Elegante",
    categoria: "outfit",
    preco: 219.90,
    descricao: "Com linhas refinadas e corte impecável, este conjunto feminino traduz elegância. A blusa apresenta caimento suave, com gola discreta e mangas delicadas, enquanto a calça de alfaiataria leve alonga a silhueta. Ideal para eventos sociais, reuniões ou jantares que pedem sofisticação e conforto.",
    imagem: "img/Roupa feminina2 - Copia.jpg"
  },

  outfit_9: {
    nome: "Look Geek Urbano",
    categoria: "outfit",
    preco: 199.90,
    descricao: "Um look casual com influência geek e urbana. A camiseta preta com estampa vermelha de aranha adiciona um toque de cultura pop, enquanto o short jeans escuro com bordado de dragão cria uma fusão entre o moderno e o criativo. O resultado é um visual divertido, confortável e cheio de identidade.",
    imagem: "img/Roupa masculina1 - Copia.jpg"
  },

  outfit_10: {
    nome: "Conjunto Masculino Moderno",
    categoria: "outfit",
    preco: 189.90,
    descricao: "Este conjunto masculino aposta na simplicidade elegante. A camisa leve de corte reto é combinada a uma calça de tecido macio, com bom caimento e conforto. O visual é versátil e pode ser usado tanto em contextos casuais quanto em ocasiões mais formais, mantendo sempre um ar moderno e confiante.",
    imagem: "img/Roupa masculina2 - Copia.jpg"
  }
};
