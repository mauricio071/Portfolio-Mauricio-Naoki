<template>
    <div>
        <Navbar />
        <slot />
        <a href="#" :class="['topo-btn', visible ? 'show' : 'hide']">
            <Icon name="mdi:arrow-up" class="text-[1.75rem] block" />
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
    @apply fixed bottom-10 right-4 text-white p-2.5 rounded-full shadow-lg duration-300 opacity-0 z-[20] bg-[#00a6b6] hover:bg-[#00829a];

    @screen md {
        @apply bottom-14 right-14 p-3;
    }
}

.show {
    @apply opacity-100 pointer-events-auto;
}

.hide {
    @apply opacity-0 pointer-events-none;
}
</style>