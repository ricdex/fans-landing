<template>
  <div class="object-contain w-full h-full max-h-[inherit]">
    <img
      class="h-full w-full object-contain max-h-[inherit]"
      :class="mdObjectFit"
      :src="mdImage"
      :alt="mdAlt"
    />
  </div>
</template>

<script>
export default {
  name: 'SingleImage',
  props: {
    mdImage: {
      type: String,
      default: null,
    },
    mdAlt: {
      type: String,
      default: '',
    },
    mdObjectFit: {
      type: String,
      default: 'object-contain',
    },
  },
}
</script>

<style lang="scss" scoped></style>
