<template>
    <section id="habilidades" class="background-diagonal relative">
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                Habilidades
            </h2>
            <div
                class="flex flex-wrap items-center justify-center gap-6 max-w-[60rem] mx-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <div v-for="(tecnologia, index) in tecnologias" :key="index" v-motion-slide-visible-once-bottom
                    :delay="index * 100" :duration="600" class="z-[2]">
                    <div class="icon-card" :style="{ '--card-color': tecnologia.cor }">
                        <component :is="tecnologia.logo" class="max-w-[3rem] max-h-[3rem] z-[2]" />
                        <strong class="z-[2]">{{ tecnologia.nome }}</strong>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { tecnologias } from '@/constants/tecnologias'
</script>

<style scoped>
.background-diagonal {
    /* op1 */
    /* @apply relative bg-[#e0f7f2]; */
    @apply relative;

    /* op2 */
    background: rgb(0, 191, 165);
    background: radial-gradient(circle, rgba(0, 191, 165, 0.02) 0%, rgba(0, 191, 165, 0.22) 100%);

    /* op3 */
    /* background: linear-gradient(90deg, #d6f8f4 0%, #f0fdfb 100%); */
}

/* .background-diagonal:after {
    @apply content-[""] absolute w-full h-full bg-[#e0f7f2] top-[-1rem] right-0 bottom-0 left-0 origin-top-left skew-y-[4deg] 2xl:top-[-3rem];
} */

.icon-card {
    @apply bg-white relative flex flex-col justify-center items-center gap-4 rounded-[25px] shadow-lg w-[10rem] h-36 mx-auto duration-300 overflow-hidden cursor-pointer;
    /* */
}

.icon-card:hover {
    @apply scale-110;
    box-shadow: 0 0 0px #00bfa6, 0 0 10px #00bfa6, 0 0 40px #00bfa6;
}

/* Animação dos cards opção 1 */
/* .icon-card::before {
    @apply content-[''] absolute w-[5rem] h-[16rem] top-[-40%] rounded-[10px] rotate-[-48deg];
    background-color: var(--card-color);
    animation: rotate 8s linear infinite;
} */

/* Animação dos cards opção 2 */
.icon-card::before {
    @apply content-[''] absolute w-[150%] h-[150%];
    background-image: repeating-conic-gradient(var(--card-color) 0%, var(--card-color) 30%, transparent 35%, transparent 40%, var(--card-color) 50%);
    animation: rotate 6s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.icon-card::after {
    @apply content-[''] absolute inset-[5px] rounded-[25px] bg-[white];
    box-shadow: inset 0px 2px 11px 0px #0000008c;
}
</style>