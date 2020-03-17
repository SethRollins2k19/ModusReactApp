import React from "react"

export default function Banner({children,title,subtitle,style={}}) {
    return (
        <div className='banner'>
            <h1 className='banner__title'>{title}</h1>
            <p className='banner__subtitle'>{subtitle}</p>
            <div style={style}>
                {children}
            </div>
        </div>
    )
}