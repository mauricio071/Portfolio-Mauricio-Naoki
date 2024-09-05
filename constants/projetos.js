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

export const projetos = [
    {
        nome: "Sixchains Digital House",
        tipo: "Website",
        imgNome: "six-chains-thumb",
        descricao: "Este site foi desenvolvido para a empresa Sixchains Digital House, onde fui responsável pelo desenvolvimento front-end. O projeto foi otimizado com técnicas de SEO para garantir um melhor posicionamento nos resultados de busca do Google, aumentando a visibilidade online da empresa.",
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
        imgNome: "mos",
        descricao: "Este site e sistema foram desenvolvidos para a MOS Consultoria, com a integração de funcionalidades essenciais, como agenda, plataforma de comentários entre sindicatos e notificações em tempo real via WebSocket.",
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
        nome: "Loja de produtos",
        tipo: "Website",
        imgNome: "loja-produtos",
        descricao: "Nesta aplicação de vendas, foi desenvolvido um site utilizando Nuxt.js, com integração do plugin Pinia para garantir a persistência dos dados. Mesmo ao recarregar a página, as informações do carrinho de compras são mantidas.",
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
        nome: "Make Your Burguer",
        tipo: "Website",
        imgNome: "make-your-burguer",
        descricao: "Esta aplicação, desenvolvida com Vue.js, permite aos usuários montar seus hambúrgueres personalizados e gerenciar todos os pedidos, incluindo funcionalidades de edição e exclusão.",
        tagsIcon: [
            IconSkillsLogoHtml,
            IconSkillsLogoCss,
            IconSkillsLogoJavascript,
            IconSkillsLogoVue,
            IconSkillsLogoTailwind
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'Vue.js',
            'Tailwind'
        ],
        url: 'https://make-your-burguer.netlify.app',
        repositorio: 'https://github.com/mauricio071/Make-Your-Burguer'
    },
    {
        nome: "Youtube Vídeos",
        tipo: "Website",
        imgNome: "youtube-videos",
        descricao: "Neste projeto, foi desenvolvido um sistema para o gerenciamento de vídeos do YouTube. O sistema permite adicionar vídeos, fornecendo opções para inserir links e nomes. Além disso, os usuários podem visualizar todos os vídeos adicionados, favoritar e manter essa seleção mesmo após recarregar a página, com a utilização do plugin Pinia para persistência de dados.",
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
        url: 'https://nuxt3-youtube-videos.vercel.app/login',
        repositorio: 'https://github.com/mauricio071/Nuxt3-Youtube-Videos'
    },
    {
        nome: "Aplicativo de chamada de alunos",
        tipo: "Aplicativo",
        imgNome: "app-chamada",
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
        nome: "Cadastro de leitor",
        tipo: "Sistema",
        imgNome: "cadastro-aluno",
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
        imgNome: "em-breve",
        descricao: "",
        tagsIcon: [],
        tags: [],
        url: '',
        repositorio: ''
    },
    {
        nome: "Em breve!",
        tipo: "",
        imgNome: "em-breve",
        descricao: "",
        tagsIcon: [],
        tags: [],
        url: '',
        repositorio: ''
    },
]
