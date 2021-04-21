import React from 'react'
import s from './loader.module.css'

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