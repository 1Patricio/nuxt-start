<template>
    <div>
        <div style="border: 1px solid black;">
          <nav>
            <ul>
              <li><NuxtLink to="/">Home</NuxtLink></li>
              <li><NuxtLink to="/about">About</NuxtLink></li>
              <li><NuxtLink to="/posts/1">Posts</NuxtLink></li>
            </ul>
          </nav>
        </div>
        <slot/>
        <div style="border: 1px solid black;">
          Footer
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

useHead({
  meta: [
    { property: 'og:title', content: `Curso Vuejs - ${route.meta.title}`}
  ]
})

</script>