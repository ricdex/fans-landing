<template>
  <section class="w-full" :class="mdClassContainer">
    <div class="max-w-9xl" :class="mdClassChild">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Container',
  props: {
    mdClassContainer: {
      type: [String, Array],
      default: '',
    },
    mdClassChild: {
      type: [String, Array],
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
