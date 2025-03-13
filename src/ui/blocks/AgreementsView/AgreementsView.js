import React, { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { AgreementContext } from "../../../context/AgreementContext"
import { routesPath } from "../../../conts/routes"
import { Container } from "../../base/Container"
import { Footer } from "../Footer"
import {
  Body,
  Content,
  PrivacyPolicyWrapper,
  SideBar,
  SideBarItem,
  Title,
} from "./PrivacyPolicyStyled"
import PrivacyPolicyText from "./PrivacyPolicyText.js"
import AdditionalTermsForInstructors from "./policies/AdditionalTermsForInstructors.tsx"
import CommunityStandards from "./policies/CommunityStandards.tsx"
import ContentPolicy from "./policies/ContentPolicy.tsx"
import CookiePolicy from "./policies/CookiePolicy.tsx"
import CopyrightPolicy from "./policies/CopyrightPolicy.tsx"
import ImpactOfRatings from "./policies/ImpactOfRatings.tsx"
import InstructorCancellationPolicy from "./policies/InstructorCancellationPolicy.tsx"
import InstructorPrivacyStandardPolicy from "./policies/InstructorPrivacyStandardPolicy.tsx"
import InstructorRequirementsPolicy from "./policies/InstructorRequirementsPolicy.tsx"
import InstructorStandards from "./policies/InstructorStandards.tsx"
import PaymentTermsOfService from "./policies/PaymentTermsOfService.tsx"
import ReviewsPolicy from "./policies/ReviewsPolicy.tsx"
import ServiceFeesPolicy from "./policies/ServiceFeesPolicy.tsx"
import SmsTermsOfService from "./policies/SmsTermsOfService.tsx"
import StripeRecipientAgreement from "./policies/StripeRecipientAgreement.tsx"
import TaxesPolicy from "./policies/TaxesPolicy.tsx"
import Terms from "./policies/Terms.tsx"
import UserCancellationPolicy from "./policies/UserCancellationPolicy.tsx"
import UserRefundPolicy from "./policies/UserRefundPolicy.tsx"
import UserReleasePolicy from "./policies/UserReleasePolicy.tsx"

const AgreementsView = () => {
  const [activeStep, setActiveStep] = useState(routesPath.privacy)
  const [isAppMode, setIsAppMode] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setActiveStep(location.pathname)

    const params = new URLSearchParams(location.search)
    const mode = params.get("mode")

    if (mode !== "app") {
      setIsAppMode(false)
    }
  }, [location.pathname])

  const renderTitle = () => {
    switch (activeStep) {
      case routesPath.privacy:
        return "Privacy Policy"
      case routesPath.terms:
        return "Terms of Use"
      case routesPath.additionalInstructorsTerms:
        return "Additional Instructor Terms of Service"
      case routesPath.userRelease:
        return "User Release"
      case routesPath.paymentTerms:
        return "Payment Terms of Service"
      case routesPath.instructorRequirements:
        return "Instructor Requirements"
      case routesPath.instructorCancellation:
        return "Instructor Cancellation"
      case routesPath.userCancellation:
        return "User Cancellation"
      case routesPath.userRefund:
        return "User Refund"
      case routesPath.instructorPrivacyStandard:
        return "Instructor Privacy Standards"
      case routesPath.reviews:
        return "Reviews Policy"
      case routesPath.ratings:
        return "Ratings Policy"
      case routesPath.content:
        return "Content Policy"
      case routesPath.cookies:
        return "Cookie Policy"
      case routesPath.copyright:
        return "Copyright Policy"
      case routesPath.serviceFees:
        return "Service Fees"
      case routesPath.smsTerms:
        return "SMS Terms of Service"
      case routesPath.taxes:
        return "Taxes for Users"
      case routesPath.communityStandards:
        return "Community Standards"
      case routesPath.stripeTerms:
        return "Stripe Recipient Agreement"
      case routesPath.instructorStandards:
        return "Instructors' standards and requirements"
      default:
        return ""
    }
  }

  const getPolicyComponent = (step) => {
    switch (step) {
      case routesPath.privacy:
        return <PrivacyPolicyText />
      case routesPath.terms:
        return <Terms />
      case routesPath.additionalInstructorsTerms:
        return <AdditionalTermsForInstructors />
      case routesPath.userRelease:
        return <UserReleasePolicy />
      case routesPath.paymentTerms:
        return <PaymentTermsOfService />
      case routesPath.instructorRequirements:
        return <InstructorRequirementsPolicy />
      case routesPath.instructorCancellation:
        return <InstructorCancellationPolicy />
      case routesPath.userCancellation:
        return <UserCancellationPolicy />
      case routesPath.userRefund:
        return <UserRefundPolicy />
      case routesPath.instructorPrivacyStandard:
        return <InstructorPrivacyStandardPolicy />
      case routesPath.reviews:
        return <ReviewsPolicy />
      case routesPath.ratings:
        return <ImpactOfRatings />
      case routesPath.content:
        return <ContentPolicy />
      case routesPath.cookies:
        return <CookiePolicy />
      case routesPath.copyright:
        return <CopyrightPolicy />
      case routesPath.serviceFees:
        return <ServiceFeesPolicy />
      case routesPath.smsTerms:
        return <SmsTermsOfService />
      case routesPath.taxes:
        return <TaxesPolicy />
      case routesPath.communityStandards:
        return <CommunityStandards />
      case routesPath.stripeTerms:
        return <StripeRecipientAgreement />
      case routesPath.instructorStandards:
        return <InstructorStandards />
      default:
        return null
    }
  }

  const renderSidebar = () => {
    return (
      <SideBar>
        <NavLink to={routesPath.privacy} exact>
          <SideBarItem active={activeStep === routesPath.privacy}>
            Privacy
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.terms} exact>
          <SideBarItem active={activeStep === routesPath.terms}>
            Terms
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.additionalInstructorsTerms} exact>
          <SideBarItem
            active={activeStep === routesPath.additionalInstructorsTerms}>
            Additional Instructors Terms
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.userRelease} exact>
          <SideBarItem active={activeStep === routesPath.userRelease}>
            User Release
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.paymentTerms} exact>
          <SideBarItem active={activeStep === routesPath.paymentTerms}>
            Payment Terms
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.instructorRequirements} exact>
          <SideBarItem
            active={activeStep === routesPath.instructorRequirements}>
            Instructor Requirements
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.communityStandards} exact>
          <SideBarItem active={activeStep === routesPath.communityStandards}>
            User Standards
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.instructorStandards} exact>
          <SideBarItem active={activeStep === routesPath.instructorStandards}>
            Instructor Standards
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.instructorCancellation} exact>
          <SideBarItem
            active={activeStep === routesPath.instructorCancellation}>
            Instructor Cancellation
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.userCancellation} exact>
          <SideBarItem active={activeStep === routesPath.userCancellation}>
            User Cancellation
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.userRefund} exact>
          <SideBarItem active={activeStep === routesPath.userRefund}>
            User Refund
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.instructorPrivacyStandard} exact>
          <SideBarItem
            active={activeStep === routesPath.instructorPrivacyStandard}>
            Instructor Privacy Standard
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.reviews} exact>
          <SideBarItem active={activeStep === routesPath.reviews}>
            Reviews
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.ratings} exact>
          <SideBarItem active={activeStep === routesPath.ratings}>
            Ratings
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.content} exact>
          <SideBarItem active={activeStep === routesPath.content}>
            Content
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.cookies} exact>
          <SideBarItem active={activeStep === routesPath.cookies}>
            Cookie
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.copyright} exact>
          <SideBarItem active={activeStep === routesPath.copyright}>
            Copyright
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.serviceFees} exact>
          <SideBarItem active={activeStep === routesPath.serviceFees}>
            Service Fees
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.smsTerms} exact>
          <SideBarItem active={activeStep === routesPath.smsTerms}>
            SMS Terms
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.taxes} exact>
          <SideBarItem active={activeStep === routesPath.taxes}>
            Taxes
          </SideBarItem>
        </NavLink>
        <NavLink to={routesPath.stripeTerms} exact>
          <SideBarItem active={activeStep === routesPath.stripeTerms}>
            Stripe Recipient Agreement
          </SideBarItem>
        </NavLink>
      </SideBar>
    )
  }

  const createAppLink = (href) => {
    return isAppMode ? `${href}?mode=app` : href
  }

  return (
    <>
      <PrivacyPolicyWrapper isAppMode={isAppMode}>
        <Container>
          <Title>{renderTitle()}</Title>
          <Body>
            {!isAppMode && renderSidebar()}
            <Content isAppMode={isAppMode}>
              <AgreementContext.Provider value={{ createAppLink }}>
                {getPolicyComponent(activeStep)}
              </AgreementContext.Provider>
            </Content>
          </Body>
        </Container>
      </PrivacyPolicyWrapper>
      {!isAppMode && <Footer />}
    </>
  )
}

export default AgreementsView
