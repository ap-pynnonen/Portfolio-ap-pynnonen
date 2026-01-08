import React from 'react';
import { useLocalization } from './LocalizationProvider';
import Form from 'react-bootstrap/Form';

export function LangSwitch() {
  const { lang, setLang } = useLocalization();
  return (
    <Form.Select variant="dark" data-bs-theme="dark" value={lang} onChange={(e) => setLang(e.target.value)} className="lang-select" style={{width: "100px"}}>
      <option value="en">EN</option>
      <option value="fi">FI</option>
    </Form.Select>
  );
}