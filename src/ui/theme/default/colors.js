export const defaultThemeColors = {
  white: "#fff",
  black: "#1D1D1D",
  txt: "#191D3A",
  placeholder: "#A7A6CE",
  border: "#EDF0FF",
  blue: "#554DF1",
  blue15: "rgba(85, 77, 241, 0.15)",
  pink: "#FF827A",
  grey: "#474747",
  lightGrey: "#757688",
  gray: "#8798B6",
  lightBlue: "#EDF0FF",
  lightBlue2: "#F2F5FA",
  transparent: "transparent",
  mobileInputBorder: "#E2E1F1",

  // New colors
  surfaceNeutral: "#F2F2F2",
  bgNeutral: "#EDEDED",
  borderNeutral: "#d9d9d9",
  inputBgNeutral: "#ededed",
  buttonBgNeutral: "#d9d9d9",
}

export const convertHexToRGBA = (hexCode, opacity = 1) => {
  if (hexCode) {
    let hex = hexCode.replace("#", "")

    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    /* Backward compatibility for whole number based opacity values. */
    if (opacity > 1 && opacity <= 100) {
      opacity = opacity / 100
    }

    return `rgba(${r},${g},${b},${opacity})`
  }
  return ""
}
