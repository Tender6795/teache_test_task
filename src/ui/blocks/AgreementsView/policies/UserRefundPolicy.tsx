import React, { useContext } from "react"
import { AgreementContext } from "../../../../context/AgreementContext"

const UserRefund = () => {
  const { createAppLink } = useContext(AgreementContext)
  return (
    <>
      <p>
        This User Refund Policy governs Teache's policy for User refunds as well
        as the Instructor obligations associated with this Policy. It applies in
        addition to&nbsp;Teache's{" "}
        <a href={createAppLink("/policies/terms")}>Terms of Use</a>&nbsp;and is
        available to Users who book a class through the Teache Platform and
        suffer a Class Issue.
      </p>
      <p>
        All capitalized terms shall have the meaning outlined in the&nbsp;Teache{" "}
        <a href={createAppLink("/policies/terms")}>Terms</a>&nbsp;or&nbsp;
        <a href={createAppLink("/policies/payment-terms")}>Payments Terms</a>
        ,&nbsp;unless otherwise defined in this User Refund Policy.
      </p>
      <p>
        <strong>
          By using the Teache Platform as an Instructor or User, you indicate
          that you have read understand and agree to be bound by this User
          Refund Policy.
        </strong>
      </p>
      <p>
        <strong>Eligible Class Issues and Refund Policy</strong>
      </p>
      <p>
        The following situations are &ldquo;Class Issues&rdquo; that are
        eligible for a refund under the User Refund Policy:
      </p>
      <ul>
        <li>
          The Instructor fails to carry out the booked Class or arrives more
          than 20 minutes past the stated start time, causing the User to
          abandon the Class.
        </li>
        <li>
          The Instructor makes significant changes to the Class after booking.
        </li>
        <li>
          The Class contains a safety or health hazard that would be reasonably
          expected to affect the User&rsquo;s participation adversely.
        </li>
      </ul>
      <p>
        Suppose that Teache determines that a User experienced a Class Issue. In
        that case, Teache will, at its discretion, provide the User with a
        refund up to a maximum of the Total Pricing the User paid for the Class
        in accordance with this Policy.
      </p>
      <p>
        <strong>
          Minimum Quality Standards, Instructor Responsibilities, and
          Reimbursement to User
        </strong>
      </p>
      <p>
        As an Instructor, you are responsible for ensuring that the class you
        list on the Teache Platform meets Teache's&nbsp;
        <a href={createAppLink("/policies/instructor-standards")}>
          Class Standards
        </a>
        &nbsp;and does not present a User with class issues. Before and during
        the class, Instructors should be available or make a third party
        available to try, in good faith, to resolve any User issues.
      </p>
      <p>
        If (i) Teache determines that a User has suffered a Class Issue related
        to your class and (ii) Teache reimburses that User (up to their Total
        Price), you agree to reimburse Teache up to the amount paid by Teache
        within 30 days of Teache's request. You authorize Teache to collect any
        amounts owed to Teache by reducing your Payout or as otherwise permitted
        pursuant to the&nbsp;
        <a href={createAppLink("/policies/payment-terms")}>Payments Terms</a>.
      </p>
      <p>
        As an Instructor, you understand that the Users' rights under this User
        Refund Policy will supersede the&nbsp;
        <a href={createAppLink("/policies/user-cancellation")}>
          Class Cancellation Policy
        </a>
        . If you dispute the Class Issue, you may&nbsp; notify us in writing
        &nbsp;and provide us with information (including photographs or other
        evidence) disputing the claims regarding the Class Issue, provided you
        used reasonable and good faith efforts to try to remedy the Class Issue
        with the User before disputing the Class Issue claim.
      </p>
      <p>
        <strong>General Provisions</strong>
      </p>
      <p>This User Refund Policy does not:</p>
      <ul>
        <li>constitute an offer to insure</li>
        <li>constitute insurance or an insurance contract</li>
        <li>take the place of insurance obtained or obtainable by the User</li>
      </ul>
      <p>
        Furthermore, the User has not paid any premium in respect of the User
        Refund Policy. The benefits provided under this User Refund Policy are
        not assignable or transferable by a User.
      </p>
      <p>
        All determinations of Teache concerning the User Refund Policy shall be
        at Teache's discretion and final and binding on the Users and
        Instructors.
      </p>
      <p>
        Teache reserves the right to modify or terminate this User Refund
        Policy, at any time, in its sole discretion. If Teache modifies this
        User Refund Policy, we will post the modification on the Teache Platform
        or provide you with notice of the modification. Teache will continue to
        process all claims for Class Issues made before the effective date of
        the modification.
        <br />{" "}
      </p>
      <p>&nbsp;</p>
    </>
  )
}

export default UserRefund
