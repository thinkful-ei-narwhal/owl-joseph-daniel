import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatEvent from './chat-event';


describe('<ChatEvent />', () => {
  it('works with message', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ChatEvent id={1} type={'message'} message={'Hello world'} time={1548852646559} timestamp={1548852484247} name={'Bob'}/>, div);
    // if something is wrong, itd fail here
    ReactDOM.unmountComponentAtNode(div);
  });

  it('works without message', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ChatEvent id={1} type={'thumbs-down'} timestamp={1548852484247} name={'Bob'}/>, div);
    // if something is wrong, itd fail here
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create(<ChatEvent id={1} type={'message'} message={'Hello world'} time={1548852646559} timestamp={1548852484247} name={'Bob'}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});