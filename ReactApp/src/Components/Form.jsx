var NewComponent = React.createClass({
  render: function() {
    return (

      <form id="regForm" action="/action_page.php">
        <h1>Register:</h1>
        {/* One "tab" for each step in the form: */}
        <div className="tab">Name:
          <p><input placeholder="First name..." oninput="this.className = ''" name="fname" /></p>
          <p><input placeholder="Last name..." oninput="this.className = ''" name="lname" /></p>
        </div>
        <div className="tab">Contact Info:
          <p><input placeholder="E-mail..." oninput="this.className = ''" name="email" /></p>
          <p><input placeholder="Phone..." oninput="this.className = ''" name="phone" /></p>
        </div>
        <div className="tab">Birthday:
          <p><input placeholder="dd" oninput="this.className = ''" name="dd" /></p>
          <p><input placeholder="mm" oninput="this.className = ''" name="nn" /></p>
          <p><input placeholder="yyyy" oninput="this.className = ''" name="yyyy" /></p>
        </div>
        <div className="tab">Login Info:
          <p><input placeholder="Username..." oninput="this.className = ''" name="uname" /></p>
          <p><input placeholder="Password..." oninput="this.className = ''" name="pword" type="password" /></p>
        </div>
        <div style={{overflow: 'auto'}}>
          <div style={{float: 'right'}}>
            <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
            <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
          </div>
        </div>
        {/* Circles which indicates the steps of the form: */}
        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <span className="step" />
          <span className="step" />
          <span className="step" />
          <span className="step" />
        </div>
      </form>
    );
  }
});