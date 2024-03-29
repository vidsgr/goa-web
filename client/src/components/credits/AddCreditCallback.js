import React, { Component } from "react";

class AddCreditCallback extends Component {
  renderPaymentStatus() {
    const status = this.props.history.location.pathname.replace(
      "/addcredit/callback/",
      ""
    );

    if (status === "success") {
      return (
        <div
          className="alert alert-success"
          role="alert"
          style={{ margin: "3rem" }}
        >
          {status}
        </div>
      );
    } else {
      return (
        <div
          className="alert alert-danger"
          role="alert"
          style={{ margin: "3rem" }}
        >
          {status}
        </div>
      );
    }
  }

  render() {
    return <div className="container h-100">{this.renderPaymentStatus()}</div>;
  }
}

export default AddCreditCallback;
