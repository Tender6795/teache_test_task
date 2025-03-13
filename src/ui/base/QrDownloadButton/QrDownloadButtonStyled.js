import styled from "styled-components";

export const QrDownloadButtonStyled = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes["regular"]};
  border-radius: 10px;
  background: ${({ theme, background }) => theme.colors[background]};
  max-width:150px;
  width:fit-content;
  height: auto;
  font-weight: 500;
  padding: 5px 10px;
  transition: box-shadow 0.2s;
  & > div {
  padding: 0.5rem;
  gap:0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & >  svg {
    width: 25px;
    min-width: 25px;
  }
  }
 
`;

export const QrDownloadStyled = styled.div`
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.sizes["regular"]};
  border-radius: 10px 10px 0px 0px;
  background: ${({ theme, background }) => theme.colors[background]};
  width: 100%;
  font-weight: 500;
  display:grid;
  & > div {
  gap:0.5rem;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  & > img {
    width:90%;
    height: auto;
  }
  }
`;
