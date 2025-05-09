import IconSkillsLogoHtml from "@/components/icon/skills-logo/Html.vue";
import IconSkillsLogoCss from "@/components/icon/skills-logo/Css.vue";
import IconSkillsLogoJavascript from "@/components/icon/skills-logo/Javascript.vue";
import IconSkillsLogoVue from "@/components/icon/skills-logo/Vue.vue";
import IconSkillsLogoNuxt from "@/components/icon/skills-logo/Nuxt.vue";
import IconSkillsLogoTailwind from "@/components/icon/skills-logo/Tailwind.vue";
import IconSkillsLogoAndroid from "@/components/icon/skills-logo/Android.vue";
import IconSkillsLogoJava from "@/components/icon/skills-logo/Java.vue";
import IconSkillsLogoKotlin from "@/components/icon/skills-logo/Kotlin.vue";
import IconSkillsLogoSql from "@/components/icon/skills-logo/Sql.vue";
import IconSkillsLogoSqlite from "@/components/icon/skills-logo/Sqlite.vue";
import IconSkillsLogoVuetify from "@/components/icon/skills-logo/Vuetify.vue";
import IconSkillsLogoTypescript from "@/components/icon/skills-logo/TypeScript.vue";
import IconSkillsLogoReact from "@/components/icon/skills-logo/React.vue";
import IconSkillsLogoNode from "@/components/icon/skills-logo/Node.vue";
import IconSkillsLogoPostgreSQL from "@/components/icon/skills-logo/PostgreSQL.vue";
import IconSkillsLogoCSharp from "@/components/icon/skills-logo/CSharp.vue";
import IconSkillsLogoDotNet from "@/components/icon/skills-logo/DotNet.vue";
import IconSkillsLogoSass from "@/components/icon/skills-logo/Sass.vue";
import IconSkillsLogoStyledComponents from "@/components/icon/skills-logo/StyledComponents.vue";
import IconSkillsLogoMaterialUi from "@/components/icon/skills-logo/MaterialUi.vue";
import IconSkillsLogoCypress from "@/components/icon/skills-logo/Cypress.vue";
import IconSkillsLogoFirebase from "@/components/icon/skills-logo/Firebase.vue";

