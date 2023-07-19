<script>
import { store } from '../store'
import Nav from './HeaderComps/Nav.vue'

export default{
    components: {
        Nav
    },
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

                <!-- LEFT COLUMN -->
                <div class="col-auto">
                    
                    <div class="d-flex align-items-center">

                        <div id="logoContainer">

                            <img src="../assets/img/logo.png" alt="Logo">

                        </div>

                        <div>

                            <Nav />   

                        </div>

                    </div>

                </div>

                <!-- RIGHT COLUMN -->
                <div class="col-auto">

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

header {
    background-color: black;
    padding: 20px 0;

    #logoContainer {
        width: 100px;

        img {
            width: 100%;
        }
    }

    form {

        input {
            all: unset;
            border: 1px solid white;
            padding-left: 5px;
            background-color: white;
        }

        button {
            border: none;
            border-left: 2px solid black;
            background-color: white;
            font-weight: 500;
        }
    }
}

</style>