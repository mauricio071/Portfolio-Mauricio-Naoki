<template>
    <section id="experiencias">
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
                            <h1 class="text-2xl font-bold mb-2">{{ empresa.nome }}</h1>
                            <h2 class="text-lg font-semibold text-[#8a8a8a]">{{ empresa.cargo }}</h2>
                            <p class="text-sm my-4 lg:text-lg">{{ empresa.descricao }}</p>
                            <h3 class="text-xl font-semibold mb-3 text-[#0097a7]">Tecnologias:</h3>
                            <div class="tecnologias flex items-center gap-2">
                                <component v-for="(logo, index) in empresa.tecnologias" :is="logo" :key="index"
                                    class="max-w-[2rem]" />
                            </div>
                            <span class="block text-sm font-semibold text-[#b0b0b0] mt-4 lg:text-base">
                                {{ empresa.data }}
                            </span>
                            <span class="content-arrow"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { empresas } from '@/constants/empresas'
</script>

<style scoped>
.timeline-card {
    @apply shadow-2xl px-5 py-8 rounded-lg border-b-[6px] border-b-primary bg-white relative 2xl:px-7;
}

.timeline {
    @apply relative;
}

.timeline::after {
    @apply content-[''] absolute w-[4px] h-full bg-primary top-0 left-[12px] ml-[-3px] z-[1] lg:left-[8px] xl:left-[50%];
}

.content {
    @apply w-full py-8 relative xl:w-[50%];
}

.content:nth-of-type(odd) {
    @apply left-0 pl-[55px] pr-0 xl:pl-0 xl:pr-[55px] 2xl:pr-[73px];
}

.content:nth-of-type(even) {
    @apply left-0 pr-0 pl-[55px] xl:left-[50%] 2xl:pl-[73px];
}

.timeline-icon {
    @apply absolute flex justify-center items-center w-12 h-12 right-[-31px] top-[32px] z-[10] text-white bg-primary rounded-[50%] text-lg;

    @screen lg {
        @apply w-16 h-16 !left-[-26px] text-2xl;
    }
}

.content:nth-of-type(odd) .timeline-icon,
.content:nth-of-type(even) .timeline-icon {
    @apply left-[-13px] top-[55px];
}

.content:nth-of-type(odd) .timeline-icon {
    @apply lg:top-[45px] xl:left-[unset] !important;
}

.content:nth-of-type(even) .timeline-icon {
    @apply lg:top-[45px] xl:left-[-33px] !important;
}

.content:nth-of-type(odd) .content-arrow,
.content:nth-of-type(even) .content-arrow {
    @apply h-0 w-0 absolute top-[28px] z-[1] border-y-[15px] border-y-transparent;
}

.content:nth-of-type(even) .content-arrow,
.content:nth-of-type(odd) .content-arrow {
    @apply border-r-[15px] border-r-white border-l-0 left-[-15px];
}

.content:nth-of-type(odd) .content-arrow {
    @screen xl {
        @apply border-r-0 border-l-[15px] border-l-white right-[-15px] left-[unset];
    }
}
</style>
