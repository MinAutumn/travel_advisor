import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import { Grid, FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
}));

export const StyledLoading = styled('div')(({ theme }) => ({
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