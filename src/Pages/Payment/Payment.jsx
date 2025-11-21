import React from 'react'
import { useState} from 'react';
import './Payment.css';
import StripeContainer from '../../Components/Stripe/StripeContainer';

function Payment() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Reserving Time</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$10.00</h3>
					<button className= "Buy_button" onClick={() => setShowItem(true)}>Reserve Booker</button>
				</>
			)}
		</div>
	);
}

export default Payment;


