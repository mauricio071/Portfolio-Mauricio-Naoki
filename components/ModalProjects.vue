<template>
    <div class="card-modal">
        <h2 class="modal-title">{{ modal.nomeProjeto }}</h2>
        <h3 class="text-gray-500 mb-8 text-center font-semibold">{{ modal.tipoProjeto }}</h3>
        <div class="modal-content-description">
            <div class="modal-img">
                <iframe v-if="modal.videoProjeto"
                    :src="`${modal.videoProjeto}?controls=0&loop=1&autoplay=1&mute=1&rel=0`"
                    title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media"
                    @load="isIframeLoaded = true" allowfullscreen class="iframe-responsive">
                </iframe>
                <NuxtImg v-else :src="`/projetos/${modal.imgProjeto}`" :alt="modal.nomeProjeto" densities="x1"
                    :width="modal.widthProjeto" @load="isIframeLoaded = true" class="w-full rounded-lg" />

                <div v-if="!isIframeLoaded" class="skeleton-loader" />
            </div>
            <div class="info">
                <div>
                    <h3>Sobre o projeto:</h3>
                    <p class="max-h-[10rem] lg:max-h-[12rem] overflow-auto">{{ modal.descricaoProjeto }}</p>
                </div>
                <div>
                    <h3>Detalhes do projeto:</h3>
                    <div class="detalhes">
                        <p>
                            <span class="font-bold">Tecnologias: </span>
                            {{ modal.tagsProjeto.join(', ') }}
                        </p>
                        <div class="detalhes-links">
                            <template v-if="modal.urlProjeto && modal.urlProjeto.includes('instalador')">
                                <a :href="modal.urlProjeto" target="_blank" rel="noreferrer" aria-label="Instalador">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-[1.5rem] lg:w-[2rem]">
                                        <path fill-rule="evenodd"
                                            d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    Instalador
                                </a>
                            </template>
                            <template v-else>
                                <a v-if="modal.urlProjeto" :href="modal.urlProjeto" target="_blank" rel="noreferrer"
                                    aria-label="Projeto Online">
                                    <svg class="w-[1.5rem] lg:w-[2rem]" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                    Projeto Online
                                </a>
                            </template>
                            <a v-if="modal.repositorioProjeto" :href="modal.repositorioProjeto" target="_blank"
                                rel="noreferrer" aria-label="Repositório">
                                <svg class="w-[1.25rem] lg:w-[1.75rem]" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" stroke="none" viewBox="0 0 32 32">
                                    <path
                                        d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                                </svg>
                                Repositório
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { modal } = defineProps({
    modal: Object,
})

const isIframeLoaded = ref(false);
</script>

<style scoped>
::-webkit-scrollbar {
    @apply bg-[#f0fdfa] w-[.3rem];
}

::-webkit-scrollbar-thumb {
    @apply bg-primary rounded-[.3rem];
}

.card-modal {
    .modal-title {
        @apply text-lg font-bold text-center mb-2 sm:text-2xl;
    }

    .modal-content-description {
        @apply grid items-center gap-4 lg:grid-cols-2 lg:gap-8;

        .modal-img {
            @apply w-full relative;

            .iframe-responsive {
                @apply w-full rounded-lg aspect-video relative z-[10] max-h-[17rem] lg:max-h-[25rem];
            }

            img {
                @apply rounded-lg min-h-[10rem] lg:h-[22rem];
            }
        }

        .info {
            @apply space-y-4;

            h3 {
                @apply text-xl font-bold mb-3;
            }

            p {
                @apply text-sm lg:text-base;
            }

            .detalhes {
                @apply space-y-2;

                p {
                    @apply pb-3 border-b border-b-gray-300;
                }

                .detalhes-links {
                    @apply flex flex-wrap gap-3 pt-4 lg:flex-row;

                    @screen sm {
                        @apply gap-4;
                    }

                    a {
                        @apply flex items-center gap-2 text-sm font-semibold border-2 border-secondary rounded-xl px-2.5 py-2 text-secondary duration-200;

                        @screen md {
                            @apply px-4;
                        }

                        @screen lg {
                            @apply text-base;
                        }

                        &:hover {
                            @apply text-white bg-secondary;
                            box-shadow: 0 0 30px #00bfa6,
                                0 0 40px #00bfa6;

                            span {
                                @apply text-white;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>