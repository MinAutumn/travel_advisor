import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
}));

export const loading = styled('div')(({ theme }) => ({
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
}));

export const Container = styled('div')(({ theme }) => ({
    padding: '25px',
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
    height: '75vh', overflow: 'auto',
}));

//makeStyles is deprecated
// export default makeStyles(() => ({
//   formControl: {
//     margin: useTheme().spacing(1), minWidth: 120, marginBottom: '30px',
//   },
//   selectEmpty: {
//     marginTop: useTheme().spacing(2),
//   },
//   loading: {
//     height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
//   },
//   container: {
//     padding: '25px',
//   },
//   marginBottom: {
//     marginBottom: '30px',
//   },
//   list: {
//     height: '75vh', overflow: 'auto',
//   },
// }));