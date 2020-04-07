import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './participant';


describe('<Participant />', () => {
  it('smoke test', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Participant key={1} name={'Mike'} avatar={'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'} inSession={true} onStage={false}/>, div);
    // if something is wrong, itd fail here
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    const tree = renderer.create(<Participant key={1} name={'Mike'} avatar={'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'} inSession={true} onStage={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});