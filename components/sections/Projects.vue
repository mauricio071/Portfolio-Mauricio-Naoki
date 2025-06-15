<template>
    <section id="projects" class="section-background">
        <WaveSvgWaveTop />
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                {{ $t("projects.title") }}
            </h2>
            <div class="projects">
                <div @click="openModal(project)" v-for="(project, i) in visibleProjects" :key="i"
                    v-motion-slide-visible-once-bottom :delay="delayVisible(i)" :duration="750" class="project-card">
                    <div class="project-img">
                        <NuxtImg :src="`/projetos/${project.imgName}`" :alt="project.name" loading="lazy" densities="x1"
                            :width="project.width" />
                    </div>
                    <div class="project-description">
                        <h2>{{ project.name !== "Em breve!" ? project.name : $t("projects.soon") }}</h2>
                        <h3>{{ $t(`projects.${project.id}.type`) }}</h3>
                        <div class="technologies">
                            <component v-for="(technology, i) in project.technologies" :is="iconMap[technology]"
                                :key="i" class="logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-more-container">
                <button v-if="visibleProjects.length < projects.length" @click="loadProjects"
                    v-motion-slide-visible-once-bottom :duration="400" class="btn-more-projects">
                    {{ $t("projects.moreProjects") }}
                </button>
                <a v-else href="https://github.com/mauricio071?tab=repositories" target="_blank" rel="noreferrer"
                    aria-label="GitHub" v-motion-slide-visible-once-bottom :duration="400" class="btn-more-projects">
                    {{ $t("projects.moreGitHub") }}
                </a>
            </div>
        </div>
        <LazyModal :isVisible="modal.isOpen" @close="modal.isOpen = false">
            <LazyModalProjects :modal="modal" />
        </LazyModal>
        <WaveSvgWaveBottom />
    </section>
</template>

<script setup lang="ts">
import { projects } from '@/constants/projects';
import type { ProjectModalType, ProjectType } from '@/interfaces/ProjectsType';

const visibleProjects = shallowRef<ProjectType[]>([]);
const projectsLimit = ref(9);

const loadProjects = () => {
    projectsLimit.value += 3;
};

watchEffect(() => {
    visibleProjects.value = projects.slice(0, projectsLimit.value);
});

const modal = ref<ProjectModalType>({
    isOpen: false,
    projectId: "",
    projectName: "",
    projectType: "",
    projectImage: "",
    projectVideo: "",
    projectWidth: "",
    projectDescription: "",
    projectTechnologies: [],
    projectUrl: "",
    projectRepository: ""
});

const openModal = (project: ProjectType) => {
    if (project.name === 'Em breve!') { return }

    clearModal();

    Object.assign(modal.value, {
        isOpen: true,
        projectId: project.id,
        projectName: project.name,
        projectType: project.type,
        projectImage: project.imgName,
        projectVideo: project.projectVideo,
        projectWidth: project.width,
        projectDescription: project.description,
        projectTechnologies: project.technologies,
        projectUrl: project.url,
        projectRepository: project.repository
    });
};

const clearModal = () => {
    modal.value = {
        isOpen: false,
        projectId: "",
        projectName: "",
        projectType: "",
        projectImage: "",
        projectVideo: "",
        projectWidth: "",
        projectDescription: "",
        projectTechnologies: [],
        projectUrl: "",
        projectRepository: ""
    }
};

const delayVisible = (i: number) => {
    if (i < 9) {
        return i * 100;
    } else {
        return ((i % 3) + 1) * 115;
    }
}
</script>

<style scoped>
.section-background {
    @apply relative;
    background: radial-gradient(circle, rgba(0, 191, 165, 0.02) 0%, rgba(0, 191, 165, 0.22) 100%);

    .wrapper {
        @apply py-3;

        .projects {
            @apply grid items-center justify-center gap-8 md:grid-cols-2 xl:grid-cols-3;

            .project-card {
                @apply relative bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer z-[2] max-w-[22rem] sm:max-w-[unset];

                .project-img {
                    @apply w-full aspect-video xl:h-[13.25rem] 2xl:h-[15rem];

                    img {
                        @apply w-full h-full rounded-lg duration-300;
                    }
                }

                .project-description {
                    @apply bg-[#000000B3] absolute w-full h-full top-0 flex flex-col justify-center items-center p-8 opacity-0 !text-white duration-300 gap-5;

                    h2 {
                        @apply text-white font-bold text-center text-xl 2xl:text-2xl;
                    }

                    h3 {
                        @apply text-primary text-lg 2xl:text-xl;
                    }

                    .technologies {
                        @apply flex items-center gap-3;

                        .logo {
                            @apply h-7 w-7;

                            @screen 2xl {
                                @apply h-8 w-8;
                            }
                        }
                    }
                }

                &:hover {
                    box-shadow: 0 0 15px #00bfa6,
                        0 0 15px #00bfa6,
                        0 0 15px #00bfa6,
                        0 0 15px #00bfa6;

                    .project-description {
                        @apply opacity-100;
                    }

                    img {
                        @apply blur-[2px] scale-[1.03];
                    }
                }
            }
        }
    }

    .btn-more-container {
        @apply flex justify-center mt-12;

        .btn-more-projects {
            @apply relative text-white text-xl px-8 py-3 rounded-3xl shadow-2xl font-semibold duration-300 z-[2];
            background-image: -webkit-linear-gradient(top,
                    rgba(0, 191, 165, 0.3),
                    #00bfa6);

            &:hover {
                box-shadow: 0 0 20px #00bfa6,
                    0 0 20px #00bfa6;
            }

            @screen lg {
                @apply px-12;
            }
        }
    }
}
</style>