<template>
  <li class="flex items-center">
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        class="flex items-center font-medium text-white font-Ballo2"
        @click="_handleClickOpenDropdown"
      >
        <span class="mr-1">{{ mdText }}</span>
        <svg
          class="w-5 h-5 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-show="isActive"
        class="mt-2 bg-white rounded-xl shadow-xl absolute px-5 lg:px-7 py-4 lg:py-11 lg:left-0 w-[219px]"
      >
        <router-link
          v-for="(item, index) in mdLinks"
          :key="index"
          :to="item.url"
          class="block py-2 text-lg font-normal text-gray-700 hover:text-gray-900"
        >
          {{ item.text }}
        </router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'DropdownLi',
  props: {
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
    mdLinks: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data: () => {
    return {
      isActive: false,
    }
  },
  methods: {
    _handleClickOpenDropdown() {
      this.isActive = !this.isActive
    },
  },
}
</script>
