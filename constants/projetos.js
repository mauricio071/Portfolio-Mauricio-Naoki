import IconSkillsLogoHtml from '@/components/icon/skills-logo/Html.vue';
import IconSkillsLogoCss from '@/components/icon/skills-logo/Css.vue';
import IconSkillsLogoJavascript from '@/components/icon/skills-logo/Javascript.vue';
import IconSkillsLogoVue from '@/components/icon/skills-logo/Vue.vue';
import IconSkillsLogoNuxt from '@/components/icon/skills-logo/Nuxt.vue';
import IconSkillsLogoTailwind from '@/components/icon/skills-logo/Tailwind.vue';
import IconSkillsLogoAndroid from '@/components/icon/skills-logo/Android.vue';
import IconSkillsLogoJava from '@/components/icon/skills-logo/Java.vue';
import IconSkillsLogoKotlin from '@/components/icon/skills-logo/Kotlin.vue';
import IconSkillsLogoSql from '@/components/icon/skills-logo/Sql.vue';
import IconSkillsLogoSqlite from '@/components/icon/skills-logo/Sqlite.vue';
import IconSkillsLogoVuetify from '@/components/icon/skills-logo/Vuetify.vue';
import IconSkillsLogoTypeScript from '@/components/icon/skills-logo/TypeScript.vue';
import IconSkillsLogoReact from '@/components/icon/skills-logo/React.vue';
import IconSkillsLogoNode from '@/components/icon/skills-logo/Node.vue';

