import React from "react";
import styled from "styled-components";
import { ButtonPrimary } from "ui/base/Button/ButtonStyled";
import { defaultThemeColors, fonts } from "ui/theme";
import MediaImg from "static/pictures/Media.png";
import { StarIcon } from "ui/icons/inputIcons/StarIcon";
import { GroupIcon } from "ui/icons/inputIcons/GroupIcon";
import { GlobalIcon } from "ui/icons/inputIcons/GlobalIcon";
import { Modal } from "ui/base/modal/Modal";
import { getAvatarUrl } from "utils";

export const InstructionsModal = ({ show, handleClose, upcomingClass }) => {
  if (!show) return null;
  const class_type = upcomingClass?.class_type
    ? upcomingClass?.class_type.toUpperCase()
    : "";

  const avatarUrl = upcomingClass.teacher_profile_pic
    ? getAvatarUrl(upcomingClass.teacher_profile_pic)
    : MediaImg;

  return (
    <Modal show={show} handleClose={handleClose} maxWidth={1024}>
      <ModalBody>
        <LeftPart>
          <img src={avatarUrl} alt={avatarUrl} />
          <Title>{upcomingClass.class}</Title>
          <IconText>
            <StarIcon /> <p>{upcomingClass?.rating}</p>
          </IconText>
          <IconText>
            <GroupIcon /> <p>{upcomingClass?.class_type}</p>
          </IconText>
          <IconText>
            <GlobalIcon /> In-person/online
          </IconText>
        </LeftPart>
        <RightPart>
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
          <DetailRow>
            <DetailCol>
              <Label>Type</Label>
              <Value>{upcomingClass?.class_type}</Value>
            </DetailCol>
            <DetailCol>
              <Label>Date</Label>
              <Value>{upcomingClass?.class_date}</Value>
            </DetailCol>
            <DetailCol>
              <Label>Time</Label>
              <Value>{upcomingClass?.class_time}</Value>
            </DetailCol>
            <DetailCol>
              <Label>Cost</Label>
              <Value>${upcomingClass.total_amount}</Value>
            </DetailCol>
          </DetailRow>
          <DetailCol>
            <Label>Class instructions</Label>
            <Instructions>{upcomingClass?.class_instruction}</Instructions>
          </DetailCol>
        </RightPart>
      </ModalBody>
    </Modal>
  );
};

const ModalBody = styled.div`
  display: flex;
  padding-block: 1rem;
  padding-inline: 1.5rem;
  gap: 2rem;
`;

const LeftPart = styled.div`
  width: 30%;

  & > img {
    object-fit: cover;
    max-width: 280px;
    width: 100%;
    aspect-ratio: 28 / 17;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: ${defaultThemeColors.lightBlue};
  }
`;

const RightPart = styled.div`
  width: 70%;
`;

const Title = styled.h3`
  margin-top: 10px;
  text-align: left;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 1rem;

  svg {
    margin-right: 8px;
  }
`;

const DetailRow = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
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
  margin-top: 0.5rem;
  font-weight: 400;
  line-height: 155%;
  letter-spacing: 0;
`;
