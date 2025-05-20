<template>
    <div>
        <Navbar />
        <slot />
        <a href="#" :class="['topo-btn', visible ? 'show' : 'hide']">
            <Icon name="material-symbols:keyboard-arrow-up-rounded" size="2.55rem" />
        </a>
        <Footer />
    </div>
</template>

<script setup>
const visible = ref(false);

const handleScroll = () => {
    visible.value = window.scrollY > 800;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.topo-btn {
    @apply fixed bottom-10 right-4 h-12 w-12 flex justify-center items-center text-white rounded-full shadow-lg duration-300 opacity-0 z-[20] bg-[#00a6b6] hover:bg-[#00829a];

    @screen md {
        @apply bottom-14 right-14 h-[3.25rem] w-[3.25rem];
    }
}

.show {
    @apply opacity-100 pointer-events-auto;
}

.hide {
    @apply opacity-0 pointer-events-none;
}
</style>