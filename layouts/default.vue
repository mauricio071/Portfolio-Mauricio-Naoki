<template>
    <div>
        <Navbar />
        <slot />
        <button v-show="visible" @click="scrollToTop" class="topo-btn">
            <!-- <v-icon icon="mdi-arrow-up"></v-icon> -->
        </button>
        <Footer />
    </div>
</template>

<script setup>
const visible = ref(false);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const handleScroll = () => {
    visible.value = window.scrollY > 800;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.topo-btn {
    @apply fixed bottom-10 right-4 bg-[#007B8F] text-white p-2 rounded-full shadow-lg transition hover:bg-[#0092AC];

    @screen md {
        @apply bottom-24 right-8 p-3;
    }
}
</style>