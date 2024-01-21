import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import renderer from 'react-test-renderer';
import provideTheme from '@mock/provideTheme';
import ProfileTemplate from '../index';

const details = {
  userName: 'vishal',
  avatarUrl: 'https://dummyurl.com/img',
  followers: 0,
  following: 0,
  bio: 'Mock bio',
  email: null,
  location: 'Meerut',
  url: 'https://github.com/dummyvishal',
  blog: '',
};

describe('<ProfileTemplate />', () => {
  let container: RenderResult;

  afterEach(cleanup);

  it('Should render correctly', () => {
    container = render(provideTheme(<ProfileTemplate userDetails={details} />));
    expect(container.getByAltText(details.userName)).toBeInTheDocument();
    expect(
      container.getByRole('heading', { name: /vishal/i })
    ).toBeInTheDocument();
    expect(
      container.getByRole('link', { name: /github profile/i })
    ).toBeInTheDocument();
    expect(container.getByText(/following 0/i)).toBeInTheDocument();
    expect(container.getByText(/followers 0/i)).toBeInTheDocument();
    expect(container.getByTestId('EmailIcon')).toBeInTheDocument();
    expect(container.getByTestId('LocationOnIcon')).toBeInTheDocument();
  });
});

describe('<ProfileTemplate /> Snapshot', () => {
  afterEach(cleanup);

  it('Should match with Snapshot', () => {
    const tree = renderer
      .create(provideTheme(<ProfileTemplate userDetails={details} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
