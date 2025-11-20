import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
    iconsStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#000", // Set to black for better visibility
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#aab7c4" } // Subtle placeholder color
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ff5252" // Bright red for invalid input
        }
    }
};



export const PaymentForm = () => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error,  paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount:1000,
                id
            })

            if(response.data.success) {
                console.log("Successful Payment")
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.messsage)
    }

}



  return (
    <>
    {!success ?
    <form onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
            <div className='FormRow'>
                <CardElement options={CARD_OPTIONS}/>

            </div>
        </fieldset>
        <button>Pay</button>
    </form>
    :
    <div>
        <h2>Great! A message has been sent to this sitter to book with them</h2>
    </div>
    }
    </>
  )
}
