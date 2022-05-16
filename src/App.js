import "./App.css";

function App() {
  return (
    <div className="App">
      
      <form>
      <div>
        <h2>Create an account</h2>
      </div>
      <br />
        <div className="label">
          <label>
            Your email address:
            <br />
            <input className="input" type="email" name="email" />
          </label>
        </div>
        <br />
        <div className="label">
          <label>
            Your password:
            <br />
            <input className="input" type="password" name="password" />
          </label>
        </div>
        <br />
        <div className="label">
          <label>
            Confirm your password:
            <br />
            <input className="input" type="text" name="name" />
          </label>
        </div>
        <br />
        <div className="label">
          <label>
            Your full name:
            <br />
            <input className="input" type="text" name="name" />
          </label>
        </div>
        <br />
        <div>
          <label>
            <input type="checkbox" checked />
            I read and agree Terms and Conditions
            <br />
          </label>
        </div>
        <br />

        <button className="btn" type="submit">Create account</button>
      </form>
    </div>

  );
}

export default App;
