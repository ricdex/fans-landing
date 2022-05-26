<template>
  <div>
    <container
      md-class-child="relative flex"
      md-class-container="lg:mt-[100px]"
    >
      <div
        class="lg:pl-16 2xl:pl-28 bottom-0 lg:top-[70px] 2xl:top-[100px] lg:max-w-[800px] absolute lg:relative bg-white lg:bg-transparent translate-y-[280px] md:translate-y-[180px] lg:translate-y-0 rounded-r-md lg:rounded-none before:content-[''] lg:before:content-none before:absolute before:-top-16 before:w-full z-20 before:-z-10 before:h-full before:rounded-t-3xl my-skew before:bg-white after:content-[''] lg:after:content-none after:absolute after:-top-16 after:w-full after:-z-[11] after:h-full after:rounded-t-3xl after:bg-fc-primary w-full xl:max-w-[700px] 2xl:max-w-[800px]"
      >
        <div class="px-4 bg-white lg:px-0">
          <h1
            class="text-[40px] xl:text-[50px] 2xl:text-[68px] leading-[38px] xl:leading-[55px] 2xl:leading-[60px] font-bold font-Ballo2 text-fc-black"
          >
            Haz un gol de media cancha en tus finanzas.
          </h1>
          <p
            class="w-11/12 my-6 text-base font-normal lg:text-2xl font-Ballo2 text-fc-black"
          >
            Somos una plataforma que brinda servicios financieros 100% online.
            Cuando se trata de tus finanzas, crecemos juntos en tu plan de
            juego.
          </p>
          <div class="flex items-center justify-start">
            <button-single
              md-text="Crear cuenta para iniciar"
              md-class="font-bold"
            />
            <Nuxt-link
              to="#servicios"
              class="ml-4 text-xl font-bold text-fc-secundary font-Roboto"
            >
              Ver servicios para empresas
            </Nuxt-link>
          </div>
        </div>
      </div>
      <div class="h-full w-full tall:max-h-[600px]">
        <SingleImage
          :md-image="setImageSection(images.banner)"
          :md-alt="images.banner.alt"
          md-object-fit="object-contain tall:object-cover"
        />
      </div>
    </container>

    <container
      md-class-container="mt-[300px] md:mt-[280px] lg:mt-0 h-[430px]"
      md-class-child="border border-red-500 relative lg:translate-y-[-150px] h-full flex"
    >
    </container>

    <container
      md-class-container=""
      md-class-child="flex flex-col lg:flex-row lg:items-center lg:h-full w-full lg:mx-auto"
    >
      <div class="h-full w-full tall:max-h-[600px] 2xl:max-w-[1169px]">
        <SingleImage
          :md-image="setImageSection(images.banner2)"
          :md-alt="images.banner2.alt"
          md-object-fit="object-contain tall:object-cover"
        />
      </div>
      <div class="w-full h-full max-w-[400px] xl:max-w-[600px] text-center">
        <h2
          class="text-[40px] xl:text-[50px] 2xl:text-[68px] leading-[38px] xl:leading-[55px] 2xl:leading-[60px] font-bold font-Ballo2 text-fc-black"
        >
          Beneficios
        </h2>
        <div class="flex flex-col items-center h-full justify-evenly">
          <Card
            v-for="(item, index) in beneficios"
            :key="index"
            md-class-child="w-full h-full flex flex-col items-center justify-center"
            md-class-parent="w-full h-full 2xl:max-w-[520px] mt-10px xl:mt-[60px] 2xl:mt-[84px]"
          >
            <CardHeader md-class="flex items-center justify-center">
              <img :src="item.icon" :alt="item.title" />
            </CardHeader>
            <CardBody md-class="text-fc-black">
              <h4 class="text-base font-bold xl:text-3xl">{{ item.title }}</h4>
              <p class="text-lg font-normal font-Ballo2">
                {{ item.description }}
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
import bannerHome from '~/assets/images/banners/banner-home-total.png'
import bannerHomeMobile from '~/assets/images/banners/banner-home-mobile.png'
import bannerHome2 from '~/assets/images/banners/banner-home2.png'

import angulo from '~/assets/images/icons/angulo.svg'
import camiseta from '~/assets/images/icons/camiseta.svg'
import costoReducido from '~/assets/images/icons/costo-reducido.svg'

import Container from '~/components/Atomic/Organisms/Container.vue'
import SingleImage from '~/components/Atomic/Atoms/SingleImage.vue'
import ButtonSingle from '~/components/Atomic/Atoms/ButtonSingle.vue'
import Card from '~/components/Atomic/Atoms/Card.vue'
import CardHeader from '~/components/Atomic/Atoms/CardHeader.vue'
import CardBody from '~/components/Atomic/Atoms/CardBody.vue'

export default {
  name: 'IndexPage',
  components: {
    Container,
    SingleImage,
    ButtonSingle,
    Card,
    CardHeader,
    CardBody,
  },
  data: () => {
    return {
      images: {
        banner: {
          image: bannerHome,
          mobile: bannerHomeMobile,
          alt: 'Inversiones',
        },
        banner2: {
          image: bannerHome2,
          mobile: bannerHomeMobile,
          alt: 'Beneficios',
        },
      },
      beneficios: [
        {
          icon: angulo,
          title: '¡En el ángulo!',
          description:
            'Ponemos a tu alcance una variedad de productos y servicios financieros a la medida de tus necesidades de forma simple, rápida y segura. ⚽🙌',
        },
        {
          icon: camiseta,
          title: '¡Somos hinchas, seámoslo siempre!',
          description:
            'Nos ponemos la camiseta beneficiando con comisiones de nuestros ingresos al equipo de tus amores. Al registrarte, ya sea como persona natural o empresa, sólo deberás indicar a qué club deseas beneficiar y listo! Directo a tu club, para que crezca como tú! 💰🏆',
        },
        {
          icon: costoReducido,
          title: 'Costos Reducidos',
          description:
            'Te presentamos las mejores opciones, con costos super competitivos en cada uno de nuestros productos y servicios financieros.',
        },
      ],
    }
  },
  computed: {},
  methods: {
    setImageSection(item) {
      const self = this
      return self.$mq === 'tabletSmall' ||
        self.$mq === 'mobile' ||
        self.$mq === 'tablet'
        ? item.mobile
        : item.image
    },
  },
}
</script>
<style scoped>
.my-skew::before {
  transform: skew(10deg, 9deg);
}

.my-skew::after {
  transform: skew(10deg, 350deg) translateX(30px);
}
</style>
