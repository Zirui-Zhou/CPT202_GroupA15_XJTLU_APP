import {commonGetData, handleResource} from "@/scripts/requestUtils";

async function getGuideTypeList() {
    const result = (await commonGetData("/guide/types",)).data

    if(result) {
        result.forEach((item, index, array) => {array[index] = handleResource(item, "typeImage")})
    }

    return result
}

async function getGuideListOfType(type) {
    return (await commonGetData("/guide", false, {params: {type: type}})).data
}

async function getGuideType(type) {
    return (await commonGetData("/guide/type", false, {params: {id: type}})).data
}

export {
    getGuideTypeList,
    getGuideListOfType,
    getGuideType,
}