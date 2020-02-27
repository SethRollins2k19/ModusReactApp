export const assistantFilter = (state)=>{
    const {minDate,maxDate,guests,minPrice,maxPrice} = state.filter
    let sortedRooms = [...state.rooms]
    sortedRooms = sortedRooms.filter(item => item.minDate >= minDate && item.maxDate >= maxDate)
    sortedRooms = sortedRooms.filter(item => item.guests.Adults <= guests.Adults && item.guests.Babies <= guests.Babies && item.guests.Children <= guests.Children)
    sortedRooms = sortedRooms.filter(item => item.costPerDay >= minPrice && item.costPerDay <= maxPrice)

    return sortedRooms
}