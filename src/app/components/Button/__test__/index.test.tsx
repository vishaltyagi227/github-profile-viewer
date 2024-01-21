import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import renderer from 'react-test-renderer';
import provideTheme from '@mock/provideTheme';
import Button from '../index';

const renderingText = 'Test Button';
describe('<Button />', () => {
  let container: RenderResult;

  afterEach(cleanup);

  it('Should render correctly', () => {
    container = render(provideTheme(<Button>{renderingText}</Button>));
    const button = container.getByText(renderingText);
    expect(button?.textContent).toBe(renderingText);
  });

  it('Should be disabled when button set to disabled', () => {
    container = render(provideTheme(<Button disabled>{renderingText}</Button>));
    const button = container.getByText(renderingText);
    expect(button).toBeDisabled();
  });
});

describe('<Button /> Snapshot', () => {
  afterEach(cleanup);

  it('Should match with Snapshot when button is not disabled', () => {
    const tree = renderer
      .create(provideTheme(<Button>{renderingText}</Button>))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match with Snapshot when button is disabled', () => {
    const tree = renderer
      .create(provideTheme(<Button disabled>{renderingText}</Button>))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
