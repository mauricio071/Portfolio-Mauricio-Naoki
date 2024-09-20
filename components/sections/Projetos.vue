<template>
    <section id="projetos" class="background-diagonal">
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                Projetos
            </h2>

            <div class="projetos">
                <div @click="abrirModal(projeto)" v-for="(projeto, i) in projetosVisiveis" :key="i"
                    v-motion-slide-visible-once-bottom :delay="i * 100" :duration="600" class="project-card">
                    <div class="project-img">
                        <NuxtImg :src="`/projetos/${projeto.imgNome}`" :alt="projeto.nome" densities="x1"
                            :width="projeto.width" class="rounded-lg" />
                    </div>
                    <div class="project-description">
                        <h2 class="project-name">{{ projeto.nome }}</h2>
                        <h3 class="project-type">{{ projeto.tipo }}</h3>
                        <div class="flex items-center gap-3">
                            <component v-for="(logo, index) in projeto.tagsIcon" :is="logo" :key="index" class="logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-12">
                <button v-motion-slide-visible-once-bottom :duration="500"
                    v-if="projetosVisiveis.length < projetos.length" @click="carregarMaisProjetos"
                    class="btn-carregar-mais">
                    Mais projetos
                </button>
            </div>
        </div>
        <Modal :isVisible="modal.isOpen" @close="fecharModal">
            <div class="card-modal">
                <h2 class="modal-title">{{ modal.nomeProjeto }}</h2>
                <h3 class="text-gray-500 mb-4 text-center font-semibold">{{ modal.tipoProjeto }}</h3>
                <div class="modal-content-description">
                    <div class="modal-img">
                        <NuxtImg :src="`/projetos/${modal.imgProjeto}`" :alt="modal.nomeProjeto" densities="x1"
                            :width="modal.widthProjeto" class="w-full" />
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
                                    <a v-if="modal.urlProjeto" :href="modal.urlProjeto" target="_blank" rel="noreferrer"
                                        aria-label="Projeto Online">
                                        <Icon name="mdi:web" class="text-secondary w-6 h-6 lg:w-8 lg:h-8" />
                                        <!-- <svg class="w-[1.5rem] lg:w-[2rem]" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg> -->
                                        Projeto Online
                                    </a>
                                    <a v-if="modal.repositorioProjeto" :href="modal.repositorioProjeto" target="_blank"
                                        rel="noreferrer" aria-label="Repositório">
                                        <Icon name="mdi:github" class="text-secondary w-6 h-6 lg:w-8 lg:h-8" />
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
import { projetos } from '@/constants/projetos'

const projetosVisiveis = shallowRef([])
const limiteProjetos = ref(9)

const carregarMaisProjetos = () => {
    limiteProjetos.value += 3
}

watchEffect(() => {
    projetosVisiveis.value = projetos.slice(0, limiteProjetos.value)
})

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
    if (projeto.nome === 'Em breve!') { return }
    limparModalInfo()
    Object.assign(modal.value, {
        isOpen: true,
        nomeProjeto: projeto.nome,
        tipoProjeto: projeto.tipo,
        imgProjeto: projeto.imgNome,
        widthProjeto: projeto.width,
        descricaoProjeto: projeto.descricao,
        tagsProjeto: projeto.tags,
        urlProjeto: projeto.url,
        repositorioProjeto: projeto.repositorio
    })
}

const fecharModal = () => {
    modal.value.isOpen = false
}

const limparModalInfo = () => {
    modal.value = {
        isOpen: false,
        nomeProjeto: '',
        tipoProjeto: '',
        descricaoProjeto: '',
        tagsProjeto: [],
        urlProjeto: '',
        repositorioProjeto: ''
    }
}
</script>

<style scoped>
.background-diagonal {
    /* @apply relative bg-[#e0f7f2]; */
    @apply relative;

    background: rgb(0, 191, 165);
    background: radial-gradient(circle, rgba(0, 191, 165, 0.04) 0%, rgba(0, 191, 165, 0.22) 100%);
}

/* .background-diagonal:after {
    @apply content-[''] absolute w-full h-full bg-[#e0f7f2] top-[-1rem] right-0 bottom-0 left-0 origin-top-left skew-y-[4deg] 2xl:top-[-3rem];
} */

.projetos {
    @apply grid items-center justify-center gap-6 md:grid-cols-2 xl:grid-cols-3;
}

.project-card {
    @apply relative rounded-lg cursor-pointer overflow-hidden shadow-2xl bg-white max-w-[22rem] sm:max-w-[unset] z-[2];
}

.project-card .project-img {
    @apply w-full h-[12.5rem] lg:h-[15rem] xl:h-[13.5rem] 2xl:h-[15rem];
}

.project-description {
    @apply duration-300 rounded-lg bg-[#000000B3] opacity-0 !text-white absolute w-full h-full top-0 p-8 flex flex-col justify-center items-center gap-3 border-[3px] border-primary;

    @screen sm {
        @apply gap-5;
    }
}

.project-name {
    @apply text-white font-bold text-center text-xl lg:text-2xl;
}

.project-type {
    @apply text-primary lg:text-xl;
}

.logo {
    @apply h-6 w-6 sm:h-8 sm:w-8;
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
    @apply text-lg font-bold text-center mb-2 sm:text-2xl;
}

.modal-content-description {
    @apply flex flex-col items-center gap-4 lg:flex-row lg:gap-8;
}

.modal-img {
    @apply lg:w-[55%];
}

.modal-img img {
    @apply rounded-lg lg:h-[22rem];
}

.info {
    @apply space-y-4 lg:w-[45%];
}

.info h3 {
    @apply text-xl font-bold mb-3;
}

.info p {
    @apply text-sm lg:text-base;
}

.detalhes {
    @apply space-y-2;
}

.detalhes p {
    @apply pb-3 border-b border-b-gray-300;
}

.detalhes-links {
    @apply flex flex-wrap gap-4 pt-4 lg:flex-row;
}

.detalhes-links a {
    @apply flex items-center gap-2 text-sm border-2 border-secondary rounded-xl px-2 py-1 text-secondary duration-200;

    @screen md {
        @apply px-4 py-2 font-semibold;
    }

    @screen lg {
        @apply text-base;
    }
}

.detalhes-links a:hover {
    @apply border-white text-white bg-secondary;
}

.detalhes-links a:hover span {
    @apply text-white;
}

.btn-carregar-mais {
    @apply relative bg-primary text-white text-xl px-6 py-2 rounded-3xl shadow-2xl font-semibold duration-300 z-[2] lg:px-12 lg:py-3;
}

.btn-carregar-mais:hover {
    box-shadow: 0 0 10px #00bfa6,
        0 0 10px #00bfa6,
        0 0 40px #00bfa6
}
</style>