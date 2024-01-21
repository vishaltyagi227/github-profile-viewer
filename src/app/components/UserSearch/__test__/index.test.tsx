import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import renderer from 'react-test-renderer';
import provideTheme from '@mock/provideTheme';
import UserSearch from '../index';

describe('<UserSearch />', () => {
  let container: RenderResult;

  afterEach(cleanup);

  it('Should render correctly', () => {
    container = render(provideTheme(<UserSearch handleChange={jest.fn()} />));
    expect(container.getByPlaceholderText('Search User')).toBeInTheDocument();
  });
});

describe('<UserSearch /> Snapshot', () => {
  afterEach(cleanup);

  it('Should match with Snapshot', () => {
    const tree = renderer
      .create(provideTheme(<UserSearch handleChange={jest.fn()} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
