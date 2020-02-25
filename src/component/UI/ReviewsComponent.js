import React, {useState} from "react"
import {REVIEWS} from '../../emulatedBD'
import noImg from '../../assets/rooms/noPict.png'
import Btn from "./BtnComponent";

const getReviews = (reviews,start = 0,end = 3)=>{
    return reviews.slice(start,end)
}


export default class ReviewsComponent extends React.Component {
    state = {
        totalReviews: REVIEWS.length,
        reviews: getReviews(REVIEWS),
        start: 0 ,
        end: 3
    }
    loadMoreReviews(count) {
        this.setState(prevState => ({
            reviews: prevState.reviews.concat(getReviews(REVIEWS, this.state.start+count , this.state.end+count )),
            start: prevState.start + count ,
            end: prevState.end + count
        }))
    }
    render() {
        return (
            <div className="reviews__inner">
                {this.state.reviews?.map((review,index)=>{
                    return <Review key={index} review={review}/>
                })}
                <Btn title="Load more reviews"
                     btnEvent={async () => {
                         if(this.state.end < this.state.totalReviews){
                            await this.loadMoreReviews(3)
                         }
                     }
                     }
                />
            </div>
        );
    }
}



function Review ({review}) {
    const {author, authorImg = noImg, text = "", likeTotal = 0} = review
    let [liked, setLiked] = useState(false)
    let [likes, setLikes] = useState(likeTotal)

    const likeIt = async ()=>{
        await setLiked(!liked)
        await setLikes(liked === false ? likes+=1 : likes-=1)
    }
    return (
        <div className="reviews__item">
            <header className="reviews__header--post">
                <img src={authorImg} alt="icon"/>
                <div>
                    <p className="reviews__author">{author}</p>
                    <p className="reviews__date">5 day ago</p>
                </div>
            </header>
            <div className="reviews__description">
                <div className={`reviews__likes ${liked === true ? "reviews__likes--liked": null}`} onClick={likeIt} >
                    { liked === false ?
                    <svg className="likeSvg" width="12" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.03906 6.73438C5.66406 6.17448 6.1263 5.7513 6.42578 5.46484C6.72526 5.17839 7.05078 4.83984 7.40234 4.44922C7.75391 4.05859 7.99479 3.71354 8.125 3.41406C8.26823 3.11458 8.33984 2.82161 8.33984 2.53516C8.33984 2.11849 8.19661 1.77344 7.91016 1.5C7.63672 1.22656 7.29167 1.08984 6.875 1.08984C6.54948 1.08984 6.24349 1.18099 5.95703 1.36328C5.68359 1.54557 5.49479 1.77995 5.39062 2.06641H4.60938C4.50521 1.77995 4.3099 1.54557 4.02344 1.36328C3.75 1.18099 3.45052 1.08984 3.125 1.08984C2.70833 1.08984 2.35677 1.22656 2.07031 1.5C1.79688 1.77344 1.66016 2.11849 1.66016 2.53516C1.66016 2.82161 1.72526 3.11458 1.85547 3.41406C1.9987 3.71354 2.24609 4.05859 2.59766 4.44922C2.94922 4.83984 3.27474 5.17839 3.57422 5.46484C3.8737 5.7513 4.33594 6.17448 4.96094 6.73438L5 6.77344L5.03906 6.73438ZM6.875 0.25C7.52604 0.25 8.06641 0.471354 8.49609 0.914062C8.9388 1.35677 9.16016 1.89714 9.16016 2.53516C9.16016 2.91276 9.08854 3.28385 8.94531 3.64844C8.80208 4 8.53516 4.39714 8.14453 4.83984C7.76693 5.28255 7.42188 5.65365 7.10938 5.95312C6.79688 6.2526 6.29557 6.71484 5.60547 7.33984L5 7.88672L4.39453 7.35938C3.49609 6.55208 2.84505 5.94661 2.44141 5.54297C2.05078 5.13932 1.6862 4.66406 1.34766 4.11719C1.00911 3.57031 0.839844 3.04297 0.839844 2.53516C0.839844 1.89714 1.05469 1.35677 1.48438 0.914062C1.92708 0.471354 2.47396 0.25 3.125 0.25C3.88021 0.25 4.50521 0.542969 5 1.12891C5.49479 0.542969 6.11979 0.25 6.875 0.25Z" fill="#1F2041" fillOpacity="0.25"/>
                    </svg>
                        :
                    <svg width="12" height="10" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.90237 7.88672L4.2969 7.33984C3.6068 6.71484 3.1055 6.2526 2.793 5.95312C2.4805 5.65365 2.12893 5.28255 1.73831 4.83984C1.3607 4.39714 1.10029 4 0.957059 3.64844C0.81383 3.28385 0.742215 2.91276 0.742215 2.53516C0.742215 1.89714 0.957059 1.35677 1.38675 0.914062C1.82945 0.471354 2.37633 0.25 3.02737 0.25C3.78258 0.25 4.40758 0.542969 4.90237 1.12891C5.39716 0.542969 6.02216 0.25 6.77737 0.25C7.42841 0.25 7.96878 0.471354 8.39847 0.914062C8.84117 1.35677 9.06253 1.89714 9.06253 2.53516C9.06253 3.04297 8.89326 3.57031 8.55472 4.11719C8.21617 4.66406 7.84508 5.13932 7.44143 5.54297C7.05081 5.94661 6.40628 6.55208 5.50784 7.35938L4.90237 7.88672Z" fill="#BC9CFF"/>
                    </svg>
                    }
                    <p>{likes}</p>
                </div>
                <p className="reviews__text">{text}</p>
            </div>
        </div>
    )
}


