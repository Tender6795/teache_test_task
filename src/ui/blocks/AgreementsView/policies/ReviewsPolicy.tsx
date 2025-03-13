import React, { useContext } from "react"
import { AgreementContext } from "../../../../context/AgreementContext"

const Reviews = () => {
  const { createAppLink } = useContext(AgreementContext)
  return (
    <>
      <p>
        To build a platform of trust, we ask our community to help ensure that
        reviews on Teache are helpful and informative and do not expose our
        community to harm. Therefore, we expect that all reviews adhere to the
        following:
      </p>
      <ol>
        <li>
          <strong> Reviews should not violate our content policy</strong>
        </li>
      </ol>
      <p>
        Some content is never allowed on Teache. You can review&nbsp; Teache's
        <a href={createAppLink("/policies/content")}> Content Policy</a>
        &nbsp;to find out more.
      </p>
      <ol start={2}>
        <li>
          <strong> Reviews should be unbiased</strong>
        </li>
      </ol>
      <p>
        Reviews are most helpful when they provide unbiased and objective
        information. Therefore, we do not allow individuals or entities who own
        or are affiliated with a class listing to post reviews of their
        business. We also do not allow individuals who are confirmed to offer
        competing class listings to post reviews of their direct competitors.
      </p>
      <p>
        You are not allowed to incentivize positive reviews, use the threat of a
        negative review to manipulate a desired outcome or influence
        another&rsquo;s review with the promise of compensation.
      </p>
      <p>
        You are also not allowed to accept fake reservations in exchange for a
        positive review, use a second account to leave yourself a review, or
        coordinate with business partners to get positive reviews.
      </p>
      <ol start={3}>
        <li>
          <strong> Reviews should be relevant</strong>
        </li>
      </ol>
      <p>
        Keep your reviews relevant to Teache and your experience since Users are
        reading your reviews to learn about the Instructor and their Class.
        Reviews that are off-topic can be distracting and may not help other
        Users make informed booking decisions. For this reason, reviews should
        focus on your interactions with other community members and your time
        during the class.
      </p>
      <p>To keep reviews relevant, we recommend avoiding the following:</p>
      <ul>
        <li>
          Commentary about a person&rsquo;s social, political, or religious
          views
        </li>
        <li>
          Profanity, name-calling, and assumptions about a person&rsquo;s
          character or personality
        </li>
        <li>
          Content that refers to circumstances entirely outside of
          another&rsquo;s control (for example, weather conditions on the date
          of the class)
        </li>
        <li>
          Content about services not related to Teache (for example, rideshare
          to the class)
        </li>
        <li>
          Commentary about past Teache reservations, Instructors, or Users, or
          about a Teache product that does not relate to the class, Instructor,
          or User you are rating
        </li>
      </ul>
      <p>
        When we receive a report of a review that violates this policy, we may
        remove the review from our platform. Repeated violations may lead to
        suspending or permanently deactivating the account(s) responsible for
        the reviews.
      </p>
      <p>
        <strong>Reporting a review that violates our policy</strong>
      </p>
      <p>
        To report a review for violating Teache&rsquo;s review
        policy,&nbsp;contact us by email at hello@teache.co.
      </p>
      <p>
        <strong>If you feel a review is untrue</strong>
      </p>
      <p>
        While we encourage and expect all community members to post reviews that
        contain objective and accurate information, Teache does not mediate
        disputes concerning the truth of reviews. We expect the author of the
        review to stand behind the content of their review. <br />{" "}
      </p>
      <p>&nbsp;</p>
    </>
  )
}

export default Reviews
