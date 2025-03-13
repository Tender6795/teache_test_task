require("moment-timezone");
import moment from "moment";
import styled from "styled-components";
import { UserIcon } from "ui/icons";
import { defaultThemeColors, fonts, themeColor } from "ui/theme";
import { getAvatarUrl } from "utils";
import { ButtonPrimary } from "../Button/ButtonStyled";

export const DEFAULT_TIMEZONE = "America/New_York";

export const RequestedClassCard = ({ requestedClass, onCancel, isLoading }) => {
  const class_type = requestedClass?.class_type
    ? requestedClass?.class_type.toUpperCase()
    : "";

  return (
    <ClassList>
      <ClassItem>
        <ClassInfo>
          <Avatar>
            {requestedClass?.teacher_data?.profile_pic ? (
              <img
                src={getAvatarUrl(requestedClass?.teacher_data?.profile_pic)}
                alt={requestedClass?.teacher?.first_name}
              />
            ) : (
              <UserIcon color="txt" />
            )}
          </Avatar>

          <Info>
            <Name>{requestedClass?.teacher?.first_name}</Name>
            <Details>
              <span>
                <UserIcon color="txt" width="15" height="15" />
              </span>
              <span>{requestedClass?.student_per_class}</span> |{" "}
              <span>{requestedClass?.class?.title}</span>
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
          {requestedClass?.booking_slots?.map((item) => {
            const momentDateTime = moment.tz(
              `${item.class_date} ${item.class_time}`,
              "YYYY-MM-DD HH:mm:ss",
              item.time_zone || DEFAULT_TIMEZONE
            );

            return (
              <DetailRow key={item.id}>
                <DetailCol>
                  <Label>Type</Label>
                  <Value>{requestedClass?.class_type}</Value>
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
                  <Label>Cost</Label> <Value>${item.total_amount}</Value>
                </DetailCol>
              </DetailRow>
            );
          })}

          <DetailCol>
            <Label>Class instructions</Label>
            <Instructions>
              {requestedClass?.teacher_data?.last_class_instruction}
            </Instructions>
          </DetailCol>

          <Actions>
            <ButtonPrimary>Send a message</ButtonPrimary>
            <ButtonPrimary
              disabled={isLoading}
              onClick={onCancel}
              variant="outline"
            >
              Cancel
            </ButtonPrimary>
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
`;

const ClassItem = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: ${defaultThemeColors.lightBlue};
  background-color: ${defaultThemeColors.white};
  border-radius: 8px;
  overflow: hidden;
  padding: 13px;
  width: calc(50% - 0.5rem); // Adjust width to fit two items per line
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
  background-color: ${themeColor("buttonBgNeutral")};
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
  color: ${defaultThemeColors.txt};
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
