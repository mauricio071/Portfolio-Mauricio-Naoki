<template>
    <section id="sobre">
        <div class="container mx-auto">
            <div class="content flex flex-col gap-6 px-4 text-secondary lg:grid lg:grid-cols-2 lg:items-center lg:px-0">
                <div v-motion-fade-visible-once
                    class="foto space-y-4 relative max-w-44 mx-auto sm:max-w-[15rem] lg:max-w-[18rem] xl:max-w-[23rem]">
                    <div class="foto-perfil w-full shadow-2xl rounded-[50%] lg:rounded-md">
                        <img src="/assets/img/foto-perfil.jpeg" alt="foto-perfil" class="rounded-[50%] lg:rounded-md">
                    </div>
                </div>
                <div v-motion-slide-visible-once-bottom :duration="700"
                    class="conteudo space-y-10 max-w-[650px] text-secondary">
                    <div>
                        <h2 class="section-title lg:!items-start">
                            Sobre mim
                        </h2>
                        <p class="mb-4 xl:text-lg">
                            Sou um desenvolvedor front-end focado em criar experiências digitais envolventes e
                            funcionais, com formação em Ciência da Computação pela Universidade Cidade de São Paulo,
                            concluída em dezembro de 2022. Nos últimos dois anos, trabalhei em uma digital house,
                            desenvolvendo sistemas e sites personalizados para diversos clientes. Cada novo projeto
                            despertava minha curiosidade e motivação, levando a constantes pesquisas e aprendizados.
                        </p>
                        <p class="xl:text-lg">
                            Tenho maior aptidão para a área de front-end, com principais habilidades em Vue.js, Nuxt.js,
                            React.js, JavaScript e TypeScript. Estou sempre em busca de projetos desafiadores que me
                            permitam crescer profissionalmente, explorar novas tecnologias e contribuir para inovações.
                        </p>
                    </div>
                    <div v-motion-slide-visible-once-bottom :duration="700" :delay="300"
                        class="onde-encontrar space-y-8">
                        <h3 class="text-xl font-bold">Onde me encontrar</h3>
                        <div class="flex gap-4 justify-center lg:justify-start">
                            <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer"
                                class="profile-about-icon">
                                <Icon name="mdi:github" class="text-[2rem] block text-white duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/mauricionaoki" target="_blank" rel="noreferrer"
                                class="profile-about-icon">
                                <Icon name="mdi:linkedin" class="text-[2rem] block text-white duration-300" />
                            </a>
                            <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer"
                                class="profile-about-icon">
                                <Icon name="mdi:whatsapp" class="text-[2rem] block text-white duration-300" />
                            </a>
                            <a href="mailto:naokimau@gmail.com" target="_blank" rel="noreferrer"
                                class="profile-about-icon">
                                <Icon name="mdi:gmail" class="text-[2rem] block text-white duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
@media (min-width: 640px) {
    .foto-perfil::before {
        width: 130px !important;
        height: 130px !important;
        border-top: 7px solid #00bfa6 !important;
        border-left: 7px solid #00bfa6 !important;
    }

    .foto-perfil::after {
        width: 130px !important;
        height: 130px !important;
        border-bottom: 7px solid #00bfa6 !important;
        border-right: 7px solid #00bfa6 !important;
    }
}

@media (min-width: 1024px) {
    .foto-perfil::before {
        display: block !important;
        left: -3rem !important;
        top: -3rem !important;
        width: 150px !important;
        height: 150px !important;
    }

    .foto-perfil::after {
        display: block !important;
        right: -2.5rem !important;
        bottom: -2.5rem !important;
        width: 150px !important;
        height: 150px !important;
    }
}

.profile-about-icon {
    padding: .5rem;
    background: #333333;
    border-radius: 10px;
    transition-duration: 300ms;
}

.foto-perfil::before {
    content: '';
    display: none;
    position: absolute;
    left: -2rem;
    top: -2rem;
    width: 90px;
    height: 90px;
    border-top: 5px solid #00bfa6;
    border-left: 5px solid #00bfa6;
}

.foto-perfil::after {
    content: '';
    display: none;
    position: absolute;
    right: -2rem;
    bottom: -2rem;
    width: 90px;
    height: 90px;
    border-bottom: 5px solid #00bfa6;
    border-right: 5px solid #00bfa6;
}

#sobre .content h3 {
    @apply flex flex-col-reverse items-center gap-4;

    @screen lg {
        @apply items-start;
    }

}

.content .onde-encontrar h3 {
    gap: 0.7rem;
}

#sobre .content h3::before {
    content: '';
    width: 100px;
    height: 5px;
    background: #00bfa6;
    display: inline-flex;
    align-items: center;
    border-radius: 5px;
}

a.profile-about-icon:hover {
    box-shadow: 0 0 10px #00bfa6,
        0 0 20px #00bfa6,
        0 0 40px #00bfa6
}
</style>