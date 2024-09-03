<template>
    <Teleport to="#teleports">
        <transition name="modal-outer">
            <div v-if="isVisible" class="modal p-6">
                <div class="fixed inset-0 bg-black opacity-50" @click="fecharModal"></div>

                <transition name="modal-inner">
                    <div class="modal-content">
                        <slot></slot>
                        <!-- <v-icon @click="fecharModal" icon="mdi-close" class="close cursor-pointer" /> -->
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
    @apply fixed inset-0 z-[999] flex items-center justify-center;

    @screen sm {
        @apply max-w-[40rem] mx-auto;
    }

    @screen lg {
        @apply max-w-[1300px]
    }
}

.modal-content {
    @apply bg-[#f7f7f7] p-8 rounded-lg relative border-t-8 border-t-primary;

    @screen lg {
        @apply pb-16;
    }
}

.modal-content .close {
    @apply absolute top-[10px] right-[20px] duration-300;
}

.modal-content .close:hover {
    @apply text-primary;
}


.modal-outer-enter-active,
.modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
    opacity: 0;
}

.modal-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.modal-inner-leave-to {
    transform: scale(0.8);
}
</style>