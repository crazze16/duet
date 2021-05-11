import {selectorDataType} from "./selectorData.type";

export type GenresSliderType = {
    data: selectorDataType,
    addGenre: (genre: number) => void,
    removeGenre: (genre: number) => void
}