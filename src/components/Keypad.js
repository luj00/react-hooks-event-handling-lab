// Code Keypad Component Here

function Keypad({ handleChange }) {
    function handleChange(event) {
      console.log("Entering password...");
    }
    return (
      <div>
        <input
          type="password"
          onChange={handleChange}
        />
      </div>
    );
  }
  
  export default Keypad;