import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileForm from "../commonForms/ProfileForm";
import BillingForm from "../commonForms/BillingForm";
import { notifyModal, updateUser } from "../../actions";

class Profile extends Component {
  async onFormSubmit(fields) {
    this.props.notifyModal(true, "secondary", "Please wait");

    await this.props.updateUser(fields);

    this.props.notifyModal(true, "success", "Changes saved");
  }

  render() {
    switch (this.props.auth) {
      case null:
        return (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        );
      case false:
        return (
          <li className="nav-item" key="4">
            <a className="nav-link" href="/auth/google">
              Login with google
            </a>
          </li>
        );
      default:
        return (
          <div className="container mt-5">
            <div className="row">
              <div className="col-3">
                <div className="text-dark text-center pb-2">
                  <img
                    src="https://i.ibb.co/hR60sKK/2018-04-12-19-08-26.png"
                    className="rounded-circle w-50 pb-1"
                    alt=""
                  />
                </div>
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active text-dark"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Profile
                  </a>
                  <a
                    className="nav-link text-dark"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Billing
                  </a>
                  <a
                    className="nav-link text-dark"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Messages
                  </a>
                  <a
                    className="nav-link text-dark"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    Settings
                  </a>
                </div>
              </div>
              <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <ProfileForm
                      onFormSubmit={fields => {
                        this.onFormSubmit(fields);
                      }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <BillingForm
                      onFormSubmit={fields => {
                        this.onFormSubmit(fields);
                      }}
                    />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    ...3
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    ...4
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { notifyModal, updateUser }
)(Profile);
