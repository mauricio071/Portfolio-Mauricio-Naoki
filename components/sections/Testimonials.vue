<template>
    <section id="testimonials">
        <div class="wrapper">
            <div class="px-2">
                <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title lg:mb-14">
                    {{ $t("testimonials.title") }}
                </h2>
                <div v-motion-fade-visible-once :duration="700" :delay="500" class="testimonials">
                    <div class="fade-mask">
                        <client-only>
                            <carousel :items-to-show="1" :breakpoints="breakpoints" wrapAround pauseAutoplayOnHover
                                :autoplay="0">
                                <slide v-for="(testimonial, i) in testimonials" :key="i">
                                    <div class="testimonial-container">
                                        <div class="testimonial-person">
                                            <NuxtImg :src="`/depoimentos/${testimonial.id}.webp`"
                                                :alt="testimonial.name" loading="lazy" sizes="125px lg:70px" />
                                            <div class="testimonial-info">
                                                <h2>{{ testimonial.name }}</h2>
                                                <h3>{{ testimonial.company }}</h3>
                                                <p>{{ $t(`testimonials.${testimonial.id}.role`) }}</p>
                                            </div>
                                        </div>
                                        <IconQuote />
                                        <p>{{ $t(`testimonials.${testimonial.id}.description`) }}</p>
                                        <div class="ratings">
                                            <IconRating v-for="i in 5" :key="i" />
                                        </div>
                                    </div>
                                </slide>

                                <template #addons>
                                    <navigation>
                                        <template #prev>
                                            <Icon name="material-symbols:keyboard-arrow-up-rounded" size="3.5rem"
                                                class="rotate-[270deg]" />
                                        </template>
                                        <template #next>
                                            <Icon name="material-symbols:keyboard-arrow-up-rounded" size="3.5rem"
                                                class="rotate-90" />
                                        </template>
                                    </navigation>
                                    <pagination />
                                </template>
                            </carousel>
                        </client-only>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { testimonials } from '@/constants/testimonials';
import type { Breakpoints } from 'vue3-carousel';

const breakpoints: Breakpoints = {
    1280: {
        itemsToShow: 2,
        gap: 85
    },
    1536: {
        itemsToShow: 2,
        gap: 60
    },
};
</script>

<style scoped>
.fade-mask {

    &::before,
    &::after {
        @apply content-[""] absolute top-0 bottom-0 w-1/4 z-[5] pointer-events-none hidden xl:block;
    }

    &::before {
        @apply left-0 bg-gradient-to-r from-white to-transparent;
    }

    &::after {
        @apply right-0 bg-gradient-to-l from-white to-transparent;
    }
}

:deep(.carousel) {
    @apply mx-auto max-w-[40rem] lg:max-w-[45rem] xl:max-w-[unset];

    .carousel__slide {
        @apply mb-10;

        .testimonial-container {
            @apply flex flex-col items-center space-y-4 p-4 relative;

            @screen md {
                @apply max-w-[35rem] items-start my-8 p-6;
                box-shadow: 0 3px 11px rgba(0, 0, 0, 0.2);
            }

            @screen lg {
                @apply min-h-[22.75rem] max-w-[40rem];
            }

            @screen xl {
                @apply min-h-[20rem] max-w-[35rem];
            }

            &::before,
            &::after {
                @apply content-[""] absolute w-[90px] h-[90px];
            }

            &::before {
                @apply top-0 left-0 border-t-[5px] border-t-primary border-l-[5px] border-l-primary;
            }

            &::after {
                @apply right-0 bottom-0 border-b-[5px] border-b-primary border-r-[5px] border-r-primary;
            }

            .testimonial-person {
                @apply flex flex-col items-center gap-4;

                @screen md {
                    @apply flex-row pl-1;
                }

                img {
                    @apply max-w-[120px] rounded-[50%] md:w-[70px];
                }

                .testimonial-info {
                    @apply flex flex-col gap-0.5 justify-center items-center md:items-start;

                    h2 {
                        @apply text-lg font-bold;
                    }

                    h3 {
                        @apply text-gray-700 font-bold text-sm;
                    }

                    p {
                        @apply text-gray-500 font-semibold text-sm;
                    }
                }
            }

            >svg {
                @apply absolute right-[2rem] !mt-0 hidden sm:block;
            }

            >p {
                @apply text-sm;

                @screen md {
                    @apply text-base;
                }

                @screen lg {
                    @apply flex-grow text-start pl-[0.45rem];
                }
            }

            .ratings {
                @apply flex gap-1 md:pl-1;

                svg {
                    @apply w-[24px] h-[24px];
                }
            }
        }
    }

    .carousel__pagination {
        @apply flex items-center gap-6 -bottom-[0.85rem] md:bottom-[0.35rem];

        .carousel__pagination-button {
            @apply w-3 h-3 rounded-[50%] duration-300;

            &:hover {
                @apply bg-primary;
            }
        }

        .carousel__pagination-button--active {
            @apply bg-primary;

            &::before {
                @apply content-[""] bg-transparent border-2 border-primary block w-6 h-6 rounded-[50%];
                transform: translate(-25%, -25%);
            }
        }
    }

    .carousel__prev,
    .carousel__next {
        @apply top-[45%] text-[#090f207f] z-[10] duration-300 hidden pointer-events-none;

        &:hover {
            @apply text-primary;
        }

        @screen md {
            @apply block pointer-events-auto;
        }
    }

    .carousel__prev {
        @apply -left-[4rem];
    }

    .carousel__next {
        @apply -right-[2rem];
    }
}
</style>