<template>
    <section id="sobre">
        <div class="wrapper">
            <div class="content flex flex-col gap-8 text-secondary lg:grid lg:grid-cols-2 lg:items-center">
                <div v-motion-fade-visible-once :delay="200"
                    class="relative mx-auto w-1/2 max-w-[15rem] lg:w-[65%] lg:max-w-[22rem]">
                    <div class="photo-profile">
                        <NuxtImg src="/foto-perfil.jpeg" alt="foto-perfil" loading="lazy" densities="x1"
                            class="photo" />
                        <div class="photo-border">
                        </div>
                    </div>
                </div>
                <div v-motion-slide-visible-once-bottom :duration="700" class="space-y-10">
                    <div>
                        <h2 class="section-title !mb-14 lg:!justify-start">
                            Sobre mim

                            <!-- <span class="section-title-background">
                                <Icon name="mdi:account-circle" /> 
                                Sobre mim
                            </span> -->
                        </h2>
                        <p class="px-2 mb-4 text-start lg:px-0 xl:text-lg">
                            Sou um desenvolvedor <strong>front-end</strong> focado em criar experiências digitais
                            envolventes e funcionais, com formação em <strong>Ciência da Computação</strong> pela
                            <strong>Universidade Cidade de São Paulo</strong>, concluída em dezembro de 2022.
                            Nos últimos dois anos, trabalhei em uma <strong>digital house</strong>, desenvolvendo
                            sistemas e sites personalizados para diversos clientes. Cada novo projeto despertava
                            minha curiosidade e motivação, levando a constantes pesquisas e aprendizados.
                        </p>
                        <p class="px-2 text-start lg:px-0 xl:text-lg">
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
.photo-profile {
    @apply bg-transparent w-full rounded-[50%] duration-300 lg:rounded-md relative;

    &::before,
    &::after {
        @apply content-[''] hidden absolute w-[150px] h-[150px] border-[#00bfa6] duration-300 lg:block;
    }

    &::before {
        @apply right-[-2.75rem] top-[-2.75rem] border-t-[7px] border-r-[7px];
    }

    &::after {
        @apply left-[-4.25rem] bottom-[-3.75rem] border-b-[7px] border-l-[7px];
    }

    @screen lg {
        &:hover {

            &::before,
            &::after {
                @apply border-[#26cfb9];
            }

            &::before {
                @apply right-[-3rem] top-[-3rem];
            }

            &::after {
                @apply left-[-4.75rem] bottom-[-4.25rem];
            }

            .photo {
                transform: translateX(-4%) translateY(4%);
            }

            .photo-border {
                transform: translateX(-4%) translateY(4%);
            }
        }
    }

    /* Opcao 2 */
    /* &:hover {
        &::before {
            @apply right-[-2rem] top-[-2rem];
        }

        &::after {
            @apply left-[-3.5rem] bottom-[-3rem];
        }

        .photo {
            transform: translateX(-4%) translateY(4%);
        }

        .photo-border {
            transform: translateX(-4%) translateY(4%);

        }
    } */

    /* Opcao 3 */
    /* &:hover {
        &::before {
            @apply right-[-3.5rem] top-[-3.25rem];
        }

        &::after {
            @apply left-[-5rem] bottom-[-4.5rem];
        }

        .photo {
            transform: translateX(1%) translateY(-1%);
        }

        .photo-border {
            transform: translateX(-8%) translateY(8%);
        }
    } */

    .photo {
        @apply rounded-[50%] w-full shadow-2xl duration-300 lg:rounded-md;
    }

    .photo-border {
        @apply hidden rounded-lg w-full h-full absolute top-0 z-[-1] bg-gray-100 border-4 duration-300 lg:block;
        transform: translateX(-7%) translateY(7%);
    }
}


h3::before {
    @apply content-[''] w-[110px] h-[5px] inline-flex items-center rounded-[5px];

    background-image: -webkit-linear-gradient(left,
            #00bfa6,
            rgba(0, 191, 165, 0.22));
}

.profile-about-icon {
    @apply p-2 bg-[#333] rounded-lg transition duration-300;

    &:hover {
        box-shadow: 0 0 10px #00bfa6,
            0 0 20px #00bfa6,
            0 0 40px #00bfa6;
    }
}
</style>