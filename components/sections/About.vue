<template>
    <section id="about">
        <div class="wrapper">
            <div class="content">
                <div v-motion-fade-visible-once :delay="200" :duration="1000" class="photo-container">
                    <div class="photo-profile">
                        <NuxtImg src="/foto-perfil.jpeg" alt="foto-perfil" width="285" height="285"
                            sizes="150px lg:400px" loading="lazy" class="photo" />
                        <div class="photo-border"></div>
                    </div>
                </div>
                <div class="text-about">
                    <div class="about-me">
                        <h2 v-motion-slide-visible-once-bottom :duration="700"
                            class="section-title !mb-14 lg:!justify-start">
                            {{ $t("about.title") }}
                        </h2>
                        <p v-motion-slide-visible-once-bottom :duration="700" :delay="100" class="mb-4">
                            <strong>{{ $t("about.strongDescription1") }}</strong>
                            {{ $t("about.description1") }}
                        </p>
                        <p v-motion-slide-visible-once-bottom :duration="700" :delay="200">
                            {{ $t("about.description2_part1") }}
                            <strong>{{ $t("about.strongDescription2") }}</strong>
                            {{ $t("about.description2_part2") }}
                        </p>
                    </div>
                    <div v-motion-slide-visible-once-bottom :duration="700" :delay="300" class="find-me">
                        <h3>{{ $t("about.findMeTitle") }}</h3>
                        <div class="contact-icons">
                            <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer"
                                aria-label="GitHub">
                                <Icon name="mdi:github" />
                            </a>
                            <a :href="`https://www.linkedin.com/in/mauricionaoki${locale === 'en-US' ? '/?locale=en_US' : ''}`"
                                target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <Icon name="mdi:linkedin" />
                            </a>
                            <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer"
                                aria-label="WhatsApp">
                                <Icon name="mdi:whatsapp" />
                            </a>
                            <a href="mailto:naokimau@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail">
                                <Icon name="mdi:gmail" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>

<style scoped>
.content {
    @apply flex flex-col gap-8 text-secondary;

    @screen lg {
        @apply grid grid-cols-2 items-center;
    }

    .photo-container {
        @apply relative w-1/2 max-w-[15rem] mx-auto;

        @screen lg {
            @apply w-[65%] max-w-[20rem];
        }

        @screen 2xl {
            @apply max-w-[22rem];
        }

        .photo-profile {
            @apply relative bg-transparent w-full duration-300 rounded-[50%] lg:rounded-md;

            &::before,
            &::after {
                @apply content-[""] absolute w-[150px] h-[150px] border-[#00bfa6] duration-300 hidden lg:block;
            }

            &::before {
                @apply -top-[2.75rem] -right-[2.75rem] border-t-[7px] border-r-[7px];
            }

            &::after {
                @apply -bottom-[3.75rem] -left-[4.25rem] border-b-[7px] border-l-[7px];
            }

            @screen lg {
                &:hover {

                    &::before,
                    &::after {
                        @apply border-[#26cfb9];
                    }

                    &::before {
                        @apply -top-[3rem] -right-[3rem];
                    }

                    &::after {
                        @apply -bottom-[4.25rem] -left-[4.75rem];
                    }

                    .photo,
                    .photo-border {
                        @apply -translate-x-[4%] translate-y-[4%];
                    }
                }
            }

            .photo {
                @apply w-full shadow-2xl duration-300 rounded-[50%] lg:rounded-md;
            }

            .photo-border {
                @apply bg-gray-100 absolute w-full h-full top-0 border-4 -z-[1] rounded-lg -translate-x-[7%] translate-y-[7%] duration-300 hidden lg:block;
            }
        }
    }

    .text-about {
        @apply space-y-10;

        .about-me {
            p {
                @apply px-2 text-start lg:px-0 xl:text-lg;
            }
        }

        .find-me {
            @apply space-y-8;

            h3 {
                @apply flex flex-col-reverse gap-[0.7rem] text-xl font-extrabold items-center lg:items-start;

                &::before {
                    @apply content-[""] w-[110px] h-[5px] rounded-[5px];
                    background-image: -webkit-linear-gradient(left,
                            #00bfa6,
                            rgba(0, 191, 165, 0.22));
                }
            }

            .contact-icons {
                @apply flex gap-4 justify-center lg:justify-start;

                a {
                    @apply bg-[#333] p-2 rounded-lg duration-300;

                    &:hover {
                        box-shadow: 0 0 20px #00bfa6,
                            0 0 20px #00bfa6;
                    }

                    span {
                        @apply block text-[2rem] text-white duration-300;
                    }
                }
            }
        }
    }
}
</style>