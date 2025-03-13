import React, { forwardRef } from "react"
import YouTube from "react-youtube"
import styled from "styled-components"
import { themeColor } from "../../theme/index"

const Title = styled.div`
  color: ${themeColor("txt")};
  font-size: 4vw;
  text-align: center;
  font-family: Poppins, Montserrat, sans-serif;
  font-weight: 600;
  line-height: 4.2vw;
  margin-inline: auto;
  max-width: 900px;
  @media (max-width: 1400px) {
    font-size: 4.8vw;
    line-height: 5.5vw;
  }
  @media (max-width: 640px) {
    font-size: 9vw;
    line-height: 12vw;
  }
  @media (max-width: 350px) {
    font-size: 8vw;
    line-height: 12vw;
  }
`

export const VideoOuterWrapper = styled.div`
  padding: 0 16px;
  margin-top: 100px;
  padding-inline: 1rem;
  @media (max-width: 1200px) {
    padding: 0 30px;
    margin-top: 75px;
  }
  @media (max-width: 992px) {
    padding: 0 30px;
    margin-top: 75px;
  }
  @media (max-width: 640px) {
    padding: 0 50px;
    margin-top: 0px;
  }
  @media (max-width: 768px) {
    padding: 0 0 48px;
    padding-inline: 1rem;
    margin-top: 50px;
  }
`

const VideoWrapper = styled.div`
  overflow: hidden;
  max-width: 65vw;
  margin-inline: auto;
  /* padding-inline: 10px; */
  @media (min-width: 640px) {
    max-width: 900px;
  }
  & > div {
    aspect-ratio: 9/16;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    overflow: hidden;
    & .desktop {
      display: none;
    }
    @media (min-width: 640px) {
      aspect-ratio: 16/9;
      & .desktop {
        display: block;
      }
      & .mobile {
        display: none;
      }
    }
    & .youtube-wrapper,
    .youtube-iframe {
      width: 100%;
      height: 100%;
    }
  }
`

const VideoInstructor = forwardRef((props, ref) => {
  return (
    <>
      <VideoOuterWrapper ref={ref}>
        <Title>
          Teach Your Way <br />
          Earn Your Way
        </Title>
        <div style={{ padding: "1.5rem" }}></div>
        <VideoWrapper>
          <div>
            {/* desktop */}
            <YouTube
              className='youtube-wrapper desktop'
              iframeClassName='youtube-iframe'
              videoId='owBHx7RHArs'
              onReady={(event) => {
                event.target.mute()
                event.target.playVideo()
              }}
              opts={{
                playerVars: {
                  rel: 0,
                  autoplay: 1,
                },
              }}
            />
            {/* mobile */}
            <YouTube
              className='youtube-wrapper mobile'
              iframeClassName='youtube-iframe'
              videoId='l8nPVKZ9WuY'
              onReady={(event) => {
                event.target.mute()
                event.target.playVideo()
              }}
              opts={{
                playerVars: {
                  rel: 0,
                  autoplay: 1,
                },
              }}
            />
          </div>
        </VideoWrapper>
      </VideoOuterWrapper>
    </>
  )
})

export default VideoInstructor
