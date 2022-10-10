import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class'


function ComponenteB(estado) {
    const [conectado, setConectado] = useState(estado);

    const estadoDeLinea = () => {
        setConectado(conectado === false ? 'Conectado' : 'Desconectado')
    }
    return (
        <div>
            <h3> {conectado === false ? 'Contacto No Disponible' : 'Contacto En Linea'}</h3>
            <button onClick = {() => setConectado(!conectado)}>
                Estado
            </button>
        </div>
    );
}

ComponenteB.propTypes = {
    estado: PropTypes.bool,
};

export default ComponenteB;