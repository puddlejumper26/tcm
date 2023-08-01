function ProfilePage() {
  // name // position // settings // change password // change email //
  return (
    <>
      <h1>Profile</h1>
      <main className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <h4 className="pb-2">Profile Information</h4>
            </div>
            <span className="text-justify mb-3">
              Update your account's profile information and email address.
              <br />
              <br /> When You change your email ,you need to verify your email
              else the account will be blocked
            </span>
            <div className="col-lg-8 text-center pt-2">
              <div className="card py-4 mb-5 mt-md-3 bg-white rounded ">
                <form>
                  <div className="form-group px-3">
                    <label className="col-12 text-left pl-0">Name</label>
                    <input
                      type="text"
                      className="col-md-8 form-control"
                      placeholder="Jane Doe"
                    />
                    <label className="pt-3 col-12 text-left pl-0">Email</label>
                    <input
                      type="email"
                      className="col-md-8 form-control"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form-group row mb-0 mr-4">
                    <div className="col-md-8 offset-md-4 text-right">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="border-bottom border-grey"></div>
          <div className="row justify-content-center pt-5">
            <div className="col-lg-4">
              <h4 className="pb-2">Update Password</h4>
              <span className="text-justify">
                Ensure your account is using a long, random password to stay
                secure.
              </span>
            </div>
            <div className="col-lg-8 text-center pt-2">
              <div className="card py-4 mb-5 mt-md-3 bg-white rounded">
                <form>
                  <div className="form-group px-3">
                    <label className="col-12 text-left pl-0">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="col-md-8 form-control"
                      placeholder="Password"
                    />

                    <label className="pt-3 col-12 text-left pl-0">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="col-md-8 form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group row mb-0 mr-4">
                    <div className="col-md-8 offset-md-4 text-right">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="border-bottom border-grey"></div>
          <div className="row justify-content-center pt-5">
            <div className="col-lg-4">
              <h4 className="pb-2">Delete Account</h4>
              <span className="text-justify">
                Permanently delete your account.
              </span>
            </div>
            <div className="col-lg-8 pt-0">
              <div className="card py-4 mb-5 mt-md-3 bg-white rounded">
                <div className="text-left px-3">
                  Once your account is deleted, all of its resources and data
                  will be permanently deleted. Before deleting your account,
                  please download any data or information that you wish to
                  retain.
                </div>

                <form>
                  <div className="form-group row mb-0 mr-4 pt-4 px-3">
                    <div className="col-md-8 offset-l-4 text-left">
                      <button type="submit" className="btn btn-danger pl-3">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default ProfilePage;
