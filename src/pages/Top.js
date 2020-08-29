// rafce　で雛形入力できる
import React, { useEffect, useContext } from 'react'
import Layout from '../compornents/Layout/Layout'
import {fetchPopularData} from '../apis/index'
import { Store } from '../store/index'
import VideoGrid from '../compornents/VideoGrid/VideoGrid'
import VideoGridItem from '../compornents/VideoGridItem/VideoGridItem'


const Top = () => {
    const { globalState, setGlobalState } = useContext(Store)
    // から配列を渡すすることでクラス配列のコンポーネントディヂュマウントを同じ処理ができる
    useEffect(() => {
        fetchPopularData().then( (res) => {
            console.log('data', res)
            setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Layout>
            <VideoGrid>
                {
                    globalState.popular && globalState.popular.map((popular) => {
                        return (
                            <VideoGridItem
                                id = {popular.id}
                                key = {popular.id}
                                src = {popular.snippet.thumbnails.standard.url}
                                title = {popular.snippet.title} />
                        )
                    })
                }
            </VideoGrid>
        </Layout>
    )
}

export default Top
