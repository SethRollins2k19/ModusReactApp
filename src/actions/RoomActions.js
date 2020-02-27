export const changeMinDate = date => async dispatch =>{
    await dispatch({
        type: "CHANGE_MINDATE",
        date
    })
    await dispatch ({
        type: "FILTER"
    })
}

export const changeMaxDate = date => async dispatch => {
    await dispatch({
        type: "CHANGE_MAXDATE",
        date
    })
    await dispatch ({
        type: "FILTER"
    })
}

export const changeGuests = guests => async dispatch => {
    await dispatch({
        type: "CHANGE_GUESTS",
        guests
    })
    await dispatch ({
        type: "FILTER"
    })
}

export const changePrice = price => async dispatch => {
    await dispatch({
        type: "CHANGE_PRICE",
        price
    })
    await dispatch ({
        type: "FILTER"
    })
}
