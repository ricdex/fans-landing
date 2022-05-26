<template>
  <li :class="mdClass">
    <nuxt-link :to="mdLink" :class="mdAClass">
      {{ mdText }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'ItemLi',
  props: {
    mdLink: {
      type: String,
      default: '#',
    },
    mdText: {
      type: String,
      default: '',
    },
    mdClass: {
      type: String,
      default: '',
    },
    mdAClass: {
      type: String,
      default: '',
    },
  },
}
</script>
