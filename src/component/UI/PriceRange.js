import React from "react"
import noUiSlider from "../../../node_modules/nouislider/distribute/nouislider"
import "../../../node_modules/nouislider/distribute/nouislider.css"

export default class PriceRange extends React.Component{
    state = {
        minPrice: this.props.minPrice,
        maxPrice: this.props.maxPrice
    }
    componentDidMount() {
        let {minPrice, maxPrice} = this.state
        let block = document.querySelector(".price-range")
        noUiSlider.create(block ,{
            start: [minPrice, maxPrice],
            connect: true,
            range: {
                'min': 0,
                'max': maxPrice
            }
        }).on('set.one', (e)=>{
            this.props.changePrice(e)
        })
    }

    render() {
        return (
            <div className="price-range">
            </div>
        )
    }
}