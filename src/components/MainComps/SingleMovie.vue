<script>
import { store } from '../../store'

export default{
  data() {
    return {
        store
    }
  }
}

</script>

<template>

    <div>
        <h3>
            {{ store.movies.title }}
        </h3>

        <h3>
            TITOLO ORIGINALE
        </h3>

        <h3>
            LINGUA
        </h3>

        <h3>
            VOTO
        </h3>

    </div>

</template>

<style lang="scss" scoped>

</style>