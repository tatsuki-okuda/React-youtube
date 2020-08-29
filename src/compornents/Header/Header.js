import React, { useState, useEffect, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// cssファイルをstyleという名前のオブジェクトとして読み込む
import Style from './Header.module.scss'
import { useHistory } from 'react-router-dom'
import { Store } from '../../store/index'

const Header = () => {
    // ローカルstate
    const [term, setTerm] = useState('')
    const history = useHistory()
    const { globalState, setGlobalState} = useContext(Store)

    const handlesubmit = e => {
        e.preventDefault()
        setGlobalState({type: 'SET_TERM', payload: { term }})
        history.push(`/search?query=${term}`)
    }
    useEffect(() => {
        setTerm(globalState.term)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        // styleオブジェクトのheaderクラスのcssを当てることができる
        <div className={Style.header}>
            <div　className={Style.item}>
                <Link to="/">VideoTube</Link>
            </div>
            <div className={Style.item}>
                <form onSubmit={ handlesubmit }>
                    <input 
                        type="text"
                        placeholder="検索" 
                        onChange={e => setTerm(e.target.value)}
                        value={term}/>
                    <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </form>
            </div>
        </div>
    )
}

export default Header
