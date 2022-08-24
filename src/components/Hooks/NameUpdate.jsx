
import { useEffect } from 'react';

function NameUpdate({name}) {
    const msg = `Hello, ${name}!`;


    useEffect(
        () => {
          document.title = `Greetings to ${name}`;
        },
        [name],
      );

    return(
        <div>
            {msg}
        </div>
    )
}

export default NameUpdate;



