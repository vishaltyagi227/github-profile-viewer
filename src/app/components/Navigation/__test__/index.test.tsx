import React from 'react';
import { render, RenderResult, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import provideTheme from '@mock/provideTheme';
import { BrowserRouter } from 'react-router-dom';
import { ROUTE, PROTECTED_ROUTE } from '@constant/index';
import Navigation from '../index';

describe('<Navigation /> when user not login', () => {
  let container: RenderResult;
  beforeEach(() => {
    container = render(
      provideTheme(
        <BrowserRouter>
          <Navigation isLogged={false} handleClick={jest.fn()} />
        </BrowserRouter>
      )
    );
  });

  afterEach(cleanup);

  it('Should render Correctly without rendering the protected link ', () => {
    expect(container.getByText('Search')).toBeInTheDocument();
    expect(container.getByText('Login')).toBeInTheDocument();
    expect(container.queryByText('Who to Follow')).not.toBeInTheDocument();
    expect(container.queryByText('Logout')).not.toBeInTheDocument();
  });

  it('Should have correct route url', () => {
    expect(container.getByText('Search')).toHaveAttribute('href', ROUTE.Home);
    expect(container.getByText('Login')).toHaveAttribute('href', ROUTE.Login);
  });
});

describe('<Navigation /> when user Login', () => {
  let container: RenderResult;
  beforeEach(() => {
    container = render(
      provideTheme(
        <BrowserRouter>
          <Navigation isLogged handleClick={jest.fn()} />
        </BrowserRouter>
      )
    );
  });

  afterEach(cleanup);

  it('Should render correctly with rendering the protected link ', () => {
    expect(container.getByText('Search')).toBeInTheDocument();
    expect(container.queryByText('Login')).not.toBeInTheDocument();
    expect(container.getByText('Who to Follow')).toBeInTheDocument();
    expect(container.getByText('Profile')).toBeInTheDocument();
    expect(container.getByText('Logout')).toBeInTheDocument();
  });

  it('Should have correct route url', () => {
    expect(container.getByText('Search')).toHaveAttribute('href', ROUTE.Home);
    expect(container.getByText('Who to Follow')).toHaveAttribute(
      'href',
      PROTECTED_ROUTE.Follow
    );
    expect(container.getByText('Profile')).toHaveAttribute(
      'href',
      PROTECTED_ROUTE.Profile
    );
    expect(container.getByText('Logout')).toHaveAttribute('type', 'button');
  });
});

describe('<Navigation /> Snapshot', () => {
  afterEach(cleanup);

  it('Should match with snapshot when user not login', () => {
    const tree = renderer
      .create(
        provideTheme(
          <BrowserRouter>
            <Navigation isLogged={false} handleClick={jest.fn} />
          </BrowserRouter>
        )
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match with snapshot when user logged', () => {
    const tree = renderer
      .create(
        provideTheme(
          <BrowserRouter>
            <Navigation isLogged handleClick={jest.fn} />
          </BrowserRouter>
        )
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
