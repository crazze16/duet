import {Dispatch, SetStateAction} from "react";

export type HomePageType = {
    setNavigationVisibility: Dispatch<SetStateAction<boolean>>
    navigationVisibility: boolean
}