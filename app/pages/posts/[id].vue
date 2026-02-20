<template>
  <div>
    <Head>
      <Meta 
        name="og:title",
        :content="id"
      />
    </Head>
    <h1>Meu artigo id: {{ id }}</h1>
  </div>
</template>

<script setup>
const route = useRoute()
const id = ref('')

onMounted(() => {
  id.value = route.params.id || 0
})
</script>