import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1976D2',
        },
        secondary: {
            main: '#FFFF33',
        },
        error: {
            main: '#fff',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        // fontSize: 14,
        fontFamily:'Arial, Kosugi Maru, Roboto'
    },
    button:{
        fontFamily:'Arial, Kosugi Maru, Roboto'
    },
    color: {
        // star: '#FFFF33'
    }
});

export default theme;