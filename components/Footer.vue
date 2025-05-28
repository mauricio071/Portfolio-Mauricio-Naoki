<template>
    <footer>
        <div class="footer-container">
            <div class="footer-icons">
                <a href="https://github.com/mauricio071" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Icon name="mdi:github" />
                </a>
                <a :href="`https://www.linkedin.com/in/mauricionaoki${locale === 'en-US' ? '/?locale=en_US' : ''}`"
                    target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Icon name="mdi:linkedin" />
                </a>
                <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                    <Icon name="mdi:whatsapp" />
                </a>
            </div>
            <p>naokimau@gmail.com</p>
            <span>&copy; {{ currentYear }} | Maurício Naoki Nakamura</span>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
const { locale } = useI18n();
</script>

<style scoped>
footer {
    @apply text-white px-4 py-6;
    background-image: -webkit-linear-gradient(left,
            rgba(0, 185, 160),
            rgba(10, 195, 172),
            rgba(18, 207, 185));

    .footer-container {
        @apply container mx-auto flex flex-col items-center justify-center gap-5;

        @screen lg {
            @apply flex-row-reverse justify-between;
        }

        .footer-icons {
            @apply flex gap-3;

            span {
                @apply text-[2rem] block;
            }
        }

        p {
            @apply text-white;
        }

        >span {
            @apply flex-grow text-center lg:text-start;
        }
    }
}
</style>