<template>
    <div>
        <Navbar />
        <slot />
        <a v-motion-pop-visible v-show="visible" href="#" class="topo-btn">
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
    @apply fixed bottom-10 right-4 bg-[#007B8F] text-white p-2 rounded-full shadow-lg transition hover:bg-[#0092AC] z-[20];

    @screen md {
        @apply bottom-24 right-8 p-3;
    }
}
</style>