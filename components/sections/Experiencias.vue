<template>
    <section id="experiencias">
        <div class="container mx-auto">
            <div>
                <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                    Experiências
                </h2>
                <div class="timeline">
                    <div v-for="(empresa, i) in empresas" :key="i" class="content">
                        <div v-motion-pop-visible-once class="timeline-icon">
                            <Icon name="mdi:briefcase" />
                        </div>
                        <div v-motion-pop-visible-once :duration="700" class="timeline-card">
                            <h1 class="text-2xl font-bold mb-2">{{ empresa.nome }}</h1>
                            <h2 class="text-lg font-semibold text-[#8a8a8a]">{{ empresa.cargo }}</h2>
                            <p class="text-sm my-4 lg:text-lg">{{ empresa.descricao }}</p>
                            <h3 class="text-xl font-semibold mb-3 text-[#0097a7]">Tecnologias:</h3>
                            <div class="tecnologias flex items-center gap-2">
                                <component v-for="(logo, index) in empresa.tecnologias" :is="logo" :key="index"
                                    class="max-w-[2rem]" />
                            </div>
                            <span class="block text-sm font-semibold text-[#b0b0b0] mt-4 lg:text-base">
                                {{ empresa.data }}
                            </span>
                            <span class="content-arrow"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import IconSkillsLogoHtml from '@/components/icon/skills-logo/Html.vue';
import IconSkillsLogoCss from '@/components/icon/skills-logo/Css.vue';
import IconSkillsLogoJavascript from '@/components/icon/skills-logo/Javascript.vue';
import IconSkillsLogoVue from '@/components/icon/skills-logo/Vue.vue';
import IconSkillsLogoNuxt from '@/components/icon/skills-logo/Nuxt.vue';
import IconSkillsLogoTailwind from '@/components/icon/skills-logo/Tailwind.vue';
import IconSkillsLogoGit from '@/components/icon/skills-logo/Git.vue';
import IconSkillsLogoBootstrap from '@/components/icon/skills-logo/Bootstrap.vue';
import IconSkillsLogoLaravel from '@/components/icon/skills-logo/Laravel.vue';
import IconSkillsLogoVuetify from '@/components/icon/skills-logo/Vuetify.vue';

const empresas = [
    {
        nome: " Sixchains Digital House", cargo: "Desenvolvedor Front-end",
        descricao: "Na Sixchains, fui responsável pelo desenvolvimento Front-End, focando na criação e manutenção de aplicações utilizando Vue.js, Nuxt.js, Vuetify, JavaScript e Tailwind. Desenvolvi sites e sistemas, e trabalhei junto com a equipe de back-end para integrar nossas aplicações com APIs. Além disso, contribuí para o desenvolvimento de projetos do grupo Euro 17, incluindo sites e sistemas voltados para imóveis e securitizadora."
        , data: "Jul 2022 - Mai 2024", tecnologias: [IconSkillsLogoHtml, IconSkillsLogoCss,
            IconSkillsLogoJavascript, IconSkillsLogoVue, IconSkillsLogoNuxt, IconSkillsLogoVuetify,
            IconSkillsLogoTailwind, IconSkillsLogoGit,]
    }, {
        nome: "Upwards",
        cargo: "Desenvolvedor Full-stack",
        descricao: "Na Upwards, atuei como desenvolvedor Full-Stack, focado no sistema interno da empresa. Utilizei Vue.js para o desenvolvimento do front-end e Laravel para o back-end. Além disso, implementei testes automatizados para garantir a qualidade e a estabilidade do sistema."
        , data: "Nov 2021 - Jun 2022", tecnologias: [IconSkillsLogoHtml, IconSkillsLogoCss,
            IconSkillsLogoJavascript, IconSkillsLogoVue, IconSkillsLogoBootstrap,
            IconSkillsLogoLaravel, IconSkillsLogoGit,]
    }, {
        nome: "Garnon",
        cargo: "Desenvolvedor Full-stack",
        descricao: "Na Garnon, trabalhei na manutenção de um sistema da Angola, usando Vue.js para desenvolver a interface do usuário e Laravel para gerenciar a lógica de back-end."
        , data: "Jun 2021 - Out 2021", tecnologias: [IconSkillsLogoHtml, IconSkillsLogoCss,
            IconSkillsLogoJavascript, IconSkillsLogoVue, IconSkillsLogoBootstrap,
            IconSkillsLogoLaravel, IconSkillsLogoGit,]
    },];
