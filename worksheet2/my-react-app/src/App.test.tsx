import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);  // React 18 新写法
  root.render(<App />);
  root.unmount();  // 用 root.unmount() 替代 ReactDOM.unmountComponentAtNode
});
describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});