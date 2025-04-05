import { useEffect, useState } from "react";
const Great = () => {
    const [messageDisplay, setMessageDisplay] = useState('');
  const message = 'Donde los apasionados del fitness se encuentran.';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= message.length) {
        setMessageDisplay(message.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <main id='main-app' className='main-landing'>
        <h1 id='name' className='merriweather-bold'>GymBook</h1>
        <p>{messageDisplay}</p>
    </main>
  )
}

export default Great