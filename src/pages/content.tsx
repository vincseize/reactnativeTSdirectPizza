import * as React from 'react';

export interface Props {
  name: string;
}


function Content({ name }: Props){
  return (
    <div className="App-content">
      <p>
          Nos pizzas sont faites maison.
      </p>
    </div>
  )
}

export default Content;