import React, { useContext } from "react"
import { AgreementContext } from "../../../../context/AgreementContext"

const InstructorCancellationPolicy = () => {
  const { createAppLink } = useContext(AgreementContext)
  return (
    <>
      <p>
        <strong>How do I cancel a class reservation as an instructor?</strong>
      </p>
      <p>
        To cancel a class, locate it in your calendar, and select&nbsp;
        <strong>Cancel Class</strong>. Your Users will receive a notification
        and a full refund.
      </p>
      <p>
        <strong>Cancellation penalties&nbsp;</strong>
      </p>
      <p>
        Cancellations can be very disruptive to Users' plans. Therefore,
        penalties may apply if you cancel a class already booked by a User.
      </p>
      <p>
        Cancellations may incur a fee of up to 20% of the booking value of the
        canceled class, deducted from an upcoming payout. We will notify you if
        a fee is charged before you complete a cancellation.
      </p>
      <p>
        Frequent cancellations, or no-shows, violate our&nbsp;
        <a href={createAppLink("/policies/terms")}>Terms</a>&nbsp;and may result
        in removing the class from Teache.
      </p>
      <p>
        <strong>Emergencies or safety issues</strong>
      </p>
      <p>
        We understand that emergencies happen. No penalties are applied for
        cancellations made for valid safety reasons.
      </p>
      <p>
        <strong>Re-booking on a different date or time</strong>
      </p>
      <p>
        If you arrange an alternative time that the User agrees to,&nbsp;contact
        us at <a href='mailto:hello@teache.co'>hello@teache.co</a> to let us
        know after you cancel. We will verify that the User has agreed and
        remove any penalty that was applied.
        <br />{" "}
      </p>
      <p>&nbsp;</p>
    </>
  )
}

export default InstructorCancellationPolicy
