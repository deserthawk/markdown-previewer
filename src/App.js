import { useSelector, useDispatch } from 'react-redux'
import { Provider } from 'react-redux'
import marked from './markObject';
import initialMarkDown from './initialMarkDown';
import store from './store'
import { setMarkDown } from './markDownSlice'

import './style.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <main className='page'>
          <InputMarkDown />
          <Previewer />
        </main>
      </div>
    </Provider>
  );
}

function InputMarkDown() {

  const dispatch = useDispatch();

  function handleChange(event) {
    const html = marked.parse(event.target.value);
    dispatch(setMarkDown(html));
  }

  return (
    <div className='markdown-input'>
      <textarea id='editor'
        onChange={handleChange} defaultValue={initialMarkDown}>
      </textarea>
    </div>
  )
}

function Previewer() {
  return (
    <div>
      <div id='preview'
        className='markdown-previewer'
        dangerouslySetInnerHTML={{ __html: useSelector((state) => state.theMark.markDown) }} />
    </div>
  )
}

export default App;
