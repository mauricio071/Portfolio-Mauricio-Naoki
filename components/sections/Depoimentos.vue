<template>
    <section id="depoimentos">
        <div class="wrapper pb-0">
            <div class="px-4">
                <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title lg:mb-14">
                    Depoimentos
                </h2>
                <div v-motion-fade-visible-once :duration="700" :delay="500" class="depoimentos">
                    <client-only>
                        <carousel :items-to-show="1" :breakpoints="breakpoints" wrapAround pauseAutoplayOnHover
                            :autoplay="0">
                            <slide v-for="(depoimento, i) in depoimentos" :key="i" class="mb-10">
                                <div class="depoimento-container">
                                    <div class="depoimento-pessoa">
                                        <NuxtImg :src="`/depoimentos/${depoimento.foto}.webp`" :alt="depoimento.nome"
                                            loading="lazy" densities="x1" sizes="250 lg:70"
                                            class="max-w-[120px] lg:w-[70px]" />
                                        <div class="depoimento-info">
                                            <h2 class="text-lg font-bold">{{ depoimento.nome }}</h2>
                                            <h3 class="text-gray-700 font-bold text-sm">{{ depoimento.empresa }}</h3>
                                            <p class="text-gray-500 font-semibold text-sm">{{ depoimento.cargo }}</p>
                                        </div>
                                    </div>
                                    <IconQuote class="absolute right-[2rem] !mt-0 hidden sm:block" />
                                    <p class="text-sm lg:flex-grow lg:text-start lg:pl-[0.45rem] lg:text-base">
                                        {{ depoimento.descricao }}
                                    </p>
                                    <div class="ratings">
                                        <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24" fill="#ffc107">
                                            <path fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </slide>

                            <template #addons>
                                <pagination />
                            </template>
                        </carousel>
                    </client-only>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { depoimentos } from '@/constants/depoimentos'

const breakpoints = {
    1024: {
        itemsToShow: 2,
        snapAlign: 'center-[odd|even]',
    },
}
</script>

<style scoped>
:deep(.carousel) {
    .carousel__pagination {
        @apply flex items-center gap-3.5 bottom-[-1.25rem] lg:bottom-[0];

        .carousel__pagination-button {
            @apply w-3 h-3 rounded-[50%] text-[#6affeb];

            &:hover {
                @apply bg-primary duration-300;
            }
        }

        .carousel__pagination-button--active {
            @apply rounded-[50%] bg-primary;


            &::before {
                @apply content-[''] bg-transparent block w-6 h-6 rounded-[50%];
                border: 2px solid #00bfa6;
                transform: translate(-25%, -25%);
            }
        }
    }
}

.depoimento-container {
    @apply flex flex-col items-center space-y-4 p-4 relative pb-4;

    @screen lg {
        @apply items-start max-w-[27rem] my-8 min-h-[22.75rem] p-8;
        box-shadow: 0 3px 11px rgba(0, 0, 0, 0.2);
    }

    @screen xl {
        @apply max-w-[33rem] p-7 min-h-[20rem];
    }

    @screen 2xl {
        @apply max-w-[35rem] p-6;
    }

    &::before,
    &::after {
        @apply content-[''] absolute w-[90px] h-[90px];
    }

    &::before {
        @apply left-0 top-0 border-t-[5px] border-t-primary border-l-[5px] border-l-primary;
    }

    &::after {
        @apply right-0 bottom-0 border-b-[5px] border-b-primary border-r-[5px] border-r-primary;
    }

    .depoimento-pessoa {
        @apply flex flex-col items-center gap-4 lg:flex-row lg:pl-1;

        img {
            @apply rounded-[50%];
        }

        .depoimento-info {
            @apply flex flex-col gap-0.5 justify-center items-center lg:items-start;
        }
    }

    .ratings {
        @apply flex gap-1 lg:pl-1;

        svg {
            @apply w-[24px] h-[24px];
        }
    }
}
</style>