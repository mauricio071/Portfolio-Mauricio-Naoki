<template>
    <div>
        <Navbar />
        <slot />
        <a href="#" :class="['toTop-btn', visible ? 'show' : 'hide']" :aria-label="$t('toTop')">
            <Icon name="material-symbols:keyboard-arrow-up-rounded" size="2.55rem" />
        </a>
        <Footer />
    </div>
</template>

<script setup lang="ts">
const visible = ref(false);

const handleScroll = () => {
    visible.value = window.scrollY > 800;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.toTop-btn {
    @apply fixed right-4 bottom-10 h-12 w-12 flex justify-center items-center text-white rounded-full shadow-lg duration-300 opacity-0 z-[20] bg-[#00a6b6] hover:bg-[#00829a];

    @screen md {
        @apply right-14 bottom-14 w-[3.25rem] h-[3.25rem];
    }
}

.show {
    @apply opacity-100 pointer-events-auto;
}

.hide {
    @apply opacity-0 pointer-events-none;
}
</style>