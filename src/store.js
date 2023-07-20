import {reactive} from 'vue'

export const store = reactive ({
    movie: [],
    tv: [],
    title: '',
    loaded: false
});