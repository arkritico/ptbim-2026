/* 6.º ptBIM 2026 — programa completo (folha oficial FEUP).
   s = escolha recomendada (Pedro/Wallnut) · w = orador Wallnut · q = perguntas a fazer. */
window.PTBIM_DATA = {
  days: [
    { id: 'qua', label: 'Quarta', date: '17 jun' },
    { id: 'qui', label: 'Quinta', date: '18 jun', sub: 'Dia decisivo' },
    { id: 'sex', label: 'Sexta', date: '19 jun', sub: 'Fecho de interoperabilidade' }
  ],

  extras: {
    lente: 'Estes papers são de finais de 2025 — a cada sessão: “se refizessem isto hoje com multimodal, quanto do pipeline desaparecia?”',
    objetivo: 'Foco AI Studio: WBS→MQT, validação regulamentar, openBIM/IFC, captura.',
    top5: [
      { d: 'Qua 16h30', t: 'PoC IFC→WBS bSPT', s: 'Oliveira / Simões' },
      { d: 'Qua 15h30', t: 'Valor do BIM p/ Dono de Obra', s: 'ROI ~3×' },
      { d: 'Qui 9h20', t: 'PLN / MQT', s: 'J. de Sousa · dataset 20k' },
      { d: 'Qui 14h30·17h20', t: 'FireBIM', s: 'SCIE openBIM + grafos LLM' },
      { d: 'Sex 16h10', t: 'Da WBS ao MQT', s: 'Campos / Simões' }
    ],
    conflito: 'Quinta, bloco da tarde (16h40–18h00): ficar em Sala B029 o bloco todo — Caferra → Model Checker QUADRANTE → grafos LLM. Sem saltos.',
    networking: [
      { n: 'Ricardo Simões', o: 'Wallnut', d: 'Ponte para o grupo WBS da bSPT.' },
      { n: 'Andressa Oliveira / Marta Campos', o: '', d: 'WBS bSPT: tabela de mapeamento e dataset.' },
      { n: 'Equipa FireBIM', o: 'ISEP', d: 'D. Ribeiro, T. Jorge, J. Magalhães — RDF / SHACL / IDS p/ regulamentos.' },
      { n: 'Jacques de Sousa / Sanhudo', o: 'BUILT CoLAB', d: 'Dataset 20k MQT PT.' },
      { n: 'Azenha / Granja / Lino', o: '', d: 'Eixo openBIM e futuro IFC5 / LOIN.' }
    ]
  },

  blocks: {
    qua: [
      { ty: 'plenary', t: '9h00', ti: 'Sessão de Abertura', su: 'Rui Calçada (Dir. FEUP) · Sara Ferreira (Subdir. DECG) · Nuno Ramos (Coord. CONSTRUCT)', room: 'Auditório' },
      { ty: 'plenary', t: '9h30', ti: 'Sessão Plenária', su: 'Patrícia Gonçalves Costa (Sec. Estado Habitação) · Pedro Guedes Pinto (IMPIC) · Bento Aires (OE Norte) · Cláudia Antunes (OA) · Carlos Serra (LNEC)', mod: 'João Poças Martins', room: 'Auditório' },
      { ty: 'sep', t: '11h20', lb: 'Coffee break' },
      { ty: 'plenary', t: '11h50', ti: 'Future Skills: in the era of Digitalisation and AI', su: 'Mark Baldwin · Lucerne UAS', mod: 'Miguel Azenha', room: 'Auditório' },
      { ty: 'plenary', t: '12h10', ti: 'Hugo Beirão Rodrigues', su: 'Vereador CM Porto', room: 'Auditório' },
      { ty: 'plenary', t: '12h30', ti: 'Jorge Nandin de Carvalho', su: 'Presidente APPC', room: 'Auditório' },
      { ty: 'sep', t: '12h50', lb: 'Almoço' },
      { ty: 'rooms', t: '14h30–15h50', lb: 'Tarde · Bloco 1', rooms: [
        { r: 'Auditório', tr: 'Infraestruturas e Especialidades I', m: 'José Carlos Lino', k: [
          { id: 'qua-aud-1430', t: '14h30', ti: 'BIM na Empreitada do Metro de Lisboa (Linha Vermelha São Sebastião–Alcântara): Colaboração e Coordenação', au: 'António Hipólito, Catarina Feio, Pedro Serra, Sébastien Roux, Aline Hilgemberg' },
          { id: 'qua-aud-1450', t: '14h50', ti: 'Matriz de Informação para a Definição do LOIN em Infraestrutura Rodoviária', au: 'Pothira Picoli, Naira Silva, Roberta Santos, Carlos Capanema, Sâmara Melo, Caroline Kehl' },
          { id: 'qua-aud-1510', t: '15h10', ti: 'BIM para cumprimento normativo: Validação das ETI Ferroviária via IDS e IFC', au: 'Emilio A. Camino, Dora Alves, Manuel H. Pinheiro' },
          { id: 'qua-aud-1530', t: '15h30', ti: 'Geração automática de modelos BIM em infraestruturas ferroviárias', au: 'João Ventura, Francisco Andrade, Rui Gavina, Ricardo Santos, Diogo Ribeiro' },
          { id: 'qua-aud-1550', t: '15h50', ti: 'Integração Digital para Manutenção Preditiva de Infraestruturas Ferroviárias', au: 'Francisco Andrade, João Ventura, Rui Gavina, Ricardo Santos, Diogo Ribeiro' }
        ] },
        { r: 'B035', tr: 'Captura da Realidade e Património I', m: 'Diogo Ribeiro', k: [
          { id: 'qua-b035-1430', t: '14h30', ti: 'HBIM for Monitoring and Preservation of a Cultural Heritage Structure: the UNESCO-Protected Emona Roman Wall', au: 'Afonso Portela, Vlatko Bosiljkov, Tilen Urbančič' },
          { id: 'qua-b035-1450', t: '14h50', ti: 'AI and Photogrammetry for HBIM: Automating Historic Building Classification and Modelling', au: 'Oxana V. Barsukova, Luís Sanhudo, Filipe J.S. Brandão, Bruno A.F. Figueiredo' },
          { id: 'qua-b035-1510', t: '15h10', ti: 'Desafios BIM na Reabilitação de Edifícios Classificados — Revisão e Abordagem Metodológica', au: 'Inês Soares, Luís Mateus, António Aguiar da Costa, Ana Brandão de Vasconcelos' },
          { id: 'qua-b035-1530', t: '15h30', ti: 'Comparação de Técnicas de Levantamento Geométrico: Fotogrametria vs Laser (estático e móvel)', au: 'Juan Nascimento, Patrícia Escórcio, José Santos' },
          { id: 'qua-b035-1550', t: '15h50', ti: 'Objetos Paramétricos em HBIM para Diferentes Níveis de Detalhe Geométrico', au: 'Marina Pereira, Pedro Pereira' }
        ] },
        { r: 'B029', tr: 'Industrialização da Construção I', m: 'Ricardo Almeida', k: [
          { id: 'qua-b029-1430', t: '14h30', ti: 'Interoperability Between BIM and Robotic Fabrication Processes: Generative Facade Design', au: 'Adriano Franchini, Bruno Figueiredo, Filipe Brandão, João Carvalho, Pedro Andrade' },
          { id: 'qua-b029-1450', t: '14h50', ti: 'ModuLIB: Plataforma para Conceção e Industrialização de Módulos Arquitetónicos', au: 'Sofia Feist, Pedro Andrade, Margarida Amândio, Luís Sanhudo, Maria João Tomé, Vitor E.M. Cardoso, Fábio Gonçalves' },
          { id: 'qua-b029-1510', t: '15h10', ti: 'Transição digital na construção modular em madeira', au: 'Pedro Santos, João Palma, António Aguiar Costa, Amílcar Arantes' },
          { id: 'qua-b029-1530', t: '15h30', ti: 'Modelação de Armaduras e Bar Bending Schedules para Pré-fabricação em BIM', au: 'Bernardino Lima, António Mateus, Joana Teixeira' },
          { id: 'qua-b029-1550', t: '15h50', ti: 'Digitalização paramétrica de produto (UTS) com famílias, PDT e Dynamo', au: 'Gonçalo Azevedo, Carolina Rua, Luís Sanhudo, Mohamad El Sibaii, José Granja, Miguel Azenha' }
        ] },
        { r: 'B026', tr: 'Implementação e Contratação BIM I', m: 'Paula Couto', k: [
          { id: 'qua-b026-1430', t: '14h30', ti: 'Quantificação BIM em fase de projeto', au: 'Gonçalo Valente' },
          { id: 'qua-b026-1450', t: '14h50', ti: 'Competências BIM Relevantes para Contratações Públicas', au: 'Raíssa Cruz, Mônica Santos Salgado' },
          { id: 'qua-b026-1510', t: '15h10', ti: 'A Implementação do BIM na Gestão de Projetos: Estudo Bibliométrico', au: 'Margarida Ferreira, Olga Pereira, Mário Coelho' },
          { id: 'qua-b026-1530', t: '15h30', ti: 'O valor do BIM para Donos de Obra', au: 'Aline Hilgemberg, Filipe Lima, Sébastien Roux, Miguel Azenha', s: 1, tag: 'VENDA', q: 'Como isolaram a poupança de 10,6% (clash vs medição)? Quanto desce o custo de 3,5% se a quantificação for automatizada? Têm a decomposição por fase?' },
          { id: 'qua-b026-1550', t: '15h50', ti: 'Integração de Processos BIM, ISO 19650 e Legislação Brasileira em Obras Públicas Educacionais', au: 'Talita Dal´Bosco, Rui M. Lima, Miguel Azenha' }
        ] }
      ] },
      { ty: 'sep', t: '16h10', lb: 'Coffee break' },
      { ty: 'rooms', t: '16h30–17h30', lb: 'Tarde · Bloco 2', rooms: [
        { r: 'Auditório', tr: 'Implementação e Contratação BIM II', m: 'Mônica Santos Salgado', k: [
          { id: 'qua-aud-1630', t: '16h30', ti: 'Metamodelo para a Criação do AIR de uma Unidade Assistencial Hospitalar', au: 'Adriana Tonani, Camila Joko, Paula Mota' },
          { id: 'qua-aud-1650', t: '16h50', ti: 'Da coordenação digital à colaboração integrada: nova sede da CGD', au: 'Pedro Ferreirinha, Charles Weinfortner, Sébastien Roux, André Janeiro, Maria Antunes, Jorge Madeira' },
          { id: 'qua-aud-1710', t: '17h10', ti: 'Transforming Distributed Data into Reusable Information: CDE no projeto A27 Houten-Hooipolder', au: 'Michiel Bienens, Vera A. Aparício, Cora Van de Poppe, José O. Pedro' },
          { id: 'qua-aud-1730', t: '17h30', ti: 'Gestão Digital da Construção na Retomada de Obras — Estudo de Caso UNILA', au: 'A. M. G. Caraca, R. B. Koerich, R. R. de Souza, L. F. B. Castilho et al.' }
        ] },
        { r: 'B035', tr: 'openBIM e Interoperabilidade I', m: 'Ricardo Resende', k: [
          { id: 'qua-b035-1630', t: '16h30', ti: 'Geração Automática de MQT a partir de IFC: PoC baseada na WBS buildingSMART Portugal', au: 'Andressa Oliveira, Ricardo Simões, Marta Campos, José Granja, Miguel Azenha, Ali Motamedi, José Lino', s: 1, w: 1, tag: 'TOP', q: 'A convenção PTBS_ e a tabela de mapeamento estão publicadas na bSPT? Repo / .exe abertos? Porquê IFC4 e não IFC5? Speckle é substituível?' },
          { id: 'qua-b035-1650', t: '16h50', ti: 'Entre Pessoas e Processos: Dimensões Culturais da Implementação do BIM no Sesc/Senac RN', au: 'Edy Barbosa, Thayse Soares, Deyse Carvalho, Igor Linhares, Lucas Gomes et al.' },
          { id: 'qua-b035-1710', t: '17h10', ti: 'Otimização de Cronogramas de Demolição: Precedência de Elementos + NSGA-II', au: 'André Mantelatto, Melody Njuguna, Manuel Parente, José Granja, Miguel Azenha', s: 1 }
        ] },
        { r: 'B029', tr: 'Captura da Realidade e Património II', m: 'Francisco Teixeira Bastos', k: [
          { id: 'qua-b029-1630', t: '16h30', ti: 'Voussoir: ferramenta BIM para estruturas estereotómicas', au: 'Pedro de Azambuja Varela, Afonso de Matos Silva, Margarida Amândio, Luís Sanhudo, Nycolas Glerean, Cristina Paixão' },
          { id: 'qua-b029-1650', t: '16h50', ti: 'Enriquecimento semântico de HBIM para caracterização mecânica da alvenaria (BIM-to-FEM)', au: 'Maria Laura Leonardi, Stefano Cursi, Letizia Martinelli, Elena Gigliarelli, Daniel V. Oliveira, Miguel Azenha' },
          { id: 'qua-b029-1710', t: '17h10', ti: 'An Open-Source Approach for Multi-Sensor Scan-to-BIM Workflows', au: 'Juan José Gavilanes Bowen, Diogo F. R. Parracho, João Poças Martins' },
          { id: 'qua-b029-1730', t: '17h30', ti: 'Inspeção Automatizada de Pontes Ferroviárias com BIM e Tecnologias Emergentes', au: 'Rafael Cabral, Ricardo Santos, Diogo Ribeiro' }
        ] },
        { r: 'B026', tr: 'Sustentabilidade e Desempenho Energético I', m: 'Pedro Mêda', k: [
          { id: 'qua-b026-1630', t: '16h30', ti: 'Navigating the Twin Transition: Data Requirements and Accuracy in Construction Products', au: 'Kyra van den Muyzenberg, Pedro Mêda' },
          { id: 'qua-b026-1650', t: '16h50', ti: 'Da Norma ao Passaporte Digital do Produto: Estruturação de Dados para Produtos de Construção', au: 'Jorge Teixeira, Yanh Ribeiro, Pedro Mêda' },
          { id: 'qua-b026-1710', t: '17h10', ti: 'Validação da ACV em Open BIM: Proposta de IDS', au: 'Maria Teresa Ferreira, António Aguiar Costa, José Dinis Silvestre' },
          { id: 'qua-b026-1730', t: '17h30', ti: 'Blockchain-Based Digital Product Passports and BIM Integration', au: 'João Palma, António Aguiar Costa, Pedro Santos' }
        ] }
      ] },
      { ty: 'social', t: '18h00', lb: 'BIM e Bola — Mundial 2026: Portugal × RD Congo' }
    ],

    qui: [
      { ty: 'rooms', t: '9h00–10h40', lb: 'Manhã · Bloco 1', rooms: [
        { r: 'Auditório', tr: 'IA, Robótica e Automação I', m: 'Luís Sanhudo', k: [
          { id: 'qui-aud-0900', t: '9h00', ti: 'Data Enrichment — Dynamo Workflow', au: 'André Santos' },
          { id: 'qui-aud-0920', t: '9h20', ti: 'Processamento de Linguagem Natural Aplicado à Classificação de MQT em Construção', au: 'Luís Jacques de Sousa, João Poças Martins, Luís Sanhudo', s: 1, tag: 'TOP', q: 'O dataset de 20k está disponível p/ parceria? Few-shot vs fine-tuned em produção (custo / latência)? Testaram modelos frontier mais recentes? Multi-rótulo nos níveis profundos?' },
          { id: 'qui-aud-0940', t: '9h40', ti: 'ARCHAI: Automação Inteligente e IA Generativa em Workflows BIM no Autodesk Revit', au: 'Gonçalo de Vasconcelos, Joana Mota' },
          { id: 'qui-aud-1000', t: '10h00', ti: 'IA para QA/QC na construção: modelos siameses baseados em BIM', au: 'Nawel Ben Haj Salah, Manuel Afonso Parente, Hélder M. da Silva e Sousa, José Carlos Lino, Bruno Caires', s: 1, q: 'Porquê uma rede siamesa dedicada e não um VLM frontier em zero-shot?' },
          { id: 'qui-aud-1020', t: '10h20', ti: 'Aprendizagem Automática para Deteção de Não-Conformidades em Segurança: Revisão Sistemática', au: 'Sabrina S. Oliveira, João Poças Martins, Alfredo Soeiro' }
        ] },
        { r: 'B035', tr: 'openBIM e Interoperabilidade II', m: 'Mário Coelho', k: [
          { id: 'qui-b035-0900', t: '9h00', ti: 'Plataforma BIMCer: repositório de objetos BIM da indústria cerâmica', au: 'Nilza Paraíba, Carlos Calças, Sílvia Vara, Paulo Soeiro, Miguel Azenha, Mohamad El Sibaii, José Granja, Pedro Roseiro' },
          { id: 'qui-b035-0920', t: '9h20', ti: 'Interoperabilidade de Modelos de Análise Estrutural: Conexões entre Elementos Analíticos', au: 'Isabele Castellano, José Carlos Ribeiro, Kléos César Junior, Márcio Henrique Charles, José Maria de Carvalho, Diôgo de Oliveira' },
          { id: 'qui-b035-0940', t: '9h40', ti: 'Validação Automatizada de Arquivos IFC para QA em openBIM', au: 'Lucas Gonçalves, Carlos Capanema, Sâmara Melo' },
          { id: 'qui-b035-1000', t: '10h00', ti: 'Biblioteca de Objetos BIM para Conforto Térmico e Luminoso — Estado da Arte', au: 'Ana Luiza Onofri, Isabele Castellano, Kléos César Jr, Douglas L. Souza et al.' },
          { id: 'qui-b035-1020', t: '10h20', ti: 'Framework para elaboração do BEP visando edificações sustentáveis', au: 'Mônica Santos Salgado' }
        ] },
        { r: 'B029', tr: 'Sustentabilidade e Desempenho Energético II', m: 'Maria Teresa Ferreira', k: [
          { id: 'qui-b029-0900', t: '9h00', ti: 'Fluxo BIM para Simulação Energética: Interoperabilidade IFC-EnergyPlus', au: 'Bruna Onety, Tatiana Zanni, Maria Laura Leonardi, Manuela Almeida, Maria R. Valluzzi, José Granja, Miguel Azenha' },
          { id: 'qui-b029-0920', t: '9h20', ti: 'Regionalização de EPDs na Precisão da Análise de Carbono Incorporado', au: 'Thiago Melo, José Gomes, Juliana Scanoni, Sofia Henriques' },
          { id: 'qui-b029-0940', t: '9h40', ti: 'Passaporte Digital de Produto na Agenda ECP: Plataforma de Interoperabilidade', au: 'Bernardo Pacheco, Nelson Martins, Pedro Roseiro, João Guiomar' },
          { id: 'qui-b029-1000', t: '10h00', ti: 'Requisitos de modelagem para CO₂ incorporado em moradias informais (Rede MORE)', au: 'Lucas Melchiori Pereira, Ana Júlia Correia Bessa, Paulo R. Nunes dos Santos, Lívia Freitas Vieira' },
          { id: 'qui-b029-1020', t: '10h20', ti: 'Lixões do Brasil: Passivos Ambientais em Fronteiras de Energia Limpa', au: 'Euclides Ademir Espíndola, Késia Alves da Silva' }
        ] },
        { r: 'B026', tr: 'Infraestruturas e Especialidades II', m: 'Paulo Costeira', k: [
          { id: 'qui-b026-0900', t: '9h00', ti: 'Nuvens de Pontos e BIM na Compatibilização de Arruamentos com Património: Loteamento North Gorge', au: 'Bernardino Lima, Joana Teixeira, Romeu Simões' },
          { id: 'qui-b026-0920', t: '9h20', ti: 'Fachadas do Aeroporto de Santiago do Chile: Coordenação BIM do Fabrico à Montagem', au: 'Bernardino Lima, Joana Teixeira, Romeu Simões' },
          { id: 'qui-b026-0940', t: '9h40', ti: 'Implementação BIM no Terminal Técnico do Oriente (Alta Velocidade)', au: 'Pedro Pais, Ricardo Almeida, Jorge Latas, Hugo Silva, Luís Ribeirinho' },
          { id: 'qui-b026-1000', t: '10h00', ti: 'Gestão e Coordenação de Modelos BIM no Polo Ferroviário Medway – Entroncamento', au: 'Letícia Oliveira, Pedro Serra, Dina Matias' },
          { id: 'qui-b026-1020', t: '10h20', ti: 'Deep Learning e Ray Casting na Inspeção Remota de Pontes', au: 'João Fonseca, Tomás Jorge, Eduardo Soares, Pedro Oliveira, Rafael Cabral et al.' }
        ] }
      ] },
      { ty: 'sep', t: '10h40', lb: 'Coffee break · BIMMS' },
      { ty: 'plenary', t: '11h10', ti: 'OpenBIM + AI: The Perfect Combination for the Present and Future of Digitalisation', su: 'Augustí Margalef · APOGEA Consulting', mod: 'Diogo Ribeiro', room: 'Auditório', s: 1 },
      { ty: 'plenary', t: '11h40', ti: 'Andry Pinto', su: 'FEUP', room: 'Auditório' },
      { ty: 'plenary', t: '12h10', ti: 'António Paulo Moreira', su: 'FEUP', room: 'Auditório' },
      { ty: 'plenary', t: '12h40', ti: 'Francisco Reis', su: 'BIMMS', room: 'Auditório' },
      { ty: 'sep', t: '13h00', lb: 'Almoço' },
      { ty: 'rooms', t: '14h30–15h50', lb: 'Tarde · Bloco 2', rooms: [
        { r: 'Auditório', tr: 'openBIM e Interoperabilidade III', m: 'António Aguiar Costa', k: [
          { id: 'qui-aud-1430', t: '14h30', ti: 'SCIE em openBIM: Do Regulamento ao Modelo BIM Verificável', au: 'Jéssica Reis, Pedro Oliveira, Rui Gavina, Daniel Afonso, José Rocha, Tomás Jorge, Jorge Magalhães, Diogo Ribeiro', s: 1, tag: 'TOP', q: 'O ruleset machine-readable do RJ-SCIE e o mapeamento IDS / bSDD ficam públicos? Cobre evacuação / cargas / categorias? Como articula com a via in-model do Caferra?' },
          { id: 'qui-aud-1450', t: '14h50', ti: 'O OpenBIM no Design and Build: do Conceito à Prática', au: 'Ricardo Simões', s: 1, w: 1, tag: 'WALLNUT', q: 'Q interno: Que módulos do D&B openBIM já entram no AI Studio? Objeções de interoperabilidade mais comuns dos donos de obra?' },
          { id: 'qui-aud-1510', t: '15h10', ti: 'Uso de IDS: Avaliação de Fluxo de Verificação de Conformidade com Python e Bonsai', au: 'Letícia Weijh, Eduarda Castilho, Paulo Santos, Melissa Yamada, Hugo Silva, Luís Ribeirinho' },
          { id: 'qui-aud-1530', t: '15h30', ti: 'Do SIG ao BIM: um processo integrado', au: 'Teresa Afonso, Vasco Leónidas, Tiago Martins, Carla Rebelo' },
          { id: 'qui-aud-1550', t: '15h50', ti: 'MQT_builder: Automação de Mapas de Quantidades Multiplataforma em Fluxos BIM', au: 'Paulo Rodrigues, João Moura' }
        ] },
        { r: 'B035', tr: 'Captura da Realidade e Património III', m: 'Rafael Cabral', k: [
          { id: 'qui-b035-1430', t: '14h30', ti: 'Otimização do Alinhamento BIM–Scan para Avaliação de Progresso', au: 'Daniel Pereira, Pedro Ferreira, Mário Sousa, João N.D. Fernandes, Luís Sanhudo' },
          { id: 'qui-b035-1450', t: '14h50', ti: 'Workflow para Digitalização e Modelação HBIM: fortificação costeira', au: 'Carlos Serra, Maria João Correia, Maria João Henriques, Dora Roque et al.' },
          { id: 'qui-b035-1510', t: '15h10', ti: 'Da Nuvem de Pontos ao Modelo Coordenado: Reabilitação em Lisboa', au: 'Mónica Santos, Joana França, Sébastien Roux, Filipe Lima, Rita Lisboa' },
          { id: 'qui-b035-1530', t: '15h30', ti: 'HBIM na intervenção da Capela de São Sebastião do Barro Branco (São Paulo)', au: 'Thais Souza, Leandro Surya, David Eleutério, Lívia Manteca, Larissa Escarparo' },
          { id: 'qui-b035-1550', t: '15h50', ti: 'Scan-to-BIM Semiautomático para Compartimentação Corta-Fogo em Edifícios Existentes', au: 'Jorge Magalhães, Tomás Jorge, Rafael Cabral, Jéssica Reis, Rui Gavina et al.' }
        ] },
        { r: 'B029', tr: 'Infraestruturas e Especialidades III', m: 'José Santos', k: [
          { id: 'qui-b029-1430', t: '14h30', ti: 'Impactos socioeconómicos via metodologia BIM em projetos portuários', au: 'Leonardo Nunes, Vitor Martins, Renato Gama, Vinícius Santana' },
          { id: 'qui-b029-1450', t: '14h50', ti: 'Digitalização de processos de modelação geológica em ambientes BIM', au: 'Diogo Batista, Magda Roque, Miguel Alcantara, Alice Modesto, Ricardo Sardinha, Pedro Serra, David Carreira' },
          { id: 'qui-b029-1510', t: '15h10', ti: 'Plataforma de Gestão e Monitoramento para Instalações Mineiras', au: 'Jeniffer Viegas, Gonçalo Tavares' },
          { id: 'qui-b029-1530', t: '15h30', ti: 'Requisitos de Informação segundo ABNT NBR ISO 19650: Concessões Rodoviárias', au: 'Caroline Kehl, Sâmara Melo, Marcella Moraes, Regina Ruschel' },
          { id: 'qui-b029-1550', t: '15h50', ti: 'CAV Tools: Criação Automatizada de Curvas Cota-Área-Volume', au: 'Matheus Barros, João Andrade, Guilherme Jannuzzi, Adson Araújo, Thiago Almeida' }
        ] },
        { r: 'B026', tr: 'Sessão GO Porto: Desafios para a Construção Digital', m: '', k: [
          { id: 'qui-b026-1430', t: '14h30', ti: 'GO Porto', au: 'Renato Lourenço' },
          { id: 'qui-b026-1450', t: '14h50', ti: 'ISEP', au: 'Diogo Ribeiro' },
          { id: 'qui-b026-1510', t: '15h10', ti: 'BIMMS', au: 'Francisco Reis' }
        ] }
      ] },
      { ty: 'sep', t: '16h10', lb: 'Coffee break · ACCA' },
      { ty: 'rooms', t: '16h40–18h00', lb: 'Tarde · Bloco 3', rota: 'Rota Wallnut — ficar em B029 o bloco todo: Caferra → Model Checker → grafos LLM.', rooms: [
        { r: 'Auditório', tr: 'Ambientes Imersivos e Sistemas Dinâmicos I', m: 'Romeu Vicente', k: [
          { id: 'qui-aud-1640', t: '16h40', ti: 'Integração BIM-RA: Markerless para Monitorização de Progresso de Obra', au: 'Pedro Ferreira, Mário Dixo, Daniel Pereira, João N.D. Fernandes, Luís Sanhudo' },
          { id: 'qui-aud-1700', t: '17h00', ti: 'O “Gémeo de Calibração”: Nova Tipologia na Maturidade dos Gémeos Digitais', au: 'Diogo F. R. Parracho, Mohamed Nour El-Din, João Poças Martins' },
          { id: 'qui-aud-1720', t: '17h20', ti: 'Digital twin para condições ambientais de espaços museológicos', au: 'David Pereira, Romeu Vicente, Odete Paiva, Sónia Isidro, Ricardo Almeida' },
          { id: 'qui-aud-1740', t: '17h40', ti: 'De Modelos BIM Estáticos a Gémeos Digitais Dinâmicos: Abordagem Aberta e Interoperável', au: 'Nuno Oliveira, Hélder Silva, Vitor Cardoso, Luís Sanhudo' },
          { id: 'qui-aud-1800', t: '18h00', ti: 'Ativos mais Eficientes com Gémeos Digitais: Integração BIM e Operação', au: 'Renata Castelo-Branco, Paulo Rodrigues, Gaspar Miranda, Samuel Santos, Bruno Oliveira' }
        ] },
        { r: 'B035', tr: 'openBIM e Interoperabilidade IV', m: 'Paula Couto', k: [
          { id: 'qui-b035-1640', t: '16h40', ti: 'O papel do BIM no desenvolvimento de Espaços de Dados Comuns', au: 'Mário Coelho, José C. Lino, Isabel Borges, António Salvado' },
          { id: 'qui-b035-1700', t: '17h00', ti: 'RHAM: Técnicas Construtivas Tradicionais do Algarve em openBIM', au: 'Nuno Rio, Filipe Coutinho Quaresma' },
          { id: 'qui-b035-1720', t: '17h20', ti: 'Integração openBIM + IDS para validação automática de requisitos em IFC: caso Fiocruz', au: 'Sílvia Pereira, Miguel Azenha' },
          { id: 'qui-b035-1740', t: '17h40', ti: 'Abordagem ontológica para validação de processos em CDE: metadados de Information Containers', au: 'João Aleixo, João Couto, Miguel Azenha' },
          { id: 'qui-b035-1800', t: '18h00', ti: 'Diretrizes de Modelagem para Code Checking em Projetos Aeroportuários no Brasil', au: 'Ítalo Santos, Max Andrade, Nakita Souza, Renata Batista et al.' }
        ] },
        { r: 'B029', tr: 'IA, Robótica e Automação II', m: 'Luís Jacques de Sousa', k: [
          { id: 'qui-b029-1640', t: '16h40', ti: 'Automatização em projecto de SCIE: fluxo BIM baseado em Python e Dynamo', au: 'Tiago Caferra', s: 1, w: 1, tag: 'WALLNUT', q: 'Q interno: A lógica RJ-SCIE pode ser extraída do Revit para o “brain” do AI Studio? Porquê in-model vs IFC / IDS? A Fase 4 (posicionamento automático) é prioridade vs tempo?' },
          { id: 'qui-b029-1700', t: '17h00', ti: 'Model Checker QUADRANTE: Verificação Automática de Qualidade de Modelos BIM', au: 'Paulo Rodrigues, João Moura, João Fonseca', s: 1, q: 'Regras nativas ou IDS? Onde acaba o determinístico e começa a inferência?' },
          { id: 'qui-b029-1720', t: '17h20', ti: 'Abordagem baseada em LLM para Grafos de Regulamentos (Segurança Contra Incêndios)', au: 'Tomás Jorge, Jorge Magalhães, Jéssica Reis, Rui Gavina, Pedro Oliveira et al.', s: 1, tag: 'TOP', q: 'O passo PDF→Word→VBA→OCR colapsa num modelo multimodal? A geração de SHACL já funciona? Ontologia reutilizável p/ Eurocódigos?' },
          { id: 'qui-b029-1740', t: '17h40', ti: 'Aplicações paramétricas automatizadas em BIM na pormenorização de armaduras', au: 'Miguel Reghin, Daniela Gutstein, Gilberto Rouxinol' },
          { id: 'qui-b029-1800', t: '18h00', ti: 'Tradução automática de entidades de texto com AutoLISP e Transformers.js', au: 'Pedro Ferreira' }
        ] },
        { r: 'B026', tr: 'Industrialização da Construção II', m: 'Manuel Parente', k: [
          { id: 'qui-b026-1640', t: '16h40', ti: 'Controlo do Progresso da Montagem Robotizada de Painéis Sandwich com BIM e IA', au: 'Edgar Mendez, Nelson Silva, Diogo Ribeiro, Ricardo Santos, Pedro Oliveira' },
          { id: 'qui-b026-1700', t: '17h00', ti: 'Fluxo de trabalho BIM para dimensionamento de construção modular', au: 'Thaís R. L. Soares, José Granja, Miguel Azenha' },
          { id: 'qui-b026-1720', t: '17h20', ti: 'Desenvolvimento de Metodologia BIM para Empresa de Construção Pré-Fabricada', au: 'Juliana Cotarelle, Thaís R. L. Soares, Miguel Azenha' },
          { id: 'qui-b026-1740', t: '17h40', ti: 'Plataforma Digital para Execução de Fachadas Industriais com Robótica e IA', au: 'João Fonseca, Afonso Barreiro, Pedro Oliveira, Rafael Cabral et al.' },
          { id: 'qui-b026-1800', t: '18h00', ti: 'Augmented Reality for Modular Construction: Factory-to-Site Workflow', au: 'Eddy Mendoza Jiménez, José Granja' }
        ] }
      ] },
      { ty: 'social', t: '20h00', lb: 'Programa Social — Jantar' }
    ],

    sex: [
      { ty: 'rooms', t: '9h00–10h40', lb: 'Manhã · Bloco 1', rooms: [
        { r: 'Auditório', tr: 'Ensino, Disseminação e Formação Profissional I', m: 'Miguel Azenha', k: [
          { id: 'sex-aud-0900', t: '9h00', ti: 'Impacto da internacionalização na adoção do BIM pelas empresas portuguesas', au: 'Anabela Ribeiro, Olga Pereira, Mário Coelho' },
          { id: 'sex-aud-0920', t: '9h20', ti: 'Adoção do BIM em micro e pequenas empresas de arquitetura', au: 'Catharina Moura, Marcelo Giacaglia' },
          { id: 'sex-aud-0940', t: '9h40', ti: 'Difusão do BIM na região do Algarve', au: 'Sandra Ribeiro, Bianca Negreiros' },
          { id: 'sex-aud-1000', t: '10h00', ti: 'BIM para o Curso de Graduação em Arquitetura: limites, contradições e oportunidades', au: 'Mônica Santos Salgado, Luciana Figueiredo, Aline Marques, Frederico Braida' },
          { id: 'sex-aud-1020', t: '10h20', ti: 'BIM: do Erro ao Sucesso', au: 'Teresa Afonso, Vasco Leónidas' },
          { id: 'sex-aud-1040', t: '10h40', ti: 'Building Information Modeling no Ensino de Arquitetura: Universidades Brasileiras', au: 'Frederico Braida, Mônica Santos Salgado' }
        ] },
        { r: 'B035', tr: 'Implementação e Contratação BIM III', m: 'Ricardo Resende', k: [
          { id: 'sex-b035-0900', t: '9h00', ti: 'Estudo piloto Resil: BIM para flexibilidade de edifícios multifamiliares', au: 'Sandra Ribeiro, Heitor Silva, Hugo Farias' },
          { id: 'sex-b035-0920', t: '9h20', ti: 'Coordenação BIM e Análise de Dados numa empresa de varejo brasileira', au: 'Ítalo Santos, Melquisedeque Fragroso, Kirlia Lima, Stephan Strauß, Felipe Reis' },
          { id: 'sex-b035-0940', t: '9h40', ti: 'Otimização dos autos de medição via integração do BIM e colaboração em obra', au: 'Maria Clara Fonseca, José Granja', s: 1, q: 'Auto gerado direto do IFC ou reconciliação manual? Fluxo auditável de desvios por elemento? (liga a STV 836 e Golden Acres 754)' },
          { id: 'sex-b035-1000', t: '10h00', ti: 'Diretrizes para a contratação de projetos em BIM: análise teórica e documental', au: 'Nathália Pinto, Sérgio Scheer' },
          { id: 'sex-b035-1020', t: '10h20', ti: 'Do Projeto à Obra Tradicional: Resolução de Conflitos em Projetos Colaborativos BIM', au: 'Manuela Timóteo, Ana Borges' },
          { id: 'sex-b035-1040', t: '10h40', ti: 'Transformação Digital na Indústria: BIM e RV como Vetores Estratégicos', au: 'Valter Brito, Guilherme Guignone, Wildenbergy Lucas' }
        ] },
        { r: 'B029', tr: 'IA, Robótica e Automação III', m: 'Pedro Mêda', k: [
          { id: 'sex-b029-0900', t: '9h00', ti: 'Mapeamento IFC automatizado por IA em nuvens de pontos para gestão de danos', au: 'Paulo Alberto Sampaio Santos, Clarissa Caetano, Isabela Ribeiro Ferreira, Lissa Gomes Araujo, Michele Tereza Marques Carvalho' },
          { id: 'sex-b029-0920', t: '9h20', ti: 'Design Grammars system supporting decision-making in Construction across platforms', au: 'Evgenii Ermolenko, Bruno Figueiredo, Miguel Azenha' },
          { id: 'sex-b029-0940', t: '9h40', ti: 'Digital Twin baseado em BIM para Manutenção da Envolvente Exterior de Ativos Industriais', au: 'Ruben Silva, Luiza Assunção, Rui Garcia, Eduardo Soares, Tomás Jorge, Pedro Oliveira, Diogo Ribeiro' },
          { id: 'sex-b029-1000', t: '10h00', ti: 'Análise Bibliométrica de IA Aplicada ao BIM: Classificação por Área da IA', au: 'Natan Ferreira, Juliê Oliveira, Michele Marques' },
          { id: 'sex-b029-1020', t: '10h20', ti: 'Automação para Gestão da Informação em Ambiente BIM', au: 'António Hipólito, Ana Rita Lyrio, Catarina Feio' },
          { id: 'sex-b029-1040', t: '10h40', ti: 'O Potencial do Dynamo como Ferramenta Low-Code em Projetos de Estruturas', au: 'Francisco Conde' }
        ] },
        { r: 'B026', tr: 'Ambientes Imersivos e Sistemas Dinâmicos II', m: 'Pedro Varela', k: [
          { id: 'sex-b026-0900', t: '9h00', ti: 'Análise de Projetos com RV: o Autodesk Workshop XR', au: 'Luiz Otávio Martins Souza' },
          { id: 'sex-b026-0920', t: '9h20', ti: 'From BIM to Interactive Digital Twin: Integrating Virtual and Physical Environments', au: 'Mujahed M. K. Bani Mustafa, Manuel Afonso Parente, Tomo Cerovsek' },
          { id: 'sex-b026-0940', t: '9h40', ti: 'Integração Direta de Modelos BIM num Motor de Jogos Open Source: Leitor IFC para Godot', au: 'Bruno Muniz, José Granja, Miguel Azenha' },
          { id: 'sex-b026-1000', t: '10h00', ti: 'Utilização de Aplicações BIM-AR nos Procedimentos Urbanísticos', au: 'José Torcato Almeida, Mário Coelho, José Granja, Miguel Azenha' },
          { id: 'sex-b026-1020', t: '10h20', ti: 'BIM para Gestão de Ativos em Saúde Pública: caso CPIVCES/FIOCRUZ', au: 'Luiz Fernando da Silva, Ana Beatriz Alves Cuzzatti, Vinícius Peixoto Medina, Bruno Amorim de Souza' }
        ] }
      ] },
      { ty: 'sep', t: '11h00', lb: 'Coffee break · GEOPALM' },
      { ty: 'plenary', t: '11h40', ti: 'Momentum for BIM in the EU', su: 'Milena Feustel · EU BIM Task Group', mod: 'António Aguiar Costa', room: 'Auditório' },
      { ty: 'plenary', t: '12h10', ti: 'Marco Lima', su: 'Gaiurb', room: 'Auditório' },
      { ty: 'plenary', t: '12h40', ti: 'Gustavo Palma', su: 'GEOPALM', room: 'Auditório' },
      { ty: 'sep', t: '13h00', lb: 'Almoço' },
      { ty: 'plenary', t: '14h30', ti: 'Advancing openBIM Standards with IFC5', su: 'Michelangelo Cianciulli · ACCA Software', mod: 'José Carlos Lino', room: 'Auditório', s: 1, q: 'Calendário do IFC5 estável e em ferramentas de autor? O desacoplamento semântica / geometria quebra fluxos IFC4?' },
      { ty: 'plenary', t: '15h00', ti: 'openBIM em Portugal: da Estratégia à Ação', su: 'José Carlos Lino · buildingSMART Portugal', room: 'Auditório' },
      { ty: 'plenary', t: '15h30', ti: 'Apresentando o esquema LOINxml: decisões de design e aplicação', su: 'Martina Mellenthin Filardo, Paul Debus, Sven Zentgraf, Štefan Jaud, André Borrmann et al.', room: 'Auditório', s: 1, q: 'A minha camada de requisitos deve nascer LOINxml-compatível já? Relação com IDS: sobrepõem ou complementam?' },
      { ty: 'plenary', t: '15h50', ti: 'Avaliação das Representações Geométricas IFC no Contexto de USD e IFC5', su: 'Tiago Riccota, Miguel Azenha', room: 'Auditório', s: 1, q: 'Para captura / 3DGS, malha leve + metadados desacoplados é o caminho IFC5-ready?' },
      { ty: 'plenary', t: '16h10', ti: 'Da WBS ao MQT: o openBIM como padrão para extração automática de quantidades', su: 'Marta Campos, Paula Couto, Sofia Henriques, Ricardo Simões, Andressa Oliveira', room: 'Auditório', s: 1, w: 1, tag: 'TOP', q: 'A WBS bSPT está versionada para eu fixar como camada de saída? Mapeia p/ ISO 12006-2 / OmniClass por baixo? Há guião de medição por capítulo?' },
      { ty: 'sep', t: '16h30', lb: 'Sessão de Encerramento e Entrega de Prémios' }
    ]
  }
};