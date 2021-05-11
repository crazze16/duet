import {MovieBySearch} from "../shared.type";

export type selectorDataType = {
    data: {
        page: number
        results:  Array<MovieBySearch>
        total_results: number | null
        total_pages: number | null
    }
    genres: Array<number>
    active: 'movies' | 'tv'
}