import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color='pink' onClick={() => console.log('clicked')} />;
};

export default Parent;
