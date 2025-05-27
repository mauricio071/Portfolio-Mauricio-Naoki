<template>
    <section id="contato">
        <div class="wrapper">
            <h2 v-motion-slide-visible-once-bottom :duration="700" class="section-title">
                Contato
            </h2>
            <div v-motion-fade-visible-once :duration="1000" :delay="500" class="content">
                <div class="contact-text">
                    <h1>Vamos conversar!</h1>
                    <p>
                        Tem uma ideia ou precisa de ajuda com seu projeto? Estou sempre aberto a novas oportunidades e
                        colaborações. Preencha o formulário ou clique nos links abaixo e vamos conversar!
                    </p>
                    <div class="card-container">
                        <a href="https://wa.me/5511942816814" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                            class="contact-card">
                            <div class="contact-info">
                                <Icon name="mdi:whatsapp" class="text-[#25d366]" />
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
                    <button type="submit" :disabled="loading">
                        <span v-if="loading" class="loader"></span>
                        <span v-else class="btn-content">
                            Enviar
                            <IconSend />
                        </span>
                    </button>
                </form>
            </div>
        </div>
        <Modal :isVisible="modal" @close="modal = false">
            <div class="modal-content">
                <Icon :name="result.status === 'success' ? 'mdi:check-circle-outline' : 'mdi:alert-circle-outline'"
                    :class="result.status === 'success' ? 'text-[#155724]' : 'text-[#721c24]'" />
                <h3>{{ result.message }}</h3>
                <p>{{ result.description }}</p>
                <button @click="modal = false">Voltar</button>
            </div>
        </Modal>
    </section>
</template>

<script setup lang="ts">
import type { ContactBody, EmailResponse } from '@/interfaces/ContactType';

const modal = ref(false);

const form = ref<ContactBody>({
    name: "",
    email: "",
    message: "",
});

const result = ref<EmailResponse>({
    status: "",
    message: "",
    description: "",
});

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

        if (response.status === 'success') {
            result.value.status = "success";
        } else {
            result.value.status = "error";
        }
    } catch (error) {
        result.value.status = "error";
        result.value.message = "Algo deu errado!";
        modal.value = true;
    } finally {
        loading.value = false;

        setTimeout(() => {
            modal.value = false;
        }, 5000);
    }
};
</script>

<style scoped>
#contato {
    @apply flex justify-center items-center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(90, 187, 172, 0.473) 100%);

    .wrapper {
        .content {
            @apply max-w-2xl mx-auto flex flex-col;

            @screen xl {
                @apply grid grid-cols-2 gap-12 max-w-[unset];
            }

            .contact-text {
                @apply relative xl:max-w-[34rem];

                &::before {
                    @apply content-[""] absolute -top-5 w-full h-[80%] bg-gradient-to-br from-[#00BFA6] to-[#63e6d2] -z-[1] opacity-10 blur-[85px];
                }

                h1 {
                    @apply text-center font-extrabold mb-8 text-3xl;

                    @screen xl {
                        @apply text-4xl text-start;
                    }
                }

                p {
                    @apply max-w-lg mx-auto text-center px-2 mb-4;

                    @screen xl {
                        @apply max-w-[unset] text-start text-lg;
                    }
                }

                .card-container {
                    @apply flex flex-wrap gap-4 my-10 max-w-[17rem] mx-auto;

                    @screen sm {
                        @apply flex-row flex-nowrap max-w-[unset] px-12;
                    }

                    @screen xl {
                        @apply px-0;
                    }

                    .contact-card {
                        @apply bg-white px-6 py-5 w-full rounded-lg duration-300 xl:w-[45%];

                        &:hover {
                            box-shadow: 0 0 10px #00bfa6, 0 0 5px #00bfa6, 0 0 10px #00bfa6;
                        }

                        .contact-info {
                            @apply flex items-center gap-2 mb-2;

                            span {
                                @apply w-7 h-7 block;
                            }

                            h3 {
                                @apply text-xl font-bold;
                            }
                        }
                    }
                }
            }

            form {
                @apply space-y-6 my-4 xl:my-0;

                button {
                    @apply relative overflow-hidden flex justify-center bg-white text-secondary px-16 py-3 rounded-lg mx-auto duration-300 font-semibold shadow-sm z-[1] xl:mx-0;

                    &::before {
                        @apply content-[""] absolute w-0 h-full top-0 left-0 bg-gradient-to-r from-[#00BFA6] to-[#63e6d2] z-[-1] duration-500;
                    }

                    &:hover {
                        @apply text-white;
                        box-shadow: 0 0 20px #00bfa6,
                            0 0 20px #00bfa6;

                        &::before {
                            @apply w-full;
                        }
                    }

                    &:disabled {
                        @apply bg-gray-300 cursor-not-allowed w-[12.75rem];

                        &::before {
                            @apply w-0;
                        }
                    }

                    .btn-content {
                        @apply flex items-center gap-2;
                    }
                }
            }
        }
    }
}

.modal-content {
    @apply flex flex-col gap-8 items-center justify-between lg:-mb-4;

    span {
        @apply text-[8rem];
    }

    h3 {
        @apply text-2xl font-bold text-center;
    }

    p {
        @apply text-center max-w-lg;
    }

    button {
        @apply text-white bg-primary px-8 py-2 rounded-lg duration-300;

        &:hover {
            box-shadow: 0 0 10px #00bfa6;
        }
    }
}
</style>