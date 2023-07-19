<script>
import { store } from '../../store';
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default{
    data() {
    return {
        store,
        lang: true
    }
  },
  props: {
      singleMovie: Object,
      title: String,
      ogTitle: String,
      poster: String
    },
    mounted() {
      () => {
          console.log(poster)
      }
    },
  computed: {
    language() {
        const lang = this.singleMovie.original_language;
        if ( lang == 'en') {
            return 'gb';
        }
        else if (lang == 'ja') {
            return 'jp';
        }
        else if(lang == 'it' &&
        lang == 'fr' &&
        lang == 'nl' &&
        lang == 'de' &&
        lang == 'es' &&
        lang == 'vi' &&
        lang == 'no' &&
        lang == 'cn' &&
        lang == 'th' &&
        lang == 'fi' &&
        lang == 'pt' &&
        lang == 'pl' &&
        lang == 'sv' &&
        lang == 'tr' &&
        lang == 'ro' &&
        lang == 'et' &&
        lang == 'ru') {
            return this.singleMovie.original_language;
        }
        else {
            this.lang = false;
        }
    },
    vote() {
        if (parseInt(this.singleMovie.vote_average) > 1 || !NaN) {
            const halfVote = Math.round(parseInt(this.singleMovie.vote_average) / 2);
        
            return halfVote;
        }
    }
  }
}

</script>

<template>

    <div class="mb-5">
        
        <div>
            <img v-if="poster != null" :src="`https://image.tmdb.org/t/p/w342${poster}`" :alt="title">
            <div v-else>
                IMAGE NOT FOUND
            </div>
        </div>
        
        <div>

            <h3>

                {{ title }}

            </h3>

            <h3>

                {{ ogTitle }}   

            </h3>

            <h3>

                <span v-if="lang" :class="`fi fi-${language}`"></span>

                <span v-else>

                    {{ singleMovie.original_language }}

                </span>

            </h3>

            <h3>

                <i v-for="i in vote" :key="i" class="fa-solid fa-star"></i>
                <i v-for="j in (5 - vote)" :key="j" class="fa-regular fa-star"></i>

            </h3>

        </div>

    </div>

</template>

<style lang="scss" scoped>

h3 {
    margin: 0;
    font-size: 1rem;

    span {
        text-transform: capitalize;
    }
}

</style>