import { useOutsideClick } from "hooks/useOutsideClick";
import { useRef } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM
import styled from "styled-components";
import { defaultThemeColors } from "ui/theme";

export const Modal = ({
  handleClose,
  show,
  children,
  minHeight = 300,
  maxWidth = 700,
  minWidth,
  widthPercentage,
}) => {
  const node = useRef();
  useOutsideClick(node, handleClose);

  return ReactDOM.createPortal(
    <ModalDiv show={show} widthPercentage={widthPercentage}>
      <ContentWrapper
        ref={node}
        minHeight={minHeight}
        minWidth={minWidth}
        maxWidth={maxWidth}
      >
        <ContentDiv>
          {children}
          {handleClose && <ContentCloseBtn onClick={handleClose}>X</ContentCloseBtn>}
        </ContentDiv>
      </ContentWrapper>
    </ModalDiv>,

    document.getElementById("modal-root")
  );
};

const ModalDiv = styled.div`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  transition-property: visibility opacity background-color;
  transition-duration: 300ms;
`;
const ContentWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth + "px" : "700px")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth + "px" : "auto")};
  height: auto;
  min-height: ${({ minHeight }) => (minHeight ? minHeight + "px" : "300px")};
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 1rem;
`;

const ContentDiv = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
  padding-block: 2rem;
  padding-inline: 1rem;
`;

const ContentCloseBtn = styled.button`
  all: unset;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 20px;
  height: 20px;
  border-radius: 99px;
  color: ${defaultThemeColors.blue};
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease;
  cursor: pointer;

  &:hover {
    color: ${defaultThemeColors.white};
    background-color: ${defaultThemeColors.blue};
  }
`;
