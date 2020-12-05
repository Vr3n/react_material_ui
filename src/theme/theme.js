import { createMuiTheme } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: blue,
    },
    status: {
        danger: 'orange',
    },
});

export default theme;