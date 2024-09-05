<template>
    <section id="habilidades" class="background-diagonal">
        <div class="container mx-auto content ">
            <div class="px-4">
                <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                    Habilidades
                </h2>
                <div
                    class="habilidades flex flex-wrap items-center justify-center gap-6 max-w-[60rem] mx-auto md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <div v-for="(tecnologia, index) in tecnologias" :key="index" v-motion-slide-visible-once-bottom
                        :delay="index * 100" :duration="600" class="z-[2]">
                        <div class="icon-card">
                            <component :is="tecnologia.logo" class="max-w-[3rem] z-[2]" />
                            <strong class="z-[2]">{{ tecnologia.nome }}</strong>
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
import IconSkillsLogoTypeScript from '@/components/icon/skills-logo/TypeScript.vue';
import IconSkillsLogoVue from '@/components/icon/skills-logo/Vue.vue';
import IconSkillsLogoNuxt from '@/components/icon/skills-logo/Nuxt.vue';
import IconSkillsLogoReact from '@/components/icon/skills-logo/React.vue';
import IconSkillsLogoBootstrap from '@components/icon/skills-lgo/BootsTrap.vue';
import IconSkillsLogoTailwind from '@/components/icon/skills-logo/Tailwind.vue';
import IconSkillsLogoSass from '@/components/icon/skills-logo/Sass.vue';
import IconSkillsLogoNode from '@/components/icon/skills-logo/Node.vue';
import IconSkillsLogoVuetify from '@/components/icon/skills-logo/Vuetify.vue';
import IconSkillsLogoGit from '@/components/icon/skills-logo/Git.vue';

const tecnologias = [
    {
        logo: IconSkillsLogoHtml,
        nome: "HTML5"
    },
    {
        logo: IconSkillsLogoCss,
        nome: "CSS3"
    },
    {
        logo: IconSkillsLogoJavascript,
        nome: "JavaSript"
    },
    {
        logo: IconSkillsLogoTypeScript,
        nome: "TypeScript"
    },
    {
        logo: IconSkillsLogoVue,
        nome: "Vue.js"
    },
    {
        logo: IconSkillsLogoNuxt,
        nome: "Nuxt.js"
    },
    {
        logo: IconSkillsLogoVuetify,
        nome: "Vuetify"
    },
    {
        logo: IconSkillsLogoReact,
        nome: "React.js"
    },
    {
        logo: IconSkillsLogoBootstrap,
        nome: "Bootstrap"
    },
    {
        logo: IconSkillsLogoTailwind,
        nome: "Tailwind"
    },
    {
        logo: IconSkillsLogoSass,
        nome: "SASS"
    },
    {
        logo: IconSkillsLogoGit,
        nome: "Git"
    },
    {
        logo: IconSkillsLogoNode,
        nome: "Node.js"
    },
]

</script>

<style scoped>
.background-diagonal {
    @apply relative;
}

.background-diagonal:after {
    @apply absolute w-full h-full bg-[#e0f7f2] top-[-3rem] right-0 bottom-0 left-0;
    content: "";
    transform-origin: top left;
    transform: skewY(4deg)
}

.icon-card {
    @apply bg-white relative flex flex-col justify-center items-center gap-4 rounded-[25px] shadow-lg w-[10rem] h-36 mx-auto duration-300 overflow-hidden cursor-pointer;

}

.icon-card:hover {
    @apply scale-110;
}

.icon-card::before {
    @apply absolute w-[5rem] h-[16rem] top-[-40%] rounded-[10px] rotate-[-48deg] bg-[#00a8b8];
    content: '';
    animation: rotate 8s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.icon-card::after {
    @apply absolute inset-[5px] rounded-[25px] bg-[white];
    content: '';
    box-shadow: inset 0px 2px 7px 0px #0000008c;
}
</style>