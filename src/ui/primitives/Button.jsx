import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    transform: translateX(-120%) skewX(-18deg);
  }
  100% {
    transform: translateX(220%) skewX(-18deg);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const sizeStyles = {
  small: css`
    min-height: 2.5rem;
    padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `,
  medium: css`
    min-height: 3rem;
    padding: ${({ theme }) => `${theme.space[3]} ${theme.space[6]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  `,
  large: css`
    min-height: 3.5rem;
    padding: ${({ theme }) => `${theme.space[4]} ${theme.space[8]}`};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  `,
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.textStrong};
    border: 1px solid transparent;
    box-shadow: ${({ theme }) => theme.shadows.sm};
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textStrong};
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    box-shadow: none;
  `,
  icon: css`
    padding-inline: ${({ theme }) => theme.space[4]};
    border-radius: ${({ theme }) => theme.radius.full};
    background: rgba(124, 58, 237, 0.18);
    color: ${({ theme }) => theme.colors.textStrong};
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  `,
};

const StyledButton = styled(Link)`
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  line-height: 1;
  letter-spacing: 0.01em;
  text-decoration: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.65 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
  transition: ${({ theme }) =>
    `transform ${theme.motion.duration.normal} ${theme.motion.spring},
    box-shadow ${theme.motion.duration.normal} ${theme.motion.easeOut},
    background-color ${theme.motion.duration.fast} ${theme.motion.easeOut}`};

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      95deg,
      transparent 30%,
      rgba(255, 255, 255, 0.35) 50%,
      transparent 70%
    );
    transform: translateX(-120%);
    pointer-events: none;
    opacity: ${({ $disabled }) => ($disabled ? 0 : 1)};
  }

  &:hover {
    transform: ${({ $disabled }) => ($disabled ? 'none' : 'translateY(-2px)')};
    box-shadow: ${({ $disabled, theme }) =>
      $disabled ? 'none' : `${theme.shadows.md}, ${theme.shadows.purpleGlow}`};
  }

  &:hover::after {
    animation: ${shimmer} 820ms ease-out;
  }

  &[aria-busy='true'] {
    pointer-events: none;
  }
`;

const Spinner = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 650ms linear infinite;
`;

function Button({
  to,
  text,
  icon,
  children,
  variant,
  variation,
  size,
  loading,
  disabled,
  onClick,
  ariaLabel,
  ...rest
}) {
  const normalizedVariantMap = {
    primary: 'primary',
    ghost: 'ghost',
    icon: 'icon',
    secondary: 'ghost',
    secoundary: 'ghost',
    tertiary: 'icon',
  };

  const finalVariant = normalizedVariantMap[variant || variation] || 'primary';
  const isDisabled = loading || disabled;

  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  const content = loading ? (
    <>
      <Spinner aria-hidden="true" />
      <span>{text || 'Loading'}</span>
    </>
  ) : (
    <>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      <span>{children || text}</span>
    </>
  );

  return (
    <StyledButton
      to={to}
      onClick={handleClick}
      $variant={finalVariant}
      $size={size}
      $disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </StyledButton>
  );
}

Button.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'ghost', 'icon']),
  variation: PropTypes.oneOf([
    'primary',
    'secondary',
    'secoundary',
    'tertiary',
    'ghost',
    'icon',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  text: '',
  icon: null,
  children: null,
  variant: 'primary',
  variation: undefined,
  size: 'medium',
  loading: false,
  disabled: false,
  onClick: undefined,
  ariaLabel: undefined,
};

export default Button;
