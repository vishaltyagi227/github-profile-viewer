import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render, RenderResult } from '@testing-library/react';
import renderer from 'react-test-renderer';
import provideTheme from '@mock/provideTheme';
import SuggestionCard from '../index';

const details = {
  userName: 'vishal',
  avatarUrl: 'https://dummyurl.com/img',
};

describe('<SuggestionCard />', () => {
  let container: RenderResult;

  afterEach(cleanup);

  it('Should render correctly', () => {
    container = render(
      provideTheme(
        <BrowserRouter>
          <SuggestionCard
            userName={details.userName}
            imageUrl={details.avatarUrl}
            closeBtn
            onClose={jest.fn()}
          />
        </BrowserRouter>
      )
    );
    expect(container.getByAltText(details.userName)).toBeInTheDocument();
    expect(container.getByText(details.userName)).toBeInTheDocument();
    expect(container.getByText(/View/i)).toBeInTheDocument();
    expect(container.getByRole('button')).toBeInTheDocument();
  });
});

describe('<SuggestionCard /> Snapshot', () => {
  afterEach(cleanup);

  it('Should match with Snapshot', () => {
    const tree = renderer
      .create(
        provideTheme(
          <BrowserRouter>
            <SuggestionCard
              userName={details.userName}
              imageUrl={details.avatarUrl}
              closeBtn
              onClose={jest.fn()}
            />
          </BrowserRouter>
        )
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
