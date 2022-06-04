import './App.css'
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {update} from './actions';
import { marked } from 'marked';

function App() {
  const dispatch = useDispatch();
  const text = useSelector(state => state);

  return (
    <div className="App" id='centered'>
      <h1 id='title'>GitHub Flavored Markdown Editor</h1><br/>
        <textarea id="editor" onChange={e => dispatch(update(e.target.value))}>{text}</textarea><br/><br/>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(text)}}></div>
    </div>
  );
}

export default App;
