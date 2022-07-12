import "./App.css";

function App() {
  return (
    <div>
      <div className="top-section">
        <h1 className="main-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </h1>
        <h2 className="main-subheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </h2>
        <div className="offer-box">
          <div className="offer-box-heading">WHAT WE OFFER</div>
          <div className="item">
            <input type="radio" name="item" id="item1" />
            <label>Lorem ipsum dolor</label>
          </div>
          <div className="item">
            <input type="radio" name="item" id="item2" />
            <label>Lorem ipsum dolor</label>
          </div>
          <div className="item">
            <input type="radio" name="item" id="item3" />
            <label>Lorem ipsum dolor</label>
          </div>
          <div className="item">
            <input type="radio" name="item" id="item4" />
            <label>Lorem ipsum dolor</label>
          </div>
          <div className="item">
            <input type="radio" name="item" id="item5" />
            <label>Lorem ipsum dolor</label>
          </div>
          <div className="item">
            <input type="radio" name="item" id="item6" />
            <label>Lorem ipsum dolor</label>
          </div>
        </div>
        <div className="personal-details">
          <h4 className="personal-details-heading">Personal Details</h4>
          <div>
            <input type="text" required="required" />
            <span>Name</span>
          </div>
          <div>
            <input type="text" required="required" />
            <span>Mobile Number</span>
          </div>
          <div>
            <select>
              <option value="Select City">Select city</option>
              <option value="Lorem">lorem</option>
              <option value="ipsum">ipsum</option>
              <option value="dolor">dolor</option>
              <option value="tempor">tempor</option>
            </select>
          </div>
          <button>CONTINUE</button>
        </div>
      </div>
      <div className="middle-section">
        <h2 className="main-subheading">
          Lorem ipsum dolor sit amet adipiscing elit.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <h3>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="./images/scooter-image.png" alt="" />
      </div>
      <div className="bottom-section">
        <h2 className="main-subheading">Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <ol>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
