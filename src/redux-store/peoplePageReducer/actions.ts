import {CastCreditsType, DetailsType, PersonSocialType, PopularPersonDataType} from "../../types/personPage/personPage.type";

export const PPactions = {
  setDetails: (detailsData: DetailsType) => ({type: 'SET_DETAILS', detailsData}  as const),
  setCast: (castData: Array<CastCreditsType>) => ({type: 'SET_CAST', castData} as const),
  setPopularPeople: (peopleData: Array<PopularPersonDataType>) => ({type: 'SET_POPULAR_PEOPLE', peopleData} as const),
  setSocialData: (socialData: PersonSocialType) => ({type: 'SET_SOCIAL_DATA', socialData} as const),
};