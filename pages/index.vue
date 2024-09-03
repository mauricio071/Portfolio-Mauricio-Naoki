<template>
    <main>
        <Inicio />
        <Sobre />
        <Habilidades />
        <Experiencias v-if="false" />
        <Projetos />
        <Depoimentos />
    </main>
</template>

<script setup>
import Inicio from '~/components/sections/Inicio.vue';
import Sobre from '~/components/sections/Sobre.vue';
import Habilidades from '~/components/sections/Habilidades.vue';
import Experiencias from '~/components/sections/Experiencias.vue';
import Projetos from '~/components/sections/Projetos.vue';
import Depoimentos from '~/components/sections/Depoimentos.vue';

components: { Inicio, Sobre, Habilidades, Experiencias, Projetos, Depoimentos }

</script>

<style scoped></style>