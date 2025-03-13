import React from "react"
import { BadgeContainerDesktop, BadgeContainerMobile } from "./BadgeStyled"

export const BadgeDesktop = () => {
  return (
    <BadgeContainerDesktop>
      <a
        href='https://www.producthunt.com/posts/teache?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-teache'
        target='_blank'>
        <img
          src='https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=463891&theme=dark&period=daily'
          alt='Teache - Learn&#0032;something&#0032;new&#0032;today | Product Hunt'
          className='badge'
        />
      </a>
    </BadgeContainerDesktop>
  )
}

export const BadgeMobile = () => {
  return (
    <BadgeContainerMobile>
      <a
        href='https://www.producthunt.com/posts/teache?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-teache'
        target='_blank'>
        <img
          src='https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=463891&theme=dark&period=daily'
          alt='Teache - Learn&#0032;something&#0032;new&#0032;today | Product Hunt'
          className='badge'
        />
      </a>
    </BadgeContainerMobile>
  )
}
