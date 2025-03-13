import React, { useContext } from "react"
import { AgreementContext } from "../../../../context/AgreementContext"

const AdditionalTermsForInstructors = () => {
  const { createAppLink } = useContext(AgreementContext)
  return (
    <>
      <p>
        IF YOU RESIDE IN, OR THE ORGANIZATION YOU ARE ACTING FOR IS ESTABLISHED
        IN, THE UNITED STATES, PLEASE NOTE: THE ARBITRATION CLAUSE AND CLASS
        ACTION WAIVER CONTAINED IN THE&nbsp;
        <a href={createAppLink("/policies/terms")}>TEACHE TERMS OF SERVICE</a>
        &nbsp;APPLY TO ANY DISPUTE RELATING TO THESE ADDITIONAL TERMS FOR
        INSTRUCTORS.
      </p>
      <p>Last Updated:&nbsp;March 15, 2023</p>
      <p>
        You agree to these Additional Terms for Instructors ("
        <strong>Additional Instructor Terms</strong>") when you submit a Listing
        for a Class on the Teache Platform.
      </p>
      <p>
        <strong>These Additional Instructor Terms supplement the&nbsp;</strong>
        <strong>
          Teache <a href={createAppLink("/policies/terms")}> Terms of Use</a>
        </strong>
        <strong>&nbsp;("Terms") and the&nbsp;</strong>
        <strong>
          Teache{" "}
          <a href={createAppLink("/policies/payment-terms")}>
            Payments Terms of Service
          </a>
        </strong>
        <strong>
          &nbsp;("Payments Terms"), and, except as explicitly stated herein, the
          Terms and Payments Terms apply in full to all Instructors and Class
          Listings.&nbsp;
        </strong>
        All capitalized terms not defined here are defined in the Terms. Nothing
        in these Additional Instructor Terms shall be construed to amend or
        contradict the Terms, unless explicitly stated. If there is a conflict
        between the Terms and the Additional Instructor Terms, these Additional
        Instructor Terms control the extent of the conflict.
      </p>
      <ol>
        <li>
          <strong> Listing a Class.</strong> To list a Class, you must create a
          Listing and submit the Class to Teache. Classes must always meet
          the&nbsp;
          <a href={createAppLink("/policies/instructor-standards")}>
            standards and requirements for Classes
          </a>
          . When listing a Class, you must, where applicable, be fully educated
          and inform Users about (i) any risks inherent or incidental to the
          Class, (ii) any requirements for participation, such as the minimum
          age, related skills, or level of fitness, and (iii) anything else
          Users may need to know to safely participate in the Class (including
          dress codes, equipment, special certifications or licenses, etc.).
          Teache reserves the right to decide, in its sole discretion, whether a
          submitted Class will be published on the Teache Platform.&nbsp;
        </li>
        <li>
          <strong> Instructing Teache Users</strong>. Once your Class is
          published on the Teache Platform, you will have the ability to add the
          dates on which and times at which you offer your Class through the
          Teache Platform. By making your Class available on the Teache
          Platform, you agree that only people who book through Teache can
          attend the Class. You further agree that you will not allow a
          person(s) to attend a Class you have made available on the Teache
          Platform, unless said person(s) booked that through Teache (or were
          added as an additional User(s) for a spot booked through the Teache
          Platform).
        </li>
        <li>
          <strong> Additional Instructor Responsibilities.&nbsp;</strong>You are
          responsible for (i) understanding and complying with all laws, rules
          and regulations that may apply to your Class, (ii) obtaining any
          required licenses, permits, or registrations before providing your
          Class, and (iii) ensuring that your Class Listing will not breach any
          agreement you may have with any third party.
        </li>
        <li>
          <strong> Termination.</strong> As an Instructor, you may terminate
          this agreement at any time by emailing us or removing your Class from
          the Teache Platform. Teache may terminate this agreement immediately
          and without notice and stop providing access to the Teache Platform,
          if you materially breach this agreement and/or our other Terms or
          Policies, you violate applicable laws, or we reasonably believe
          termination is advisable to protect Teache, its Members, and/or third
          parties. If your Class Listing has been inactive for 120 or more days,
          we may remove it from Teache. If you reside in the United States, or
          if the organization you are acting on behalf of is established in the
          United States, the language in this Section 4 supersedes the Terms
          with respect to all activities related to Instructing a Class.
        </li>
        <li>
          <strong> Instructing as a Team or Organization.</strong> You must
          provide your Class in person and may not allow any third party to
          provide the Class on your behalf, unless authorized by Teache. Any
          team, business, or organization member interacting with Users must be
          added to the class via the method designated by the Teache Platform.
          See Terms for information about Instructing as part of a team,
          business, or organization.
        </li>
        <li>
          <strong> Severability.</strong> Suppose any provision or part of a
          provision in these terms is held to be invalid, void, or
          unenforceable. In that case, such provision (or the part of it that is
          making it invalid, void, or unenforceable) will be struck and not
          affect the validity of and enforceability of the remaining provisions.
        </li>
        <li>
          <strong> Modifications to these Additional Instructor Terms.</strong>{" "}
          Teache reserves the right to modify these Additional Instructor Terms
          at any time in accordance with the Terms.
        </li>
        <li>
          <strong> Survival.</strong> If you or we terminate these Additional
          Instructor Terms, the clauses of these Additional Instructor Terms
          that reasonably should survive such termination will remain in effect.
          When these Additional Instructor Terms are terminated, you are not
          entitled to a restoration of your account (if your account is
          canceled) or of the Member Content.
        </li>
      </ol>
    </>
  )
}

export default AdditionalTermsForInstructors
