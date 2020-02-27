import React, {useState} from "react"
import DatePickerComponent from "./DatePickerComponent";
import "../style/filter.sass"
import GuestsComponent from "./GuestsComponent";
import PriceRange from "./PriceRange";
export default function UseFilter({minDate,maxDate,guests,minPrice,maxPrice,changeMinDate,changeMaxDate,changeGuests,changePrice}) {
    const [guest, setGuest] = useState(guests)
    return (
        <div className="filter">
            <div className="filter__item">
                <DatePickerComponent
                    multi={true}
                    classNameAdd={'datepicker--room-search'}
                    title={['Arrived', 'Shipped']}
                    startDate={minDate}
                    endDate={maxDate}
                    changeMinDate={changeMinDate}
                    changeMaxDate={changeMaxDate}
                />
            </div>
            <div className="filter__item">
                <p className="filter__title">Guests</p>
                <GuestsComponent guests={{guest,setGuest}} accept={changeGuests}/>
            </div>
            <div className="filter__item">
                <div className="filter__title"><span>Price Range</span> <span className="filter__additional-text">${minPrice} - ${maxPrice}</span></div>
                <PriceRange minPrice={minPrice} maxPrice={maxPrice} changePrice={changePrice}/>
                <p className="filter__additional-text">Cost for room per day </p>
            </div>
        </div>
    )
}