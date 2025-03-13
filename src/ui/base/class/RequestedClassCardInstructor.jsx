// @ts-check

require("moment-timezone")
import moment from "moment"
import styled from "styled-components"
import { ButtonPrimary } from "ui/base/Button/ButtonStyled"
import { Countdown } from "ui/base/countdown/Countdown"
import { UserIcon } from "ui/icons"
import { defaultThemeColors, fonts } from "ui/theme"

export const DEFAULT_TIMEZONE = "America/New_York"

const timeLeftToAcceptOrDecline = (
  booking_created_at?: string,
  class_date?: string,
  class_time?: string,
  timezone?: string
) => {
  let dateTimeAfter25Hours = null
  const ONE_DAY_IN_MS = 1 * 24 * 60 * 60 * 1000 - 1 * 60 * 1000
  const bookingDate = moment(booking_created_at).valueOf()
  const rescheduleClassStartTime = moment
    .tz(
      `${class_date} ${class_time}`,
      "YYYY-MM-DD HH:mm:ss",
      timezone || DEFAULT_TIMEZONE
    )
    .valueOf()

  if (rescheduleClassStartTime - bookingDate > 25 * 60 * 60 * 1000) {
    // 25 hours
    dateTimeAfter25Hours = bookingDate + ONE_DAY_IN_MS
  } else {
    dateTimeAfter25Hours = rescheduleClassStartTime - 1 * 60 * 60 * 1000 // can accept until 1 hour ago
  }

  return dateTimeAfter25Hours
}

export const RequestedClassCardInstructor = ({
  requestedClass,
  classType,
  onAccept,
  onDecline,
}) => {
  const bookingSlot = requestedClass?.booking_slots?.[0]

  const dateTimeAfter25Hours = timeLeftToAcceptOrDecline(
    bookingSlot?.created_at,
    bookingSlot?.class_date,
    bookingSlot?.class_time,
    bookingSlot?.time_zone
  )

  const class_type = requestedClass?.class_type
    ? requestedClass?.class_type.toUpperCase()
    : ""
  return (
    <ClassItem>
      <ClassInfo>
        <Avatar>
          {requestedClass?.user?.profile_pic ? (
            <img
              src={requestedClass?.user?.profile_pic}
              alt={requestedClass?.user?.first_name}
            />
          ) : (
            <UserIcon color='txt' />
          )}
        </Avatar>

        <Info>
          <Name>{requestedClass?.user?.first_name}</Name>
          <NameWrapper>
            <Details>
              <span>
                <UserIcon color='txt' width='15' height='15' />
              </span>
              <span>{requestedClass?.student_per_class}</span> |{" "}
              <span>{classType}</span>
            </Details>
            <Countdown
              targetTime={dateTimeAfter25Hours}
              timezone={bookingSlot?.time_zone || DEFAULT_TIMEZONE}
            />
          </NameWrapper>
        </Info>
        <ButtonPrimary
          variant={
            class_type === "PRIVATE" ? "primary_fade" : "destructive_fade"
          }
          style={{ pointerEvents: "none", width: "3rem" }}>
          {class_type}
        </ButtonPrimary>
      </ClassInfo>

      <ExpandedDetails>
        {requestedClass?.booking_slots?.map((item) => {
          const momentDateTime = moment.tz(
            `${item.class_date} ${item.class_time}`,
            "YYYY-MM-DD HH:mm:ss",
            item.time_zone || DEFAULT_TIMEZONE
          )

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
          )
        })}

        {requestedClass.status === "pending" ||
        requestedClass.status === "rescheduled" ? (
          <Actions>
            <ButtonPrimary onClick={onAccept}>Accept</ButtonPrimary>
            <ButtonPrimary onClick={onDecline} variant='outline'>
              Decline
            </ButtonPrimary>
          </Actions>
        ) : null}
      </ExpandedDetails>
    </ClassItem>
  )
}

const ClassItem = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: ${defaultThemeColors.lightBlue};
  border-radius: 8px;
  overflow: hidden;
  padding: 13px;
`

const ClassInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

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
`

const Info = styled.div`
  flex: 1;
  display: grid;
  gap: 1rem;
`

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-size: ${fonts.sizes.small};
    font-weight: 600;
    color: ${defaultThemeColors.blue};
  }
`

const Name = styled.div`
  font-size: ${fonts.sizes.regular};
  font-weight: bold;
`

const Details = styled.div`
  font-size: ${fonts.sizes.small};
  color: ${defaultThemeColors.txt};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  opacity: 0.4;
`

const ExpandedDetails = styled.div`
  padding-block: 1rem;
  padding-left: 85px; // Avatar size + 1rem
  padding-right: 1rem;
  display: grid;
  gap: 1rem;
`

const DetailRow = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const DetailCol = styled.div`
  display: grid;
  gap: 0.3rem;
`

const Label = styled.span`
  font-weight: 600;
  color: ${defaultThemeColors.txt};
  opacity: 0.5;
  text-transform: uppercase;
  font-size: ${fonts.sizes.regular};
`
const Value = styled.span`
  font-weight: 600;
  color: ${defaultThemeColors.txt};
  font-size: ${fonts.sizes.regular};
`

const Instructions = styled.div`
  color: ${defaultThemeColors.txt};
  font-size: ${fonts.sizes.regular};
`

const Actions = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`
