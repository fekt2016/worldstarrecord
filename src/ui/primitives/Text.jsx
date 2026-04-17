import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const sizeStyles = {
  xs: css`
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  `,
  sm: css`
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `,
  md: css`
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  `,
  lg: css`
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  `,
  xl: css`
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  `,
  '2xl': css`
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  `,
  '3xl': css`
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  `,
  hero: css`
    font-size: ${({ theme }) => theme.typography.fontSize.hero};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  `,
};

const weightStyles = {
  light: css`
    font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  `,
  regular: css`
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  `,
  medium: css`
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  `,
  semibold: css`
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  `,
  bold: css`
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  `,
  black: css`
    font-weight: ${({ theme }) => theme.typography.fontWeight.black};
  `,
};

const gradientStyles = css`
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textBody};
  line-height: ${({ theme }) => theme.typography.lineHeight.body};
  text-align: ${({ $align }) => $align};
  letter-spacing: ${({ $tracking }) => $tracking};

  ${({ $size }) => sizeStyles[$size]}
  ${({ $weight }) => weightStyles[$weight]}
  ${({ $gradient }) => $gradient && gradientStyles}
  ${({ $mono, theme }) =>
    $mono &&
    css`
      font-family: ${theme.typography.fontFamily.mono};
    `}
`;

Text.defaultProps = {
  as: 'p',
  $size: 'md',
  $weight: 'regular',
  $align: 'left',
  $tracking: 'normal',
};

Text.propTypes = {
  as: PropTypes.string,
  $size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'hero']),
  $weight: PropTypes.oneOf([
    'light',
    'regular',
    'medium',
    'semibold',
    'bold',
    'black',
  ]),
  $gradient: PropTypes.bool,
  $align: PropTypes.oneOf(['left', 'center', 'right']),
  $mono: PropTypes.bool,
  $tracking: PropTypes.string,
};

export default Text;
