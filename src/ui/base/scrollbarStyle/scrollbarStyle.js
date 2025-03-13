import { css } from "styled-components"
import { themeColor } from "ui/theme"

export const scrollbarStyles = css`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: ${themeColor("bgNeutral")};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${themeColor("buttonBgNeutral")};
  }
`
export const hideScrollBar = css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for chrome, safari, and opera*/
  }
`
