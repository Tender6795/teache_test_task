import React from "react"

const StripeRecipientAgreement = () => {
  return (
    <>
      <p>
        Stripe provides its users with the ability to use Stripe Connect to make
        payments to third parties (these Stripe users are referred to as “
        <strong>Connect Platforms</strong>” and the third parties are referred
        to as “<strong>you</strong>”).
      </p>
      <p>
        As part of Stripe Connect, Stripe may separately offer you the ability
        to access an information portal managed by Stripe in order for you to
        see the status of payments from a Connect Platform. Stripe may
        separately provide you with portal terms that will apply to you when you
        access the portal.
      </p>
      <p>
        Outside of the informational portal, Stripe is not offering you any
        services, including, but not limited to, payment services, and the
        Stripe Services Agreement does not apply to you. Stripe will facilitate
        the transfer of funds to you based on instructions given to Stripe by
        the Connect Platform. You may have a separate agreement with a Connect
        Platform for the Connect Platform to pay you for goods or services.
        Please contact the Connect Platform with any questions about the status
        of any funds the Connect Platform has sent to you.
      </p>
    </>
  )
}

export default StripeRecipientAgreement
