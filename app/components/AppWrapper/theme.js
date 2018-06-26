/**
 * theme.js created by 08liter
 */
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import gray from '@material-ui/core/colors/grey';

const spacingUnit = 8;
const theme = createMuiTheme({
  palette: {
    primary: blue,
    gray,
    whiteGray: gray[500],
    background: {
      default: gray[100]
    },
    border: {
      input: gray[200],
      default: gray[100]
    }
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
    },
    input: {
      default: 14
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
  },
  button: {
    contained: {
      background: {
        default: 'white'
      }
    }
  },
  overrides: {
    MuiInput: {
      root: {
        border: `1px solid ${gray[300]}`,
        paddingRight: spacingUnit,
        paddingLeft: spacingUnit,
        backgroundColor: gray[50],
        color: gray[600],
        fontSize: 14,
        '&::placeholder': {
          color: gray[600],
        }
      }
    }
  },
});

export default theme;
