
import "./DashboardItem.css"

export const DashboardItem = ()=>{
    return(
        <div className="DashboardItem">
            <img className="icon" src=""/>
            <p className="symbolname item">ETH | Ethereum</p>
            <p className="pricechange item">$1.24 (0.23%)</p>
            <p className="holdingQuantity item">1.0000374</p>
            <p className="holdingValue item">$32.00457</p>
        </div>
    )
}