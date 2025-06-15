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
                <IconTechnology v-motion-fade-visible-once :duration="1300" :delay="725" class="header-vector" />
            </div>
            <div ref="tiltRef" v-motion-fade-visible-once :duration="1300" :delay="450" class="img-content">
                <NuxtImg src="/programacao.webp" alt="desenvolvedor" loading="lazy" densities="x1" />
            </div>
        </div>
        <div class="blur-container"></div>
        <div class="vector-background"></div>
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

    .wrapper {
        @apply relative my-16 max-sm:px-0;

        @screen lg {
            @apply flex justify-between items-center;
        }

        .svg-wrapper {
            @apply absolute max-w-[14rem] top-[50%] -right-[15%] w-full h-full my-[3.5rem];

            @screen sm {
                @apply max-w-[18rem] -right-[6%];
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
                @apply content-[""] absolute top-[15%] left-[15%] w-[70%] h-[70%] bg-gradient-to-br from-[#00BFA6] to-[#63e6d2] -z-[1] opacity-40 blur-[20px] lg:blur-[75px];
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

        .main-content {
            @apply flex flex-col items-center gap-6;

            &::before {
                @apply content-[""] absolute top-8 w-full h-[80%] bg-gradient-to-br from-[#00BFA6] to-[#63e6d2] opacity-20 -z-[1] blur-[75px];
            }

            @screen lg {
                @apply items-start;
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
}
</style>