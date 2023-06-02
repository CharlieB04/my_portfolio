import { extendTheme} from "@chakra-ui/react";

const breakpoints = {
    sm: '40em',
    md: '80em',
    lg: '90em',
    xl: '100em'
}
export const myBreakpoints = extendTheme({breakpoints});