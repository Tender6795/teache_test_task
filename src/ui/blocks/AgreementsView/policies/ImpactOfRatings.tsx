import React, { useContext } from "react"
import { AgreementContext } from "../../../../context/AgreementContext"

const ImpactOfRatings = () => {
  const { createAppLink } = useContext(AgreementContext)
  return (
    <>
      <p>
        <strong>
          How do my class rating and/or reviews affect my ability to give
          classes?
        </strong>
      </p>
      <p>
        The Teache marketplace is known for high-quality classes, and all
        classes must meet our&nbsp;
        <a href={createAppLink("/policies/instructor-standards")}>
          quality standards
        </a>
        &nbsp;to be published on Teache. As part of being a Teache Instructor,
        you commit to providing classes that meet Users&rsquo; expectations.
      </p>
      <p>
        User reviews help Instructors and Teache understand which classes meet
        these quality standards and expectations. Consistent 5-star reviews help
        build trust in Teache, bringing success to the entire community.
      </p>
      <p>
        This is why classes with one or more low-star reviews and/or a low
        review rating may fall below our quality and eligibility threshold and
        may, thus, be removed from the marketplace.
      </p>
      <p>
        <strong>What may cause a class to be removed?</strong>
      </p>
      <p>
        Classes must maintain a high overall rating and User engagement level.
        Users like to know they can expect a consistent level of quality, no
        matter where they book. Instructors with consistently low reviews (1-3
        stars) and/or insufficient page views and bookings may have their
        listings suspended and/or removed from Teache.&nbsp;
      </p>
      <p>
        <strong>How can I improve my class?</strong>
      </p>
      <p>
        You can check your reviews and performance by looking at your profile in
        the mobile application.
      </p>
      <p>
        <strong>
          What can other quality criteria lead to a class being removed?
        </strong>
      </p>
      <p>
        In addition to ratings and reviews, we look at other User and engagement
        signals related to your class, including how users interact with your
        class and your activity on Teache.
      </p>
    </>
  )
}

export default ImpactOfRatings
