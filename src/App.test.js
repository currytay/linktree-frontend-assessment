import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders user handle', () => {
  const profile = shallow(<App />);
  const handle = <h1>@yourname</h1>;
  expect(profile.contains(handle));
});

test('snapshot renders', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});