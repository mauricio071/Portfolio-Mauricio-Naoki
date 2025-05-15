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
    @apply fixed bottom-10 right-4 text-white p-2.5 rounded-full shadow-lg duration-300 opacity-0 z-[20] hover:bg-[#0092AC];

    background-image: -webkit-linear-gradient(top,
            rgba(0, 191, 165, 0.3),
            #007B8F);

    @screen md {
        @apply bottom-24 right-8 p-3;
    }
}

.show {
    @apply opacity-100 pointer-events-auto;
}

.hide {
    @apply opacity-0 pointer-events-none;
}
</style>