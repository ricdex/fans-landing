<template>
  <div class="mx-auto overflow-hidden bg-white max-w-9xl">
    <TheHeader />
    <main class="">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader/TheHeader.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'
export default {
  components: { TheHeader, TheFooter },
}
</script>

<style lang="scss" scoped></style>
