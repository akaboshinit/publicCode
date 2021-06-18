import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1976D2',
        },
        secondary: {
            main: '#FFFF33',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontSize: 14,
    },
    color: {
        star: '#FFFF33'
    }
});

export default theme;