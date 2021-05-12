import {CastCreditsType, DetailsType, PersonSocialType, PopularPersonDataType} from "types/personPage/personPage.type";
import {InferActionsTypes} from "../rootReducer";
import { PPactions } from "./actions";

type InitialStateType = typeof initialState

const initialState = {
    credits: {
        cast: [] as Array<CastCreditsType>,
        details: {} as DetailsType,
        social: {} as PersonSocialType
    },
    popularPeopleData: {
        currentPage: 1,
        results: [] as Array<PopularPersonDataType>,
        totalPages: null as number | null
    }
};

const PeoplePageReducer = (state = initialState, action: InferActionsTypes<typeof PPactions>): InitialStateType => {
    switch (action.type) {
        case "SET_DETAILS":
            return {...state,
                credits: {...state.credits, details: action.detailsData}};
        case "SET_CAST":
            return {...state,
                credits: {...state.credits, cast: action.castData}};
        case "SET_POPULAR_PEOPLE":
            return {...state,
                popularPeopleData: {...state.popularPeopleData, results: action.peopleData}
            };
        case "SET_SOCIAL_DATA":
            return {...state,
                credits: {...state.credits, social: action.socialData}};
        default:
            return {...state}
    }
};

export default PeoplePageReducer