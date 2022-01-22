import "./login.css";

export default function Login() {
  return (
    <div className="bg-light login">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="/assets/uoitc-logo.png"
              className="bg-secondary rounded-2"
              alt=""
            />
            <h3 className="loginLogo">UOITC Social Network</h3>
            <span className="h5">
              Connect with friends and teachers within UOITC.
            </span>
          </div>
          <div className="col">
            <div className="loginBox row">
              <input placeholder="Email" className="form-control" />
              <input placeholder="Password" className="form-control" />
              <button className="form-control btn btn-primary">Log In</button>
              <div className="row">
                <span className="col-6 btn">Forgot Password?</span>
                <button className="btn btn-light col-6">
                  Create a New Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
