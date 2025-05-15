<template>
    <section id="início" class="home relative z-[20]">
        <div class="wrapper relative my-16 lg:flex lg:justify-between lg:items-center">
            <IconTecnologia class="header-vector" />
            <div v-motion-fade-visible-once :duration="1000"
                class="flex flex-col items-center gap-6 lg:items-start lg:gap-4">
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
            <div v-motion-fade-visible-once :duration="1300" :delay="200" ref="tiltRef" class="relative">
                <div class="hidden max-w-[30rem] lg:block xl:max-w-[34rem] 2xl:max-w-[39rem]">
                    <NuxtImg src="/programacao.webp" alt="desenvolvedor" densities="x1" width="100%"
                        class="w-full duration-700" />
                </div>
            </div>
        </div>

    </section>
    <NuxtParticles id="tsparticles" :options="options" @load="onLoad" class="absolute top-0 w-full h-full">
    </NuxtParticles>
</template>

<script setup>
import VanillaTilt from 'vanilla-tilt'

const tiltRef = ref(null);

onMounted(() => {
    VanillaTilt.init(tiltRef.value, {
        max: 5,
    });
});

const options = {
    autoPlay: true,
    fullScreen: {
        enable: false,
        zIndex: -1
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
        detectsOn: "window",
        events: {
            onClick: { enable: true, mode: "repulse" },
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10
                }
            },
            resize: { enable: true, delay: 0.5 }
        },
        modes: {
            repulse: {
                distance: 400,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad"
            },
            bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0
            },
            push: { quantity: 4 },
            remove: { quantity: 2 }
        }
    },
    particles: {
        number: {
            value: 160,
            density: { enable: true, width: 1920, height: 1080 }
        },
        color: { value: "#007B8F" },
        links: {
            enable: true,
            distance: 150,
            color: "#007B8F",
            opacity: 0.4,
            width: 1
        },
        opacity: {
            value: { min: 0.1, max: 1 },
            animation: { enable: true, speed: 1, startValue: "random" }
        },
        size: {
            value: { min: 1, max: 3 }
        },
        move: {
            enable: true,
            speed: { min: 0.1, max: 1 },
            outModes: { default: "out" }
        },
        shape: { type: "circle" }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    zLayers: 100
};

const onLoad = (container) => {
    container.pause()
    setTimeout(() => container.play(), 2000)
}
</script>

<style scoped>
.home {
    @apply min-h-[650px] flex justify-center items-center p-4 pb-0 overflow-hidden;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 191, 165, 0.7) 100%);

    @screen lg {
        @apply min-h-screen pt-12;
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

    .resume-btn {
        @apply flex gap-2 items-center bg-white px-4 py-[.675rem] rounded-md text-secondary font-semibold my-2 shadow-sm duration-300 z-[2] md:my-5 md:py-3;

        &:hover {
            @apply bg-secondary text-white;
            box-shadow: 0 0 30px #00bfa6,
                0 0 40px #00bfa6;

            span {
                @apply text-primary;
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
}
</style>