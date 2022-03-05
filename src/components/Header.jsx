import React, {useState, useContext} from 'react';
import '../styles/Header.scss';
import Menu from './Menu';
import MyOrder from '../containers/MyOrder';
import AppContext from '../context/AppContext.js'
const Header = () => {

	const { state} = useContext(AppContext);
	const [toggle,setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);


const handleToggle = () =>{
	setToggle(!toggle);
}
	return (
		<nav>
			<img src="./icons/icon_menu.svg" alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
						</li>
					<li 
					className="navbar-shopping-cart"
					 onClick={() => setToggleOrders(!toggleOrders)}>
						<img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />

						 {state.cart.lenght > 0 ? 
						 <div>{state.cart.length} </div> 
						 	 : null } 

					</li>
				</ul>
			</div>

		{toggle ?  <Menu/> : null }
		{toggleOrders && <MyOrder/>}
			
		</nav>
	);
}

export default Header;