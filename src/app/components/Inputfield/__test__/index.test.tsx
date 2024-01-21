import React, { useState } from 'react';
import { render, cleanup, RenderResult } from '@testing-library/react';
import renderer from 'react-test-renderer';
import provideTheme from '@mock/provideTheme';
import userEvent from '@testing-library/user-event';
import Inputfield from '../index';

const MockWrapper = () => {
  const [value, setValue] = useState('');
  const handleChangeMock = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return provideTheme(
    <Inputfield
      label="input Field"
      type="text"
      name="text"
      handleChange={handleChangeMock}
      value={value}
    />
  );
};

describe('<InputField />', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<MockWrapper />);
  });

  afterEach(cleanup);

  it('Should render correctly', () => {
    expect(container.getByRole('textbox')).toBeInTheDocument();
  });

  it('Should have value as user type', () => {
    userEvent.type(container.getByRole('textbox'), 'username');
    expect(container.getByRole('textbox')).toHaveValue('username');
  });
});

describe('<InputField /> Snapshot', () => {
  afterEach(cleanup);

  it('Should match with snapshot', () => {
    const tree = renderer.create(<MockWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
