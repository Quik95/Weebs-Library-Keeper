import {
  useTheme
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


export default function useBreakpoint(breakpoint) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(breakpoint))
  return matches
}