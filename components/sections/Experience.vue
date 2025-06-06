<template>
    <section id="experience">
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                {{ $t(`experience.title`) }}
            </h2>
            <div class="timeline">
                <div v-for="(company, i) in experience" :key="i" class="content">
                    <div v-motion-pop-visible-once class="timeline-icon">
                        <Icon name="mdi:briefcase" />
                    </div>
                    <div v-motion-pop-visible-once :duration="700" class="timeline-card">
                        <div class="company-name">{{ company.name }}</div>
                        <h2>{{ $t(`experience.${company.id}.role`) }}</h2>
                        <p>{{ $t(`experience.${company.id}.description`) }}</p>
                        <h3>{{ $t(`experience.techsTitle`) }}:</h3>
                        <div class="technologies">
                            <component v-for="(technology, i) in company.technologies" :is="iconMap[technology]"
                                :key="i" class="logo" />
                        </div>
                        <span class="date">{{ $t(`experience.${company.id}.date`) }}</span>
                        <span class="content-arrow"></span>
                    </div>
                    <span v-motion-pop-visible-once class="company-date">{{ $t(`experience.${company.id}.date`)
                    }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { experience } from '@/constants/experience';
import { iconMap } from '@/composables/iconMap';
</script>

<style scoped>
.timeline {
    @apply relative;

    &::after {
        @apply content-[""] absolute w-[5px] h-full top-0 left-[12px] -ml-[3px] z-[1] sm:left-0 md:left-[30px] lg:left-[36px] xl:left-[50%];
        background-image: -webkit-linear-gradient(top,
                #00bfa6,
                rgba(0, 191, 165, 0.7) 80%,
                transparent 100%);
    }

    .content {
        @apply w-full py-8 relative xl:w-[50%];

        &:nth-of-type(odd) {
            @apply left-0 pl-[55px] pr-0;

            @screen md {
                @apply pl-[95px];
            }

            @screen xl {
                @apply pl-0 pr-[75px];
            }
        }

        &:nth-of-type(even) {
            @apply left-0 pl-[55px] pr-0;

            @screen md {
                @apply pl-[95px];
            }

            @screen xl {
                @apply pl-[75px] pr-0 left-1/2;
            }
        }

        .timeline-icon {
            @apply absolute flex justify-center items-center w-12 h-12 top-[32px] -right-[31px] text-white text-2xl rounded-[50%] z-[10];
            background-image: -webkit-linear-gradient(top,
                    rgb(116, 226, 212),
                    #00bfa6);

            @screen sm {
                @apply w-14 h-14 !-left-[29px];
            }

            @screen md {
                @apply w-16 h-16 !-left-[3px]
            }

            @screen lg {
                @apply !left-[3px];
            }

            @screen xl {
                @apply !-left-[26px];
            }
        }

        .timeline-card {
            @apply relative bg-white border-b-[6px] border-b-primary rounded-lg shadow-2xl py-5 px-4 xl:p-7;

            .company-name {
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
                @apply flex items-center gap-2.5;

                .logo {
                    @apply h-7 w-7;

                    @screen sm {
                        @apply h-9 w-9 gap-3;
                    }
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
