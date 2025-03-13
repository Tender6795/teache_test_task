import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "api/subject.api.ts";
import { useFilters } from "context/FilterContext";
import { lessonTypeOptions } from "conts/select-options";
import { userRoute } from "pages/user/user.routes";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { AutoCompleteInputVariant } from "ui/base/autoCompleteInput/AutoCompleteInputVariant";
import { ButtonPrimary } from "ui/base/Button/ButtonStyled";
import { SelectButton } from "ui/base/selectInput/SelectButton";
import { SelectFilter } from "ui/base/selectInput/SelectFilter";
import { SearchIcon } from "ui/icons";
import { defaultThemeColors } from "ui/theme";

export const FiltersSection = ({ hasSeparator = true, onSearch }) => {
  const navigate = useNavigate();
  const { filters, setFilters, handleLocationChange } = useFilters();

  const { data: subjectData } = useQuery({
    queryKey: ["subjects"],
    queryFn: getSubjects,
  });

  const subjects =
    subjectData?.map((subject) => ({
      value: subject.id,
      label: subject.title,
    })) || [];
  console.log(subjects);
  debugger

  const lessonType = filters.lessonType?.value || "";

  return (
    <Wrapper>
      <Container isLocationVisible={lessonType === "in-person"}>
        <div className="filters">
          <TypeOfClassContainer isLocationVisible={lessonType === "in-person"}>
            <SelectFilter
              borderColor="lightBlue"
              bgColor="white"
              rounded
              placeholder="Type the class you are interested in..."
              value={filters.typeOfClass}
              onChange={(subject) => setFilters({ typeOfClass: subject })}
              options={subjects}
            />
          </TypeOfClassContainer>

          <LessonTypeContainer isLocationVisible={lessonType === "in-person"}>
            <SelectButton
              placeholder="Select Lesson Type"
              bgColor="white"
              valueColor="txt"
              placeholderColor="txt"
              chevronColor="#191D3A"
              height="43px"
              rounded
              value={filters.lessonType}
              onChange={(lesson) => setFilters({ lessonType: lesson })}
              options={lessonTypeOptions}
            />
          </LessonTypeContainer>

          <LocationContainer isVisible={lessonType === "in-person"}>
            <AutoCompleteInputVariant
              borderColor="lightBlue"
              placeholder="Enter the city"
              placeholderColor="txt"
              bgColor="transparent"
              optionType="city"
              rounded
              address={
                filters.location
                  ? { label: filters.location, value: filters.location }
                  : null
              }
              onChange={handleLocationChange}
            />
          </LocationContainer>
        </div>
        <div>
          <ButtonPrimary
            variant="icon_rounded"
            disabled={!filters.typeOfClass}
            onClick={() => {
              navigate(userRoute.searchOnline, {
                state: filters,
              });
              onSearch?.();
            }}
          >
            <SearchIcon />
          </ButtonPrimary>
        </div>
      </Container>
      {hasSeparator ? <Separator /> : null}
    </Wrapper>
  );
};

const fadeIn = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  min-height: 104px;
  max-width: ${(props) => (props.isLocationVisible ? "900px" : "900px")};
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.isLocationVisible ? "1rem" : "1.5rem")};
  background-color: ${defaultThemeColors.white};
  box-shadow: 0 10px 30px 0 rgba(13, 11, 134, 0.071);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(13, 11, 134, 0.05);
  margin-inline: auto;
  border-radius: 1rem;

  & > .filters {
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    gap: ${(props) => (props.isLocationVisible ? "1rem" : "1.5rem")};
  }

  @media (width >= 48rem) {
    border-radius: 99rem;
    & > .filters {
      flex-wrap: nowrap;
    }
  }
`;

const TypeOfClassContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  @media (width >= 48rem) {
    max-width: ${(props) => (props.isLocationVisible ? "250px" : "397px")};
  }
`;

const LessonTypeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: fit-content;
  @media (width >= 48rem) {
    max-width: ${(props) => (props.isLocationVisible ? "200px" : "345px")};
  }
`;

const LocationContainer = styled.div`
  width: ${(props) => (props.isVisible ? "100%" : "0")};
  overflow: ${(props) => (props.isVisible ? "visible" : "hidden")};
  animation: ${(props) =>
    props.isVisible
      ? css`
          ${fadeIn} 600ms ease-in-out
        `
      : "none"};

  & > * {
    max-width: 100%;
    @media (width >= 48rem) {
      max-width: 380px;
    }
  }
`;

const Separator = styled.div`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${defaultThemeColors.lightBlue};
`;
