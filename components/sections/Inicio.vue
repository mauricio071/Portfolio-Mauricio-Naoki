<template>
    <section id="início" class="home">
        <div class="wrapper relative mb-18 sm:mt-18 md:flex md:justify-between md:items-center">
            <IconTecnologia class="header-vector" />
            <div class="flex flex-col items-center gap-4 md:items-start md:gap-3 ">
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
                <a href="/cv_mauricio_naoki.pdf" download="Currículo Maurício Naoki" class="curriculo-btn">
                    Download CV
                </a>
                <div class="flex gap-4">
                    <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer" aria-label="Github">
                        <Icon name="mdi:github"
                            class="text-[2rem] block text-secondary duration-300 hover:text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/mauricionaoki" target="_blank" rel="noreferrer"
                        aria-label="LinkedIn">
                        <Icon name="mdi:linkedin"
                            class="text-[2rem] block text-secondary duration-300 hover:text-[#258dbf]" />
                    </a>
                    <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                        <Icon name="mdi:whatsapp"
                            class="text-[2rem] block text-secondary duration-300 hover:text-[#25d366]" />
                    </a>
                </div>
            </div>
            <div class="relative mt-4 text-end">
                <div class="hidden max-w-[25rem] md:block lg:max-w-[30rem] xl:max-w-[41rem]">
                    <img src="/assets/img/programacao.webp" alt="desenvolvedor"
                        class="w-full duration-700 hover:-translate-y-3" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.home {
    @apply min-h-[550px] flex justify-center items-center p-4 overflow-hidden;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 191, 165, 0.7) 100%);

    @screen lg {
        @apply min-h-screen;
    }
}

.curriculo-btn {
    @apply bg-white px-4 py-2 rounded-md text-secondary font-semibold my-2 duration-300 md:my-5 md:px-8 md:py-3;
}

.curriculo-btn:hover {
    @apply hover:bg-secondary hover:text-white;
    box-shadow: 0 0 10px #00bfa6,
        0 0 40px #00bfa6,
        0 0 80px #00bfa6
}

.text-animation {
    @apply w-full whitespace-nowrap overflow-hidden border-r-2 border-secondary;
    animation: typing 4s steps(43),
        cursor .8s step-end infinite alternate;
    animation-delay: 2s;
}

@keyframes cursor {
    50% {
        border-color: transparent
    }
}

@keyframes typing {
    from {
        width: 0
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
</style>