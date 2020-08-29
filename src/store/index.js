// / storeを使用するために createContext と　useReducerを読み込む
import React, { createContext, useReducer} from 'react'

const initialState = {
    popular: [],
    related: [],
    searched: [],
    selected: {},
    term: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POPULAR':
            return { ...state, popular: action.payload.popular}
        case 'SET_RELATED':
            return { ...state, related: action.payload.related}
        case 'SET_SELECTED':
            //  initialStateのなかに複数のstateがある場合は必ずスプレッド公文で書く。
            // スプレッドで描かないとstateが上書きされてpopolarが消えてしまうから。
            return { ...state, selected: action.payload.selected}
        case 'SET_SEARCHED':
            return { ...state, searched: action.payload.searched}
        case 'SET_TERM':
            return { ...state, term: action.payload.term}
        default:
            return state
    }
}

export const Store = createContext({
    globalState: initialState,
    setGlobalState: () => null
});

export const StoreProvider = ( {children} ) => {
    const [globalState, setGlobalState] = useReducer(reducer, initialState)
    return (
        //  gloabalStateとsetGloabalStateをvalueに指定することで子要素からも参照できる
        <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
    )
}

export default StoreProvider
