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
      store,
      castName: [],
      tvName: []
    }
  },
  methods: {
    fetcher(parameter) {
      axios
        .get(`https://api.themoviedb.org/3/search/${parameter}`,{
          params: {
            api_key: '8e45067f588e5032df8823d8cceacc66',
            query: this.store.title
          }})
        .then((response)=> {
          this.store[parameter] = response.data.results;
        });
      },      
    searcher() {
      this.store.loaded = false;
      this.fetcher('movie')
      this.fetcher('tv')
      this.store.loaded = true;
    },
    castFetcher(movieId, i, parameter) {
      axios
        .get(`https://api.themoviedb.org/3/${parameter}/${movieId}/credits`,{
          params: {
            api_key: '8e45067f588e5032df8823d8cceacc66'
          }
        })
        .then((response)=> {
          const namesArray = response.data.cast;
          if (namesArray.length > 2) {
            const actorNames = [];
            for (let index = 0; index < 3; index++) {
              actorNames.push(namesArray[index].name);
            }
            this.store[parameter][i].cast = actorNames;
          } 
          else{
            this.store[parameter][i].cast;
          }});
    }
  }
}

</script>

<template>

  <HeaderComp
  @search="searcher()" />

  <MainComp 
  @castSearch="castFetcher"
  :castName="castName"
  :tvName="tvName"/>

</template>

<style lang="scss">
@use "assets/scss/main.scss";


</style>
