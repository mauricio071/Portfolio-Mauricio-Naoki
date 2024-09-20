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
                    <p class="px-2 mb-4 text-center max-w-lg mx-auto xl:max-w-[unset] xl:text-start xl:text-lg">
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

                <form @submit.prevent="submitForm">
                    <input v-model="form.name" type="text" name="name" placeholder="Nome" required />
                    <input v-model="form.email" type="email" name="email" placeholder="E-mail" required />
                    <textarea v-model="form.message" name="message" placeholder="Mensagem" rows="7" cols="50"
                        required />
                    <button type="submit" :disabled="loading" class="submit-btn">
                        <span v-if="loading" class="loader"></span>
                        <span v-else class="flex items-center gap-2">
                            Enviar
                            <IconSend />
                        </span>
                    </button>
                </form>
            </div>
            <Modal :isVisible="modal" @close="fecharModal">
                <div class="modal-container flex flex-col gap-8 items-center justify-between lg:-mb-4">
                    <Icon :name="result.status === 'sucesso' ? 'mdi:check-circle-outline' : 'mdi:alert-circle-outline'"
                        :class="result.status === 'sucesso' ? 'text-[#155724]' : 'text-[#721c24]'"
                        class="text-[8rem]" />
                    <h3 class="text-2xl font-bold text-center">{{ result.message }}</h3>
                    <p class="text-center max-w-lg">{{ result.description }}</p>
                    <button @click="fecharModal" class="btn-voltar">Voltar</button>
                </div>
            </Modal>
        </div>
    </section>
</template>

<script setup>

const modal = ref(false)

const fecharModal = () => {
    modal.value = false
}

const form = ref({
    name: "",
    email: "",
    message: "",
});

const result = ref({});
const loading = ref(false);

const submitForm = async () => {
    try {
        loading.value = true;
        const response = await $fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: form.value
        });

        result.value = response;
        modal.value = true;
        if (response.status === 'sucesso') {
            result.value.status = "sucesso";
        } else {
            result.value.status = "erro";
        }
    } catch (error) {
        result.value.status = "erro";
        result.value.message = "Algo deu errado!";
        modal.value = true;
    } finally {
        loading.value = false;
        setTimeout(() => {
            modal.value = false;
        }, 5000)
    }
};
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
    @apply flex flex-wrap gap-4 my-10 max-w-[17rem] mx-auto sm:flex-row sm:flex-nowrap sm:max-w-[unset] sm:px-12 xl:px-0;
}

.contact-card {
    @apply bg-white px-6 py-5 w-full rounded-lg duration-300 xl:w-[45%];
}

.contact-card:hover {
    box-shadow: 0 0 10px #00bfa6, 0 0 5px #00bfa6, 0 0 10px #00bfa6;
}

.contact-info {
    @apply flex items-center gap-2 mb-2;
}

.contact-info h3 {
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
    @apply bg-white text-secondary px-16 py-3 rounded-lg mx-auto block duration-300 font-semibold xl:mx-0;
}

.submit-btn:hover {
    @apply text-primary;
    box-shadow: 0 0 10px #00bfa6, 0 0 100px #00bfa6, 0 0 40px #00bfa6;
}

.submit-btn:disabled {
    @apply bg-gray-300 cursor-not-allowed;
}

.loader {
    @apply flex justify-center items-center rounded-[50%] w-[24px] h-[24px];
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid white;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.btn-voltar {
    @apply text-white bg-primary px-8 py-2 rounded-lg duration-300;
}

.btn-voltar:hover {
    box-shadow: 0 0 10px #00bfa6;
}
</style>