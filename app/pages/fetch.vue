<template>
  <div>
    <TitleH1 :text="`Página Fetch - ${counter}`" />

    <div style="display: flex;">
      <div style="width: 50%;">
        <h2>Server</h2>
        <img :src="data.image" alt="">
      </div>
      <br>
      <div v-if="res.image" style="width: 50%;">
        <h2>Client</h2>
        <img :src="res.image" alt="">
      </div>
    </div>
  </div>
</template>
<script setup>
const { data } = await useFetch('https://rickandmortyapi.com/api/character/1')
const res = await $fetch('https://rickandmortyapi.com/api/character/2')

const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>