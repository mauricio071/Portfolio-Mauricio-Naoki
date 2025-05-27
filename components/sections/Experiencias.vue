<template>
    <section id="experiencias">
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                Experiências
            </h2>
            <div class="timeline">
                <div v-for="(experience, i) in experiences" :key="i" class="content">
                    <div v-motion-pop-visible-once class="timeline-icon">
                        <Icon name="mdi:briefcase" />
                    </div>
                    <div v-motion-pop-visible-once :duration="700" class="timeline-card">
                        <h1>{{ experience.name }}</h1>
                        <h2>{{ experience.role }}</h2>
                        <p>{{ experience.description }}</p>
                        <h3>Tecnologias:</h3>
                        <div class="technologies">
                            <component v-for="(technology, i) in experience.technologies" :is="iconMap[technology]"
                                :key="i" class="logo" />
                        </div>
                        <span class="date">{{ experience.date }}</span>
                        <span class="content-arrow"></span>
                    </div>
                    <span v-motion-pop-visible-once class="company-date">{{ experience.date }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { experiences } from '@/constants/empresas';
import { iconMap } from '@/composables/iconMap';
</script>

<style scoped>
.timeline {
    @apply relative;

    &::after {
        @apply content-[""] absolute w-[4px] h-full top-0 left-[12px] -ml-[3px] z-[1] lg:left-[8px] xl:left-[50%];
        background-image: -webkit-linear-gradient(top,
                #00bfa6,
                rgba(0, 191, 165, 0.7) 80%,
                transparent 100%);
    }

    .content {
        @apply w-full py-8 relative xl:w-[50%];

        &:nth-of-type(odd) {
            @apply left-0 pl-[55px] pr-0;

            @screen xl {
                @apply pl-0 pr-[55px];
            }

            @screen 2xl {
                @apply pr-[73px];
            }
        }

        &:nth-of-type(even) {
            @apply left-0 pr-0 pl-[55px] xl:left-[50%] 2xl:pl-[73px];
        }

        .timeline-icon {
            @apply absolute flex justify-center items-center w-12 h-12 top-[32px] right-[-31px] text-white text-2xl rounded-[50%] z-[10];
            background-image: -webkit-linear-gradient(top,
                    rgb(116, 226, 212),
                    #00bfa6);

            @screen lg {
                @apply w-16 h-16 !left-[-26px];
            }
        }

        .timeline-card {
            @apply relative bg-white border-b-[6px] border-b-primary rounded-lg shadow-2xl py-7 px-5 md:py-8 2xl:px-7;

            h1 {
                @apply font-extrabold mb-2 text-xl sm:text-2xl;
            }

            h2 {
                @apply font-bold text-[#8a8a8a] sm:text-lg;
            }

            p {
                @apply my-4 text-sm sm:text-lg;
            }

            h3 {
                @apply font-extrabold mb-3 text-[#0097a7] text-lg sm:text-xl;
            }

            .technologies {
                @apply flex items-center gap-2;

                .logo {
                    @apply max-w-[2rem];
                }
            }

            span.date {
                @apply font-bold text-[#b0b0b0] mt-4 block xl:hidden;
            }
        }

        .company-date {
            @apply absolute text-lg font-bold text-[#b0b0b0] hidden xl:block;
        }

        &:nth-of-type(odd) .timeline-icon,
        &:nth-of-type(even) .timeline-icon {
            @apply top-[55px] -left-[13px];
        }

        &:nth-of-type(odd) .timeline-icon {
            @apply lg:top-[45px] xl:left-[unset] !important;
        }

        &:nth-of-type(even) .timeline-icon {
            @apply lg:top-[45px] xl:-left-[33px] !important;
        }

        &:nth-of-type(odd) .content-arrow,
        &:nth-of-type(even) .content-arrow {
            @apply h-0 w-0 absolute top-[28px] z-[1] border-y-[15px] border-y-transparent;
        }

        &:nth-of-type(even) .content-arrow,
        &:nth-of-type(odd) .content-arrow {
            @apply border-r-[15px] border-r-white border-l-0 -left-[15px];
        }

        &:nth-of-type(odd) .content-arrow {
            @screen xl {
                @apply border-r-0 border-l-[15px] border-l-white -right-[15px] left-[unset];
            }
        }

        &:nth-of-type(odd) .company-date {
            @apply top-[4rem] -right-[14.5rem];
        }

        &:nth-of-type(even) .company-date {
            @apply top-[4rem] -left-[14.75rem];
        }
    }
}
</style>
