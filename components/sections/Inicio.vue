<template>
    <section id="inicio" class="home">
        <div class="container mx-auto relative mb-18 sm:mt-18 md:flex md:justify-between md:items-center">
            <IconTecnologia />
            <div class="flex flex-col items-center gap-4 md:items-start md:gap-3 ">
                <p class="text-white font-semibold sm:text-lg lg:text-2xl">👋🏻 Olá, o meu nome é</p>
                <h1 class="text-secondary font-bold text-[1.8rem] leading-4 sm:text-4xl lg:text-5xl">Maurício Naoki
                </h1>
                <h2 class="flex items-center text-secondary text-lg font-bold sm:text-xl lg:text-2xl">
                    <IconCode />
                    Desenvolvedor Front-end
                </h2>
                <a href="/cv_mauricio_naoki.pdf" download="Currículo Maurício Naoki"
                    class="bg-white px-4 py-2 rounded-md text-secondary font-semibold my-2 duration-300 md:my-5 md:px-8 md:py-3 hover:bg-secondary hover:text-white">
                    Download CV
                </a>
                <div class="flex gap-4">
                    <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer">
                        <MdiIcon icon="mdiGithub" class="text-secondary duration-300 hover:text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/mauricionaoki" target="_blank" rel="noreferrer">
                        <MdiIcon icon="mdiLinkedin" class="text-secondary duration-300 hover:text-[#258dbf]" />
                    </a>
                    <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer">
                        <MdiIcon icon="mdiWhatsapp" class="text-secondary duration-300 hover:text-[#25d366]" />
                    </a>
                </div>
            </div>
            <div class="relative mt-4 text-end">
                <div class="hidden max-w-[25rem] md:block lg:max-w-[30rem] xl:max-w-[40rem]">
                    <img src="/assets/img/programacao.png" alt="desenvolvedor" class="w-full" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.home {
    min-height: 550px;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(0, 191, 165, 0.6979166666666667) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    overflow: hidden;
}

@media (min-width: 1024px) {
    .home {
        min-height: 100vh;
    }
}
</style>