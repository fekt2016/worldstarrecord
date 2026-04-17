import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const paddingStyles = {
  sm: css`
    padding: ${({ theme }) => theme.space[4]};
  `,
  md: css`
    padding: ${({ theme }) => theme.space[6]};
  `,
  lg: css`
    padding: ${({ theme }) => theme.space[8]};
  `,
};

const Card = styled.article`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.borderSoft};
  background: ${({ theme }) => theme.colors.bgGlass};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  transition: ${({ theme }) =>
    `transform ${theme.motion.duration.normal} ${theme.motion.spring},
    box-shadow ${theme.motion.duration.normal} ${theme.motion.easeOut}`};

  ${({ $padding }) => paddingStyles[$padding]}

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

Card.defaultProps = {
  $padding: 'md',
};

Card.propTypes = {
  $padding: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Card;
