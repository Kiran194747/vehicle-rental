import {computed, ref} from "vue";
import {defineStore} from "pinia";


export const useStore = defineStore("rental", () => {
    const showBackBtn = ref(true)
    const nextBtnStatus = ref(true)
    const nextPage = ref('')
    const prevPage = ref('')
    const nextPageIs = computed( () => nextPage.value);
    const prevPageIs = computed( () => prevPage.value);

    const Fields = {
        type:'lll'
    }

    function setHistory({next,previous}){
        console.log("kiran",next,previous)
        nextPage.value = next;
        prevPage.value = previous;
    }

    return {
        showBackBtn,
        nextBtnStatus,
        setHistory,
        nextPageIs,
        prevPageIs,
        Fields
    };
})