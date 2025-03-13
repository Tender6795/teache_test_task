require("moment-timezone");
import moment from "moment";
import { useState } from "react";
import styled from "styled-components";
import { UserIcon } from "ui/icons";
import { defaultThemeColors, fonts } from "ui/theme";
import { getAvatarUrl } from "utils";
import { ButtonPrimary } from "../Button/ButtonStyled";

const getTimeAfter48Hours = (class_date, class_time) => {
  const classDateTime = moment(
    `${class_date} ${class_time}`,
    "YYYY-MM-DD HH:mm:ss"
  );
  return classDateTime.isValid() ? classDateTime.add(48, "hours") : null;
};

export const DEFAULT_TIMEZONE = "America/New_York";

export const PastClassCard = ({ pastClass, onReview }) => {
  const [isOpen, setIsOpen] = useState(false);

  const momentDateTime = moment.tz(
    `${pastClass?.class_date} ${pastClass?.class_time}`,
    "YYYY-MM-DD HH:mm:ss",
    pastClass?.time_zone || DEFAULT_TIMEZONE
  );

  const timeAfter48Hours = getTimeAfter48Hours(
    pastClass.class_date,
    pastClass.class_time
  );

  const showReportIssue = timeAfter48Hours
    ? moment().isBefore(timeAfter48Hours)
    : false;

  const class_type = pastClass?.class_type
    ? pastClass?.class_type.toUpperCase()
    : "";

  return (
    <ClassList>
      <ClassItem>
        <ClassInfo>
          <Avatar>
            {pastClass?.profile_pic ? (
              <img
                src={getAvatarUrl(pastClass?.profile_pic)}
                alt={pastClass?.first_name}
              />
            ) : (
              <UserIcon color="txt" />
            )}
          </Avatar>

          <Info>
            <Name>{pastClass?.first_name}</Name>
            <Details>
              <span>
                <UserIcon color="txt" width="15" height="15" />
              </span>
              <span>{pastClass?.student_per_class}</span> |{" "}
              <span>{pastClass?.class}</span>
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
              <Value>{pastClass?.class_type}</Value>
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
              <Label>Cost</Label> <Value>${pastClass?.total_amount}</Value>
            </DetailCol>
          </DetailRow>

          <Actions>
            {pastClass?.is_issue_solved === "solved" ? (
              <ButtonPrimary>Issue closed</ButtonPrimary>
            ) : pastClass?.is_issue_solved === "opened" || showReportIssue ? (
              <ButtonPrimary>Report an issue</ButtonPrimary>
            ) : null}

            {typeof pastClass?.review === "string" ? null : (
              <ButtonPrimary variant="outline" onClick={onReview}>
                Send review
              </ButtonPrimary>
            )}
          </Actions>
        </ExpandedDetails>
      </ClassItem>
    </ClassList>
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

const Actions = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;
