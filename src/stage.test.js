import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './stage';
import STORE from './store';


describe('<Stage />', () => {
  it('smoke test', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Stage participants={STORE.participants}/>, div);
    // if something is wrong, itd fail here
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create(<Stage participants={STORE.participants}/>).toJSON();
    expect(tree).toMatchSnapshot();Stage
  });
});