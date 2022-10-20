import 'react-native';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {Counter} from '../src/Counter';
import {screen, render} from '@testing-library/react-native';

it('renders correctly', () => {
  render(<Counter />);
});

it('renders with initial count', () => {
  render(<Counter />);
  const counterElement = screen.getByTestId('counter').props;
  expect(counterElement.children).toBe(0);
});

it('renders with incremented count when button pressed', () => {
  render(<Counter />);
  const btnElement = screen.getByTestId('incremental-btn').props;

  act(() => {
    btnElement.onClick();
  });

  const counterElement = screen.getByTestId('counter').props;
  expect(counterElement.children).toBe(1);
});

it('creates snapshot', () => {
  const counterElement = renderer.create(<Counter />);
  expect(counterElement).toMatchSnapshot();
});
