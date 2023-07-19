<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import axios from 'axios';
import {store} from './store';

export default{
  components:{
    HeaderComp,
    MainComp
  },
  data() {
    return {
      store
    }
  },
  methods: {
    moviesFetcher() {
      axios
      .get('https://api.themoviedb.org/3/search/movie',{
        params: {
          api_key: '8e45067f588e5032df8823d8cceacc66',
          query: this.store.title
        }})
        .then((response)=> {
          this.store.movies = response.data.results;
        });
      },

    seriesFetcher() {
      axios
      .get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: '8e45067f588e5032df8823d8cceacc66',
          query: this.store.title
        }})
        .then((response)=> {
          this.store.series = response.data.results;
        });
      },
      
    searcher() {
      this.store.loaded = false;
      this.moviesFetcher()
      this.seriesFetcher()
      this.store.loaded = true;
    }
  }
}

</script>

<template>

  <HeaderComp
  @search="searcher()" />

  <MainComp />

</template>

<style lang="scss">
@use "assets/scss/main.scss";


</style>
