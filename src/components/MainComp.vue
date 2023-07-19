<script>
import SingleMovie from './MainComps/SingleMovie.vue'
import { store } from '../store'
export default{
  components: {
    SingleMovie
  },
  data() {
    return {
      store
    }
  }
}

</script>

<template>
    <main>
    
      <div class="container">

        <div class="row justify-content-center">

          <SingleMovie 
          v-for="(singleMovie, i) in store.movies" :key="i"
          :singleMovie="singleMovie"/>

        </div>

      </div>

    </main>
</template>

<style lang="scss" scoped>

</style>