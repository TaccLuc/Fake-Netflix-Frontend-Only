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
      ogTitle: String
    },
  computed: {
    language() {
        const movieLang = this.singleMovie.original_language;
        if ( movieLang == 'en') {
            return 'gb';
        }
        else if (movieLang == 'ja') {
            return 'jp';
        }
        else if(movieLang == 'it' ||
        movieLang == 'fr' ||
        movieLang == 'nl' ||
        movieLang == 'de' ||
        movieLang == 'es' ||
        movieLang == 'vi' ||
        movieLang == 'no' ||
        movieLang == 'cn' ||
        movieLang == 'th' ||
        movieLang == 'fi' ||
        movieLang == 'pt' ||
        movieLang == 'pl' ||
        movieLang == 'sv' ||
        movieLang == 'tr' ||
        movieLang == 'ro' ||
        movieLang == 'et' ||
        movieLang == 'ru') {
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

    <div id="singleMovie" class="col-3 position-relative"
    v-if="singleMovie.length != 0">
        
        <div>
            <img v-if="singleMovie.poster_path != null" :src="`https://image.tmdb.org/t/p/w342${singleMovie.poster_path}`" :alt="title">
            <div v-else>
                IMAGE NOT FOUND
            </div>
        </div>
        
        <div class="d-flex align-items-end">

            <div>

                <h3 id="title">

                    {{ title }}

                </h3>

                <h3 v-if="title != ogTitle" id="ogTitle">

                    {{ ogTitle }}   

                </h3>

                <h3 id="language">

                    <span v-if="lang" :class="`fi fi-${language}`"></span>

                    <span v-else>

                        {{ singleMovie.original_language }}

                    </span>

                </h3>

                <h3 id="rating">

                    <i v-for="i in vote" :key="i" class="fa-solid fa-star"></i>
                    <i v-for="j in (5 - vote)" :key="j" class="fa-regular fa-star"></i>

                </h3>

                <h3 id="overview">

                    {{ singleMovie.overview }}

                </h3>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>

#singleMovie {
    padding: 0 .625rem;
    overflow: hidden;
    cursor: pointer;
    margin-bottom: 30px;

    &:hover>div:last-of-type {
        transform: translateY(0%);
    }

    > div:first-of-type {
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }
    
    > div:last-of-type {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        padding: 0 20px;
        vertical-align: bottom;
        transform: translateY(100%);
        transition: 0.3s ease-in-out;
        background-color: rgba(0, 0, 0, 0.7);
        

        h3 {
        margin-bottom: 10px;
        font-size: 16px;

            &#title,
            &#ogTitle {
                text-transform: capitalize;
                font-size: 1.2rem;
                font-weight: bolder;
            }

            &#language {
                text-transform: uppercase;
            }

            &#rating {
                color: white;
            }
            
            &#overview {
                font-size: 0.8rem;
                max-height: 200px;
                overflow: hidden;
                padding-bottom: 50px;
            }
        }
    }
}

</style>