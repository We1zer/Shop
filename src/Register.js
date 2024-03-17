import React, { useState } from "react";

const RegisterPage = () => {
  const companyList = [
    { id: 1, name: "Tech Solution" },
    { id: 2, name: "Vivid Books" },
    { id: 3, name: "Readers Club" },
  ];

  const roleList = [
    { id: 1, name: "Employee" },
    { id: 2, name: "Customer" },
    { id: 3, name: "Admin" },
    { id: 4, name: "Company" },
  ];

  const [selectedRole, setSelectedRole] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  return (
    <div className="card shadow border-0 mt-4">
      <div className="card-header bg-secondary bg-gradient ml-0 py-4">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="py-2 text-white">Register</h2>
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        <div className="row pt-3">
          <div className="col-md-12">
            <form
              id="registerForm"
              className="row"
              action="/ExternalLogin"
              method="post"
            >
              <h3 className="border-bottom pb-3 mb-4 text-secondary text-center">
                Create a new account.
              </h3>
              <div className="text-danger" role="alert">
                {/* Validation summary goes here */}
              </div>
              <div className="form-floating mb-3 col-md-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  autoComplete="username"
                  aria-required="true"
                  placeholder="name@example.com"
                />
                <label htmlFor="email" className="ms-2 text-muted">
                  Email
                </label>
                <span className="text-danger"></span>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                />
                <label htmlFor="name" className="ms-2 text-muted">
                  Full Name
                </label>
                <span className="text-danger"></span>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="123-456-7890"
                />
                <label htmlFor="phoneNumber" className="ms-2 text-muted">
                  Phone Number
                </label>
                <span className="text-danger"></span>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  aria-required="true"
                  placeholder="password"
                />
                <label htmlFor="password" className="ms-2 text-muted">
                  Password
                </label>
                <span className="text-danger"></span>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="new-password"
                  aria-required="true"
                  placeholder="password"
                />
                <label htmlFor="confirmPassword" className="ms-2 text-muted">
                  Confirm Password
                </label>
                <span className="text-danger"></span>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="streetAddress"
                  name="streetAddress"
                  placeholder="123 Main St"
                />
                <label htmlFor="streetAddress" className="ms-2 text-muted">
                  Street Address
                </label>
                <span className="text-danger"></span>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="City"
                />
                <label htmlFor="city" className="ms-2 text-muted">
                  City
                </label>
                <span className="text-danger"></span>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  placeholder="State"
                />
                <label htmlFor="state" className="ms-2 text-muted">
                  State
                </label>
                <span className="text-danger"></span>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Postal Code"
                />
                <label htmlFor="postalCode" className="ms-2 text-muted">
                  Postal Code
                </label>
                <span className="text-danger"></span>
              </div>
              <div className="form-floating mb-3 col-md-6">
                <label htmlFor="role" className="ms-2 text-muted"></label>
                <select
                  className="form-select"
                  id="role"
                  name="role"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option disabled selected value="">
                    -Select Role
                  </option>
                  {roleList.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              {selectedRole === "4" && (
                <div className="form-floating mb-3 col-md-6">
                  <label
                    htmlFor="companyId"
                    className="ms-2 text-muted"
                  ></label>
                  <select
                    className="form-select"
                    id="companyId"
                    name="companyId"
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value)}
                  >
                    <option disabled selected value="">
                      -Select Company
                    </option>
                    {companyList.map((company) => (
                      <option key={company.id} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="col-12">
                <button
                  id="registerSubmit"
                  type="submit"
                  className="w-100 btn btn-lg btn-primary"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-12">
            <section>
              <p className="divider-text d-flex pt-3">or</p>
              <h3>Use another service to register.</h3>
              <div>
                <p>
                  There are no external authentication services configured. See
                  this{" "}
                  <a href="https://go.microsoft.com/fwlink/?LinkID=532715">
                    article
                  </a>{" "}
                  about setting up this ASP.NET application to support logging
                  in via external services.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
