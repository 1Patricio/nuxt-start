<template>
  <div>
    <TitleH1 :text="'Essa é a minha página inicial'"/>
   <img src="/google-logo.jpg" style="max-height: 200px;" /> 
   <img src="~/assets/quasar-logo.png"/>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
  title: 'Home'
})
</script>