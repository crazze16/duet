import {selectorDataType} from "./selectorData.type";

export type SelectorType = {
    setType: (value: 'tv' | 'movies') => void
    data: selectorDataType
    sectionType: 'feed' | 'popular'
}