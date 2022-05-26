<template>
  <footer class="bg-slate-100 min-h-[749px] 2xl:px-28 2xl:pt-20 2xl:pb-16">
    <div class="flex">
      <div class="max-w-[217px]">
        <img
          class="w-[140px] h-[103px] object-contain"
          :src="images.logos.fc"
          alt="Fans club"
        />
        <div class="flex justify-evenly">
          <router-link
            v-for="(item, index) in redes"
            :key="index"
            class="w-6 h-6"
            :to="item.url"
          >
            <img :src="item.img" :alt="item.alt" />
          </router-link>
        </div>
      </div>
      <div class=""></div>
    </div>
  </footer>
</template>

<script>
import logoFansClub from '@/assets/images/logos/fansclub.png'
import logoFacebook from '@/assets/images/logos/facebook.png'
import logoInstagram from '@/assets/images/logos/instagram.png'
import logoTwitter from '@/assets/images/logos/twitter.png'
import logoLinkedin from '@/assets/images/logos/linkedin.png'

export default {
  name: 'Footer',
  components: {},
  data: () => {
    return {
      images: {
        logos: {
          fc: logoFansClub,
        },
      },
      redes: {
        facebook: { img: logoFacebook, url: '#facebook', alt: 'FC Facebook' },
        linkedin: { img: logoLinkedin, url: '#linkedin', alt: 'FC Linkedin' },
        twitter: { img: logoTwitter, url: '#twitter', alt: 'FC Twitter' },
        instagram: {
          img: logoInstagram,
          url: '#instagram',
          alt: 'FC Instagram',
        },
      },
    }
  },
}
</script>
