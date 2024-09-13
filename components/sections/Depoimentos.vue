<template>
    <section id="depoimentos">
        <div class="wrapper">
            <div class="px-4">
                <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                    Depoimentos
                </h2>
                <div v-motion-fade-visible-once :duration="700" :delay="500" class="depoimentos">
                    <carousel :items-to-show="1" :breakpoints="breakpoints" wrapAround pauseAutoplayOnHover>
                        <!-- :autoplay="7000" -->
                        <slide v-for="(depoimento, i) in depoimentos" :key="i">
                            <div class="depoimento-container">
                                <div class="depoimento-pessoa">
                                    <NuxtImg :src="`/depoimentos/${depoimento.foto}.webp`" :alt="depoimento.nome"
                                        densities="x1" sizes="120 lg:70" />
                                    <div class="depoimento-info">
                                        <h2 class="text-lg font-bold">{{ depoimento.nome }}</h2>
                                        <h3 class="text-gray-500 font-semibold text-sm">{{ depoimento.empresa }}
                                        </h3>
                                    </div>
                                </div>
                                <p class="text-sm lg:flex-grow lg:text-start lg:pl-[0.45rem] lg:text-base">
                                    {{ depoimento.descricao }}
                                </p>
                                <div class="ratings">
                                    <Icon v-for="i in 5" :key="i" name="mdi:star" class="text-[#ffc107]" />
                                </div>
                            </div>
                        </slide>

                        <template #addons>
                            <pagination class="mt-8" />
                        </template>
                    </carousel>
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
.depoimento-container {
    @apply flex flex-col items-center space-y-4 p-4 relative pb-4;

    @screen lg {
        @apply items-start max-w-[25rem] my-8 min-h-[22.5rem];
        box-shadow: 0 3px 11px rgba(0, 0, 0, 0.2);
    }

    @screen xl {
        @apply max-w-[30rem] min-h-[unset];
    }

    @screen 2xl {
        @apply max-w-[35rem];
    }
}

.depoimento-container::before,
.depoimento-container::after {
    @apply content-[''] absolute w-[90px] h-[90px];
}

.depoimento-container::before {
    @apply left-0 top-0 border-t-[5px] border-t-primary border-l-[5px] border-l-primary;
}

.depoimento-container::after {
    @apply right-0 bottom-0 border-b-[5px] border-b-primary border-r-[5px] border-r-primary;
}

.depoimento-pessoa {
    @apply flex flex-col items-center gap-4 lg:flex-row lg:pl-1;
}

.depoimento-pessoa img {
    @apply rounded-[50%];
}

.depoimento-info {
    @apply lg:flex lg:flex-col lg:items-start;
}

.ratings {
    @apply flex gap-1 lg:pl-1;
}

.ratings span {
    @apply w-[24px] h-[24px];
}

:deep(.carousel__pagination) {
    @apply flex items-center gap-4;
}

:deep(.carousel__pagination-button::after) {
    @apply content-[''] w-3 h-3 rounded-[50%];
}

:deep(.carousel__pagination-button--active::after) {
    @apply bg-primary;
}

:deep(.carousel__pagination-button--active) {
    @apply rounded-[50%];
    border: 2px solid #00bfa6;
}

:deep(.carousel__pagination-button:hover::after) {
    @apply bg-primary duration-300;
}
</style>