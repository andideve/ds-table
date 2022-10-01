import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Table from '../table';
import defaults from '../table.defaults';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  columnGap: defaults.columnGap,
  hoverable: defaults.hoverable,
  rounded: defaults.rounded,
  children: (
    <>
      <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Tag</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2022</td>
          <td>Madyang Apps</td>
          <td>{['nextjs', 'react', 'typescript'].join(', ')}</td>
          <td>{['github', 'external'].join(', ')}</td>
        </tr>
      </tbody>
    </>
  ),
};
