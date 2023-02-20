import 'react-native';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {Counter} from '../src/Counter';
import {screen, render, fireEvent} from '@testing-library/react-native';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
it('renders correctly', () => {
  render(<Counter />);
});

// it('renders with initial count', () => {
//   render(<Counter />);
//   const counterElement = screen.getByTestId('counter').props;
//   expect(counterElement.children).toBe(0);
// });

// it('renders with incremented count when button pressed', () => {
//   render(<Counter />);
//   const btnElement = screen.getByTestId('incremental-btn');

//   act(() => {
//     fireEvent.press(btnElement);
//   });

//   const counterElement = screen.getByTestId('counter').props;
//   expect(counterElement.children).toBe(1);
// });

// it('creates snapshot', () => {
//   const counterElement = renderer.create(<Counter />);
//   expect(counterElement).toMatchSnapshot();
// });
