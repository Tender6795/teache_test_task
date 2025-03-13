import React, { useContext } from "react"
import { AgreementContext } from "../../../../context/AgreementContext"

const UserRelease = () => {
  const { createAppLink } = useContext(AgreementContext)
  return (
    <>
      <p>
        <strong>Teache Classes: User Release and Waiver</strong>
      </p>
      <p>Last Updated: March 15, 2023</p>
      <p>
        To participate in a Class, your Instructor(s) require(s) you to accept
        this User Release and Waiver, which is effective between you and your
        Instructor(s) as of the date when you first book or participate in a
        Class, whichever happens first. All terms not defined here have been
        defined in the&nbsp;
        <a href={createAppLink("/policies/terms")}>Teache Terms of Use</a>
        &nbsp;and/or the&nbsp;
        <a href={createAppLink("/policies/additional-instructors-terms")}>
          Additional Terms for Instructors
        </a>
        .
      </p>
      <p>
        You represent that you are 18 years of age or older. Suppose that you
        are bringing a minor to a Class as a User. In that case, you acknowledge
        and agree that you are solely responsible for the supervision of that
        minor throughout the duration of your Class and that you have read this
        User Release and Waiver and agree to it on the minor&rsquo;s behalf. If
        you are booking a Class on behalf of other Users, you will ensure you
        represent and warrant that each User on whose behalf you book has read
        and agreed to this User Release and Waiver, which shall apply to each of
        them as if the reference to "you" was a reference to him/her.
      </p>
      <p>
        <strong>Assumption of Risks</strong>
      </p>
      <p>
        You understand and acknowledge that the Class(es) you sign up to do may
        be hazardous and may carry the risk of injury or illness, including
        sickness, physical injury, property damage, disability, permanent
        paralysis, and death.
      </p>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, YOU KNOWINGLY,
        VOLUNTARILY AND FREELY ASSUME ALL RISKS, BOTH KNOWN AND UNKNOWN, OF
        PARTICIPATING IN EACH CLASS. EVEN IF THOSE RISKS ARISE FROM THE
        NEGLIGENCE OR CARELESSNESS OF THE INSTRUCTOR OR OTHERS, OR DEFECTS IN
        THE EQUIPMENT, PREMISES, OR FACILITIES USED DURING THE CLASS, OR
        OTHERWISE, YOU ASSUME FULL RESPONSIBILITY FOR PARTICIPATION IN THE
        CLASS.
      </p>
      <p>
        <strong>Release and Waiver</strong>
      </p>
      <p>You acknowledge and agree that:</p>
      <ul>
        <li>
          You have reasonably assessed the risks involved in the Class(es) and
          have made an informed and voluntary choice to participate.
        </li>
        <li>
          You alone, and not your Instructor(s), are responsible for determining
          your fitness for participating in the Class(es) and your ability to
          understand any directions or warnings presented fully.
        </li>
        <li>
          You will not participate in any Class(es) when you have a physical,
          medical, or mental limitation or disability or when you are aware or
          should reasonably be aware of any other factors that may limit or
          prevent you from safely participating in any Class(es).
        </li>
        <li>
          You will act reasonably and responsibly and will comply with any
          provided and customary conditions, directions, and/or precautions for
          participation in the Class(es). If you notice any hazard during a
          Class, you will stop participating in the Class immediately.
        </li>
      </ul>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU RELEASE AND PROMISE NOT TO
        SUE YOUR INSTRUCTOR(S) FOR ANY CLAIMS, DEMANDS, CAUSES OF ACTION, LOSSES
        (WHETHER ECONOMIC OR NON-ECONOMIC), DAMAGES, EXPENSES, COSTS OR
        LIABILITY OF ANY NATURE WHATSOEVER ARISING FROM OR IN CONNECTION WITH
        YOUR CLASS(ES), WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
        NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY.
      </p>
      <p>
        If you reside in California, you expressly waive the protection of
        Section 1542 of the California Civil Code (&ldquo;Section 1542&rdquo;),
        which provides: A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE
        CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS/HER FAVOR AT THE TIME
        OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM/HER MUST HAVE MATERIALLY
        AFFECTED HIS/HER SETTLEMENT WITH THE DEBTOR. You understand and agree
        that claims or facts in addition to or different from those you know or
        believe to exist may hereafter be discovered.
      </p>
      <p>
        You intend this User Release and Waiver to be a complete and
        unconditional release of all liability to the greatest extent allowed by
        law. You agree that if any portion of this Waiver and Release is held to
        be invalid, the balance notwithstanding shall continue in full force and
        effect.
      </p>
      <p>
        <strong>Disclaimer of Warranties</strong>
      </p>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, INSTRUCTORS PROVIDE THE
        CLASS(ES) &ldquo;AS IS,&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER
        EXPRESS OR IMPLIED. WITHOUT LIMITING THE FOREGOING AND TO THE MAXIMUM
        EXTENT PERMITTED BY LAW, INSTRUCTOR(S) EXPRESSLY DISCLAIM ANY WARRANTIES
        OF SAFETY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT, AND AS TO
        THE ADEQUACY OF THE DIRECTIONS AND WARNINGS PROVIDED TO YOU.
      </p>
      <p>
        <strong>Indemnification</strong>
      </p>
      <p>
        You agree that if despite this User Release and Waiver, you or anyone on
        your behalf make a claim against the Instructor(s) relating to a Class,
        you will indemnify and hold the Instructor(s) harmless from any
        liability, demand, loss, damage, or costs which the Instructor(s) may
        incur as the result of such claim.
      </p>
      <p>
        You affirm that you HAVE READ THIS USER RELEASE AND WAIVER AND FULLY
        UNDERSTAND THE ASSUMPTION OF RISK, RELEASE, WAIVER, AND CONSENT
        CONTAINED IN IT. YOU FURTHER UNDERSTAND THAT YOU HAVE GIVEN UP RIGHTS BY
        AGREEING TO THESE TERMS AND HAVE DONE SO FREELY AND VOLUNTARILY, AND
        WITHOUT INDUCEMENT.
      </p>
    </>
  )
}

export default UserRelease
