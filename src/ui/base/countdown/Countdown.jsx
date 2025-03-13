require("moment-timezone")
import { useMomentCountdown } from "utils/useMomentCountdown"

export const Countdown = ({ targetTime, timezone }) => {
  const [days, hours, minutes, seconds, globalTime, firstRequestFinished] =
    useMomentCountdown(targetTime, timezone)

  if (Number(days) + Number(hours) + Number(minutes) + Number(seconds) <= 0) {
    return null
  }

  return <span>{`${hours}h ${minutes}m ${seconds}s to accept`}</span>
}
