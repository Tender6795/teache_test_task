import React from "react"
import YouTube from "react-youtube"
import styled from "styled-components"

export const VideoOuterWrapper = styled.div`
  margin-bottom: 80px;
  margin-top: 280px;
  @media (max-width: 1400px) {
    padding: 0 4vw 0vw;
    margin-bottom: 70px;
    margin-top: 130px;
  }
  @media (max-width: 768px) {
    padding: 0 0 48px;
    margin-top: 100px;
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

const AutoPlayVideo = () => {
  return (
    <>
      <VideoOuterWrapper>
        <VideoWrapper>
          <div>
            {/* desktop */}
            <YouTube
              className='youtube-wrapper desktop'
              iframeClassName='youtube-iframe'
              videoId='MNPgXx3D30Y'
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
              videoId='VhegIeLwtF4'
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
}

export default AutoPlayVideo
