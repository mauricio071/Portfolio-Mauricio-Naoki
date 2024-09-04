<template>
    <section id="projetos" class="background-diagonal">
        <div class="container mx-auto">
            <div class="px-4">
                <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                    Projetos
                </h2>
                <div class="projetos">
                    <div @click="abrirModal(projeto)" v-for="(projeto, i) in projetos" :key="i"
                        v-motion-slide-visible-once-bottom :delay="i * 100" :duration="500" class="project-card z-[2]">
                        <div class="project-img">
                            <img :src="`/projetos/${projeto.imgNome}.png`" :alt="projeto.nome"
                                class="w-full rounded-lg">
                        </div>
                        <div class="project-description">
                            <h2 class="project-name">{{ projeto.nome }}</h2>
                            <h3 class="project-type">{{ projeto.tipo }}</h3>
                            <div class="tags flex items-center gap-3">
                                <component v-for="(logo, index) in projeto.tagsIcon" :is="logo" :key="index"
                                    class="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal :isVisible="modal.isOpen" @close="fecharModal">
            <div class="card-modal">
                <h2 class="modal-title">{{ modal.nomeProjeto }}</h2>
                <h3 class="text-gray-500 mb-4 text-center font-semibold">{{ modal.tipoProjeto }}</h3>
                <div class="modal-content-description">
                    <div class="modal-img">
                        <img :src="`/projetos/${modal.imgProjeto}.png`" :alt="modal.nomeProjeto" class="w-full">
                    </div>
                    <div class="info">
                        <div>
                            <h3>Sobre o projeto:</h3>
                            <p>{{ modal.descricaoProjeto }}</p>
                        </div>
                        <div>
                            <h3>Detalhes do projeto:</h3>
                            <div class="detalhes">
                                <p>
                                    <span class="font-bold">Tecnologias: </span>
                                    {{ modal.tagsProjeto.join(', ') }}
                                </p>
                                <div class="detalhes-links">
                                    <a v-if="modal.urlProjeto" :href="modal.urlProjeto" target="_blank"
                                        rel="noreferrer">
                                        <Icon name="mdi:web" class="text-[2rem] text-secondary" />
                                        Projeto Online
                                    </a>
                                    <a v-if="modal.repositorioProjeto" :href="modal.repositorioProjeto" target="_blank"
                                        rel="noreferrer">
                                        <Icon name="mdi:github" class="text-[2rem] text-secondary" />
                                        Repositório
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    </section>
</template>

<script setup>
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

const projetos = [
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

const modal = ref({
    isOpen: false,
    nomeProjeto: '',
    tipoProjeto: '',
    descricaoProjeto: '',
    tagsProjeto: [],
    urlProjeto: '',
    repositorioProjeto: ''
})

const abrirModal = (projeto) => {
    if (projeto.nome === 'Em breve!') {
        return
    }
    limparModalInfo()
    modal.value.isOpen = true
    modal.value.nomeProjeto = projeto.nome
    modal.value.tipoProjeto = projeto.tipo
    modal.value.imgProjeto = projeto.imgNome
    modal.value.descricaoProjeto = projeto.descricao
    modal.value.tagsProjeto = projeto.tags
    modal.value.urlProjeto = projeto.url
    modal.value.repositorioProjeto = projeto.repositorio
}

const fecharModal = () => {
    modal.value.isOpen = false
}

const limparModalInfo = () => {
    modal.value.nomeProjeto = ''
    modal.value.tipoProjeto = ''
    modal.value.descricaoProjeto = ''
    modal.value.tagsProjeto = ''
    modal.value.urlProjeto = ''
    modal.value.repositorioProjeto = ''
}
</script>

<style scoped>
.background-diagonal {
    @apply relative;
}

.background-diagonal:after {
    @apply absolute w-full h-full bg-[#e0f7f2] top-[-3rem] right-0 bottom-0 left-0;
    content: "";
    transform-origin: top left;
    transform: skewY(4deg)
}

.projetos {
    @apply grid items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-3;
}

.project-card {
    @apply relative rounded-lg cursor-pointer overflow-hidden shadow-xl bg-white;

    @screen sm {
        @apply max-w-[25rem];
    }
}

.project-card .project-img {
    @apply w-full h-[10rem];

    @screen xl {
        @apply h-[14rem];
    }
}

.project-description {
    @apply duration-300 rounded-lg bg-[#000000B3] opacity-0 !text-white absolute w-full h-full top-0 p-8 flex flex-col justify-center items-center gap-3 border-[3px] border-primary;

    @screen sm {
        @apply gap-5;
    }
}

.project-description .logo {
    @apply h-6 w-6;

    @screen sm {
        @apply h-8 w-8;
    }
}

.project-name {
    @apply text-white font-bold text-center;

    @screen lg {
        @apply text-2xl;
    }
}

.project-type {
    @apply text-primary;

    @screen lg {
        @apply text-xl;
    }
}

.project-card:hover .project-description {
    @apply opacity-100;
}

.project-card img {
    @apply duration-300 h-full w-full;
}

.project-card:hover img {
    @apply blur-[2px] scale-[1.03];
}

.card-modal .modal-title {
    @apply text-lg font-bold text-center mb-2;

    @screen sm {
        @apply text-2xl;
    }
}

.card-modal .modal-content-description {
    @apply flex flex-col gap-4;

    @screen lg {
        @apply flex-row gap-8;
    }
}

.modal-content-description .modal-img {
    @screen lg {
        @apply w-[55%]
    }
}

.modal-content-description img {
    @apply rounded-lg;

    @screen lg {
        @apply h-[22rem]
    }
}

.modal-content-description .info {
    @apply space-y-4;

    @screen lg {
        @apply w-[45%]
    }
}

.info h3 {
    @apply text-xl font-bold mb-3;
}

.info p {
    @apply text-sm;

    @screen md {
        @apply text-base;
    }
}

.info .detalhes {
    @apply space-y-2;
}

.detalhes p {
    @apply pb-3 border-b border-b-gray-300;
}

.detalhes-links {
    @apply flex flex-wrap gap-4 pt-4;

    @screen lg {
        @apply flex-row;
    }
}

.detalhes-links a {
    @apply flex items-center gap-2 border-2 border-secondary rounded-xl px-2 py-1 text-secondary duration-200;

    @screen md {
        @apply px-4 py-2 font-semibold;
    }
}

.detalhes-links a:hover {
    @apply border-white text-white bg-secondary;
}

.detalhes-links a:hover span {
    @apply text-white;
}

:deep(.v-overlay-container) .v-overlay__content {
    @apply !p-40;
}

.v-dialog>.v-overlay__content {

    margin: 60rem !important;
}
</style>