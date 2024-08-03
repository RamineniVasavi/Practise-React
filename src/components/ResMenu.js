import { useParams } from "react-router-dom";
const ResMenu=() =>{
 const {resId}=useParams();
    return (
        <div className="menu">
            <h1>Name of the restaurant</h1>
            <h2>{resId}</h2>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
            </ul>
        </div>
    )
}
export default ResMenu;