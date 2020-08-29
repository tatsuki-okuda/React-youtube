import React from 'react'
import { Link } from 'react-router-dom'
import Style from './SideList.module.scss'

const SideListItem = ({id, src, title}) => {
    return (
        <Link to={{pathname: 'watch', search: `?v=${id}`}} className={Style.item}>
            <img src={src} alt={title} />
            <div className={Style.info}>
                <span>{title}</span>
            </div>
        </Link>
    )
}

export default SideListItem
