import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

// HOOK
const DetailShip = (props) => {

    // REDUX
    const { loading } = useSelector(state => state.globalApp);
    const shipDetail = useSelector(state => state.shipDetail);
    const pilots = useSelector(state => state.pilots);

    // RENDERS
    const contentRender = () => (
        <center>
            <Box style={{backgroundColor: 'rgba(255,255,255,0.6)'}} width='90%'>
                <Box>
                    <h1>{shipDetail.name || '...'}</h1>
                    <p>{shipDetail.model || '...'}</p>
                    <hr/>
                    <h3>Fabricante</h3>
                    <p>{shipDetail.manufacturer || '...'}</p>
                    <h3>Largo</h3>
                    <p>{shipDetail.length || '...'} fts.</p>
                    <h3>Valor</h3>
                    <p>{shipDetail.cost_in_credits || '...'} créditos</p>
                    <h3>Cantidad</h3>
                    <p>{shipDetail.cargo_capacity || '...'}</p>
                </Box>
                <Box>
                    <h1>Pasajeros</h1>
                    <hr/>
                    {loading && <CircularProgress />}
                    {
                        pilots.length > 0 ?
                            pilots.map(pilot => (<p key={pilot.url}>{pilot.name}</p>))
                        :
                            <p>...</p>
                    }
                </Box>
            </Box>
        </center>
    );
    const noContentRender = () => (<></>);

    return (shipDetail ? contentRender() : noContentRender())
}

DetailShip.propTypes = {};

export default DetailShip;
