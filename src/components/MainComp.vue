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

          <div v-if="store.movies.length != 0">

            <SingleMovie 
            v-for="(singleMovie, i) in store.movies" :key="i"
            :singleMovie="singleMovie"
            :title="singleMovie.title"
            :ogTitle="singleMovie.original_title"
            :poster="singleMovie.poster_path"/>

          </div>

          <div v-if="store.series.length != 0">

            <SingleMovie
            v-for="(singleMovie, i) in store.series" :key="i"
            :singleMovie="singleMovie"
            :title="singleMovie.name"
            :ogTitle="singleMovie.original_name"
            :poster="singleMovie.poster_path"/>

          </div>

        </div>

      </div>

    </main>
</template>

<style lang="scss" scoped>

</style>