import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import styled from "styled-components";
import { QuestionMarkIcon } from "../../icons";

import { themeColor, themeFontSize } from "../../theme";

export const Tooltip = ({
  id,
  text,
  children,
  background,
  styleMe = true,
  size = 30,
  place = "top",
  display = "block",
  maxWidth = "200px",
  clickable = false,
}) => {
  return (
    <>
      <TooltipWrapper
        data-tip={text}
        data-tooltip-id={id}
        display={display}
        maxWidth={maxWidth}
      >
        {children ?? (
          <ToolTipChildren size={size + "px"}>
            <QuestionMarkIcon size={size} />
          </ToolTipChildren>
        )}
        <ReactTooltip
          id={id}
          place={place}
          effect="solid"
          className="reactTooltip"
          clickable={clickable}
        >
          {text}
        </ReactTooltip>
      </TooltipWrapper>
    </>
  );
};

export const TooltipWrapper = styled.div`
  position: relative;
  width: fit-content;
  display: ${({ display }) => display};
  & .reactTooltip {
    z-index: 9;
    background-color: ${themeColor("white")};
    color: ${themeColor("txt")};
    max-width: ${({ maxWidth }) => maxWidth};
    text-align: left;
    font-size: ${themeFontSize("extraSmall")};
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
    opacity: 1;
    border-radius: 5px;
    padding: 10px 8px;
  }
`;

export const ToolTipChildren = styled.div`
  height: ${({ size }) => size ?? "30px"};
  width: ${({ size }) => size ?? "30px"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? themeColor("lightBlue")};
  color: ${({ color }) => color ?? themeColor("blue")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ border }) => border ?? "999px"};
  cursor: pointer;
`;
