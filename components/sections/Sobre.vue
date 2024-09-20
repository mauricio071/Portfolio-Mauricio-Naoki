<template>
    <section id="sobre">
        <div class="wrapper">
            <div class="content flex flex-col gap-8 text-secondary lg:grid lg:grid-cols-2 lg:items-center">
                <div v-motion-fade-visible-once :delay="0"
                    class="space-y-4 relative max-w-44 mx-auto sm:max-w-[15rem] lg:max-w-[18rem] xl:max-w-[23rem]">
                    <div class="foto-perfil">
                        <img src="/assets/img/foto-perfil.jpeg" alt="foto-perfil" class="rounded-[50%] lg:rounded-md">
                    </div>
                </div>
                <div v-motion-slide-visible-once-bottom :duration="700" class="space-y-10">
                    <div>
                        <h2 class="section-title !mb-8 lg:!items-start">
                            Sobre mim
                        </h2>
                        <p class="px-2 mb-4 text-justify lg:text-start lg:px-0 xl:text-lg">
                            Sou um desenvolvedor <strong>front-end</strong> focado em criar experiências digitais
                            envolventes e funcionais, com formação em <strong>Ciência da Computação</strong> pela
                            <strong>Universidade Cidade de São Paulo</strong>, concluída em dezembro de 2022.
                            Nos últimos dois anos, trabalhei em uma <strong>digital house</strong>, desenvolvendo
                            sistemas e sites personalizados para diversos clientes. Cada novo projeto despertava
                            minha curiosidade e motivação, levando a constantes pesquisas e aprendizados.
                        </p>
                        <p class="px-2 text-justify lg:text-start lg:px-0 xl:text-lg">
                            Tenho maior aptidão para a área de <strong>front-end</strong>, com principais habilidades em
                            <strong>Vue.js</strong>, <strong>Nuxt.js</strong>, <strong>React.js</strong>,
                            <strong>JavaScript</strong> e <strong>TypeScript</strong>. Estou sempre em busca de projetos
                            desafiadores que me permitam crescer profissionalmente, explorar novas tecnologias e
                            contribuir para inovações.
                        </p>
                    </div>
                    <div v-motion-slide-visible-once-bottom :duration="700" :delay="300"
                        class="onde-encontrar space-y-8">
                        <h3
                            class="flex flex-col-reverse items-center text-xl font-extrabold gap-[0.7rem] lg:items-start">
                            Onde me encontrar
                        </h3>
                        <div class="flex gap-4 justify-center lg:justify-start">
                            <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer"
                                aria-label="Github" class="profile-about-icon">
                                <Icon name="mdi:github" class="text-[2rem] block text-white duration-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/mauricionaoki" target="_blank" rel="noreferrer"
                                aria-label="LinkedIn" class="profile-about-icon">
                                <Icon name="mdi:linkedin" class="text-[2rem] block text-white duration-300" />
                            </a>
                            <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                                class="profile-about-icon">
                                <Icon name="mdi:whatsapp" class="text-[2rem] block text-white duration-300" />
                            </a>
                            <a href="mailto:naokimau@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail"
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

<style scoped>
.foto-perfil {
    @apply w-full shadow-2xl rounded-[50%] lg:rounded-md;
}

.foto-perfil::before,
.foto-perfil::after {
    @apply content-[''] hidden absolute w-[150px] h-[150px] border-[#00bfa6] lg:block;
}

.foto-perfil::before {
    @apply left-[-3rem] top-[-3rem] border-t-[7px] border-l-[7px];
}

.foto-perfil::after {
    @apply right-[-2.5rem] bottom-[-2.5rem] border-b-[7px] border-r-[7px];
}

h3::before {
    @apply content-[''] w-[100px] h-[5px] bg-primary inline-flex items-center rounded-[5px];
}

.profile-about-icon {
    @apply p-2 bg-[#333] rounded-lg transition duration-300;
}

.profile-about-icon:hover {
    box-shadow: 0 0 10px #00bfa6,
        0 0 20px #00bfa6,
        0 0 40px #00bfa6;
}
</style>