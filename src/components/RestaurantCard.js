import { IMG_PATH } from "../../utils/constants"
const RestaurantCard = (props)=>{
    
    const {restData} = props

   
    
    const {cloudinaryImageId, name, avgRating,  sla, cuisines} = restData?.info

    //https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/13b29e28-8338-4676-8b47-4f7dd5625689_651012.jpg

    return (
        <div className='res-card'>
            <img className='res-card-banner' src={IMG_PATH+cloudinaryImageId} alt=""/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            
             
            <p>{avgRating} Start</p>
            <p>{sla?.slaString}</p>
        </div>
    )
}
export default RestaurantCard;