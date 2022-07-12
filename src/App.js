import "./App.css";

function App() {
  return (
    <div>
      <div className="top-section">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <div className="form-heading">WHAT WE OFFER</div>
        <div className="waht-we-offer">
          <input type="radio" name="item" id="item1" />
          <label>Lorem ipsum dolor</label>
          <input type="radio" name="item" id="item2" />
          <label>Lorem ipsum dolor</label>
          <input type="radio" name="item" id="item3" />
          <label>Lorem ipsum dolor</label>
          <input type="radio" name="item" id="item4" />
          <label>Lorem ipsum dolor</label>
          <input type="radio" name="item" id="item5" />
          <label>Lorem ipsum dolor</label>
          <input type="radio" name="item" id="item6" />
          <label>Lorem ipsum dolor</label>
        </div>
        <div className="personal-details">
          <h4>Personal Details</h4>
          <label>Name</label>
          <input type="text" name="Name" placeholder="enter your name" />
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile-number"
            placeholder="enter your mobile Number"
          />
          <select value={"A"} onChange={"A"}>
            <option value="Select City">Select City</option>
            <option value="Lorem">Lorem</option>
            <option value="ipsum">ipsum</option>
            <option value="dolor">dolor</option>
            <option value="tempor">tempor</option>
          </select>
          <button>CONTINUE</button>
        </div>
      </div>
      <div className="middle-section">
        <div className="product-description">
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <img src="./images/scooter-image.png" alt="" />
        </div>
      </div>
      <div className="bottom-section">
        <h3>Lorem ipsum dolor sit amet</h3>
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
