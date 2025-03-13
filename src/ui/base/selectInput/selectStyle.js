export const customStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    // Apply #554DF1 only to the text color of the "delete" option
    const textColor = data.value === "delete" ? "#554DF1" : undefined

    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined // Disabled state
        : isSelected
        ? "#554DF1" // Selected state (full color for all items)
        : isFocused
        ? `rgba(85, 77, 241, 0.1)` // Focus state (10% opacity for all items)
        : undefined, // Default state
      color: isDisabled
        ? "#ccc" // Disabled text color
        : isSelected
        ? "#fff" // Selected text color (white for contrast for all items)
        : textColor || styles.color, // Use #554DF1 for "delete", default for others
      cursor: isDisabled ? "not-allowed" : "default", // Cursor style
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "#554DF1" // Active + Selected state (full color for all items)
            : `rgba(85, 77, 241, 0.3)` // Active state (30% opacity for all items)
          : undefined,
      },
    }
  },
}
