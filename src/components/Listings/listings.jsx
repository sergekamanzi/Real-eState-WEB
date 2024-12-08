import './listings.css'

const listings = () => {
  return (
    <div className='main-listings'>
        <h3>Homes For You</h3>
        <p>Based on your view history</p>
         <div className='cards'>
            <div className='card-lists'>
                <img src="" alt="" />
                <div className='card-text'>
                  <h6>Skyper Pool Apartment</h6>
                  <p>$500,000</p>
                </div>
                <div className='card-icons'>
                   <p>remera</p>
                   <p>4 bedrooms</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default listings