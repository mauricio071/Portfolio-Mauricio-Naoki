<template>
    <div class="card-modal">
        <h2 class="project-title">{{ modal.projectName }}</h2>
        <h3 class="project-type">{{ modal.projectType }}</h3>
        <div class="modal-content-description">
            <div class="modal-img">
                <iframe v-if="modal.projectVideo"
                    :src="`${modal.projectVideo}?controls=0&loop=1&autoplay=1&mute=1&rel=0`"
                    title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media"
                    @load="isIframeLoaded = true" allowfullscreen class="iframe-responsive">
                </iframe>
                <NuxtImg v-else :src="`/projetos/${modal.projectImage}`" :alt="modal.projectName" loading="lazy"
                    densities="x1" :width="modal.projectWidth" @load="isIframeLoaded = true" />
                <div v-if="!isIframeLoaded" class="skeleton-loader" />
            </div>
            <div class="info">
                <div>
                    <h3>Sobre o projeto:</h3>
                    <p class="project-description">{{ modal.projectDescription }}</p>
                </div>
                <div>
                    <h3>Detalhes do projeto:</h3>
                    <div class="details">
                        <p>
                            <span>Tecnologias: </span>
                            {{ modal.projectTechnologies.join(', ') }}
                        </p>
                        <div class="details-links">
                            <template v-if="modal.projectUrl && modal.projectUrl.includes('instalador')">
                                <a :href="modal.projectUrl" target="_blank" rel="noreferrer" aria-label="Instalador">
                                    <IconInstaller class="live-example" />
                                    Instalador
                                </a>
                            </template>
                            <template v-else>
                                <a v-if="modal.projectUrl" :href="modal.projectUrl" target="_blank" rel="noreferrer"
                                    aria-label="Projeto Online">
                                    <IconOnline class="live-example" />
                                    Projeto Online
                                </a>
                            </template>
                            <a v-if="modal.projectRepository" :href="modal.projectRepository" target="_blank"
                                rel="noreferrer" aria-label="Repositório">
                                <IconRepository class="repository" />
                                Repositório
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProjectModalType } from '@/interfaces/ProjectsType';

const { modal } = defineProps<{ modal: ProjectModalType }>();

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
    .project-title {
        @apply text-lg font-bold text-center mb-2 sm:text-2xl;
    }

    .project-type {
        @apply text-gray-500 mb-8 text-center font-semibold;
    }

    .modal-content-description {
        @apply grid items-center gap-4;

        @screen lg {
            @apply grid-cols-2 gap-8;
        }

        .modal-img {
            @apply w-full relative;

            .iframe-responsive {
                @apply relative w-full aspect-video rounded-lg z-[10] max-h-[17rem] lg:max-h-[25rem];
            }

            img {
                @apply w-full rounded-lg min-h-[10rem] lg:h-[22rem];
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

            .project-description {
                @apply overflow-auto max-h-[10rem] lg:max-h-[12rem];
            }

            .details {
                @apply space-y-2;

                p {
                    @apply pb-3 border-b border-b-gray-300;

                    >span {
                        @apply font-bold;
                    }
                }

                .details-links {
                    @apply flex flex-wrap gap-3 pt-4 sm:gap-4 lg:flex-row;

                    a {
                        @apply relative flex items-center gap-2 text-sm font-semibold border-2 border-secondary rounded-lg px-2.5 py-2 text-secondary duration-300 z-[1];

                        @screen md {
                            @apply px-4 text-base;
                        }

                        &::before {
                            @apply content-[""] absolute w-0 h-full top-0 left-0 bg-secondary -z-[1] duration-500;
                        }

                        &:hover {
                            @apply text-white;
                            box-shadow: 0 0 20px #00bfa6,
                                0 0 20px #00bfa6;

                            &::before {
                                @apply w-full;
                            }

                            span {
                                @apply text-white;
                            }
                        }

                        svg {
                            &.live-example {
                                @apply w-[1.5rem] lg:w-[2rem];
                            }

                            &.repository {
                                @apply w-[1.25rem] lg:w-[1.75rem];
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>