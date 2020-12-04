import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../src/components/Button';
import { text, boolean, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

const Icon = <i className="material-icons">face</i>;

enum Direction {
  primary = 'primary',
  secondary = 'secondary',
  hyperlink = 'hyperlink',
  pills = 'pills',
}

const labelColor = 'styleClass';
const optionsColor = {
  primary: Direction.primary,
  secondary: Direction.secondary,
  hyperlink: Direction.hyperlink,
  pills: Direction.pills,
};
const defaultValueColor = Direction.primary;

storiesOf('Components|Form/Button', module)
  .add('Default', () => (
    <Button>teste</Button>
  ))
