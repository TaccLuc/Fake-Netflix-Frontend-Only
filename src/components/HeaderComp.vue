<script>
import { store } from '../store'
import Nav from './HeaderComps/Nav.vue'

export default{
    components: {
        Nav
    },
    data() {
        return {
            store,
            searchFocus: false
        }
    },
    methods: {
        searchDisplay() {
            this.searchFocus = !this.searchFocus;
            this.store.title = '';
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

                        <input type="text" v-model="store.title" 
                        @keyup.enter="$emit('search')"
                        :class="{'active': searchFocus}">

                        <span @click="searchDisplay()">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>

                </div>

            </div>

        </div>

    </header>
</template>

<style lang="scss" scoped>

header {
    background-color: black;
    padding: 20px 0;
    height: 70px;

    #logoContainer {
        width: 100px;

        img {
            width: 100%;
        }
    }


    input {
        all: unset;
        border: 1px solid white;
        padding-left: 5px;
        background-color: white;
        margin-right: 10px;
        display: none;

        &.active {
            display: inline;
        }
    }

    span {
        color: white;
        font-size: 1.3rem;
        cursor: pointer;
    }


    
}

</style>