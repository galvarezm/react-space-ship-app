/*
* Este servicio se encarga de retornar un listado de naves.
*/
const getShipList = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/starships/?format=json', { method: 'GET' });
        return response.json();
    } catch (error) {
        console.log(error);
        return [];
    }
};

/*
* Este servicio se encarga de retornar un item de nave por su url asociada.
*/
const getShipDetail = async (url) => {
    try {
        const response = await fetch(url, { method: 'GET' });
        return response.json();
    } catch (error) {
        console.log(error);
        return {};
    }
};

/*
* Este servicio se encarga de retornar los datos de un piloto, asociado a una nave.
*/
const getPilotByUrl = async (url) => {
    try {
        const response = await fetch(url, { method: 'GET' });
        return response.json();
    } catch (error) {
        console.log(error);
        return {};
    }
};

export {
    getShipList,
    getShipDetail,
    getPilotByUrl,
};
