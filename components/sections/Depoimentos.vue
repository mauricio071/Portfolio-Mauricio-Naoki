<template>
    <section id="depoimentos">
        <section id="projetos">
            <div class="container mx-auto">
                <div class="px-4">
                    <h2 class="section-title">
                        Depoimentos
                    </h2>
                    <div class="depoimentos">
                        <carousel :items-to-show="1" :breakpoints="breakpoints" wrapAround pauseAutoplayOnHover
                            autoplay="5000">
                            <slide v-for="(depoimento, i) in depoimentos" :key="i">
                                <div class="depoimento-container">
                                    <div class="depoimento-pessoa">
                                        <v-avatar>
                                            <img :src="`/depoimentos/${depoimento.foto}.jpeg`" :alt="depoimento.nome" />
                                        </v-avatar>
                                        <div class="depoimento-info">
                                            <h2 class="text-lg font-bold">{{ depoimento.nome }}</h2>
                                            <h3 class="text-gray-500 font-semibold text-sm">{{ depoimento.empresa }}
                                            </h3>
                                        </div>
                                    </div>
                                    <p class="text-sm lg:text-start lg:pl-[0.45rem] lg:text-base">{{
                                        depoimento.descricao }}</p>
                                    <v-rating v-model="rating" active-color="#ffc107" readonly density="compact" />
                                </div>
                            </slide>

                            <template #addons>
                                <pagination class="mt-8" />
                            </template>
                        </carousel>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
const rating = 5;

const breakpoints = {
    1024: {
        itemsToShow: 2,
        snapAlign: 'center-[odd|even]',
    },
}

const depoimentos = [
    {
        foto: 'samuel',
        nome: 'Samuel De Marchi',
        empresa: 'Sixchains Digital House',
        descricao: 'Maurício é um profissional dedicado e apaixonado pelo seu trabalho. Sua atenção aos detalhes e sua busca pela excelência são evidentes em tudo o que faz. Ele não apenas entrega projetos de alta qualidade, mas também se esforça para garantir que cada site desenvolvido tenha um desempenho otimizado, proporcionando uma experiência excepcional ao usuário.'
    },
    {
        foto: 'johnny',
        nome: 'Johnny di Mauro',
        empresa: 'Sixchains Digital House',
        descricao: 'Recomendo Maurício com entusiasmo pelo seu excepcional desempenho no setor de marketing durante nosso trabalho conjunto. Posso afirmar sem dúvidas que ele é um dos profissionais mais detalhistas com quem já trabalhei, sempre comprometido com cada aspecto dos projetos, buscando incessantemente a entrega de produtos refinados e de alta qualidade. '
    },
    {
        foto: 'amanda',
        nome: 'Amanda Iolita',
        empresa: 'Sixchains Digital House',
        descricao: 'Maurício é um excelente profissional com um futuro enorme para explorar! Extremamente dedicado ao trabalho e ao seu crescimento pessoal e técnico, sempre disposto a aprender, ensinar e ajudar todos que precisam de ajuda em assuntos em que domina. Foi um grande prazer trabalhar ao lado e acompanhar seu crescimento ao longo desses dois anos na Sixchains em vários projetos.'
    },
    {
        foto: 'fernando',
        nome: 'Fernando de Souza',
        empresa: 'Sixchains Digital House',
        descricao: 'É com grande satisfação que recomendo Maurício como desenvolvedor front-end. Como gerente do Maurício na Sixchains Digital House, tive o privilégio de supervisionar seu trabalho e ver seu crescimento profissional em primeira mão. Além de suas habilidades técnicas, Maurício é uma pessoa incrivelmente colaborativa e comunicativa. Estou confiante de que ele será valioso para qualquer empresa'
    }
]
</script>

<style scoped>
.depoimento-container {
    @apply flex flex-col items-center space-y-4 border border-gray-500 rounded-lg p-4;

    @screen lg {
        @apply items-start max-w-[25rem];
    }

    @screen xl {
        @apply max-w-[30rem];
    }

    @screen 2xl {
        @apply max-w-[35rem];
    }
}

.depoimento-pessoa {
    @apply flex flex-col items-center gap-4;

    @screen lg {
        @apply flex-row pl-1;
    }
}

.depoimento-pessoa .v-avatar {
    @apply w-[120px] h-[120px];

    @screen lg {
        @apply w-[60px] h-[60px];
    }
}

.depoimento-info {
    @screen lg {
        @apply flex flex-col items-start;
    }
}

:deep(.carousel) .carousel__pagination {
    @apply flex items-center gap-4;
}

:deep(.carousel) .carousel__pagination-button::after {
    @apply w-3 h-3 rounded-[50%];
    content: ''
}

:deep(.carousel) .carousel__pagination-button--active.carousel__pagination-button::after {
    @apply bg-primary;
}

:deep(.carousel) .carousel__pagination-button--active {
    @apply rounded-[50%];
    border: 2px solid #00bfa6;
}

:deep(.carousel) .carousel__pagination-button:hover.carousel__pagination-button::after {
    @apply bg-primary duration-300;
}
</style>