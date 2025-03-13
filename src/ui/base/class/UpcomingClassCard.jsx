import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { UserIcon } from "ui/icons";
import { defaultThemeColors, fonts } from "ui/theme";
import { getAvatarUrl } from "utils";
import { ButtonPrimary } from "../Button/ButtonStyled";
import { InstructionsModal } from "./InstructionsModal";
import { StarIcon } from "ui/icons/inputIcons/StarIcon";

export const DEFAULT_TIMEZONE = "America/New_York";

export const UpcomingClassCard = ({ upcomingClass, isLoading, onCancel }) => {
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  ``;
  const momentDateTime = moment.tz(
    `${upcomingClass.class_date} ${upcomingClass.class_time}`,
    "YYYY-MM-DD HH:mm:ss",
    upcomingClass.time_zone || DEFAULT_TIMEZONE
  );

  const class_type = upcomingClass?.class_type
    ? upcomingClass?.class_type.toUpperCase()
    : "";

  const toggleInstructionsModal = () => {
    setShowInstructionsModal((prev) => !prev);
  };

  return (
    <>
      <ClassList>
        <ClassItem>
          <ClassInfo>
            <Avatar>
              {upcomingClass?.teacher_profile_pic ? (
                <img
                  src={getAvatarUrl(upcomingClass?.teacher_profile_pic)}
                  alt={upcomingClass?.teacher_first_name}
                />
              ) : (
                <UserIcon color="txt" />
              )}
            </Avatar>

            <Info>
              <NameIconTextWrapper>
                <Name>{upcomingClass?.teacher_first_name}</Name>
                <IconText>
                  <StarIcon color="#FF827A" /> {upcomingClass.rating}
                </IconText>
              </NameIconTextWrapper>
              <Details>
                <span>
                  <UserIcon color="txt" width="15" height="15" />
                </span>
                <span>{upcomingClass?.student_per_class}</span> |{" "}
                <span>{upcomingClass?.class}</span>
              </Details>
            </Info>
            <ButtonPrimary
              variant={
                class_type === "PRIVATE" ? "primary_fade" : "destructive_fade"
              }
              style={{
                pointerEvents: "none",
                width: "3rem",
                fontSize: "12px",
                padding: "10px 17px",
              }}
            >
              {class_type}
            </ButtonPrimary>
          </ClassInfo>
          <ExpandedDetails>
            <DetailRow>
              <DetailCol>
                <Label>Type</Label>
                <Value>{upcomingClass?.class_type}</Value>
              </DetailCol>
              <DetailCol>
                <Label>Date</Label>
                <Value>{momentDateTime.format("MMM D, YYYY")}</Value>
              </DetailCol>
              <DetailCol>
                <Label>Time</Label>
                <Value>{momentDateTime.format("h:mm a")}</Value>
              </DetailCol>
              <DetailCol>
                <Label>Cost</Label> <Value>${upcomingClass.total_amount}</Value>
              </DetailCol>
            </DetailRow>

            <DetailCol>
              <Label>Class instructions</Label>
              <Instructions>{upcomingClass?.class_instruction}</Instructions>
              {upcomingClass?.class_instruction.length > 100 && (
                <ShowMoreButton onClick={toggleInstructionsModal}>
                  Show more
                </ShowMoreButton>
              )}
            </DetailCol>

            <Actions>
              <ButtonPrimary>Re-Schedule</ButtonPrimary>

              <ButtonPrimary
                onClick={onCancel}
                disabled={isLoading}
                variant="outline"
              >
                Cancel
              </ButtonPrimary>
            </Actions>
          </ExpandedDetails>
        </ClassItem>
      </ClassList>
      <InstructionsModal
        show={showInstructionsModal}
        handleClose={toggleInstructionsModal}
        upcomingClass={upcomingClass}
      />
    </>
  );
};

const ClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

const ClassItem = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: ${defaultThemeColors.lightBlue};
  background-color: ${defaultThemeColors.white};
  border-radius: 8px;
  overflow: hidden;
  padding: 13px;
  width: 100%;
`;

const ClassInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Avatar = styled.div`
  width: 69px;
  height: 69px;
  background-color: ${defaultThemeColors.inputBgNeutral};
  border-radius: 8px;
  object-fit: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    height: 34px;
    width: 34px;
    opacity: 0.5;
  }

  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  flex: 1;
  display: grid;
  gap: 1rem;
`;

const Name = styled.div`
  font-size: ${fonts.sizes.regular};
  font-weight: bold;
`;

const Details = styled.div`
  font-size: ${fonts.sizes.small};
  color: ${defaultThemeColors.txt};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  opacity: 0.4;
`;

const ExpandedDetails = styled.div`
  padding-block: 1rem;
  padding-left: 85px; // Avatar size + 1rem
  padding-right: 1rem;
  display: grid;
  gap: 1rem;
`;

const DetailRow = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const DetailCol = styled.div`
  display: grid;
  gap: 0.3rem;
`;

const Label = styled.span`
  font-weight: 600;
  color: ${defaultThemeColors.txt};
  opacity: 0.5;
  text-transform: uppercase;
  font-size: ${fonts.sizes.regular};
`;

const Value = styled.span`
  font-weight: 600;
  color: ${defaultThemeColors.txt};
  font-size: ${fonts.sizes.regular};
`;

const Instructions = styled.div`
  color: ${defaultThemeColors.txt};
  font-size: ${fonts.sizes.regular};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ShowMoreButton = styled.button`
  background: none;
  border: none;
  color: ${defaultThemeColors.blue};
  cursor: pointer;
  text-decoration: underline;
  font-size: ${fonts.sizes.small};
  display: flex;
  align-self: flex-start;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 1rem;
  color: #ff827a;

  svg {
    margin-right: 8px;
  }
`;

const NameIconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
`;
