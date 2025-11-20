import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import { PaymentForm } from './PaymentForm';

//const PUBLIC_KEY = "pk_test_51QMKqrBSyJvLo4V7zkuIDK8Zw2i7V7AMoRSByj3FDpkgpCKlS726J9p2h6udHekTGuSW8npNeCOU2NtQBvnYiNNT00qwEQXdJH"

const stripeTestPromise = loadStripe(PUBLIC_KEY);


export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
    </Elements>   
  )
}
