<template>
  <client-only>
    <header class="w-full h-full max-h-[74px] xl:h-[102px]">
      <nav
        id="navbar-header"
        class="sticky top-0 z-20 w-full h-full pl-8 pr-8 bg-black max-w-9xl lg:bg-transparent lg:pl-0"
      >
        <div class="flex items-center justify-between h-full">
          <!-- Header logo -->
          <div
            class="relative w-1/3 max-w-[580px] h-full bg-black rounded-r-b-full lg:pl-16 2xl:pl-28 before:content-[''] before:absolute before:-right-16 before:w-28 before:-z-10 before:h-full before:rounded-br-3xl my-skew before:bg-black flex justify-between"
          >
            <img
              class="w-[97px] h-full object-contain"
              :src="images.logo"
              alt="Fans club"
            />
            <div
              class="hidden space-x-8 font-sans text-xl font-medium mx-9 md:flex"
            >
              <DropdownLi
                v-for="(item, index) in dropDown"
                :key="index"
                :md-text="item.text"
                :md-links="item.children"
              />
            </div>
          </div>

          <!-- Mobile toggle -->
          <div class="lg:hidden">
            <button @click="drawer">
              <svg
                class="w-8 h-8 text-white fill-current"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <!-- Navbar -->
          <div class="hidden lg:block">
            <ul
              class="flex space-x-6 font-sans text-xl font-medium text-black xl:space-x-7 2xl:space-x-8"
            >
              <ItemsLi
                v-for="item in navLeft"
                :key="item.text"
                class="px-3 py-1 2xl:py-3"
                :md-a-class="`${item.aClass} text-xs lg:text-sm xl:text-xl`"
                :md-class="item.class"
                :md-link="item.url"
                :md-text="item.text"
              />
            </ul>
          </div>

          <!-- Dark Background Transition -->
          <transition
            enter-class="opacity-0"
            enter-active-class="ease-out transition-medium"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-active-class="ease-out transition-medium"
            leave-to-class="opacity-0"
          >
            <div
              v-show="isOpen"
              class="fixed inset-0 z-10 transition-opacity"
              @keydown.esc="isOpen = false"
            >
              <div
                class="absolute inset-0 bg-black opacity-50"
                tabindex="0"
                @click="isOpen = false"
              ></div>
            </div>
          </transition>

          <!-- Drawer Menu -->
          <aside
            class="fixed top-0 right-0 z-30 w-64 h-full p-5 overflow-auto transition-all duration-300 ease-in-out transform bg-black"
            :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
          >
            <div class="close">
              <button
                class="absolute top-0 right-0 mt-4 mr-4"
                @click="isOpen = false"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <span class="flex items-center w-full p-4" @click="isOpen = false">
              <img class="w-[97px] h-full" :src="images.logo" alt="Fans club" />
            </span>

            <ul class="font-sans text-white">
              <li>
                <a
                  href="/nosotros"
                  class="inline-block my-4"
                  @click="isOpen = false"
                  >Nosotros</a
                >
              </li>
              <li>
                <a
                  href="/soporte"
                  class="inline-block my-4"
                  @click="isOpen = false"
                  >Ayuda y Contacto</a
                >
              </li>
              <li>
                <a
                  href="/blog"
                  class="inline-block my-4"
                  @click="isOpen = false"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  href="#iniciar-sesion"
                  class="inline-block my-4"
                  @click="isOpen = false"
                  >Iniciar sesión</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block w-full px-3 py-2 my-8 font-semibold text-center text-white bg-fc-primary hover:bg-blue-600"
                  @click="isOpen = false"
                  >Registrate</a
                >
              </li>
            </ul>
          </aside>
        </div>
      </nav>
    </header>
  </client-only>
</template>

<script>
import logoFansClub from '@/assets/images/logos/fansclub.png'
import ItemsLi from '@/components/TheHeader/Atoms/ItemsLi.vue'
import DropdownLi from '@/components/TheHeader/Dropdown/DropdownLi.vue'
export default {
  name: 'TheHeader',
  components: { ItemsLi, DropdownLi },
  data: () => {
    return {
      isOpen: false,
      images: {
        logo: logoFansClub,
      },
      navLeft: [
        { text: 'Nosotros', url: '/nosotros' },
        { text: 'Ayuda y Contacto', url: '/soporte' },
        { text: 'Blog', url: '/blog' },
        {
          text: 'Iniciar Sesión',
          url: '#login',
          class: 'border-2 rounded-full border-fc-primary',
          aClass: 'px-5',
        },
        {
          text: 'Registrate',
          url: '#registrate',
          class: 'text-white rounded-full font-Ballo2 bg-fc-primary',
          aClass: 'px-5',
        },
      ],
      dropDown: [
        {
          text: 'Personas',
          children: [
            { text: 'Tarjeta', url: '#tarjeta' },
            { text: 'Pago de Servicios', url: '/personas/metodos-de-pago' },
            { text: 'Préstamos', url: '#prestamos' },
            { text: 'Ahorro e Inversión', url: '/personas/inversion' },
            { text: 'Seguros', url: '#seguros' },
          ],
        },
        {
          text: 'Empresas',
          children: [
            { text: 'Pagos y Cobros', url: '#pagos-cobros' },
            { text: 'Préstamos', url: '#prestamos' },
            { text: 'Factoring', url: '#factoring' },
            { text: 'Leasing', url: '#leasing' },
            { text: 'Tipo de Cambio', url: '#tipo-cambio' },
            { text: 'Inversiones', url: '#inversiones' },
          ],
        },
      ],
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false
    })
  },
  methods: {
    handleScroll(event) {
      // if (window.pageYOffset > 30) {
      //   nav.style.backgroundColor = `yellow`
      // } else {
      //   nav.removeAttribute('style')
      // }
    },
    drawer() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style scoped>
.my-skew::before {
  transform: skew(-30deg);
}
</style>
