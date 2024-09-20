<template>
    <header class="fixed top-0 w-full p-4 transition-all duration-300 lg:py-3 z-[100]"
        :class="{ '!bg-[#00bfa6fb] shadow-xl': hasScrolled || isOpen, 'bg-transparent': !hasScrolled }">
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
                class="flex-col items-center gap-5 w-full py-4 lg:gap-4 lg:flex lg:flex-row lg:justify-between lg:w-[unset] lg:my-[unset] xl:gap-5">
                <li v-for="(item, i) in items" :key="i">
                    <a :href="`#${item}`" v-motion-fade-visible-once :delay="i * 100" class="capitalize">{{ item }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const isOpen = ref(false)
const hasScrolled = ref(false)

const items = [
    'início',
    'sobre',
    'habilidades',
    'experiencias',
    'projetos',
    'depoimentos',
    'contato'
]

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
