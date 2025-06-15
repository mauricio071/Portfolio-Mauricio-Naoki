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
                    <a @click="isOpen = false" :href="`#${item.key}`" v-motion-fade-visible :delay="i * 100"
                        :class="{ 'active': currentSection === item.key }">
                        {{ item.value }}
                    </a>
                </li>
                <li @click="toggleLocale" v-motion-fade-visible :delay="700" class="language-flag">
                    <NuxtImg :src="`/flags/${locale}.png`" :alt="locale" loading="lazy" width="28px" />
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n();

// const $router = useRouter();

const isOpen = ref(false);
const hasScrolled = ref(false);
const currentSection = ref("");

const navbarRef = ref<HTMLElement | null>(null);

const navKeys = ['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'contact'];

const items = computed((() => navKeys.map(key => (
    {
        key,
        value: t(`navbar.${key}`)
    }
))));

const handleScroll = () => {
    hasScrolled.value = window.scrollY > 0;
};

const handleClickOutside = (event: TouchEvent | MouseEvent) => {
    if (navbarRef.value && !navbarRef.value.contains(event.target as Node)) {
        isOpen.value = false;
    };
};

function toggleLocale() {
    const language = locale.value === 'pt-BR' ? 'en-US' : 'pt-BR';
    setLocale(language);
    isOpen.value = false;
};

onMounted(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentSection.value = entry.target.id;
                // if (entry.target.id !== "home") {
                //     $router.replace(`/#${entry.target.id}`);
                // } else {
                //     $router.replace("/");
                // }
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
    @apply fixed top-0 w-full p-4 duration-300 z-[100] lg:py-2;

    &.navbar-background {
        @apply shadow-xl;
        background-image: -webkit-linear-gradient(left,
                rgba(0, 185, 160, 0.985),
                rgba(10, 195, 172, 0.985),
                rgba(18, 207, 185, 0.985));
    }

    nav {
        @apply container mx-auto flex justify-between items-center flex-wrap text-white;

        h1 {
            @apply font-bold text-white text-lg xl:text-xl;
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

            li {
                a {
                    @apply relative font-bold px-1 lg:font-semibold;

                    &::after {
                        @apply content-[""] absolute h-[3px] w-0 left-0 -bottom-[7px] rounded-2xl duration-300;
                        background-image: linear-gradient(to right, white, rgba(255, 255, 255, 0.3));
                    }

                    &:hover::after,
                    &.active::after {
                        @apply w-full;
                    }
                }

                &.language-flag img {
                    @apply duration-300 cursor-pointer hover:brightness-75;
                }
            }
        }
    }
}
</style>
