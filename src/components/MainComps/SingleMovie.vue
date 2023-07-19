<script>
import { store } from '../../store'

export default{
  data() {
    return {
        store
    }
  },
  props: {
    singleMovie: Object
  }
}

</script>

<template>

    <div>
        <h3>
            {{ singleMovie.title }}
        </h3>

        <h3>
            {{ singleMovie.original_title }}
        </h3>

        <h3>
            {{ singleMovie.original_language }}
        </h3>

        <h3>
            {{ singleMovie.vote_average }}
        </h3>

    </div>

</template>

<style lang="scss" scoped>

</style>