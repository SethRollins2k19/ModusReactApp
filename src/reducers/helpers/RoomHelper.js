export const assistantFilter = (state)=>{
    const {minDate,maxDate,guests,minPrice,maxPrice} = state.filter
    console.log(state.rooms)
    let sortedRooms = [...state.rooms]
    console.log("HERE ")
    console.log(maxDate)
    sortedRooms = sortedRooms.filter(item => {
        item = item.minDate <= minDate && item.maxDate <= maxDate? null : item
        console.log(item.minDate)
        console.log(minDate)
        console.log(item.minDate <= minDate)
        return item?item:null
    })
    console.log("HERE ")

    console.log(sortedRooms)
    sortedRooms = sortedRooms.filter(item => item.guests.Adults <= guests.Adults && item.guests.Babies <= guests.Babies && item.guests.Children <= guests.Children)
    console.log("HERE ")

    console.log(sortedRooms)
    sortedRooms = sortedRooms.filter(item => item.costPerDay >= minPrice && item.costPerDay <= maxPrice)

    return sortedRooms
}