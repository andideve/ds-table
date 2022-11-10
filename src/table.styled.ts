import styled, { CSSObject, FunctionInterpolation } from '@emotion/styled';
import { get, ThemeKey } from '@andideve/styled-system';
import { createMediaQuery } from '@andideve/sx-core';

import defaults from './table.defaults';
import { TableProps } from './table.types';

const styles: (CSSObject | FunctionInterpolation<TableProps>)[] = [
  {
    width: '100%',
    borderCollapse: 'collapse',
    thead: {
      textAlign: 'left',
      color: 'var(--ds-colors-foreground-secondary)',
    },
  },
  ({ columnGap = defaults.columnGap }) => ({
    'thead tr, tbody tr': {
      'th, td': {
        paddingRight: `calc(${columnGap} / 2)`,
        paddingLeft: `calc(${columnGap} / 2)`,
      },
      'th:first-of-type, td:first-of-type': {
        paddingLeft: 0,
      },
      'th:last-of-type, td:last-of-type': {
        paddingRight: 0,
      },
    },
  }),
  {
    'thead tr, tbody tr': {
      'th, td': {
        paddingTop: '.75rem',
        paddingBottom: '.75rem',
      },
      'th:first-of-type, td:first-of-type': {
        paddingLeft: '1rem',
      },
      'th:last-of-type, td:last-of-type': {
        paddingRight: '1rem',
      },
    },
  },
  {
    'thead tr th': {
      textTransform: 'uppercase',
      fontSize: 'var(--ds-fontSizes-xs)',
      lineHeight: 'var(--ds-lineHeights-4)',
      fontWeight: 'var(--ds-fontWeights-semibold)',
      letterSpacing: '0.01em',
    },
    'tbody tr td': {
      fontSize: 'var(--ds-fontSizes-sm)',
      lineHeight: 'var(--ds-lineHeights-5)',
      fontWeight: 'var(--ds-fontWeights-medium)',
    },
  },
  ({ hoverable = defaults.hoverable }) => {
    if (!hoverable) return {};
    return {
      [createMediaQuery(1024)]: {
        'tbody tr:hover td': {
          backgroundColor: 'var(--ds-colors-background-elevated-secondary)',
        },
      },
    };
  },
  ({ theme, rounded: _rounded = defaults.rounded }) => {
    const rounded = get(_rounded, theme?.[ThemeKey.radii], _rounded) as string;
    return {
      'tbody tr td': {
        '&:first-of-type': {
          borderTopLeftRadius: rounded,
          borderBottomLeftRadius: rounded,
        },
        '&:last-of-type': {
          borderTopRightRadius: rounded,
          borderBottomRightRadius: rounded,
        },
      },
    };
  },
];

export const Styled = styled.table(...styles);

export default Styled;
