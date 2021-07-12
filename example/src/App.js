import React from 'react'

import { CsvboxButton } from 'csvbox-react-test'
import 'csvbox-react-test/dist/index.css'

const App = () => {
  return <CsvboxButton slug="WFvwX7nMLJ8isMw0Ph560DB3CWTsJC" user={{ user_id: 'default567' }} onData={ (result, data) => { console.log(result, data); } }/>
}

export default App
