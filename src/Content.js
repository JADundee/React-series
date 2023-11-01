import { useState } from "react";



const Content = () => {
  const [name, setName] = useState('Randy')
  const [count, setCount] = useState(0)
    
  const handleNameChange = () => {
    const names = ['Bobert', 'Randy', 'Bobandy', 'Jimmy'];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  }

  // Vanilla JS way
    /* const handleNameChange = () => {
        const names = ['Bobert', 'Randy', 'Bobandy', 'Jimmy'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
      } */

      const handleClick = () => {
        setCount(count + 1)
        setCount(count + 1)
        console.log(count)
      }

      const handleClick2 = () => {
        console.log(count)
      }
      

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Clicky</button>
            <button onClick={handleClick}>Click</button>
            <button onClick={handleClick2}>Click</button>
        </main>
    )
}

export default Content