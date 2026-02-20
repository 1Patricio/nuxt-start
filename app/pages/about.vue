<template>
    <TitleH2 :text="'Essa é a minha página de about'"/>
</template>

<script setup>
useHead({
    title: 'Página de Sobre',
    meta: [
        { name: 'description', content: 'A pádina about do curso'},
    ],
    bodyAttrs: {
        class: 'test',
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')'}]
})
</script>