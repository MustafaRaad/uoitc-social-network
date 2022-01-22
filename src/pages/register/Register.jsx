import "./register.css";

export default function Register() {
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
              <input placeholder="Username" className="form-control" />
              <input placeholder="Email" className="form-control" />
              <input placeholder="Password" className="form-control" />
              <input placeholder="Password Again" className="form-control" />
              <div className="row">
                <button className="col-6 btn btn-primary">Sign Up</button>
                <button className="btn btn-light col-6">
                  Log into Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
