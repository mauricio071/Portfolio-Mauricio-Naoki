<template>
    <section id="home">
        <div class="wrapper">
            <div v-motion-fade-visible-once :duration="1000" class="main-content">
                <p>👋🏻 {{ $t("home.presentation") }}</p>
                <h1>Maurício Naoki</h1>
                <h2>
                    <IconCode />
                    <span class="text-animation">{{ $t("home.role") }}</span>
                </h2>
                <div class="button-border">
                    <a :href="locale === 'pt-BR' ? '/cv_mauricio_naoki.pdf' : '/mauricio_naoki_resume.pdf'"
                        target="_blank" rel="noreferrer" :aria-label="$t('home.resumeAriaLabel')"
                        class="button-content">
                        <Icon name="material-symbols:download-rounded" size="1.75rem" />
                        {{ $t("home.resume") }}
                    </a>
                </div>
                <div class="social-icons">
                    <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Icon name="mdi:github" class="hover:!text-white" />
                    </a>
                    <a :href="`https://www.linkedin.com/in/mauricionaoki${locale === 'en-US' ? '/?locale=en_US' : ''}`"
                        target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Icon name="mdi:linkedin" class="hover:!text-[#258dbf]" />
                    </a>
                    <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                        <Icon name="mdi:whatsapp" class="hover:!text-[#25d366]" />
                    </a>
                </div>
            </div>
            <div class="svg-wrapper">
                <IconTechnology class="header-vector" v-motion-fade-visible-once :duration="1300" :delay="725" />
            </div>
            <div ref="tiltRef" v-motion-fade-visible-once :duration="1300" :delay="450" class="img-content">
                <NuxtImg src="/programacao.webp" alt="desenvolvedor" loading="lazy" densities="x1" />
            </div>
        </div>
        <div class="blur-container"></div>
        <div class="vector-background"></div>
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
import VanillaTilt from 'vanilla-tilt';

const tiltRef = ref<HTMLElement | null>(null);

const { locale } = useI18n();

onMounted(() => {
    if (tiltRef.value) {
        VanillaTilt.init(tiltRef.value, {
            max: 5,
        });
    }
});
</script>

<style scoped>
#home {
    @apply min-h-[750px] relative flex justify-center items-center p-4 pb-0 overflow-hidden;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 191, 165, 0.7) 100%);

    @screen lg {
        @apply min-h-screen pt-12;
    }

    .wrapper {
        @apply relative my-16 max-sm:px-0;

        @screen lg {
            @apply flex justify-between items-center;
        }

        .main-content {
            @apply relative flex flex-col items-center gap-6 z-[1] lg:items-start;

            &::before {
                @apply content-[""] absolute top-8 w-full h-[80%] bg-gradient-to-br from-[#00BFA6] to-[#63e6d2] opacity-20 -z-[1] blur-[75px];
            }

            p {
                @apply text-white font-semibold text-lg sm:text-2xl;
            }

            h1 {
                @apply text-secondary font-bold text-4xl sm:text-5xl xl:text-[3.5rem];
            }

            h2 {
                @apply flex items-center text-secondary text-xl font-bold max-sm:max-w-[18rem] sm:text-2xl;

                .text-animation {
                    @apply whitespace-nowrap overflow-hidden border-r-2 border-secondary pr-1;
                    animation: typingMobile 5.5s steps(20) infinite,
                        blinking .85s infinite alternate;
                    animation-delay: 0.15s, 0s;

                    @screen lg {
                        @apply w-0 pr-0;
                        animation: typingDesktop 5.5s steps(20) infinite,
                            blinking .85s infinite alternate;
                        animation-delay: 1.25s, 0s;
                    }

                    @keyframes typingMobile {
                        0% {
                            @apply w-0;
                        }

                        30%,
                        65% {
                            @apply w-full;
                        }

                        100% {
                            @apply w-0;
                        }
                    }

                    @keyframes typingDesktop {
                        0% {
                            @apply w-0;
                        }

                        30%,
                        65% {
                            @apply w-full pr-1;
                        }

                        87%,
                        100% {
                            @apply w-0 pr-0;
                        }
                    }

                    @keyframes blinking {
                        50% {
                            @apply border-transparent;
                        }
                    }
                }
            }

            .social-icons {
                @apply flex gap-4;

                span {
                    @apply block text-[2.25rem] text-secondary duration-300;
                }
            }
        }

        .svg-wrapper {
            @apply absolute max-w-[14rem] top-[50%] -right-[15%] w-full h-full my-[3.5rem];

            @screen sm {
                @apply max-w-[18rem] top-[30%] -right-[6%];
            }

            @screen lg {
                @apply max-w-[21rem] -top-[25%];
            }

            @screen xl {
                @apply max-w-[25rem] -right-[2%];
            }

            @screen 2xl {
                @apply max-w-[30rem] -top-[23.5%];
            }

            &::before {
                @apply content-[""] absolute top-[15%] left-[15%] w-[70%] h-[70%] bg-gradient-to-br from-[#00BFA6] to-[#63e6d2] -z-[1] opacity-20 blur-[20px] lg:blur-[75px];
            }

            .header-vector {
                animation: circle 40s linear infinite;
            }

            @keyframes circle {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(-360deg);
                }
            }
        }

        .img-content {
            @apply relative;

            &::before {
                @apply content-[""] absolute top-[15%] left-[15%] w-[70%] h-[70%] bg-gradient-to-br from-[#00BFA6] to-[#63e6d2] opacity-40 -z-[1] blur-[75px];
            }

            img {
                @apply w-full max-w-[30rem] hidden lg:block xl:max-w-[33rem] 2xl:max-w-[39rem];
            }
        }
    }

    .blur-container {
        @apply bg-primary absolute -top-[300px] -left-[300px] w-[700px] h-[700px] rounded-[50rem] blur-xl opacity-20 -z-[1];
    }

    .vector-background {
        @apply hidden;

        @screen lg {
            @apply bg-[#00AB95] block absolute -top-[3rem] right-0 w-[54%] rounded-l-full -z-[1] opacity-30;
            min-height: calc(100vh + 3rem);
        }
    }

    .wave-bottom {
        @apply absolute w-full left-0 -bottom-8 overflow-hidden leading-[0] z-[1] rotate-180 opacity-80 xl:-bottom-4;

        svg {
            @apply relative block h-[130px];
            width: calc(210% + 1.3px);

            @screen lg {
                @apply h-[160px];
                width: calc(130% + 1.3px);
            }

            @screen xl {
                @apply h-[170px];
                width: calc(100% + 1.3px);
            }
        }

        .shape-fill {
            @apply fill-[#ffffff];
        }
    }
}
</style>