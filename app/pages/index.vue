<template>
  <div>
    <TitleH1 :text="'Essa é a minha página inicial'"/>
   <img src="/google-logo.jpg" style="max-height: 200px;" /> 
   <img src="~/assets/quasar-logo.png"/>
  </div>

  Counter: {{ counter }}
  <button @click="counter++">
    +
  </button>
  <button @click="counter--">
    -
  </button>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
  title: 'Home'
})

const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>