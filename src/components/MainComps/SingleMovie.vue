<script>
import { store } from '../../store'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default{
  data() {
    return {
        store,
        lang: true
    }
  },
  props: {
    singleMovie: Object
  },
  computed: {
    language() {
        const lang = this.singleMovie.original_language;
        if ( lang == 'en') {
            return 'gb';
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
    }
  }
}

</script>

<template>

    <div class="mb-5">
        <h3>
            {{ singleMovie.title }}
        </h3>

        <h3>
            {{ singleMovie.original_title }}
        </h3>

        <h3>
            <span v-if="lang" :class="`fi fi-${language}`"></span>
            <span v-else>
                {{ singleMovie.original_language }}
            </span>
        </h3>

        <h3>
            {{ singleMovie.vote_average }}
        </h3>

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