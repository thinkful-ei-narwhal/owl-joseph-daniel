import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatLog from './chat-log';


describe('<ChatLog />', () => {
  it('smoke test', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ChatLog chatEvents ={[{
      participantId: 2,
      type: 'thumbs-up',
      timestamp: 1548852484247
  },
  {
      participantId: 4,
      type: 'thumbs-down',
      timestamp: 1548852484247
  },]}/>, div);
    // if something is wrong, itd fail here
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create(<ChatLog chatEvents ={[{
      participantId: 2,
      type: 'thumbs-up',
      timestamp: 1548852484247
  },
  {
      participantId: 4,
      type: 'thumbs-down',
      timestamp: 1548852484247
  },]}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});