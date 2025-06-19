<script setup lang="ts">
import camisaLogo from '@/assets/camisa-e-logo.jpg'
import paredeCinza from '@/assets/parede-cinza.jpg'
import carro from '@/assets/carro.jpg'
import paredeLogo from '@/assets/parede-e-logo.jpg'
import placaLogo from '@/assets/placa-e-logo.jpg'

const images = [
  camisaLogo,
  paredeCinza,
  carro,
  paredeLogo,
  placaLogo
]
</script>


<template>
  <v-carousel
    height="70vh"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    interval="5000"
    class="carousel-container"
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="image"
      :alt="`Imagem ${i + 1} do carrossel`"
      cover
    />
  </v-carousel>
</template>

<style scoped>
.carousel-container {
  width: 100vw;
}

/* Estilização dos indicadores */
:deep(.v-carousel__controls) {
  background: transparent;
}

:deep(.v-carousel__controls .v-btn) {
  color: rgba(255, 255, 255, 0.4);
  margin: 0 4px;
}

:deep(.v-carousel__controls .v-btn--active) {
  color: #ffe027;
}

:deep(.v-carousel__controls .v-btn:hover) {
  color: rgba(255, 255, 255, 0.8);
}

/* Estilização das setas */
:deep(.v-carousel__prev, .v-carousel__next) {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

:deep(.v-carousel__prev:hover, .v-carousel__next:hover) {
  background: rgba(0, 0, 0, 0.5);
}

/* Responsividade */
@media (max-width: 768px) {
  .carousel-container {
    height: 50vh !important;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 40vh !important;
  }
}
</style>