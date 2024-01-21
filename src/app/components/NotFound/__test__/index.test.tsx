import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import renderer from 'react-test-renderer';
import provideTheme from '@mock/provideTheme';
import NotFound from '../index';

describe('<NotFound />', () => {
  let container: RenderResult;

  afterEach(cleanup);

  it('Should render correctly', () => {
    container = render(provideTheme(<NotFound />));
    expect(
      container.getByRole('heading', { name: /404/i })
    ).toBeInTheDocument();
    expect(
      container.getByRole('heading', { name: /not found/i })
    ).toBeInTheDocument();
  });
});

describe('<NotFound /> Snapshot', () => {
  afterEach(cleanup);

  it('Should match with Snapshot', () => {
    const tree = renderer.create(provideTheme(<NotFound />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
