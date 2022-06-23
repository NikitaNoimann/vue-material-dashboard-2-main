import {reactive} from "vue";
export const store3 = reactive({
    stady3: []
})

export const rule34 =  reactive({
    rule: localStorage.getItem("Role") || "",
    group: localStorage.getItem("Group") || ""
})