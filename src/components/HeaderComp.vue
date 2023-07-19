<script>
import { store } from '../store'

export default{
  data() {
    return {
        store
    }
  }
}

</script>

<template>
    <header>

        <div class="container">

            <div class="row d-flex justify-content-between">

                <div class="col">
                    LOGO
                </div>

                <div class="col">

                    <form action="" @submit.prevent="$emit('search')">

                        <input type="text" v-model="store.title">

                        <button>Search</button>

                    </form>

                </div>

            </div>

        </div>

    </header>
</template>

<style lang="scss" scoped>

</style>