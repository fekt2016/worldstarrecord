import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const widthStyles = {
  default: css`
    max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  `,
  wide: css`
    max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  `,
  narrow: css`
    max-width: 960px;
  `,
};

const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.space[6]};
  max-width: ${({ $fluid }) => ($fluid ? '100%' : 'none')};

  ${({ $fluid, $width }) => !$fluid && widthStyles[$width]}

  @media ${({ theme }) => theme.mediaMax.md} {
    padding-inline: ${({ theme }) => theme.space[4]};
  }

  @media ${({ theme }) => theme.mediaMax.sm} {
    padding-inline: ${({ theme }) => theme.space[3]};
  }
`;

Container.defaultProps = {
  $width: 'default',
  $fluid: false,
};

Container.propTypes = {
  $width: PropTypes.oneOf(['default', 'wide', 'narrow']),
  $fluid: PropTypes.bool,
};

export default Container;
