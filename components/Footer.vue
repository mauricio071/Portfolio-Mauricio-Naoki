<template>
    <footer class="bg-primary text-white px-4 py-6">
        <div
            class="container mx-auto flex flex-col items-center justify-center gap-2 lg:flex-row-reverse lg:justify-between">
            <div class="flex gap-3">
                <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer">
                    <Icon name="mdi:github" class="text-[2rem] block" />
                </a>
                <a href="https://www.linkedin.com/in/mauricionaoki" target="_blank" rel="noreferrer">
                    <Icon name="mdi:linkedin" class="text-[2rem] block" />
                </a>
                <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer">
                    <Icon name="mdi:whatsapp" class="text-[2rem] block" />
                </a>
            </div>
            <p class="text-white">naokimau@gmail.com</p>
            <span class="flex-grow">&copy; {{ anoAtual }} | Maurício Naoki Nakamura</span>
        </div>
    </footer>
</template>

<script setup>
const anoAtual = computed(() => {
    return new Date().toLocaleDateString('pt-BR', { year: 'numeric' })
})
</script>