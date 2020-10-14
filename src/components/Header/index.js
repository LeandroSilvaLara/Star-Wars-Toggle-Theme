import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import logoImg from '../../assets/logo.png';

import { Container, SearchButton } from './styles';
import { shade } from 'polished';

const Header = ({ toggleTheme, newMovie }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
      <div>
        <SearchButton onClick={newMovie}>Buscar</SearchButton>
        <Link to="/">
          <img src={logoImg} alt="Star Wars" />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