export const projetos = [
    {
        nome: "Sixchains Digital House",
        tipo: "Website",
        imgNome: "six-chains-thumb.webp",
        projetoVideo: "https://www.youtube.com/embed/Ki9pPLjDFRw?si=SchDFKl5NTPp3cMw",
        width: "800",
        descricao: "O site foi desenvolvido para a Sixchains Digital House, onde fui responsável pelo desenvolvimento front-end. O foco principal foi garantir uma implementação eficiente e funcional, além de aplicar técnicas de SEO para melhorar o desempenho nas buscas do Google. O site inclui descrições dos principais serviços oferecidos pela empresa e uma seção destacando projetos realizados, reforçando a confiabilidade e qualidade. O design foi baseado em pesquisas feitas pela equipe, garantindo uma experiência intuitiva e compatível com diferentes dispositivos.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoVue,
            IconSkillsLogoNuxt,
            IconSkillsLogoVuetify,
            IconSkillsLogoTailwind
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js',
            'Nuxt.js',
            'Vuetify',
            'Tailwind'
        ],
        url: 'https://sixchains.com.br/',
        repositorio: ''
    },
    {
        nome: "MOS Consultoria",
        tipo: "Website e Sistema",
        imgNome: "mos.png",
        projetoVideo: "https://www.youtube.com/embed/HIJjQfrDr0w?si=TeIR_2XC6t6iGLS6",
        width: "1200",
        descricao: "Este site e sistema foram desenvolvidos para a MOS Consultoria, integrando funcionalidades essenciais, como uma agenda para gerenciamento de compromissos e uma plataforma de comentários entre sindicatos. Além disso, foram implementadas notificações em tempo real via WebSocket, garantindo que os usuários recebam atualizações imediatas.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoVue,
            IconSkillsLogoNuxt,
            IconSkillsLogoVuetify,
            IconSkillsLogoTailwind
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js',
            'Nuxt.js',
            'Vuetify',
            'Tailwind'
        ],
        url: 'https://mosconsultoria.com.br/',
        repositorio: ''
    },
    {
        nome: "CleanTube",
        tipo: "Sistema",
        imgNome: "cleantube.webp",
        projetoVideo: "https://www.youtube.com/embed/P_vSeQTrbEk?si=iz7de8l1ff3a2sxK",
        width: "1000",
        descricao: "Neste projeto, a autenticação via Google OAuth foi configurada pelo Google Cloud, permitindo que apenas usuários autorizados adicionem, editem ou excluam vídeos do YouTube. Os layouts foram criados com o Nuxt UI, que oferece templates prontos para agilizar o desenvolvimento. No backend, foi usado o Nitro integrado ao Nuxt 3, facilitando a configuração de rotas e funções server-side. O projeto também permite favoritar vídeos, que são armazenados localmente no navegador do usuário e também exibem os vídeos sem anúncios.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoTypeScript,
            IconSkillsLogoVue,
            IconSkillsLogoNuxt,
            IconSkillsLogoTailwind
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Vue.js',
            'Nuxt.js',
            'Tailwind'
        ],
        url: 'https://cleantube.vercel.app',
        repositorio: 'https://github.com/mauricio071/CleanTube'
    },
    {
        nome: "Products Store",
        tipo: "Website",
        imgNome: "products-store.webp",
        projetoVideo: "https://www.youtube.com/embed/zd63nYRRXAg?si=08-oycrwX9s6GoBs",
        width: "900",
        descricao: "Nesta aplicação de vendas de produtos, desenvolvida com Nuxt.js, foi feita a integração com uma API fictícia para listar e exibir os produtos. Foi implementado o plugin Pinia para garantir a persistência dos dados, assim, o carrinho de compras funciona de forma semelhante ao do AliExpress, mantendo os itens salvos no navegador mesmo após o usuário fechar a página ou atualizar.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoVue,
            IconSkillsLogoNuxt,
            IconSkillsLogoTailwind
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js',
            'Nuxt.js',
            'Tailwind'
        ],
        url: 'https://mauricio-products-store.netlify.app',
        repositorio: 'https://github.com/mauricio071/Mauricio-Products-Store'
    },
    {
        nome: "MoviesLib",
        tipo: "Website",
        imgNome: "movies-lib.webp",
        projetoVideo: "https://www.youtube.com/embed/qZFV3wbgdQo?si=0j_QbDwU1CdZ6PjA",
        width: "800",
        descricao: "Este projeto foi desenvolvido utilizando React.js e consome a API do themoviedb.org para listar os filmes com as melhores avaliações da história do cinema. Além disso, tem como pesquisar filmes atuais e acessar informações detalhadas, como sinopses, orçamento e duração.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoReact,
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'React.js'
        ],
        url: 'https://movies-lib-react.netlify.app',
        repositorio: 'https://github.com/mauricio071/MoviesLib'
    },
    {
        nome: "Project Costs",
        tipo: "Sistema",
        imgNome: "project-costs.webp",
        projetoVideo: "https://www.youtube.com/embed/bS2nScs_zp4?si=8P-NRN8t1REkZ02G",
        width: "900",
        descricao: "Este projeto, desenvolvido com o framework React.js, é um sistema para gerenciar o orçamento de projetos. Após cadastrar um projeto, o usuário pode adicionar múltiplos serviços dentro do projeto, cada um com informações detalhadas sobre seu custo. O sistema avisa o usuário com uma notificação se o valor total dos serviços ultrapassar o orçamento estabelecido. Além disso, o sistema permite a edição e exclusão de projetos e serviços conforme necessidade.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoReact,
            IconSkillsLogoNode,
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'React.js',
            'Node.js'
        ],
        url: 'https://project-costs.netlify.app',
        repositorio: 'https://github.com/mauricio071/project-costs'
    },
    {
        nome: "Tarefas Pinia",
        tipo: "Website",
        imgNome: "tarefas-pinia.webp",
        projetoVideo: "https://www.youtube.com/embed/2UXGRnyeMpM?si=e1R3DPcBGheFCuxt",
        width: "900",
        descricao: "Este projeto, desenvolvido com Vue 3, é uma aplicação de lista de tarefas que melhora a organização dos afazeres. Permite classificar cada tarefa como 'a fazer', 'marcado' ou 'completado'. O Pinia foi utilizado para gerenciar o estado da aplicação, mesmo depois de atualizar a página ou o fechar o navegador, os dados do usuário vão persistir no navegador.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoVue,
            IconSkillsLogoTailwind,
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js',
            'Tailwind'
        ],
        url: 'https://tarefas-pinia.netlify.app',
        repositorio: 'https://github.com/mauricio071/Pinia-todo-list'
    },
    {
        nome: "Make Your Burguer",
        tipo: "Sistema",
        imgNome: "make-your-burguer.webp",
        projetoVideo: "https://www.youtube.com/embed/_hOEV3CYhdA?si=cM3Q5Rvm-ncFeGHx",
        width: "900",
        descricao: "Esta aplicação, desenvolvida com Vue.js no front-end e Node.js no back-end, os usuários podem montar seus hambúrgueres personalizados e gerenciar os pedidos, incluindo a edição do status e a exclusão de pedidos.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoVue,
            IconSkillsLogoTailwind,
            IconSkillsLogoNode
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js',
            'Tailwind',
            'Node.js'
        ],
        url: 'https://make-your-burguer.netlify.app',
        repositorio: 'https://github.com/mauricio071/Make-Your-Burguer'
    },
    {
        nome: "Jogo da Forca",
        tipo: "Website",
        imgNome: "jogo-da-forca.png",
        projetoVideo: "https://www.youtube.com/embed/lvqXXpjiqxU?si=2SIUBsbDpECCc2HF",
        width: "900",
        descricao: "Neste projeto, foi desenvolvido um jogo da forca usando o Vue.js, com uma interface moderna e responsiva para poder jogar diretamente no navegador.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoVue,
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js'
        ],
        url: 'https://jogo-da-forca-vue.netlify.app',
        repositorio: 'https://github.com/mauricio071/jogo-da-forca'
    },
    {
        nome: "App de chamada de alunos",
        tipo: "Aplicativo",
        imgNome: "app-chamada.webp",
        projetoVideo: "",
        width: "900",
        descricao: "É uma aplicação mobile para controle de presença em aulas. Após o login com RA e senha, a aplicação mostra os dados do aluno, como nome, RA e localização atual. Com base nesses dados, verifica se há aula e, se estiver dentro do horário e localização corretos, permite registrar a presença.",
        tagsIcon: [
            IconSkillsLogoAndroid,
            IconSkillsLogoKotlin,
            IconSkillsLogoSqlite
        ],
        tags: [
            'Android',
            'Kotlin',
            'Sqlite'
        ],
        url: '',
        repositorio: 'https://github.com/mauricio071/Sistema-de-chamada'
    },
    {
        nome: "Sistema de leitor",
        tipo: "Sistema",
        imgNome: "sistema-leitor.webp",
        projetoVideo: "",
        width: "900",
        descricao: "Desenvolvida em Java, esta aplicação oferece funcionalidades básicas de gerenciamento de usuários, incluindo adição, edição, exclusão e listagem. As informações dos usuários são armazenadas em um banco de dados SQL.",
        tagsIcon: [
            IconSkillsLogoJava,
            IconSkillsLogoSql,
        ],
        tags: [
            'Java',
            'SQL',
        ],
        url: '',
        repositorio: 'https://github.com/mauricio071/cadastroLeitor_aluno_professor_e_adminitrativa'
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
        url: '',
        repositorio: ''
    },
]
