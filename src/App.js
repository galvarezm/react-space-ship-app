import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SelectorShip from './component/selectorShip';
import DetailShip from './component/detailShip';
import * as SERVICE from './api/service';
import * as ACTIONS from './redux/actions';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
    mainBox: {
        height: '100vh',
        backgroundImage: 'url(https://www.ps4wallpapers.com/wp-content/uploads/2018/09/PS4Wallpapers.com_5b949b319e998_672012-1056x594.jpg)'
    }
};

const App = () => {

    // REDUX
    const { loading } = useSelector(state => state.globalApp);
    const dispatch = useDispatch();

    // FUNCTIONS
    const setInitialShipList = () => {
        dispatch(ACTIONS.globalAppSetLoadingOn());
        SERVICE.getShipList()
            .then((response) => {
                dispatch(ACTIONS.shipListSet(response.results));
                dispatch(ACTIONS.globalAppSetLoadingOff());
            }, (error) => {
                console.log(error);
                dispatch(ACTIONS.shipListClear());
                dispatch(ACTIONS.globalAppSetLoadingOff());
            });
    };

    // EFFECTS
    useEffect(() => {
        setInitialShipList();
    }, []);

    // RENDERS
    const showLoadingRender = () => (loading ? <LinearProgress /> : <></>);

    return (
        <Container maxWidth='sm'>
            {showLoadingRender()}
            <Box style={styles.mainBox}>
                <SelectorShip />
                <DetailShip />
            </Box>
        </Container>
    );

}

export default App;
