import React, { useContext } from "react"
import { AgreementContext } from "../../../../context/AgreementContext"

const InstructorStandards = () => {
  const { createAppLink } = useContext(AgreementContext)
  return (
    <>
      <p>
        In addition to behaving in accordance with our{" "}
        <a href={createAppLink("/policies/community-standards")}>
          Community Standards
        </a>{" "}
        that apply to all members, Teache Instructors must meet the following
        quality standards and requirements. All class listings are reviewed
        based on the criteria below before being published and must continue to
        uphold these standards to remain on Teache.
      </p>
      <p>
        <strong>Instructing requirements</strong>
      </p>
      <p>Instructors must provide expertise in their class(es).</p>
      <p>
        <strong>
          Users should always know exactly whom the Instructor will be
        </strong>
      </p>
      <p>
        If a friend, partner, or team is helping manage your class, they must
        disclose this information to the User.
      </p>
      <p>
        Instructors must personally lead their Users throughout the entirety of
        the class.
      </p>
      <p>
        <strong>Only Teache Users can take a Teache class</strong>
      </p>
      <p>
        Once an Instructor lists a class for a particular time and date on
        Teache, only Teache Users can attend that class. Instructors are not
        permitted to combine Users from Teache and other platforms in the same
        class.
      </p>
      <p>
        <strong>Instructor commitments</strong>
      </p>
      <p>
        <strong>Instructors must honor all booked reservations&nbsp;</strong>
      </p>
      <p>
        Instructors must honor their reservations unless the cancellation is due
        to safety concerns. Learn more about our{" "}
        <a href={createAppLink("/policies/instructor-cancellation")}>
          Instructor Cancellation policy
        </a>
        .
      </p>
      <p>
        <strong>User reviews, ratings, and engagement</strong>
      </p>
      <p>
        Instructors must maintain a high overall rating and User-engagement
        level. Users like to know they can expect a consistent level of quality,
        no matter what class they book. Instructors with consistently low
        reviews (1-3 stars) or insufficient listing views and bookings may have
        their class listings suspended and/or removed from Teache. Learn more
        about <a href={createAppLink("/policies/ratings")}>ratings</a> and{" "}
        <a href={createAppLink("/policies/reviews")}>reviews</a> for classes.
      </p>
      <p>
        Instructors are expected to abide by these standards and our{" "}
        <a href={createAppLink("/policies/terms")}>Terms of Service</a>. Classes
        that fail to meet any of these standards may be removed from Teache.
      </p>
      <p>
        <strong>
          <u>Verification requirements</u>
        </strong>
      </p>
      <p>
        <strong>Evident ID Verification.</strong> If a class includes a
        technically specialized activity that requires proof of a license,
        certification, or insurance, it will not be published if any of the
        following is true:
      </p>
      <ul>
        <li>
          The Instructor does not submit the requested documents for validation.
        </li>
        <li>The required documents are expired.</li>
        <li>
          The name(s) on the documents do(es) not match the name listed on the
          Instructor&rsquo;s Teache profile.
        </li>
        <li>
          The documents do not meet our license or insurance requirements.
        </li>
        <li>
          We cannot process the provided documents for other reasons (e.g.,
          blurry photos or unrecognized document types).
        </li>
      </ul>
      <p>
        <strong>
          <u>What we do not allow</u>
        </strong>
      </p>
      <p>
        <strong>Intellectual property violations</strong>
      </p>
      <p>
        We do not permit the use of such copyrighted work music, videos,
        photography, or literature unless the work was created or properly
        licensed by the Instructor or is in the public domain. We also prohibit
        the unauthorized use of such other types of intellectual property as
        trademarks (e.g., brand names) or individual names (e.g., celebrities)
        that suggest an endorsement of, or affiliation with, an Instructor or a
        class.
      </p>
      <p>
        <strong>Violation of local laws or restrictions&nbsp;</strong>
      </p>
      <p>
        Instructors are responsible for understanding and complying with all
        applicable laws, rules, regulations, and any other jurisdictional
        requirements that apply to their class.
      </p>
      <p>
        <strong>Inappropriate or discriminatory content</strong>
      </p>
      <p>
        Classes must meet all requirements outlined in{" "}
        <a href={createAppLink("/policies/content")}>Teache's Content Policy</a>
        .
      </p>
      <p>
        <u>Listing page requirements</u>
      </p>
      <p>
        The class itinerary must be clear, complete, and accurate. Users should
        know exactly what to expect upon booking the class:
      </p>
      <ul>
        <li>What will Users be doing?</li>
        <li>
          What is included in the price (e.g., what equipment is providing)?
        </li>
        <li>
          What will Users need to bring with them (e.g., extra cash to buy a gym
          pass that is not included)
        </li>
        <li>Availability</li>
      </ul>
      <p>
        <strong>No &ldquo;open-ended&rdquo; classes</strong>
      </p>
      <p>
        Each class must have a clear purpose and follow a pre-defined itinerary.
        In other words, we cannot accept &ldquo;open-ended&rdquo; classes where
        Users are asked to define the class themselves or choose their own
        activities. It is, however, okay to include minor variations within a
        class.
      </p>
      <ul>
        <li>
          <strong>Not allowed: </strong>"I&rsquo;ll meet Users, and then we will
          figure out what the class will look like!"
        </li>
        <li>
          <strong>Allowed: </strong>"My baking class varies by day of the week.
          On Mondays, we bake bread, and on Tuesdays, we bake cookies."
        </li>
      </ul>
      <p>
        <strong>
          Instructors must list their classes as an individual rather than
          <em> as a business</em>
        </strong>
      </p>
      <p>
        Instructor profile photo must be a clear image of the Instructor and
        cannot be a company logo. The Instructor&rsquo;s profile name must be
        the Instructor&rsquo;s personal name, not a business name. Instructors
        should describe themselves in the &ldquo;About Me&rdquo; section of the
        class listing page.
      </p>
    </>
  )
}

export default InstructorStandards
