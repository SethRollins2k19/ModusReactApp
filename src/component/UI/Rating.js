import React from "react"
import star from '../../assets/Rating/star.svg'
import starOutline from '../../assets/Rating/starOutline.svg'
export default function Rating(props) {
    let stars = props.rating;
    let ratingRen = new Array(5)
    ratingRen.fill('')
    return (
        <div>
            {ratingRen.map((item,index)=>{
                if(stars !== 0 && typeof stars !== 'undefined'){
                    item = <img key={index} src={star} alt='star'/>;
                    stars--;
                } else item = <img key={index} src={starOutline} alt='star'/>
                return item
            })}
        </div>
    )
}