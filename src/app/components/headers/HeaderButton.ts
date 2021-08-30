import styled from '@emotion/styled';

const HeaderButton = styled.button<{ active?: boolean }>`
  background-color: ${(props) => (props.active ? '#59595c' : 'transparent')};
  width: 30px;
  height: 30px;
  transition: 0.15s;
  color: #eaeaea;
  border: none;
  padding: 0;
  cursor: pointer;
  display: grid;
  place-items: center;

  svg {
    width: 100%;
    height: 100%;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    padding: 2px;
  }

  :focus {
    outline: none;
  }

  &:hover,
  &:active {
    color: #fff;
    background-color: #59595c;
  }
`;

export default HeaderButton;
