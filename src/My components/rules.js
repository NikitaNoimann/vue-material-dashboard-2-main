import {reactive} from "vue";

export const rules = reactive(
    {
        rule: localStorage.getItem("Role") | ""
    })

