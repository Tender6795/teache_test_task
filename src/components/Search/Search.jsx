import React from "react";
import {
  Container,
  FirstSelector,
  SecondSelector,
  SelectorWrapper,
  CircleIconContainer,
  DropdownIconContainer,
} from "./SearchStyles";
import { SerchIcon } from "../../icons/SearchIcon";
import { SmallArrowDownIcon } from "../../icons/SmallArrowDownIcon";

export const Search = () => {
  return (
    <Container>
      <SelectorWrapper>
        <FirstSelector placeholder="Type the class you are interested in..." />
        <SecondSelector>
          Select Lesson Type
          <DropdownIconContainer>
            <SmallArrowDownIcon />
          </DropdownIconContainer>
        </SecondSelector>
        <CircleIconContainer>
          <SerchIcon />
        </CircleIconContainer>
      </SelectorWrapper>
    </Container>
  );
};