export const projetos = [
  {
    nome: "Sixchains Digital House",
    tipo: "Website",
    imgNome: "six-chains-thumb.webp",
    projetoVideo:
      "https://www.youtube.com/embed/Ki9pPLjDFRw?si=SchDFKl5NTPp3cMw",
    width: "800",
    descricao:
      "O site foi desenvolvido para a Sixchains Digital House, onde fui responsável pelo desenvolvimento front-end. O foco principal foi garantir uma implementação eficiente e funcional, além de aplicar técnicas de SEO para melhorar o desempenho nas buscas do Google. O site inclui descrições dos principais serviços oferecidos pela empresa e uma seção destacando projetos realizados, reforçando a confiabilidade e qualidade. O design foi baseado em pesquisas feitas pela equipe, garantindo uma experiência intuitiva e compatível com diferentes dispositivos.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoVue,
      IconSkillsLogoNuxt,
      IconSkillsLogoVuetify,
      IconSkillsLogoTailwind,
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
      "Vuetify",
      "Tailwind",
    ],
    url: "https://sixchains.com.br/",
    repositorio: "",
  },
  {
    nome: "MOS Consultoria",
    tipo: "Website e Sistema",
    imgNome: "mos.png",
    projetoVideo:
      "https://www.youtube.com/embed/HIJjQfrDr0w?si=TeIR_2XC6t6iGLS6",
    width: "1200",
    descricao:
      "Este site e sistema foram desenvolvidos para a MOS Consultoria, integrando funcionalidades essenciais, como uma agenda para gerenciamento de compromissos e uma plataforma de comentários entre sindicatos. Além disso, foram implementadas notificações em tempo real via WebSocket, garantindo que os usuários recebam atualizações imediatas.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoVue,
      IconSkillsLogoNuxt,
      IconSkillsLogoVuetify,
      IconSkillsLogoTailwind,
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
      "Vuetify",
      "Tailwind",
    ],
    url: "https://mosconsultoria.com.br/",
    repositorio: "",
  },
  {
    nome: "Products Store",
    tipo: "Website",
    imgNome: "products-store.webp",
    projetoVideo:
      "https://www.youtube.com/embed/OPsTn2k5vYY?si=f7cKrtCp4QIEkkrh",
    width: "900",
    descricao:
      "A aplicação foi desenvolvida com Nuxt.js, inspirada na experiência do AliExpress. Ela integra uma API fictícia para listar e exibir produtos, com o estado do carrinho gerenciado pelo Pinia e salvo no navegador. O backend foi construído com Nitro e é responsável por gerar QR Codes para pagamentos via Pix. Além disso, o Firebase foi utilizado para autenticação de usuários, controle de sessões e também para armazenar dados, como o histórico de pedidos e os itens favoritados pelos usuários.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoVue,
      IconSkillsLogoNuxt,
      IconSkillsLogoTailwind,
      IconSkillsLogoFirebase,
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
      "Nitro",
      "Firebase",
      "Tailwind",
    ],
    url: "https://mauricio-products-store.netlify.app",
    repositorio: "https://github.com/mauricio071/Products-Store",
  },
  {
    nome: "ControlAÍ",
    tipo: "Website e Sistema",
    imgNome: "controlai.webp",
    projetoVideo:
      "https://www.youtube.com/embed/xs5c_POSKxg?si=GTey4efk1BefFDRC",
    width: "900",
    descricao:
      "O ControlAÍ é um sistema para organização das finanças pessoais, desenvolvido em React com foco em praticidade e usabilidade. Ele permite acompanhar de forma simples como o dinheiro está sendo gasto, com visualizações claras por meio de gráficos intuitivos. Além disso, conta com um chatbot integrado com inteligência artificial (Gemini) para dar sugestões e ajudar no controle financeiro. Toda a aplicação foi testada com Cypress, garantindo que os principais fluxos estejam funcionando corretamente.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoTypescript,
      IconSkillsLogoReact,
      IconSkillsLogoMaterialUi,
      IconSkillsLogoCypress,
      IconSkillsLogoFirebase,
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Material UI",
      "Cypress",
      "Firebase",
      "Vite",
      "Node.js",
    ],
    url: "https://control-ai-ma.vercel.app",
    repositorio: "https://github.com/mauricio071/ControlAI",
  },
  {
    nome: "CineLib",
    tipo: "Website",
    imgNome: "cinelib.webp",
    projetoVideo:
      "https://www.youtube.com/embed/PIm6l5R7FF4?si=DmC3VPX2rZzk2Itg",
    width: "800",
    descricao:
      "O CineLib é uma aplicação que oferece uma plataforma completa para visualizar informações detalhadas sobre filmes, como sinopse, orçamento, elenco e outros detalhes. O projeto lista os filmes mais populares do momento e disponibiliza um sistema de busca por título ou categorias, permitindo acesso a um extenso catálogo de filmes. Os usuários também podem favoritar filmes, que são armazenados localmente, permitindo a criação de uma lista personalizada. Além disso, com o suporte da biblioteca i18n, o site pode ser traduzido para inglês e português, ampliando sua acessibilidade para diferentes públicos.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoReact,
      IconSkillsLogoSass,
      IconSkillsLogoTailwind,
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Vite",
      "SASS",
      "Tailwind",
      "i18n",
    ],
    url: "https://cinelib-ma.netlify.app/",
    repositorio: "https://github.com/mauricio071/CineLib",
  },
  {
    nome: "CleanTube",
    tipo: "Sistema",
    imgNome: "cleantube.webp",
    projetoVideo:
      "https://www.youtube.com/embed/P_vSeQTrbEk?si=iz7de8l1ff3a2sxK",
    width: "1000",
    descricao:
      "CleanTube é uma aplicação para gerenciar vídeos do YouTube, com autenticação via Google OAuth configurada pelo Google Cloud, garantindo que apenas usuários autorizados possam adicionar, editar ou excluir vídeos. O middleware do Nuxt.js protege as páginas contra acessos não autorizados. Os layouts foram criados com Nuxt UI para agilizar o desenvolvimento, e o backend utiliza Nitro, integrado ao Nuxt 3, para rotas e funções server-side. O banco de dados é gerenciado com PostgreSQL, e os vídeos favoritos são armazenados localmente no navegador. A aplicação exibe vídeos sem anúncios e oferece suporte a i18n, permitindo que o idioma dos títulos das seções seja alterado conforme a preferência do usuário.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoTypescript,
      IconSkillsLogoVue,
      IconSkillsLogoNuxt,
      IconSkillsLogoTailwind,
      IconSkillsLogoPostgreSQL,
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Nuxt.js",
      "Nuxt UI",
      "Pinia",
      "i18n",
      "Nitro",
      "PostgreSQL",
      "Tailwind",
    ],
    url: "https://cleantube.vercel.app",
    repositorio: "https://github.com/mauricio071/CleanTube",
  },
  {
    nome: "Project Costs",
    tipo: "Sistema",
    imgNome: "project-costs.webp",
    projetoVideo:
      "https://www.youtube.com/embed/bS2nScs_zp4?si=8P-NRN8t1REkZ02G",
    width: "900",
    descricao:
      "O Project Costs é um sistema desenvolvido com React.js para ajudar na gestão de orçamentos de projetos. O usuário pode criar projetos e adicionar múltiplos serviços, cada um com detalhes sobre custos específicos. Se o custo total dos serviços ultrapassar o orçamento estabelecido, o sistema alerta o usuário. Além disso, é possível editar e excluir tanto os projetos quanto os serviços conforme necessário.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoReact,
      IconSkillsLogoNode,
    ],
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
    url: "https://project-costs.netlify.app",
    repositorio: "https://github.com/mauricio071/project-costs",
  },
  {
    nome: "Tarefas Pinia",
    tipo: "Website",
    imgNome: "tarefas-pinia.webp",
    projetoVideo:
      "https://www.youtube.com/embed/2UXGRnyeMpM?si=e1R3DPcBGheFCuxt",
    width: "900",
    descricao:
      "Este projeto, desenvolvido com Vue 3, é uma aplicação de lista de tarefas que facilita a organização dos afazeres diários. Os usuários podem classificar cada tarefa como 'a fazer', 'em progresso' ou 'completada'. O estado da aplicação é gerenciado pelo Pinia, garantindo que as informações persistam no navegador, mesmo após a atualização da página ou fechamento.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoVue,
      IconSkillsLogoTailwind,
    ],
    tags: ["HTML", "CSS", "JavaScript", "Vue.js", "Pinia", "Tailwind"],
    url: "https://tarefas-pinia.netlify.app",
    repositorio: "https://github.com/mauricio071/Tarefas-pinia",
  },
  {
    nome: "Sistema de Academia",
    tipo: "Sistema",
    imgNome: "sistema-academia.webp",
    projetoVideo:
      "https://www.youtube.com/embed/gkE8k4jYrQ8?si=jkJ-VgOnqXKMecXP",
    width: "900",
    descricao:
      "Esta aplicação em C# e .NET Framework, utilizando SQLite, gerencia dados de uma academia de forma eficiente. Com ela, é possível cadastrar, editar e excluir alunos, além de imprimir carteirinhas. Também oferece gestão de usuários com controle de acesso e permissões para administradores. A aplicação permite visualizar horários de atividades e gerar versões em PDF, consultar e gerenciar informações dos professores, além de administrar as turmas, adicionando ou removendo membros e verificando vagas disponíveis.",
    tagsIcon: [
      IconSkillsLogoCSharp,
      IconSkillsLogoDotNet,
      IconSkillsLogoSqlite,
    ],
    tags: ["C#", ".NET Framework", "SQLite"],
    url: "https://github.com/mauricio071/Sistema-de-Academia/blob/master/instalador/Instalador_Academia/Instalador_sistema_academia.rar",
    repositorio: "https://github.com/mauricio071/Sistema-de-Academia",
  },
  {
    nome: "Make Your Burguer",
    tipo: "Sistema",
    imgNome: "make-your-burguer.webp",
    projetoVideo:
      "https://www.youtube.com/embed/_hOEV3CYhdA?si=cM3Q5Rvm-ncFeGHx",
    width: "900",
    descricao:
      "Esta aplicação, desenvolvida com Vue.js no front-end e Node.js no back-end, permite que os usuários montem hambúrgueres personalizados e gerenciem seus pedidos. Utilizando a biblioteca Vuex para gerenciamento de estado, os usuários podem editar o status e excluir os pedidos.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoVue,
      IconSkillsLogoTailwind,
      IconSkillsLogoNode,
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Vuex",
      "Tailwind",
      "Node.js",
    ],
    url: "https://make-your-burguer.netlify.app",
    repositorio: "https://github.com/mauricio071/Make-Your-Burguer",
  },
  {
    nome: "Manhattan Coffee House",
    tipo: "Site",
    imgNome: "manhattan-coffee-house.webp",
    projetoVideo:
      "https://www.youtube.com/embed/ucYdiPY7eI0?si=yBnM-9FqNyxPVw6K",
    width: "900",
    descricao:
      "Landing page desenvolvida para a Manhattan Coffee House, projetada para refletir a essência de uma cafeteria premium. Com um design sofisticado e textos inspiradores, convida os visitantes a explorarem o universo exclusivo da marca.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoTypescript,
      IconSkillsLogoReact,
      IconSkillsLogoStyledComponents,
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "Styled Components",
    ],
    url: "https://manhattan-coffee-house-ma.vercel.app/",
    repositorio: "https://github.com/mauricio071/manhattan-coffee-house",
  },
  {
    nome: "IT Solutions",
    tipo: "Site",
    imgNome: "it-solutions.webp",
    projetoVideo:
      "https://www.youtube.com/embed/r1WmECjX9R0?si=DvGMd-n3bdmwnT_A",
    width: "900",
    descricao:
      "Landing page desenvolvida para a IT Solutions, focada em destacar serviços e soluções tecnológicas que ajudam empresas e profissionais a otimizar processos, alcançar novos patamares de desempenho e se manterem competitivos no mercado.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoTypescript,
      IconSkillsLogoReact,
      IconSkillsLogoStyledComponents,
    ],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vite",
      "Styled Components",
    ],
    url: "https://it-solutions-ma.vercel.app/",
    repositorio: "https://github.com/mauricio071/it-solutions",
  },
  {
    nome: "App de chamada de alunos",
    tipo: "Aplicativo",
    imgNome: "app-chamada.webp",
    projetoVideo: "",
    width: "900",
    descricao:
      "Esta é uma aplicação mobile desenvolvida para controle de presença em aulas. Após o login com RA e senha, o aplicativo exibe informações do aluno, como nome, RA e localização atual. A partir desses dados, a aplicação verifica se há uma aula no horário e local corretos e, caso estiver, permite o registro da presença.",
    tagsIcon: [
      IconSkillsLogoAndroid,
      IconSkillsLogoKotlin,
      IconSkillsLogoSqlite,
    ],
    tags: ["Android", "Kotlin", "SQLite"],
    url: "",
    repositorio: "https://github.com/mauricio071/Sistema-de-chamada",
  },
  {
    nome: "Jogo da Forca",
    tipo: "Website",
    imgNome: "jogo-da-forca.png",
    projetoVideo:
      "https://www.youtube.com/embed/lvqXXpjiqxU?si=2SIUBsbDpECCc2HF",
    width: "900",
    descricao:
      "Neste projeto, foi desenvolvido um jogo da forca usando o Vue.js, com uma interface moderna e responsiva para poder jogar diretamente no navegador.",
    tagsIcon: [
      IconSkillsLogoHtml,
      IconSkillsLogoCss,
      IconSkillsLogoJavascript,
      IconSkillsLogoVue,
    ],
    tags: ["HTML", "CSS", "JavaScript", "Vue.js"],
    url: "https://jogo-da-forca-vue.netlify.app",
    repositorio: "https://github.com/mauricio071/jogo-da-forca",
  },
  {
    nome: "Editor de Texto",
    tipo: "Sistema",
    imgNome: "editor-texto.webp",
    projetoVideo:
      "https://www.youtube.com/embed/_viLGq2citw?si=5uP1UQjwhB5XZECz",
    width: "900",
    descricao:
      "Esta aplicação, desenvolvida em C# e .NET Framework, permite criar, editar, salvar e imprimir documentos de texto de maneira prática. Com uma interface simples e intuitiva, é fácil criar novos arquivos, fazer edições rápidas e salvar no formato desejado, além de imprimir diretamente da aplicação.",
    tagsIcon: [IconSkillsLogoCSharp, IconSkillsLogoDotNet],
    tags: ["C#", ".NET Framework"],
    url: "https://github.com/mauricio071/Editor-de-texto/raw/master/instalador/Instalador_editor_de_texto/Instalador_editor_de_texto.rar",
    repositorio: "https://github.com/mauricio071/Editor-de-texto",
  },
  {
    nome: "Sistema de leitor",
    tipo: "Sistema",
    imgNome: "sistema-leitor.webp",
    projetoVideo: "",
    width: "900",
    descricao:
      "Esta aplicação, desenvolvida em Java, oferece funcionalidades para o gerenciamento de usuários, como adição, edição, exclusão e listagem. As informações são armazenadas em um banco de dados SQL para a persistência dos dados.",
    tagsIcon: [IconSkillsLogoJava, IconSkillsLogoSql],
    tags: ["Java", "SQL"],
    url: "",
    repositorio: "https://github.com/mauricio071/Sistema-de-leitor",
  },
  {
    nome: "Em breve!",
    tipo: "",
    imgNome: "em-breve.webp",
    projetoVideo: "",
    width: "900",
    descricao: "",
    tagsIcon: [],
    tags: [],
    url: "",
    repositorio: "",
  },
];
