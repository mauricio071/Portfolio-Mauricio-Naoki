<template>
    <section id="início" class="home">
        <div class="blur-container">
        </div>
        <div class="vector-background">
        </div>
        <div class="wrapper relative my-16 lg:flex lg:justify-between lg:items-center">
            <div class="svg-wrapper">
                <IconTecnologia class="header-vector" />
            </div>
            <div v-motion-fade-visible-once :duration="1000"
                class="main-content flex flex-col items-center gap-6 lg:items-start lg:gap-4">
                <p class="text-white font-semibold text-lg lg:text-2xl">👋🏻 Olá, o meu nome é</p>
                <h1 class="text-secondary font-bold text-3xl leading-4 sm:text-4xl lg:text-5xl  2xl:text-[3.5rem]">
                    Maurício Naoki
                </h1>
                <h2 class="flex items-center text-secondary text-xl font-bold sm:text-xl lg:text-2xl">
                    <IconCode />
                    <span class="text-animation">
                        Desenvolvedor Front-end
                    </span>
                </h2>
                <a href="/cv_mauricio_naoki.pdf" target="_blank" rel="noreferrer" aria-label="Currículo"
                    class="resume-btn">
                    <Icon name="material-symbols:download-rounded" class="text-[1.75rem] text-secondary duration-300" />
                    Baixar currículo
                </a>
                <div class="flex gap-4">
                    <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Icon name="mdi:github"
                            class="text-[2.25rem] block text-secondary duration-300 hover:text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/mauricionaoki" target="_blank" rel="noreferrer"
                        aria-label="LinkedIn">
                        <Icon name="mdi:linkedin"
                            class="text-[2.25rem] block text-secondary duration-300 hover:text-[#258dbf]" />
                    </a>
                    <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                        <Icon name="mdi:whatsapp"
                            class="text-[2.25rem] block text-secondary duration-300 hover:text-[#25d366]" />
                    </a>
                </div>
            </div>
            <div v-motion-fade-visible-once :duration="1300" :delay="200" ref="tiltRef" class="img-content">
                <div class="hidden max-w-[30rem] lg:block xl:max-w-[34rem] 2xl:max-w-[39rem]">
                    <NuxtImg src="/programacao.webp" alt="desenvolvedor" densities="x1" width="100%"
                        class="w-full duration-700" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import VanillaTilt from 'vanilla-tilt'

const tiltRef = ref(null);

onMounted(() => {
    VanillaTilt.init(tiltRef.value, {
        max: 5,
    });
})
</script>

<style scoped>
.home {
    @apply min-h-[650px] flex justify-center items-center p-4 pb-0 overflow-hidden relative;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 191, 165, 0.7) 100%);

    @screen lg {
        @apply min-h-screen pt-12;
    }

    .blur-container {
        @apply absolute top-[-300px] left-[-300px] w-[700px] h-[700px] bg-primary opacity-20 rounded-[50rem] blur-xl z-[-1];
    }

    .vector-background {
        @apply hidden;

        @screen lg {
            @apply absolute top-[-3rem] right-0 w-[54%] rounded-l-full z-[-1] bg-[#00AB95] opacity-30 block;
            min-height: calc(100vh + 3rem);
        }
    }

    .text-animation {
        @apply w-full whitespace-nowrap overflow-hidden border-r-2 border-secondary pr-1;
        animation: typing 5.57s steps(20) infinite,
            blinking .85s infinite alternate;
    }

    @keyframes typing {
        0% {
            width: 0;
        }

        30%,
        75% {
            width: 100%;
        }

        100% {
            width: 0;
        }
    }

    @keyframes blinking {
        50% {
            @apply border-transparent;
        }
    }

    .main-content::before {
        @apply content-[""] absolute top-8 w-full h-[80%] bg-gradient-to-br from-[#00BFA6] to-[#63e6d2] opacity-20 z-[-1] blur-[75px];
    }

    .img-content {
        @apply relative;

        &::before {
            @apply content-[""] absolute top-[15%] left-[15%] w-[70%] h-[70%] bg-gradient-to-br from-[#00BFA6] to-[#63e6d2] opacity-40 z-[-1] blur-[75px];
        }
    }

    .resume-btn {
        @apply relative overflow-hidden flex gap-2 items-center bg-white px-4 py-[.675rem] rounded-md text-secondary font-semibold my-2 shadow-sm duration-300 z-[2] md:my-5 md:py-3;

        &::before {
            @apply content-[""] absolute w-0 h-full top-0 left-0 bg-[#00bfa6] z-[-1] duration-500;
        }

        &:hover {
            @apply text-white;
            box-shadow: 0 0 30px #00bfa6,
                0 0 20px #00bfa6;

            span {
                @apply text-white;
            }

            &::before {
                @apply w-full;
            }
        }
    }

    .header-vector {
        animation: circle 40s linear infinite;
    }

    @keyframes circle {
        0% {
            transform: rotate(0deg)
        }

        100% {
            transform: rotate(-360deg)
        }
    }

    .svg-wrapper {
        @apply absolute max-w-[14rem] my-[3.5rem] top-[50%] right-[-15%] w-full h-full;

        @screen md {
            @apply right-0;
        }

        @screen lg {
            @apply max-w-[21rem] top-[-20%] right-[-4%];
        }

        @screen xl {
            @apply max-w-[23rem] top-[-18%] right-[-2%];
        }

        @screen 2xl {
            @apply max-w-[30rem] top-[-23%];
        }


        &::before {
            @apply content-[""] absolute top-[15%] left-[15%] w-[70%] h-[70%] bg-gradient-to-br from-[#00BFA6] to-[#63e6d2] z-[-1] opacity-40 blur-[20px] lg:blur-[75px];
        }
    }
}
</style>