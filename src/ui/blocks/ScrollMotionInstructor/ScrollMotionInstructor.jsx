import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import {
  Circle,
  Column,
  ColumnText,
  ColumnTitle,
  MainTitle,
  PhonePicture,
  PhoneWrapper,
  PictureRow,
  PictureRowsWrapper,
  Section,
  StickyStyled,
} from "./ScrollMotionStyled"

import dateRow from "../../../static/pictures/dateRow.svg"
import fitnessRow from "../../../static/pictures/fitness_row.svg"
import firstPhone from "../../../static/pictures/phone.png"
import thirdPhone from "../../../static/pictures/phone_3.png"
import manRow from "../../../static/pictures/pink-left-image.webp"
import secondPhone from "../../../static/pictures/pink-main-image.webp"
import womanRow from "../../../static/pictures/pink-right-image.webp"
import rockClimbingRow from "../../../static/pictures/rock_climbing_row.svg"
import timeRow from "../../../static/pictures/timeRow.svg"

import { useScrollContext } from "context/ScrollContext"
import { useMediaQuery } from "react-responsive"
import { BadgeDesktop } from "../../base/badge/Badge"
import ScrollHint from "../../base/scrollHint/ScrollHint"

var flag = false
var lastSection = false
const freezeTime = 1400
const ScrollMotionInstructor = ({
  setHeadColor,
  setHeadSolid,
  setBottomShow,
  hideScrollHint,
}) => {
  const { position, setPosition } = useScrollContext()
  const wrapper = useRef(false)
  const firstSection = useRef()
  const secondSection = useRef()
  const thirdSection = useRef()
  const [sectionId, setSectionId] = useState(0)
  const [prevSectionId, setPrevSectionId] = useState(0)
  const [removeSection, setRemoveSection] = useState([
    true,
    false,
    false,
    false,
  ])

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  const {
    ref: inViewRef,
    inView,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  })

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: firstSection.current,
      start: "top top",
      end: "+=50000",
      toggleClass: "wrap",
    })

    if (window.innerWidth > 768) {
      ScrollTrigger.create({
        trigger: thirdSection.current,
        start: "top top",
        end: "+=50000",
        onEnter: () => {
          setHeadSolid(true)
          setHeadColor("grey")
        },
        onLeaveBack: () => {
          setHeadSolid(false)
          setHeadColor("white")
        },
      })
    } else {
      setHeadSolid(true)
      setHeadColor("grey")
    }

    var yDown = null
    var touchRelease = true

    function getTouches(evt) {
      return (
        evt.touches || // browser API
        evt.originalEvent.touches
      ) // jQuery
    }

    function handleTouchStart(evt) {
      if (touchRelease) {
        const firstTouch = getTouches(evt)[0]
        yDown = firstTouch.clientY
      }
      touchRelease = false
    }

    function handleTouchMove(evt) {
      let bottomShow = true
      if (!yDown || touchRelease) {
        return
      }

      var yUp = evt.touches[0].clientY

      var yDiff = yDown - yUp

      let scrollY = window.scrollY
      if (yDiff > 10) {
        setSectionId((prev) => {
          if (prev === 3) {
            return prev
          }
          evt.preventDefault()
          setPrevSectionId(prev)
          return prev !== 3 ? prev + 1 : prev
        })
      } else if (yDiff < -10) {
        setSectionId((prev) => {
          if (prev === 3 && scrollY == 0) {
            bottomShow = false
          }
          if (prev === 3 && scrollY > 0) {
            return prev
          }
          evt.preventDefault()
          setPrevSectionId(prev)
          return prev !== 0 ? prev - 1 : prev
        })
      }

      yDown = null
      if (!bottomShow) setBottomShow(bottomShow)
    }

    function handleTouchEnd(evt) {
      setTimeout(() => {
        touchRelease = true
      }, 1650)
    }

    function handleScroll(e) {
      const type = e.type
      const key = e.key
      // Ignore other keys then "ArrowUp" and "ArrowDown"
      if (type === "keydown" && key !== "ArrowDown" && key !== "ArrowUp") return
      let bottomShow = true
      const delta = e.wheelDelta
      const scrollDown = type === "wheel" ? delta < 0 : key === "ArrowDown"
      const scrollUp = type === "wheel" ? delta > 0 : key === "ArrowUp"
      // Prevent happening continuous event
      if (!flag) {
        flag = true
        let scrollY = window.scrollY
        if (scrollDown) {
          setSectionId((prev) => {
            if (prev === 3) {
              return prev
            }
            e.preventDefault()
            setPrevSectionId(prev)
            return prev !== 3 ? prev + 1 : prev
          })
        } else if (scrollUp) {
          setSectionId((prev) => {
            if (prev === 3 && scrollY == 0) {
              bottomShow = false
            }
            if (prev === 3 && scrollY > 0) {
              return prev
            }
            e.preventDefault()
            setPrevSectionId(prev)
            return prev !== 0 ? prev - 1 : prev
          })
        }
        setTimeout(() => {
          flag = false
        }, 1650)
      }
      if (!bottomShow) setBottomShow(bottomShow)
    }

    const getStickyStyled = document.getElementById("stickyStyled")
    getStickyStyled?.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    })
    getStickyStyled?.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    })
    getStickyStyled?.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    })
    getStickyStyled?.addEventListener("wheel", handleScroll, {
      passive: true,
    })
    document.addEventListener("keydown", handleScroll)
    return () => {
      getStickyStyled?.removeEventListener("wheel", handleScroll)
      getStickyStyled?.removeEventListener("touchstart", handleTouchStart)
      getStickyStyled?.removeEventListener("touchmove", handleTouchMove)
      getStickyStyled?.removeEventListener("touchend", handleTouchEnd)
      document.removeEventListener("keydown", handleScroll)
    }
  }, [])

  useEffect(() => {
    let n_remSec = [false, false, false, false]
    if (sectionId > 0 && sectionId <= 3) {
      n_remSec[sectionId - 1] = true
      setTimeout(() => {
        setRemoveSection(n_remSec)
      }, freezeTime / 2)
    }
    if (window.innerWidth > 768) {
      if (sectionId === 1 || sectionId === 2) {
        setTimeout(() => {
          setHeadColor("white")
        }, freezeTime / 2)
      } else {
        setTimeout(() => {
          setHeadColor("grey")
        }, freezeTime / 2)
      }
    }

    if (sectionId === 3) {
      setTimeout(() => {
        setHeadSolid(true)
        setBottomShow(true)
      }, freezeTime)
    } else {
      setTimeout(() => {
        setHeadSolid(false)
      }, freezeTime / 2)
    }
  }, [sectionId])

  return (
    <StickyStyled ref={wrapper} id='stickyStyled'>
      {sectionId === 0 ? <BadgeDesktop /> : null}
      {!isMobile ? (
        hideScrollHint ? null : (
          <ScrollHint />
        )
      ) : inView ? null : (
        <ScrollHint />
      )}

      {!isMobile && removeSection[0] && (
        <Section
          className={
            " sticky fixedSection1 scrollY " +
            (prevSectionId == 1 && sectionId == 2
              ? ` hideSection wrap2 `
              : sectionId === 1 || sectionId === 0
              ? " "
              : " noSection ") +
            (sectionId == 1 ? " wrap showSection " : " ")
          }
          ref={firstSection}
          first
          type={prevSectionId === 2 ? "21" : "01"}>
          {/* Title */}
          <MainTitle className={sectionId == 1 ? " hideAlways " : " "}>
            Share Your Talents <br /> & Become an Instructor
          </MainTitle>

          <Circle fade={prevSectionId === 2 ? true : false} />

          {/* circle */}
          <PictureRowsWrapper first>
            <PictureRow fitness className='slide'>
              <img src={fitnessRow} alt='fitness' />
            </PictureRow>
            <PictureRow climbing className='slide'>
              <img src={rockClimbingRow} alt='climbing' />
            </PictureRow>
          </PictureRowsWrapper>

          {/* Text columns */}
          <Column right first className='slide3'>
            <ColumnTitle>List Your Class</ColumnTitle>
            <ColumnText>
              Make your class visible to
              <br />
              users nearby and attract
              <br />
              students eager to learn.
            </ColumnText>
          </Column>
          {/* Phone images */}
          <PhoneWrapper>
            <PhonePicture first className='slide2'>
              <img src={firstPhone} alt='phone' />
              {prevSectionId == 2 && (
                <>
                  <img src={secondPhone} alt='phone' />
                  <img src={firstPhone} alt='phone' className='main' />
                </>
              )}
            </PhonePicture>
          </PhoneWrapper>
        </Section>
      )}
      {!isMobile && removeSection[1] && (
        <Section
          className={
            " sticky pink scrollY " +
            (sectionId == 2 ? " showSection " : " ") +
            ((prevSectionId == 2 && sectionId == 1) ||
            (prevSectionId == 2 && sectionId == 3)
              ? ` hideSection `
              : sectionId !== 2
              ? " noSection "
              : " ")
          }
          ref={secondSection}
          type={prevSectionId === 3 ? "32" : sectionId == 2 ? "12" : " "}>
          <PictureRowsWrapper>
            <PictureRow woman className='slide'>
              <img src={womanRow} alt='woman' />
            </PictureRow>
            <PictureRow man className='slide'>
              <img src={manRow} alt='man' />
            </PictureRow>
          </PictureRowsWrapper>
          <Column left middle className='slide3'>
            <ColumnTitle>Share Class Details</ColumnTitle>
            <ColumnText>
              Provide details such as <br />
              your experience and pricing,
              <br />
              so users know what to expect <br />
            </ColumnText>
          </Column>
          <PhoneWrapper>
            <PhonePicture className='slide2'>
              {prevSectionId == 1 ? (
                <img src={firstPhone} alt='phone' />
              ) : (
                <img src={thirdPhone} alt='phone' />
              )}
              <img src={secondPhone} alt='phone' className='main' />
            </PhonePicture>
          </PhoneWrapper>
        </Section>
      )}
      {!isMobile && removeSection[2] && (
        <Section
          className={
            " sticky white " +
            (sectionId == 3 ? " showSection " : " ") +
            ((prevSectionId == 3 && sectionId == 2) ||
            (prevSectionId == 3 && sectionId == 4)
              ? ` hideSection `
              : sectionId !== 3
              ? " noSection "
              : " ")
          }
          ref={thirdSection}
          type={prevSectionId === 4 ? "43" : "23"}>
          <PictureRowsWrapper className='last'>
            <PictureRow date className='slide'>
              <img src={dateRow} alt='date' />
            </PictureRow>
            <PictureRow time className='slide'>
              <img src={timeRow} alt='time' />
            </PictureRow>
          </PictureRowsWrapper>
          <Column className='last slide3' right last dark>
            <ColumnTitle>Get Booked & Get Paid</ColumnTitle>
            <ColumnText>
              Users book your class <br />
              through the app, and you <br />
              receive payments directly.
            </ColumnText>
          </Column>
          <PhoneWrapper>
            <PhonePicture className='last slide2'>
              <img src={secondPhone} alt='phone' />
              <img src={thirdPhone} alt='phone' className='main' />
            </PhonePicture>
          </PhoneWrapper>
        </Section>
      )}

      {/* Phone case */}

      {isMobile && (
        <Section className={" sticky fixedSection1 "} ref={firstSection} first>
          {/* Title */}
          <MainTitle>
            Share Your Talents <br /> & Become an Instructor
          </MainTitle>
          <Circle />
          {/* circle */}
          <PictureRowsWrapper first>
            <PictureRow fitness className='slide'>
              <img src={fitnessRow} alt='fitness' />
            </PictureRow>
            <PictureRow climbing className='slide'>
              <img src={rockClimbingRow} alt='climbing' />
            </PictureRow>
          </PictureRowsWrapper>
          {/* Text columns */}
          <Column right first className='slide3'>
            <ColumnTitle>List Your Class</ColumnTitle>
            <ColumnText>
              Make your class visible to
              <br />
              users nearby and attract
              <br />
              students eager to learn.
            </ColumnText>
          </Column>
          {/* Phone images */}
          <PhoneWrapper>
            <PhonePicture first className='slide2'>
              <img src={firstPhone} alt='phone' />
            </PhonePicture>
          </PhoneWrapper>
        </Section>
      )}

      {isMobile && (
        <>
          <div ref={inViewRef}></div>
          <Section className={"sticky pink mobileSection"} ref={secondSection}>
            <PictureRowsWrapper>
              <PictureRow woman className='slide'>
                <img src={womanRow} alt='woman' />
              </PictureRow>
              <PictureRow man className='slide'>
                <img src={manRow} alt='man' />
              </PictureRow>
            </PictureRowsWrapper>
            <Column left middle className='slide3'>
              <ColumnTitle>Share Class Details</ColumnTitle>
              <ColumnText>
                Provide details such as <br />
                your experience and pricing,
                <br />
                so users know what to expect <br />
              </ColumnText>
            </Column>
            <PhoneWrapper>
              <PhonePicture className='slide2'>
                {prevSectionId == 1 ? (
                  <img src={firstPhone} alt='phone' />
                ) : (
                  <img src={thirdPhone} alt='phone' />
                )}
                <img src={secondPhone} alt='phone' className='main' />
              </PhonePicture>
            </PhoneWrapper>
          </Section>
        </>
      )}
      {isMobile && (
        <Section className={" sticky white mobileSection "} ref={thirdSection}>
          <PictureRowsWrapper className='last'>
            <PictureRow date className='slide'>
              <img src={dateRow} alt='date' />
            </PictureRow>
            <PictureRow time className='slide'>
              <img src={timeRow} alt='time' />
            </PictureRow>
          </PictureRowsWrapper>
          <Column className='last slide3' right last dark>
            <ColumnTitle>Get Booked & Get Paid</ColumnTitle>
            <ColumnText>
              Users book your class <br />
              through the app, and you <br />
              receive payments directly.
            </ColumnText>
          </Column>
          <PhoneWrapper className='red'>
            <PhonePicture className='last slide2'>
              <img src={secondPhone} alt='phone' />
              <img src={thirdPhone} alt='phone' className='main' />
            </PhonePicture>
          </PhoneWrapper>
        </Section>
      )}
    </StickyStyled>
  )
}

export default ScrollMotionInstructor
