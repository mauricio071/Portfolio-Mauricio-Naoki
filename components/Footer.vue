<template>
    <footer>
        <div
            class="container mx-auto flex flex-col items-center justify-center gap-2 lg:flex-row-reverse lg:justify-between">
            <div class="flex gap-3">
                <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer" aria-label="Github">
                    <Icon name="mdi:github" class="text-[2rem] block" />
                </a>
                <a href="https://www.linkedin.com/in/mauricionaoki" target="_blank" rel="noreferrer"
                    aria-label="LinkedIn">
                    <Icon name="mdi:linkedin" class="text-[2rem] block" />
                </a>
                <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                    <Icon name="mdi:whatsapp" class="text-[2rem] block" />
                </a>
            </div>
            <p class="text-white">naokimau@gmail.com</p>
            <span class="flex-grow text-center lg:text-start">&copy; {{ anoAtual }} | Maurício Naoki Nakamura</span>
        </div>
    </footer>
</template>

<script setup>
const anoAtual = new Date().getFullYear();
</script>

<style scoped>
footer {
    @apply text-white px-4 py-6;

    background-image: -webkit-linear-gradient(left,
            rgba(0, 185, 160),
            rgba(10, 195, 172),
            rgba(18, 207, 185));
}
</style>