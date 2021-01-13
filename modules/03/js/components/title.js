import { styled } from '../style-components/index.js'
import { component as Component } from '../react/index.js';

const TitleStyled = styled.h1`
  color: orange;
  font-family: system-ui;
  font-size: 50px;
  line-height: 100vh;
`;

const props = {
  message: 'No te rindass',
  name: 'Pedro'
};

const Title = Component`<marquee> ${'message'} </marquee>`(props);

export default TitleStyled(Title)