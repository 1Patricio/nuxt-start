<template>
    <h2>{{ text }}</h2>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        defuult: ''
    }
})
</script>