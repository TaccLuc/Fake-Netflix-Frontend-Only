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
    movieFetcher() {
      axios
        .get('https://api.themoviedb.org/3/search/movie',{
          params: {
            api_key: '8e45067f588e5032df8823d8cceacc66',
            query: this.store.title
        }})
        .then((response)=> {
          this.store.movies = response.data.results;
        });
      axios
        .get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: '8e45067f588e5032df8823d8cceacc66',
            query: this.store.title
          }})
          .then((response)=> {
          this.store.series = response.data.results;
        });
    }
  }
}

</script>

<template>

  <HeaderComp
  @search="movieFetcher()" />

  <MainComp />

</template>

<style lang="scss">
@use "assets/scss/main.scss";

</style>
