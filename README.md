# csvbox

[![NPM](https://img.shields.io/npm/v/csvbox.svg)](https://www.npmjs.com/package/csvbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```jsx

import { CsvboxButton } from 'csvbox-react-test-2'
import 'csvbox-react-test-2/dist/index.css'

const App = () => {
  return (
    <CsvboxButton
      slug="Your sheet's slug here"
      user={{ user_id: 'default123' }}
      onData={(result, data) => {
        // do something with the result and data
        console.log(result, data);
      }}
    />
  )
}

export default App
```

## License

MIT © [AniketRane](https://github.com/aniketrane24)
