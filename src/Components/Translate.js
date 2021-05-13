import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import './Translate.css';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="translate-form">
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <div id="translate-dropdown">
        <Dropdown
          label="Select a Language"
          selected={language}
          onSelectedChange={setLanguage}
          options={options}
        />
      </div>
      <hr />
      <h3 className="ui header">Output</h3>
      <hr />
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
