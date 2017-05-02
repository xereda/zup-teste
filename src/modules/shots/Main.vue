<template>
  <div class="">
    <div class="columns is-mobile is-multiline">
      <div class="column is-narrow" v-for="shot in shots" :style="'background-color: ' + shot.color">
        <dribbble-card @click.native="openDetail(shot.index)" class="dribbble-card"></dribbble-card>
      </div>
    </div>
  </div>
</template>

<script>
import DribbbleCard from '@/components/Card.vue'
export default {
  name: 'DribbbleShotsList',
  data () {
    return {
      shots: [
        { index: 0, color: 'rgb(92, 251, 183)' },
        { index: 1, color: 'rgb(238, 84, 50)' },
        { index: 2, color: 'rgb(255, 245, 0)' },
        { index: 3, color: 'rgb(0, 201, 255)' },
        { index: 4, color: 'rgb(53, 81, 152)' },
        { index: 5, color: 'rgb(92, 66, 156)' },
        { index: 6, color: 'rgb(252, 18, 236)' },
        { index: 7, color: 'rgb(255, 0, 15)' },
        { index: 8, color: 'rgb(0, 0, 0)' },
        { index: 9, color: 'rgb(179, 179, 179)' },
        { index: 10, color: 'rgb(137, 185, 190)' }
      ]
    }
  },
  methods: {
    openDetail (shot) {
      console.log('vai abrir os detalhes do shot: ', shot)
    }
  },
  components: {
    DribbbleCard
  }
}
</script>

<style lang="css">
  .card {
    width: 200px;
  }
  .dribbble-card {
    cursor: pointer;
  }
</style>
