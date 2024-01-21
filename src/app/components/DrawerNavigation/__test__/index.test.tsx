import React from 'react';
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import provideTheme from '@mock/provideTheme';
import { BrowserRouter } from 'react-router-dom';
import { ROUTE, PROTECTED_ROUTE } from '@constant/index';
import DrawerNavigation from '../index';

describe('<DrawerNavigation />when user not Logged', () => {
  let container: RenderResult;
  beforeEach(() => {
    container = render(
      provideTheme(
        <BrowserRouter>
          <DrawerNavigation isLogged={false} handleClick={jest.fn()} />
        </BrowserRouter>
      )
    );
  });

  afterEach(cleanup);

  it('Should render hamburger menu', () => {
    expect(container.getByRole('button')).toBeInTheDocument();
  });

  it('Should open menu when user click on the hamburger and have link with proper route', () => {
    fireEvent.click(container.getByRole('button'));

    expect(container.getByRole('link', { name: /Search/i })).toHaveAttribute(
      'href',
      ROUTE.Home
    );

    expect(container.getByRole('link', { name: /login/i })).toHaveAttribute(
      'href',
      ROUTE.Login
    );

    expect(
      container.queryByRole('link', { name: /who to follow/i })
    ).not.toBeInTheDocument();

    expect(
      container.queryByRole('link', { name: /profile/i })
    ).not.toBeInTheDocument();

    expect(
      container.queryByRole('button', { name: /logout/i })
    ).not.toBeInTheDocument();
  });
});

describe('<DrawerNavigation /> when user Logged', () => {
  let container: RenderResult;
  beforeEach(() => {
    container = render(
      provideTheme(
        <BrowserRouter>
          <DrawerNavigation isLogged handleClick={jest.fn()} />
        </BrowserRouter>
      )
    );
  });

  afterEach(cleanup);

  it('Should render hamburger menu', () => {
    expect(container.getByRole('button')).toBeInTheDocument();
  });

  it('Should open menu when user click on the hamburger and have link with proper route', () => {
    fireEvent.click(container.getByRole('button'));

    expect(container.getByRole('link', { name: /Search/i })).toHaveAttribute(
      'href',
      ROUTE.Home
    );

    expect(
      container.queryByRole('link', { name: /login/i })
    ).not.toBeInTheDocument();

    expect(
      container.getByRole('link', { name: /who to follow/i })
    ).toHaveAttribute('href', PROTECTED_ROUTE.Follow);

    expect(container.getByRole('link', { name: /profile/i })).toHaveAttribute(
      'href',
      PROTECTED_ROUTE.Profile
    );

    expect(
      container.getByRole('button', { name: /logout/i })
    ).toBeInTheDocument();
  });
});

describe('<DrawerNavigation /> Snapshot', () => {
  afterEach(cleanup);

  it('Should match with snapshot when user not login', () => {
    const tree = renderer
      .create(
        provideTheme(
          <BrowserRouter>
            <DrawerNavigation isLogged={false} handleClick={jest.fn} />
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
            <DrawerNavigation isLogged handleClick={jest.fn} />
          </BrowserRouter>
        )
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
