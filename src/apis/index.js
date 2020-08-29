import axios from 'axios'

// apiの登録で取得したキーをいれる
const KEY = 'AIzaSyCFxjPp3QfKOZJCTwuOZwFNjOmyys0Rb2M'

// httpリクエストのベースURLうぃ設定する
const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

//トップページを表示させるトレンドリストようにメソッドを作る。
// asyncは非同期関数
// リクエスト結果を返したいのでまずはリターン
// exportでtopページで読み込む

const params = {
    part: 'snippet',
    maxResults: 40,
    key: KEY,
    regionCode: 'JP',
    type: 'video',
}

export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
        params: {
            ...params,
            chart: 'mostPopular'
        }
    })
}

// watchで表示する
export const fetchSelectedData = async (id) => {
    return await youtube.get('videos', {
        params: {
            ...params,
            id
        }
    })
}

// 関連動画
export const fetchRelatedData = async (id) => {
    return await youtube.get('/search',{
        params: {
            ...params,
            relatedTovideoId: id
        }
    })
}


export const fetchSearchData = async (query) => {
    return await youtube.get('/search', {
        params: {
            ...params,
            q: query
        }
    })
}