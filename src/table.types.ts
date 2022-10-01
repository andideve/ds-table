import React from 'react';
import { Theme } from '@andideve/ds-core';

interface ExtendOptions {
  rounded?: string | number;
}

export interface TableOptions extends ExtendOptions {
  columnGap?: string | number;
  hoverable?: boolean;
}

export interface TableProps extends TableOptions, React.TableHTMLAttributes<HTMLTableElement> {
  ref?: React.Ref<HTMLTableElement>;
  as?: React.ElementType;
  theme?: Theme;
  [key: string]: any;
}
