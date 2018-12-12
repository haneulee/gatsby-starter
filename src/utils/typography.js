import Typography from "typography";
// import bootstrapTheme from "typography-theme-bootstrap";
// import lawtonTheme from "typography-theme-lawton"
// import fairyGateTheme from "typography-theme-fairy-gates";
import kirkhamTheme from "typography-theme-kirkham";

const typography = new Typography(kirkhamTheme);

// const typography = new Typography({ baseFontSize: "18px" });

export default typography;
export const rhythm = typography.rhythm;
