import moment from "moment"
import { forwardRef } from "react"
import ReactDatePicker from "react-datepicker"
import styled from "styled-components"
import { themeColor, themeFontSize } from "../../theme"

export const DatePicker = ({ date, setDate, format, ...rest }) => {
  const CustomDateInputField = forwardRef(
    ({ value, onClick, className }, ref) => {
      const displayValue = value
        ? moment(new Date(value)).format(format || "MMM DD")
        : "Select Date"
      return (
        <DateInputButton className={className} onClick={onClick} ref={ref}>
          {displayValue}
        </DateInputButton>
      )
    }
  )

  return (
    <DatePickerContainer>
      <ReactDatePicker
        {...rest}
        selected={date}
        onChange={(date) => setDate(date)}
        customInput={<CustomDateInputField />}
      />
    </DatePickerContainer>
  )
}

const DatePickerContainer = styled.div`
  border-width: 1.5px;
  border-style: solid;
  border-color: #EDF0FF;
  border-radius: 8px;
  display: flex;
  width: 100%;
  & > .react-datepicker-wrapper {
    width: 100%;
  }
`

const DateInputButton = styled.button`
  all: unset;
  width: 100%;
  height: 43px;
  border-radius: 8px;
  background-color: ${({ bgColor = "white" }) => themeColor(bgColor)};
  color: ${themeColor("txt")};
  text-transform: capitalize;
  font-family: Montserrat, sans-serif;
  font-size: ${themeFontSize("regular")};
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
`
