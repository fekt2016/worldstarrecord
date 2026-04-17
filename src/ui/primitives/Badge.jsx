import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const toneStyles = {
  neutral: css`
    background: rgba(255, 255, 255, 0.08);
    color: ${({ theme }) => theme.colors.textBody};
    border-color: ${({ theme }) => theme.colors.borderSoft};
  `,
  primary: css`
    background: rgba(124, 58, 237, 0.24);
    color: ${({ theme }) => theme.colors.textStrong};
    border-color: rgba(168, 85, 247, 0.44);
  `,
  accent: css`
    background: rgba(236, 72, 153, 0.24);
    color: ${({ theme }) => theme.colors.textStrong};
    border-color: rgba(236, 72, 153, 0.44);
  `,
};

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  min-height: 2rem;
  padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1;

  ${({ $tone }) => toneStyles[$tone]}
`;

Badge.defaultProps = {
  $tone: 'neutral',
};

Badge.propTypes = {
  $tone: PropTypes.oneOf(['neutral', 'primary', 'accent']),
};

export default Badge;
