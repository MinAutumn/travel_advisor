import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

//import useStyles from './styles';
import {StyledFormControl, Container, StyledGrid, StyledLoading} from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, childClicked, isLoading }) => {
    //const classes = useStyles();
    //get and set state
    const [ type, setType ] = useState('restaurants');
    const [ rating, setRating ] = useState('');
    const [ elRefs, setElRefs ] = useState([]);
    
    useEffect(() => {
        const refs = Array(places?.length).fill().map((_,i) => elRefs[i] || createRef());
        setElRefs(refs);
    }, [places]);

    //return list of places based on type and rating
    return (
        <Container>
            <Typography variant="h4">Restaurants, Hotels & Attractions around you</Typography>
            {isLoading ? (
                <StyledLoading>
                    <CircularProgress size='5rem' />
                </StyledLoading>
            ) : (
                <>
                    <StyledFormControl>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </StyledFormControl>
                    <StyledFormControl>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3.0</MenuItem>
                            <MenuItem value={4}>Above 4.0</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                        </Select>
                    </StyledFormControl>
                    <StyledGrid container spacing={3}>
                        {places?.map((place, i) => (
                            <Grid item key={i} xs={12}>
                                <PlaceDetails 
                                    place={place}
                                    selected={Number(childClicked) === i}
                                    refProp={elRefs[i]} 
                                />
                            </Grid>
                        ))}
                    </StyledGrid>
                </>
            )}
        </Container>
    );
}

export default List;