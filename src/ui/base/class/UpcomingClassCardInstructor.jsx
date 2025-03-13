require("moment-timezone");
import moment from "moment";
import styled from "styled-components";
import { UserIcon } from "ui/icons";
import { defaultThemeColors, fonts, themeColor } from "ui/theme";
import { getAvatarUrl } from "utils";
import { ButtonPrimary } from "../Button/ButtonStyled";

export const DEFAULT_TIMEZONE = "America/New_York";

export const UpcomingClassCardInstructor = ({
  upcomingClass,
  isLoading,
  onCancel,
}) => {
  const momentDateTime = moment.tz(
    `${upcomingClass.class_date} ${upcomingClass.class_time}`,
    "YYYY-MM-DD HH:mm:ss",
    upcomingClass.time_zone || DEFAULT_TIMEZONE
  );

  const class_type = upcomingClass?.class_type
    ? upcomingClass.class_type.toUpperCase()
    : "";

  return (
    <ClassItem>
      <ClassInfo>
        <Avatar>
          {upcomingClass?.user?.profile_pic ? (
            <img
              src={getAvatarUrl(upcomingClass?.user?.profile_pic)}
              alt={upcomingClass?.teacher_first_name}
            />
          ) : (
            <UserIcon color="txt" />
          )}
        </Avatar>
        <Info>
          <Name>{upcomingClass?.teacher_first_name}</Name>
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
          style={{ pointerEvents: "none", width: "3rem" }}
        >
          {class_type}
        </ButtonPrimary>
      </ClassInfo>

      <ExpandedDetails>
        {upcomingClass?.slots?.map((item) => {
          const momentDateTime = moment.tz(
            `${item.class_date} ${item.class_time}`,
            "YYYY-MM-DD HH:mm:ss",
            item.time_zone || DEFAULT_TIMEZONE
          );

          return (
            <DetailRow key={item.id}>
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
                <Label>Cost</Label>{" "}
                <Value>${upcomingClass?.instructor_earning}</Value>
              </DetailCol>
            </DetailRow>
          );
        })}
        <Actions>
          <ButtonPrimary>Send messages</ButtonPrimary>
          <ButtonPrimary variant="outline" onClick={onCancel}>
            Cancel
          </ButtonPrimary>
        </Actions>
      </ExpandedDetails>
    </ClassItem>
  );
};

const ClassItem = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: ${defaultThemeColors.lightBlue};
  background-color: ${defaultThemeColors.white};
  border-radius: 8px;
  overflow: hidden;
  padding: 13px;
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

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${defaultThemeColors.txt};
  height: 45px;
  width: 45px;
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
  color: ${themeColor("txt")};
  font-size: ${fonts.sizes.regular};
`;

const Instructions = styled.div`
  color: ${defaultThemeColors.txt};
  font-size: ${fonts.sizes.regular};
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;
