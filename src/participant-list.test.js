import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './participant-list';
import STORE from './store';



describe('<ParticipantList />', () => {
  it('smoke test', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ParticipantList participants={STORE.participants}/>, div);
    // if something is wrong, itd fail here
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create(<ParticipantList participants={STORE.participants}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});