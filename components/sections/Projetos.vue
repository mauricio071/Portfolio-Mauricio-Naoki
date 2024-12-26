<template>
    <section id="projetos" class="section-background">
        <SvgWaveTop />
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                Projetos
            </h2>
            <div class="projects">
                <div @click="openModal(projeto)" v-for="(projeto, i) in visibleProjects" :key="i"
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
                    v-if="visibleProjects.length < projetos.length" @click="loadProjects" class="btn-more-projects">
                    Mais projetos
                </button>
                <a v-else href="https://github.com/mauricio071?tab=repositories" v-motion-slide-visible-once-bottom
                    :duration="500" target="_blank" rel="noreferrer" aria-label="GitHub" class="btn-more-projects">
                    Confira mais no GitHub
                </a>
            </div>
        </div>
        <Modal :isVisible="modal.isOpen" @close="closeModal">
            <ModalProjects :modal="modal" :isIframeLoaded="isIframeLoaded" />
        </Modal>
        <SvgWaveBottom />
    </section>
</template>

<script setup>
import { projetos } from '@/constants/projetos'
import ModalProjects from '../ModalProjects.vue';

const visibleProjects = shallowRef([]);
const projectsLimit = ref(9);

const isIframeLoaded = ref(false);

const loadProjects = () => {
    projectsLimit.value += 3
}

watchEffect(() => {
    visibleProjects.value = projetos.slice(0, projectsLimit.value)
})

const modal = ref({
    isOpen: false,
    nomeProjeto: '',
    tipoProjeto: '',
    imgProjeto: '',
    videoProjeto: '',
    widthProjeto: '',
    descricaoProjeto: '',
    tagsProjeto: [],
    urlProjeto: '',
    repositorioProjeto: ''
})

const openModal = (project) => {
    isIframeLoaded.value = false;

    if (project.nome === 'Em breve!') { return }
    clearModal();
    Object.assign(modal.value, {
        isOpen: true,
        nomeProjeto: project.nome,
        tipoProjeto: project.tipo,
        imgProjeto: project.imgNome,
        videoProjeto: project.projetoVideo,
        widthProjeto: project.width,
        descricaoProjeto: project.descricao,
        tagsProjeto: project.tags,
        urlProjeto: project.url,
        repositorioProjeto: project.repositorio
    })
}

const closeModal = () => {
    modal.value.isOpen = false
}

const clearModal = () => {
    modal.value = {
        isOpen: false,
        nomeProjeto: '',
        tipoProjeto: '',
        imgProjeto: '',
        videoProjeto: '',
        widthProjeto: '',
        descricaoProjeto: '',
        tagsProjeto: [],
        urlProjeto: '',
        repositorioProjeto: ''
    }
}
</script>

<style scoped>
.section-background {
    @apply relative;
    background: rgb(0, 191, 165);
    background: radial-gradient(circle, rgba(0, 191, 165, 0.02) 0%, rgba(0, 191, 165, 0.22) 100%);

    .projects {
        @apply grid items-center justify-center gap-6 md:grid-cols-2 xl:grid-cols-3;

        .project-card {
            @apply relative rounded-lg cursor-pointer overflow-hidden shadow-2xl bg-white max-w-[22rem] sm:max-w-[unset] z-[2];

            .project-img {
                @apply w-full aspect-video xl:h-[13.25rem] 2xl:h-[15rem];

                img {
                    @apply w-full h-full duration-300;
                }
            }

            .project-description {
                @apply duration-300 rounded-lg bg-[#000000B3] opacity-0 !text-white absolute w-full h-full top-0 p-8 flex flex-col justify-center items-center gap-3 border-[3px] border-primary;

                @screen sm {
                    @apply gap-5;
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
            }

            &:hover .project-description {
                @apply opacity-100;
            }

            &:hover img {
                @apply blur-[2px] scale-[1.03];
            }
        }
    }

    .btn-more-projects {
        @apply relative bg-primary text-white text-xl px-6 py-2 rounded-3xl shadow-2xl font-semibold duration-300 z-[2] lg:px-12 lg:py-3;

        &:hover {
            box-shadow: 0 0 10px #00bfa6,
                0 0 10px #00bfa6,
                0 0 40px #00bfa6
        }
    }
}
</style>