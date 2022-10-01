import React, { forwardRef } from 'react';

import defaults from './table.defaults';
import Styled from './table.styled';
import { TableProps } from './table.types';

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      children,
      columnGap = defaults.columnGap,
      hoverable = defaults.hoverable,
      rounded = defaults.rounded,
      ...rest
    },
    ref,
  ) => (
    <Styled ref={ref} columnGap={columnGap} hoverable={hoverable} rounded={rounded} {...rest}>
      {children}
    </Styled>
  ),
);

export default Table;
