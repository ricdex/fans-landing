<template>
  <div
    class="w-full h-full"
    :class="[mdClassParent, setClass, setBorderRadius]"
  >
    <router-link
      v-if="mdLink !== ''"
      class="no-underline hover:no-underline hover:drop-shadow-card"
      :to="mdLink"
    >
      <div :class="mdClassChild" class="">
        <slot />
      </div>
    </router-link>
    <div v-else :class="mdClassChild">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    mdLink: {
      type: String,
      default: '',
    },
    mdClassChild: {
      type: String,
      default: '',
    },
    mdClassParent: {
      type: String,
      default: '',
    },
    mdBorder: {
      type: Boolean,
      default: false,
    },
    mdBorderRadius: {
      type: String,
      default: '',
    },
    mdCustomBorderRadius: {
      type: Boolean,
      default: false,
    },
    mdCustomBorder: {
      type: String,
      default: 'border-2 border-gray-200 border-solid',
    },
  },
  computed: {
    setClass() {
      const self = this
      return self.mdBorder ? self.mdCustomBorder : ''
    },
    setBorderRadius() {
      const self = this
      return self.mdBorderRadius ? self.mdCustomBorderRadius : ''
    },
  },
}
</script>

<style lang="scss" scoped></style>
