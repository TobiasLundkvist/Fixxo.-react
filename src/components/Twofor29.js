import ProductCard from './ProductCard'

function Twofor29({items=[]}) {


  return (
        <div className='twofor29 container'>
            <div className="twofor-body">
                <div className="twofor-text">
                    2 FOR USD $29
                </div>
                <button className="btn-white">
                    <div className="corner-top-left"></div>
                    <div className="corner-bottom-right"></div>
                FLASH SALE</button>
            </div> 
            <div className="card-grid">
            {
                items.map(product => <ProductCard key={product.articleNumber} item={product} />)
            }
            </div>
        </div>
    )
}

export default Twofor29