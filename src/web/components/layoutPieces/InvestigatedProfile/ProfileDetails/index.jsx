/* eslint-disable no-prototype-builtins */
import React from 'react';
import PropTypes from 'prop-types';
import { investigatedProfileDetailsStyle } from '../InvestigatedProfile.module.css';

const propTypes = {
  perfil: PropTypes.shape({
    dt_nasc: PropTypes.string,
    nm_investigado: PropTypes.string,
    rg: PropTypes.string,
    cpf: PropTypes.string,
    nm_mae: PropTypes.string,
    nm_pesj: PropTypes.string,
    cnpj: PropTypes.string
  }).isRequired,
};

function ProfileDetails({ perfil }) {
  let details = null;
  if (Object.prototype.hasOwnProperty.call(perfil, 'cpf')) {
    const birthdate = perfil.dt_nasc ? new Date(perfil.dt_nasc) : null;
    details = (
      <>
        <p>
          <strong>Nome:</strong>
          <br />
          {perfil.nm_investigado}
        </p>
        <p>
          <span>
            <strong>Data de Nascimento:</strong>
            <br />
            {birthdate ? Intl.DateTimeFormat('pt-br', { timeZone: 'UTC' }).format(birthdate) : null}
          </span>
          <span>
            <strong>RG:</strong>
            <br />
            {perfil.rg}
          </span>
          <span>
            <strong>CPF:</strong>
            <br />
            {perfil.cpf}
          </span>
        </p>
        <p>
          <strong>Mãe:</strong>
          <br />
          {perfil.nm_mae}
        </p>
      </>
    );
  } else if (Object.prototype.hasOwnProperty.call(perfil, 'cnpj')) {
    details = (
      <>
        <p>
          <strong>Nome:</strong>
          <br />
          {perfil.nm_pesj}
        </p>
        <p>
          <strong>CNPJ:</strong>
          <br />
          {perfil.cnpj}
        </p>
      </>
    );
  }

  return <div className={investigatedProfileDetailsStyle}>{details}</div>;
}

ProfileDetails.propTypes = propTypes;
export default ProfileDetails;
