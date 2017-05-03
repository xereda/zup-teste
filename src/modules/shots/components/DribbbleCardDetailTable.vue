<template>
  <div class="">
    <table class="table">
      <tr>
        <td class="">
          <a href="#" class="">
            <span class="icon">
              <i class="fa fa-heart"></i>
            </span>
            Curtir
          </a>
        </td>
        <td class="">{{ shot.likes }} curtidas</td>
      </tr>
      <tr>
        <td class="">
          <a href="#">
            <span class="icon">
              <i class="fa fa-share"></i>
            </span>
            Compartilhar
          </a>
        </td>
        <td class="">{{ shot.views }} views</td>
      </tr>
      <tr>
        <td class="">
          <a href="#">
            <span class="icon">
              <i class="fa fa-commenting-o"></i>
            </span>
            Comentar
          </a>
        </td>
        <td class="">{{ shot.comments }} coment.</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DribbbleCardDetailTable',
  data () {
    return {

    }
  },
  props: [
    'shot'
  ]
}
</script>

<style lang="css">
</style>
