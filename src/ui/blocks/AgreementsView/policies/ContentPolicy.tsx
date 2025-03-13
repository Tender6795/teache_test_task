import React, { useContext } from "react"
import { AgreementContext } from "../../../../context/AgreementContext"

const ContentPolicy = () => {
  const { createAppLink } = useContext(AgreementContext)
  return (
    <>
      <p>
        By posting content on Teache, you agree to abide by this policy. We
        reserve the right to remove any content, in whole or part, that violates
        this policy, our&nbsp;
        <a href={createAppLink("/policies/terms")}>Terms of Use</a>, our&nbsp;
        <a href={createAppLink("/policies/community-standards")}>
          Community Standards
        </a>
        , our&nbsp;<a href={createAppLink("reviews")}>Review Policy</a>, or for
        any other reason at our sole discretion.
      </p>
      <p>
        In the event of repeated or severe violations, we may suspend or
        permanently deactivate the account(s) in question.
      </p>
      <p>
        You can report the content directly or&nbsp;contact us&nbsp;by email at
        hello@teache.co to report content that violates this policy.
      </p>
      <p>The following content is not allowed on Teache:</p>
      <ul>
        <li>
          Content created solely for the purpose of advertising or other
          commercial content, including company logos, links, or company names
        </li>
        <li>
          Spam, unwanted contact, or content that is shared repeatedly in a
          disruptive manner
        </li>
        <li>
          Content that endorses or promotes illegal or harmful activity or that
          is sexually explicit, violent, graphic, threatening, or harassing
        </li>
        <li>Content that is discriminatory</li>
        <li>
          Attempts to impersonate another person, account, or entity, including
          a representative of Teache
        </li>
        <li>
          Content that is illegal or that violates another person&rsquo;s or
          entity&rsquo;s rights, including intellectual property rights and
          privacy rights
        </li>
        <li>
          Content that includes another person&rsquo;s private or confidential
          information, including content that is sufficient to identify a
          listing&rsquo;s location
        </li>
      </ul>
      <p>
        <strong>Policy violations</strong>
      </p>
      <p>
        The following are policy violations specific to certain types of
        content:
      </p>
      <p>
        <strong>Class Listing titles</strong>
      </p>
      <ul>
        <li>
          Class listing titles that include information irrelevant to the class
          type, style, or experience
        </li>
        <li>Class listing titles that include symbols or emojis</li>
      </ul>
      <p>
        <strong>Class Listing or profile pages</strong>
      </p>
      <ul>
        <li>
          Class listings and profiles that provide fraudulent, false,
          misleading, or deceptive information
        </li>
      </ul>
      <p>
        <strong>Community Center</strong>
      </p>
      <ul>
        <li>
          Off-topic Content, that does not ask a question or does not offer
          knowledge in response to a question as part of a larger discussion
        </li>
        <li>Trolling or repeatedly targeting community members</li>
      </ul>
      <p>
        <strong>Reviews</strong>
      </p>
      <ul>
        <li>
          Reviews that are biased or exhibit indications of
          extortion/incentivization, conflicts of interest, or direct
          competition
        </li>
        <li>
          Reviews that contain no relevant information about an Instructor or
          User, listing, or experience may be removed. Reviews that contain
          mostly irrelevant information are also subject to removal, but only
          where the otherwise relevant information would not be expected to
          inform the booking decisions of other community members meaningfully.
        </li>
      </ul>
      <p>
        Learn more about&nbsp;Teache's{" "}
        <a href={createAppLink("/policies/reviews")}>Review Policy</a>.
      </p>
      <p>
        <strong>Custom URLs</strong>
      </p>
      <ul>
        <li>
          Additional content guidelines apply to the creation of custom URLs.
        </li>
      </ul>
      <p>&nbsp;</p>
    </>
  )
}

export default ContentPolicy
