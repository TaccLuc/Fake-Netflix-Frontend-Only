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
            :singleMovie="singleMovie"
            :title="singleMovie.title"
            :ogTitle="singleMovie.original_title"/>

          <SingleMovie
          v-for="(singleMovie, i) in store.series" :key="i"
          :singleMovie="singleMovie"
          :title="singleMovie.name"
          :ogTitle="singleMovie.original_name"/>

        </div>

      </div>

    </main>
</template>

<style lang="scss" scoped>

main {
  background-color: black;
  padding: 30px 0;
  min-height: calc(100vh - 70px);
  color: white;

}

</style>