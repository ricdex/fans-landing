<template>
  <div>
    <button
      class="px-4 py-2"
      :class="`${mdBackground} ${mdColor} ${mdFontSize} ${mdFontFamily} ${
        mdRounded !== 'none' ? mdRounded : ''
      }`"
    >
      {{ mdText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonSingle',
  props: {
    mdBackground: {
      type: String,
      default: 'bg-fc-primary',
    },
    mdColor: {
      type: String,
      default: 'text-white',
    },
    mdFontSize: {
      type: String,
      default: 'text-2xl',
    },
    mdPading: {
      type: String,
      default: 'py-4 px-5',
    },
    mdFontFamily: {
      type: String,
      default: 'font-Ballo2',
    },
    mdClass: {
      type: [String, Array],
      default: '',
    },
    mdRounded: {
      type: String,
      default: 'rounded-[20px] xl:rounded-[80px]',
    },
    mdText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
