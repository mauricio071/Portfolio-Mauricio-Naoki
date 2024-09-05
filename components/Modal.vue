<template>
    <Teleport to="#teleports">
        <transition name="modal-outer">
            <div v-if="isVisible" class="modal">
                <div class="fixed inset-0 bg-black opacity-80" @click="fecharModal"></div>

                <transition name="modal-inner">
                    <div class="modal-content" role="dialog" aria-modal="true">
                        <slot></slot>
                        <Icon @click="fecharModal" name="mdi:close" class="close" />
                    </div>
                </transition>
            </div>
        </transition>
    </Teleport>
</template>

<script setup>
const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

const fecharModal = () => {
    emit('close');
};
</script>

<style scoped>
.modal {
    @apply fixed inset-0 z-[999] flex items-center justify-center p-6;
}

.modal-content {
    @apply bg-[#f7f7f7] p-8 rounded-lg relative border-t-8 border-t-primary mx-auto;

    @screen sm {
        @apply max-w-[40rem];
    }

    @screen lg {
        @apply max-w-[1300px] pb-16;
    }
}

.close {
    @apply absolute top-[10px] right-[20px] text-[2rem] duration-300 cursor-pointer;
}

.close:hover {
    @apply text-primary;
}

.modal-outer-enter-active,
.modal-outer-leave-active {
    transition: opacity 0.3s ease;
}


.modal-outer-enter-from,
.modal-outer-leave-to {
    @apply opacity-0
}

.modal-inner-enter-active,
.modal-inner-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-inner-enter-from {
    @apply opacity-0 scale-[0.8];
}

.modal-inner-leave-to {
    @apply scale-[0.8];
}
</style>