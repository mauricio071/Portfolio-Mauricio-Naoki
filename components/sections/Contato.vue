<template>
    <section id="contato">
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                Contato
            </h2>
            <div v-motion-fade-visible-once :duration="1000" :delay="500" class="content">
                <p class="mb-4 text-justify max-w-[37rem] mx-auto sm:text-start xl:text-lg">
                    Tem uma ideia ou precisa de ajuda com seu projeto? Estou sempre aberto a novas oportunidades e
                    colaborações. Preencha o formulário e vamos conversar!
                </p>
                <div
                    class="flex flex-wrap gap-4 my-14 max-w-[17rem] mx-auto sm:flex-row sm:flex-nowrap sm:max-w-[unset] sm:px-12">
                    <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                        class="contact-card">
                        <div class="contact-info">
                            <Icon name="mdi:whatsapp" class="text-[#25d366] w-7 h-7 block" />
                            <h3>WhatsApp</h3>
                        </div>
                        <span>+55 11 94281-6814</span>
                    </a>

                    <a href="mailto:naokimau@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail"
                        class="contact-card">
                        <div class="contact-info">
                            <IconGmail />
                            <h3>E-mail</h3>
                        </div>
                        <span>naokimau@gmail.com</span>
                    </a>
                </div>
                <form action="https://formsubmit.co/naokimau@gmail.com" method="POST">
                    <input type="text" name="name" placeholder="Nome" required>
                    <input type="email" name="email" placeholder="E-mail" required>
                    <textarea name="subject" placeholder="Mensagem" rows="7" cols="50" required />
                    <button type="submit" class="submit-btn">
                        Enviar
                    </button>

                    <input type="hidden" name="_subject" value="Contato pelo portfolio">
                    <!-- <input type="hidden" name="_captcha" value="false"> -->
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
#contato {
    @apply flex justify-center items-center pt-0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(90, 187, 172, 0.473) 100%);
}

.content {
    @apply max-w-2xl mx-auto;
}

.contact-card {
    @apply bg-white px-6 py-5 w-full rounded-lg duration-300;
}

.contact-card:hover {
    box-shadow: 0 0 10px #00bfa6,
        0 0 5px #00bfa6,
        0 0 10px #00bfa6;
}

.contact-info {
    @apply flex items-center gap-2 mb-2;
}

h3 {
    @apply text-xl font-bold;
}

form {
    @apply space-y-6 my-4;
}

input,
textarea {
    @apply w-full rounded-lg p-4;
}

input:focus,
textarea:focus {
    @apply outline-none ring-2 ring-primary;
    box-shadow: 0 0 10px #00bfa6;
}

.submit-btn {
    @apply bg-white px-20 py-3 rounded-lg mx-auto block duration-300 font-semibold;
}

.submit-btn:hover {
    @apply text-primary;
    box-shadow: 0 0 10px #00bfa6,
        0 0 100px #00bfa6,
        0 0 40px #00bfa6;
}
</style>