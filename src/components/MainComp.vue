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
  },
  props: {
    castName: Array,
    tvName: Array
  },
  methods: {
    passValueMovie(argument, index) {
      this.$emit('castSearch', argument, index, 'movie')
    },
    passValueTv(argument, index) {
      this.$emit('castSearch', argument, index, 'tv')
    }
  }
}

</script>

<template>
    <main>
    
      <div class="container">

        <!-- MAIN -->
        <div  id="mainBG" v-if="store.movie.length == 0 && store.tv.length == 0 && store.loaded == false">

          <img src="../assets/img/main_bg.jpg" alt="Main BG">

        </div>

        <!-- ERROR MSG -->
        <div v-else-if="store.movie.length == 0 && store.tv.length == 0 && store.loaded == true">
          <h2>
            Search has no results
          </h2>
        </div>

        <!-- RESULTS -->
        <div v-else >

          <div class="row mb-5">

            <div class="col-12">

              <h2 v-if="store.movie.length != 0" class="fs-1 fw-bolder mb-3">
                Movies
              </h2>

            </div>

            <SingleMovie 
              v-for="(singleMovie, i) in store.movie" :key="i"
              :singleMovie="singleMovie"
              :title="singleMovie.title"
              :ogTitle="singleMovie.original_title"
              :castName="castName"
              :i ="i"
              @castSearch="passValueMovie"/>

            </div>

          <div class="row">

            <div class="col-12">

              <h2 v-if="store.tv.length != 0" class="fs-1 fw-bolder mb-3">
                Series
              </h2>

            </div>

            <SingleMovie
            v-for="(singleMovie, i) in store.tv" :key="i"
            :singleMovie="singleMovie"
            :title="singleMovie.name"
            :ogTitle="singleMovie.original_name"
            :castName="tvName"
            :i ="i"
            @castSearch="passValueTv"/>

            </div>

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

  #mainBG {
    width: 100%;
    height: calc(100vh - 150px);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

</style>