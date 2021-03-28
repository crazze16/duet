import React from 'react'
import s from '../../styles/Loader.module.css'

export const Loader = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}