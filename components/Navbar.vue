<template>
    <header ref="navbarRef" class="fixed top-0 w-full p-4 duration-300 lg:py-3 z-[100]"
        :class="{ 'navbar-background': hasScrolled || isOpen, 'bg-transparent': !hasScrolled }">
        <nav class="container mx-auto flex justify-between items-center flex-wrap text-white ">
            <h1 class="text-[1.175rem] sm:text-xl font-semibold text-white">
                <a href="#" class="relative font-bold px-1">
                    <span>&lt; </span>
                    Maurício Naoki
                    <span> /&gt;</span>
                </a>
            </h1>
            <Icon @click="isOpen = !isOpen" name="material-symbols:menu-rounded"
                class="text-[2rem] lg:hidden w-10 h-10 cursor-pointer" />
            <ul :class="{ 'hidden': !isOpen, 'flex': isOpen }"
                class="flex-col items-center gap-5 w-full py-4 lg:gap-4 lg:flex lg:flex-row lg:justify-between lg:w-[unset] lg:my-[unset] xl:gap-5">
                <li v-for="(item, i) in items" :key="i">
                    <a @click="isOpen = false" :href="`#${item}`" v-motion-fade-visible :delay="i * 100"
                        :class="{ 'active': currentSection === item }" class="capitalize">
                        {{ item }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const isOpen = ref(false);
const hasScrolled = ref(false);

const navbarRef = ref(null);

const items = [
    'início',
    'sobre',
    'habilidades',
    'experiencias',
    'projetos',
    'depoimentos',
    'contato'
];

const handleScroll = () => {
    hasScrolled.value = window.scrollY > 0;
}

const handleClickOutside = (event) => {
    if (navbarRef.value && !navbarRef.value.contains(event.target)) {
        isOpen.value = false;
    }
}
const currentSection = ref('');

onMounted(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentSection.value = entry.target.id;
            }
        })
    }, {
        rootMargin: '-30% 0px -70% 0px',
    });

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("touchstart", handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
})

</script>

<style scoped>
.navbar-background {
    @apply shadow-xl;

    background-image: -webkit-linear-gradient(left,
            rgba(0, 185, 160, 0.975),
            rgba(10, 195, 172, 0.975),
            rgba(18, 207, 185, 0.975));
}

li a {
    @apply relative font-bold px-1;

    &::after {
        @apply content-[''] absolute h-[3px] w-0 left-0 bottom-[-7px] rounded-2xl duration-300;

        background-image: linear-gradient(to right, white, rgba(255, 255, 255, 0.3));
    }

    &:hover::after,
    &.active::after {
        @apply w-full;
    }
}
</style>
