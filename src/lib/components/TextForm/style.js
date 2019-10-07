import styled from "styled-components";
import { theme as involves } from "../../theme";
import { theme, switchProp } from "styled-tools";

export const Text = styled.label`
    display: block;
    font-family: ${theme("typography.fontFamily", involves.typography.fontFamily)};
    font-size: ${theme("typography.fontSize.small", involves.typography.fontSize.small)};
    color: ${switchProp("validate", {
        regular: theme("palette.default.dark", involves.palette.default.dark),
        alert: theme("palette.alert.regular", involves.palette.alert.regular),
        success: theme("palette.done.regular", involves.palette.done.regular),
        error: theme("palette.error.dark", involves.palette.error.dark)
    })};
`;