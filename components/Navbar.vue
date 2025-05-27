<template>
    <header ref="navbarRef" :class="{ 'navbar-background': hasScrolled || isOpen, 'bg-transparent': !hasScrolled }">
        <nav>
            <h1>
                <a href="#">
                    <span>&lt; </span>
                    Maurício Naoki
                    <span> /&gt;</span>
                </a>
            </h1>
            <Icon @click="isOpen = !isOpen" name="material-symbols:menu-rounded" />
            <ul :class="{ 'hidden': !isOpen, 'flex': isOpen }">
                <li v-for="(item, i) in items" :key="i">
                    <a @click="isOpen = false" :href="`#${item}`" v-motion-fade-visible :delay="i * 100"
                        :class="{ 'active': currentSection === item }">
                        {{ item }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const hasScrolled = ref(false);
const currentSection = ref("");

const navbarRef = ref<HTMLElement | null>(null);

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
};

const handleClickOutside = (event: TouchEvent | MouseEvent) => {
    if (navbarRef.value && !navbarRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    };
};

onMounted(() => {
    const sections = document.querySelectorAll("section[id]");

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
    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
</script>

<style scoped>
header {
    @apply fixed top-0 w-full p-4 duration-300 z-[100] lg:py-3;

    &.navbar-background {
        @apply shadow-xl;
        background-image: -webkit-linear-gradient(left,
                rgba(0, 185, 160, 0.975),
                rgba(10, 195, 172, 0.975),
                rgba(18, 207, 185, 0.975));
    }

    nav {
        @apply container mx-auto flex justify-between items-center flex-wrap text-white;

        h1 {
            @apply font-semibold text-white text-[1.175rem] sm:text-xl;

            a {
                @apply relative font-bold px-1;
            }
        }

        >span {
            @apply text-[2rem] w-10 h-10 cursor-pointer lg:hidden;
        }

        ul {
            @apply flex-col items-center gap-6 w-full pt-7 pb-4;

            @screen lg {
                @apply flex flex-row gap-4 justify-between w-[unset] my-[unset] pt-4;
            }

            @screen xl {
                @apply gap-5;
            }

            li a {
                @apply relative font-bold capitalize px-1;

                &::after {
                    @apply content-[""] absolute h-[3px] w-0 left-0 -bottom-[7px] rounded-2xl duration-300;
                    background-image: linear-gradient(to right, white, rgba(255, 255, 255, 0.3));
                }

                &:hover::after,
                &.active::after {
                    @apply w-full;
                }
            }
        }
    }
}
</style>
