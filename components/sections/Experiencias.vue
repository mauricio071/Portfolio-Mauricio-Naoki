<template>
    <section id="experiencias" class="dark:bg-[#444]">
        <div class="wrapper">
            <div>
                <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                    Experiências
                </h2>
                <div class="timeline">
                    <div v-for="(empresa, i) in empresas" :key="i" class="content">
                        <div v-motion-pop-visible-once class="timeline-icon">
                            <Icon name="mdi:briefcase" />
                        </div>
                        <div v-motion-pop-visible-once :duration="700" class="timeline-card">
                            <h1 class="text-xl font-extrabold mb-2 sm:text-2xl">{{ empresa.nome }}</h1>
                            <h2 class="font-bold text-[#8a8a8a] sm:text-lg">{{ empresa.cargo }}</h2>
                            <p class="text-sm my-4 sm:text-lg">{{ empresa.descricao }}</p>
                            <h3 class="text-lg font-extrabold mb-3 text-[#0097a7] sm:text-xl">Tecnologias:</h3>
                            <div class="tecnologias flex items-center gap-2">
                                <component v-for="(logo, index) in empresa.tecnologias" :is="logo" :key="index"
                                    class="max-w-[2rem]" />
                            </div>
                            <span class="block font-bold text-[#b0b0b0] mt-4 xl:hidden">
                                {{ empresa.data }}
                            </span>
                            <span class="content-arrow"></span>
                        </div>
                        <span v-motion-pop-visible-once class="company-date">{{ empresa.data }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { empresas } from '@/constants/empresas';
</script>

<style scoped>
.timeline {
    @apply relative;

    &::after {
        @apply content-[''] absolute w-[4px] h-full top-0 left-[12px] ml-[-3px] z-[1] lg:left-[8px] xl:left-[50%];

        background-image: -webkit-linear-gradient(top,
                #00bfa6,
                rgba(0, 191, 165, 0.7) 80%,
                transparent 100%);
    }

    .content {
        @apply w-full py-8 relative xl:w-[50%];

        &:nth-of-type(odd) {
            @apply left-0 pl-[55px] pr-0 xl:pl-0 xl:pr-[55px] 2xl:pr-[73px];
        }

        &:nth-of-type(even) {
            @apply left-0 pr-0 pl-[55px] xl:left-[50%] 2xl:pl-[73px];
        }

        .timeline-icon {
            @apply absolute flex justify-center items-center w-12 h-12 right-[-31px] top-[32px] z-[10] text-white rounded-[50%] text-2xl;

            background-image: -webkit-linear-gradient(top,
                    rgb(116, 226, 212),
                    #00bfa6);

            @screen lg {
                @apply w-16 h-16 !left-[-26px];
            }
        }

        .timeline-card {
            @apply shadow-2xl px-5 py-7 rounded-lg border-b-[6px] border-b-primary bg-white relative md:py-8 2xl:px-7 dark:bg-[#333];
        }

        .company-date {
            @apply absolute hidden text-lg font-bold text-[#b0b0b0] xl:block;
        }

        &:nth-of-type(odd) .timeline-icon,
        &:nth-of-type(even) .timeline-icon {
            @apply left-[-13px] top-[55px];
        }

        &:nth-of-type(odd) .timeline-icon {
            @apply lg:top-[45px] xl:left-[unset] !important;
        }

        &:nth-of-type(even) .timeline-icon {
            @apply lg:top-[45px] xl:left-[-33px] !important;
        }

        &:nth-of-type(odd) .content-arrow,
        &:nth-of-type(even) .content-arrow {
            @apply h-0 w-0 absolute top-[28px] z-[1] border-y-[15px] border-y-transparent;
        }

        &:nth-of-type(even) .content-arrow,
        &:nth-of-type(odd) .content-arrow {
            @apply border-r-[15px] border-r-white border-l-0 left-[-15px] dark:border-r-[#333];
        }

        &:nth-of-type(odd) .content-arrow {
            @screen xl {
                @apply border-r-0 border-l-[15px] border-l-white right-[-15px] left-[unset] dark:border-l-[#333];
            }
        }

        &:nth-of-type(odd) .company-date {
            @apply top-[4rem] right-[-14.5rem];
        }

        &:nth-of-type(even) .company-date {
            @apply top-[4rem] left-[-14.75rem];
        }
    }
}
</style>
