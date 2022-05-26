<template>
  <div class="w-full h-full" :class="mdClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardBody',
  props: {
    mdClass: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
