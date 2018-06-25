/**
 * theme.js created by 08liter
 */
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import gray from '@material-ui/core/colors/grey';

const spacingUnit = 8
const theme = createMuiTheme({
  spacing: {
    unit: 8
  },
  palette: {
    primary: blue,
    whiteGray: gray[500],
    background: {
      default: gray[100]
    },
    border: {
      default: gray[100]
    },
  },
  fontSize: {
    icon: {
      small: 12,
      default: 16
    },
    iconLabel: {
      default: 14
    },
    button: {
      small: 12,
      default: 16
    }
  },
  minHeight: {
    miniButton: {
      default: spacingUnit * 4
    }
  },
  minWidth: {
    miniButton: {
      default: spacingUnit * 3
    }
  },
  typography: {
    body2: {
      color: gray[600],
      fontWeight: 400
    }
  }
});

export default theme;
