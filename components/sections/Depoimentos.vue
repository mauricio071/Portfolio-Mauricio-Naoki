<template>
    <section id="depoimentos">
        <div class="wrapper">
            <!-- <div class="px-4"> -->
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title lg:mb-14">
                Depoimentos
            </h2>
            <div v-motion-fade-visible-once :duration="700" :delay="500" class="testimonials">
                <client-only>
                    <carousel :items-to-show="1" :breakpoints="breakpoints" wrapAround pauseAutoplayOnHover
                        :autoplay="7500">
                        <slide v-for="(testimonial, i) in testimonials" :key="i">
                            <div class="testimonial-container">
                                <div class="testimonial-person">
                                    <NuxtImg :src="`/depoimentos/${testimonial.photo}.webp`" :alt="testimonial.name"
                                        loading="lazy" densities="x1" sizes="250 lg:70" />
                                    <div class="testimonial-info">
                                        <h2>{{ testimonial.name }}</h2>
                                        <h3>{{ testimonial.company }}</h3>
                                        <p>{{ testimonial.role }}</p>
                                    </div>
                                </div>
                                <IconQuote />
                                <p>{{ testimonial.description }}</p>
                                <div class="ratings">
                                    <IconRating v-for="i in 5" :key="i" />
                                </div>
                            </div>
                        </slide>

                        <template #addons>
                            <pagination />
                        </template>
                    </carousel>
                </client-only>
            </div>
            <!-- </div> -->
        </div>
    </section>
</template>

<script setup>
import { testimonials } from '@/constants/depoimentos';

const breakpoints = {
    1024: {
        itemsToShow: 2,
        snapAlign: 'center-[odd|even]',
    },
};
</script>

<style scoped>
:deep(.carousel) {
    .carousel__slide {
        @apply mb-10;

        .testimonial-container {
            @apply flex flex-col items-center space-y-4 p-4 relative pb-4;

            @screen lg {
                @apply min-h-[22.75rem] max-w-[27rem] items-start my-8 p-8;
                box-shadow: 0 3px 11px rgba(0, 0, 0, 0.2);
            }

            @screen xl {
                @apply min-h-[20rem] max-w-[33rem] p-7;
            }

            @screen 2xl {
                @apply max-w-[35rem] p-6;
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

                @screen lg {
                    @apply flex-row pl-1;
                }

                img {
                    @apply max-w-[120px] rounded-[50%] lg:w-[70px];
                }

                .testimonial-info {
                    @apply flex flex-col gap-0.5 justify-center items-center lg:items-start;

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

                @screen lg {
                    @apply flex-grow text-start text-base pl-[0.45rem];
                }
            }

            .ratings {
                @apply flex gap-1 lg:pl-1;

                svg {
                    @apply w-[24px] h-[24px];
                }
            }
        }
    }

    .carousel__pagination {
        @apply flex items-center gap-3.5 -bottom-[1.25rem] lg:bottom-[0];

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
}
</style>