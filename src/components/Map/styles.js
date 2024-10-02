import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

//makeStyles deprecated https://mui.com/system/styles/basics/
//try using theming instead https://mui.com/material-ui/customization/theming/

export default makeStyles(() => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '85vh', width: '100%',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
}));