import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import renderer from 'react-test-renderer';
import provideTheme from '@mock/provideTheme';
import AlertMessage from '../index';

describe('<AlertMessage />', () => {
  const message = 'Testing Alert Message Component';
  const mockFn = jest.fn();
  let container: RenderResult;
  beforeEach(() => {
    container = render(
      provideTheme(
        <AlertMessage
          open
          alertType="success"
          message={message}
          handleClick={mockFn}
        />
      )
    );
  });

  afterEach(cleanup);

  it('Should render correctly', () => {
    expect(container.getByRole('alert')).toBeInTheDocument();
  });

  it('Should display message as pass in props', () => {
    expect(container.getByRole('alert').textContent).toBe(message);
  });
});

describe('<AlertMessage /> Snackbar', () => {
  const message = 'Testing Snackbar Message Component';
  const mockFn = jest.fn();
  let container: RenderResult;
  beforeEach(() => {
    container = render(
      provideTheme(
        <AlertMessage
          open
          type="autohide"
          alertType="success"
          message={message}
          handleClick={mockFn}
        />
      )
    );
  });

  afterEach(cleanup);

  it('Should render correctly', () => {
    expect(container.getByRole('alert')).toBeInTheDocument();
  });

  it('Should display message as pass in props', () => {
    expect(container.getByRole('alert').textContent).toBe(message);
  });
});

describe('<AlertMessage /> Snapshot', () => {
  const message = 'Testing Snackbar Message Component';
  const mockFn = jest.fn();

  afterEach(cleanup);

  it('Should match with snapshot', () => {
    const tree = renderer
      .create(
        provideTheme(
          <AlertMessage
            open
            alertType="success"
            message={message}
            handleClick={mockFn}
          />
        )
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
