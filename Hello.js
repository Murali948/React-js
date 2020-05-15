import React from 'react'

const Hello = () => {

    /* This is by using jsx
      return (
          <div>
              <h1>Hello Murali</h1>
          </div>
      );
      The below code is by using React Components*/

    return React.createElement('div', { id: 'hello', className: 'unique' },
        React.createElement('h1', null, 'Hello MuraliKrishna'))


}
export default Hello
