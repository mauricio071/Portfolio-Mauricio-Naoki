<template>
    <section id="skills" class="section-background">
        <WaveSvgWaveTop />
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                {{ $t("skills.title") }}
            </h2>
            <div class="skills">
                <div v-for="(technology, i) in technologies" :key="i" v-motion-slide-visible-once-bottom :delay="i * 90"
                    :duration="600">
                    <div class="icon-card" :style="{ '--card-color': technology.color }">
                        <div class="icon-border"></div>
                        <img :src="iconMap[technology.name]" :alt="technology.name" loading="lazy" class="logo" />
                        <strong>{{ technology.name }}</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="wave-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25" class="shape-fill"></path>
                <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5" class="shape-fill"></path>
                <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    class="shape-fill"></path>
            </svg>
        </div>
    </section>
</template>

<script setup lang="ts">
import { technologies } from '@/constants/technologies';
import VanillaTilt from 'vanilla-tilt';

onMounted(() => {
    const elements = document.querySelectorAll<HTMLElement>(".icon-card");

    VanillaTilt.init([...elements], {
        max: 36,
    });
});
</script>

<style scoped>
.section-background {
    @apply relative;
    background: radial-gradient(circle, rgba(0, 191, 165, 0.02) 0%, rgba(0, 191, 165, 0.22) 100%);

    .wrapper {
        @apply py-3;

        .skills {
            @apply flex flex-wrap items-center justify-center gap-8 max-w-[60rem] mx-auto;

            @screen md {
                @apply grid grid-cols-3;
            }

            @screen lg {
                @apply grid-cols-4;
            }

            @screen xl {
                @apply grid-cols-5;
            }

            .icon-card {
                @apply relative bg-white flex flex-col justify-center items-center gap-4 w-40 h-36 mx-auto text-center p-1 rounded-[25px] shadow-lg duration-300 cursor-pointer;
                transform-style: preserve-3d;

                .icon-border {
                    @apply absolute w-full h-full rounded-[25px] overflow-hidden;

                    &::before {
                        @apply content-[""] absolute w-[150%] h-[150%] -top-[2.5rem] -left-[2.5rem];
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

                    &::after {
                        @apply content-[""] absolute bg-white inset-[5px] rounded-[25px];
                        box-shadow: inset 0px 2px 12px 0px #0000008c;
                    }
                }

                .logo,
                strong {
                    @apply z-[2];
                    transform: translateZ(20px);
                }

                .logo {
                    @apply max-w-[3rem] max-h-[3rem];
                }

                strong {
                    @apply leading-[1.4];
                }
            }
        }
    }

    .wave-bottom {
        @apply absolute w-full left-0 bottom-0 overflow-hidden leading-[0] z-[1] rotate-180;

        svg {
            @apply relative block h-[80px];
            width: calc(180% + 1.3px);

            @screen sm {
                width: calc(105% + 1.3px);
            }
        }

        .shape-fill {
            @apply fill-white;
        }
    }
}
</style>