</script>

<style scoped>
.timeline-card {
    @apply shadow-2xl px-5 py-8 rounded-lg border-b-[6px] border-b-primary bg-white relative;

    @screen 2xl {
        @apply !px-7;
    }
}

.timeline {
    @apply relative;
}

.timeline::after {
    @apply absolute w-[4px] h-full bg-primary top-0 left-[50%] ml-[-3px] z-[1];
    content: ''
}

.timeline-icon {
    @apply flex justify-center items-center;
}

.content {
    @apply py-8 relative w-[50%];
}

.content:nth-of-type(odd) {
    @apply left-0 pl-0 pr-[55px];

    @screen 2xl {
        @apply pr-[73px]
    }
}

.content:nth-of-type(odd) .timeline-icon {
    @screen lg {
        @apply !top-[45px];
    }

    @screen xl {
        @apply !left-[unset];
    }
}

.content:nth-of-type(even) .timeline-icon {
    @screen lg {
        @apply !top-[45px] !left-[-33px];
    }
}

.content:nth-of-type(even) {
    @apply left-[50%] pr-0 pl-[55px];

    @screen 2xl {
        @apply pl-[73px]
    }
}

.content:nth-of-type(odd) .content-arrow {
    @apply h-0 w-0 absolute top-[28px] z-[1];
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #fff;
    right: -15px;
}

.content:nth-of-type(even) .content-arrow {
    @apply h-0 w-0 absolute top-[28px] z-[1];
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #fff;
    left: -15px;
}

.content .timeline-icon {
    @apply absolute w-10 h-10 right-[-31px] top-[32px] z-[10] text-white bg-primary rounded-[50%] text-lg;

    @screen lg {
        @apply w-16 h-16 !left-[-26px] text-2xl;
    }
}

/* .text-box {
    @apply py-[20px] px-[30px] bg-white relative rounded-[6px] text-[15px] shadow-lg;
} */
/* .left-content {
    @apply left-0;
} */

/* .right-content {
    @apply left-[50%];
} */

/* .right-content .timeline-icon {
    @apply left-[-20px];
} */

/* .left-content-arrow {
    @apply h-0 w-0 absolute top-[28px] z-[1];
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid #fff;
    right: -15px;
} */

/* .right-content-arrow {
    @apply h-0 w-0 absolute top-[28px] z-[1];
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid #fff;
    left: -15px;
} */

@media (max-width: 1280px) {
    /* .timeline {
        @apply mx-auto;
    } */

    .timeline::after {
        @apply left-[8px];
    }

    .content {
        @apply w-full
    }

    /* .right-content {
        @apply left-0
    } */

    .content:nth-of-type(even) {
        @apply left-0;
    }

    .content:nth-of-type(odd) {
        @apply pr-0 pl-[55px];
    }

    .content:nth-of-type(even) .timeline-icon,
    .content:nth-of-type(odd) .timeline-icon {
        @apply left-[-13px] top-[55px];
    }



    /* .left-content .timeline-icon,
    .right-content .timeline-icon {
        @apply left-[12px];
    } */


    .content:nth-of-type(even) .content-arrow,
    .content:nth-of-type(odd) .content-arrow {
        border-right: 15px solid #fff;
        border-left: 0;
        left: -15px;
    }

    /* .left-content-arrow,
    .right-content-arrow {
        border-right: 15px solid #fff;
        border-left: 0;
        left: -15px;
    } */
}
</style>
