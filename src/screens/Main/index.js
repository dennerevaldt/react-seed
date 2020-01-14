import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import i18next from 'i18next';
import { Container, LanguageRow, ButtonLanguage } from './styles';

import Title from '~/components/Title';

const Main = ({ t }) => {
  const [lng, setLng] = useState(i18next.language);

  const changeLanguage = language => {
    setLng(language);
    i18next.changeLanguage(language);
  };

  return (
    <Container>
      <LanguageRow>
        <ButtonLanguage
          onClick={() => changeLanguage('pt')}
          active={lng === 'pt'}
        >
          PT
        </ButtonLanguage>
        <ButtonLanguage
          onClick={() => changeLanguage('en')}
          active={lng === 'en'}
        >
          EN
        </ButtonLanguage>
      </LanguageRow>
      <Title>{t('main.title')}</Title>
      <Title>{t('main.description')}</Title>
    </Container>
  );
};

export default withTranslation('common')(Main);

Main.propTypes = {
  t: PropTypes.element,
};

Main.defaultProps = {
  t: null,
};
