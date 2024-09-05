<template>
    <header class="fixed top-0 w-full p-4 transition-all duration-300 lg:py-2 z-[100]"
        :class="{ '!bg-primary shadow-xl': hasScrolled || isOpen, 'bg-transparent': !hasScrolled }">
        <nav class="container mx-auto flex justify-between items-center flex-wrap text-white">
            <h1 class="text-xl font-semibold text-white">
                <a href="#" class="relative font-bold px-1">
                    <span>&lt; </span>
                    Maurício Naoki
                    <span> /&gt;</span>
                </a>
            </h1>
            <Icon @click="isOpen = !isOpen" name="mdi:menu" class="text-[2rem] lg:hidden w-10 h-10 cursor-pointer" />
            <ul :class="{ 'hidden': !isOpen, 'flex': isOpen }"
                class="flex-col items-center gap-4 w-full py-4 lg:flex lg:flex-row lg:justify-between lg:w-[unset] lg:my-[unset] xl:gap-6">
                <li v-motion-fade-visible-once :delay="0">
                    <a href="#inicio">Início</a>
                </li>
                <li v-motion-fade-visible-once :delay="100">
                    <a href="#sobre">Sobre</a>
                </li>
                <li v-motion-fade-visible-once :delay="200">
                    <a href="#habilidades">Habilidades</a>
                </li>
                <li v-motion-fade-visible-once :delay="300">
                    <a href="#experiencias">Experiências</a>
                </li>
                <li v-motion-fade-visible-once :delay="400">
                    <a href="#projetos">Projetos</a>
                </li>
                <li v-motion-fade-visible-once :delay="500">
                    <a href="#depoimentos">Depoimentos</a>
                </li>
                <!-- <li v-motion-fade-visible-once :delay="600">
                    <a href="#contato">Contato</a>
                </li> -->
            </ul>
        </nav>
    </header>
</template>

<script setup>
const isOpen = ref(false)
const hasScrolled = ref(false)

const handleScroll = () => {
    hasScrolled.value = window.scrollY > 0
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

</script>

<style scoped>
li a {
    @apply relative font-bold px-1;
}

li a:after {
    @apply content-[''] absolute bg-white h-[2px] w-0 left-0 bottom-[-7px] rounded-2xl duration-300;
}

li a:hover:after {
    @apply w-full;
}
</style>
