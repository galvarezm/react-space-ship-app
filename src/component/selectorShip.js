import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import * as SERVICE from '../api/service';
import * as ACTIONS from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

const initShipItem = { value: '' };

// HOOK
const SelectorShip = (props) => {

    const classes = useStyles();

    // STATES
    const [shipItem, setShipItem] = useState(initShipItem);
    
    // REDUX
    const dispatch = useDispatch();
    const shipList = useSelector(state => state.shipList);
    
    // EFFECTS
    useEffect(() => {
        //
    }, []);
    
    // RENDERS
    const listShipRender = () => {
        return shipList.map(item => (
            <MenuItem key={item.url} value={item.url}>{item.name}</MenuItem>
        ));
    };

    // FUNCTIONS
    const updatePilotsList = async (listPilotsUrl) => {
        let updatedListPilots = [];
        dispatch(ACTIONS.pilotsClear());
        await Promise.all(
            listPilotsUrl.map(async url => {
                const response = await SERVICE.getPilotByUrl(url);
                if (response) {
                    updatedListPilots.push(response);
                }
            })
        );
        dispatch(ACTIONS.pilotsSet(updatedListPilots));
        dispatch(ACTIONS.globalAppSetLoadingOff());
    };

    const updateSelectedShipItem = (value) => {
        SERVICE.getShipDetail(value)
            .then((response) => {
                dispatch(ACTIONS.shipDetailSet(response));
                updatePilotsList(response.pilots);
            }, (error) => {
                console.log(error);
                dispatch(ACTIONS.shipDetailClear());
                dispatch(ACTIONS.globalAppSetLoadingOff());
            });
    };

    // HANDLERS
    const onChangeShipItemHandler = (e) => {
        const item = e.target;
        const value = e.target.value;
        dispatch(ACTIONS.globalAppSetLoadingOn());
        dispatch(ACTIONS.shipDetailClear());
        setShipItem(item);
        if (value !== '') {
            dispatch(ACTIONS.shipDetailSet(value));
        } else {
            dispatch(ACTIONS.shipDetailClear());
        }
        updateSelectedShipItem(value);
    };

    return (
        <FormControl style={{width:'97%', backgroundColor: 'black', borderWidth: 1, borderColor: 'white', borderStyle: 'solid'}} variant="filled" className={classes.formControl}>
            <InputLabel style={{color: 'white'}} htmlFor="grouped-native-select">Seleccione una nave...</InputLabel>
            <Select
                style={{color: 'white'}}
                labelId="select-ship"
                id="select-ship"
                value={shipItem?.value}
                onChange={onChangeShipItemHandler}
            >
                <MenuItem key="ninguna" value="">Ninguna</MenuItem>
                {listShipRender()}
            </Select>
        </FormControl>
    )
}

SelectorShip.propTypes = {};

export default SelectorShip;
