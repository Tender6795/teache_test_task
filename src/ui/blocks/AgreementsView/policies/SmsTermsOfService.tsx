import React, { useContext } from "react"
import { AgreementContext } from "../../../../context/AgreementContext"

const SmsTerms = () => {
  const { createAppLink } = useContext(AgreementContext)
  return (
    <>
      <p>
        For text messaging in the United States, by requesting, joining,
        agreeing to, enrolling in, signing up for, acknowledging, or otherwise
        consenting to receive one or more text messages (&ldquo;Opt-In&rdquo;)
        or using a Teache arrangement in which Teache sends (or indicates that
        it may send, or receives a request that it send) one or more text
        messages (&ldquo;<strong>Text Message Service</strong>&rdquo;), you
        accept these SMS Terms for the U.S. (&ldquo;<strong>SMS Terms</strong>
        &rdquo;), consent to the handling of your personal information as
        described in the&nbsp;Teache{" "}
        <a href={createAppLink("/policies/privacy-policy")}>Privacy Policy</a>,
        and agree to resolve disputes with Teache as described in our&nbsp;
        <a href={createAppLink("/policies/terms")}>Terms of Service</a>. Message
        and data rates may apply.
      </p>
      <p>
        Teache will use reasonable commercial efforts to deliver automated text
        messages to the mobile number you provide. Teache is not liable for
        delayed or undelivered messages.
      </p>
      <p>By Opting Into a Text Message Service:</p>
      <ul>
        <li>
          You expressly authorize Teache to use autodialer or non-autodialer
          technology to send text messages to the mobile phone number associated
          with your Opt-In. You also authorize Teache to include marketing
          content in any such messages. You do not have to Opt-In or agree to
          Opt In as a condition of purchase.
        </li>
        <li>
          You consent to use an electronic record to document your Opt-In. To
          withdraw that consent, reply STOP, contact us via the methods
          described in the Contact Us section of the&nbsp;
          <a href={createAppLink("/policies/terms")}>Terms of Service</a>, or
          visit the &ldquo;Notification&rdquo; page in your account settings. If
          you withdraw your consent, certain features of our service may not be
          available to you.
        </li>
        <li>
          You confirm that you are the current subscriber to the Opted-In mobile
          phone number or that you are the customary user of that number on a
          family or business plan and that you are authorized to Opt-In.
        </li>
      </ul>
      <p>
        For additional help, text HELP in response to a message or
        contact&nbsp;customer service at{" "}
        <a href='mailto:hello@teache.co'>hello@teache.co</a>
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </>
  )
}

export default SmsTerms
