<script>
export default {
    data() {
        return {
            navNames: [
                'Home',
                'Movies',
                'TV Series',
                'My List'
            ]
        }
    }
}
</script>

<template>

    <nav>

        <ul>

            <li v-for="(singleNav, i) in navNames" :key="i">
                <a>
                    {{ singleNav }}
                </a>
            </li>

        </ul>

    </nav>

</template>

<style lang="scss" scoped>

ul {
    list-style: none;
    margin: 0;

    li {
        display: inline-block;
        margin-right: 15px;
        cursor: pointer;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>