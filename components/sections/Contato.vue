<template>
    <section id="contato">
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                Contato
            </h2>
            <div v-motion-fade-visible-once :duration="1000" :delay="500" class="content">
                <div class="xl:max-w-[34rem]">
                    <h1 class="text-center font-extrabold mb-8 text-3xl xl:text-4xl xl:text-start">
                        Vamos conversar!
                    </h1>
                    <p class="mb-4 text-center max-w-lg mx-auto xl:max-w-[unset] xl:text-start xl:text-lg">
                        Tem uma ideia ou precisa de ajuda com seu projeto? Estou sempre aberto a novas oportunidades e
                        colaborações. Preencha o formulário ou clique nos links abaixo e vamos conversar!
                    </p>
                    <div class="card-container">
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
    @apply flex justify-center items-center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(90, 187, 172, 0.473) 100%);
}

.content {
    @apply max-w-2xl mx-auto flex flex-col xl:grid xl:grid-cols-2 xl:gap-12 xl:max-w-[unset];
}

.card-container {
    @apply flex flex-wrap gap-4 my-14 max-w-[17rem] mx-auto sm:flex-row sm:flex-nowrap sm:max-w-[unset] sm:px-12 xl:px-0 xl:my-10;
}

.contact-card {
    @apply bg-white px-6 py-5 w-full rounded-lg duration-300 xl:w-[45%];
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
    @apply space-y-6 my-4 xl:my-0;
}

input,
textarea {
    @apply w-full rounded-lg py-4 px-3.5;
}

input:focus,
textarea:focus {
    @apply outline-none ring-2 ring-primary;
    box-shadow: 0 0 10px #00bfa6;
}

.submit-btn {
    @apply bg-white text-secondary px-20 py-3 rounded-lg mx-auto block duration-300 font-semibold xl:mx-0;
}

.submit-btn:hover {
    @apply text-primary;
    box-shadow: 0 0 10px #00bfa6,
        0 0 100px #00bfa6,
        0 0 40px #00bfa6;
}
</style>