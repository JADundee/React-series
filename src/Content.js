const Content = () => {
    const handleNameChange = () => {
        const names = ['Bobert', 'Randy', 'Bobandy', 'Jimmy'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
      }

      const handleClick = () => {
        console.log('Clicked')
      }

      const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
      }

      const handleClick3 = (e) => {
        console.log(e.target.innerText)
      }
      

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => handleClick2('Bobert')}>Click</button>
            <button onClick={(e) => handleClick3(e)}>Click</button>
        </main>
    )
}

export default Content