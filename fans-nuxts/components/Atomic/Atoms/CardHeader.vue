<template>
  <div class="w-full h-full" :class="mdClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardHeader',
  props: {
    mdClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
