import React from "react"
import MailchimpImg from "./mailchimpImage"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "./mailchimp.css"

export default class MailchimpSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailValue: "",
      fnameValue: "",
      lnameValue: "",
      result: null,
    }
  }

  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.emailValue, {
      FNAME: this.state.fnameValue,
      LNAME: this.state.lnameValue,
    })
    this.setState({ result: result })
    alert(this.state.result.msg)
  }

  render() {
    return (
      <div className="mailchimpSection">
        <div className="mailchimpBanner">
          <MailchimpImg className="mailchimpImg" />
        </div>
        <div className="mailchimpContainer">
          <div className="mailchimpText">
            <p>
              We're launching on Kickstarter soon! Join the JailBird flock to be
              notified and receive other updates from the team.
            </p>
          </div>
          <div className="mailchimpForm">
            <form onSubmit={this._handleSubmit}>
              <div id="mergeTable" className="mergeTable">
                <div
                  className="mergeRow dojoDndItem mergeRow-email"
                  id="mergeRow-0"
                >
                  <label htmlFor="MERGE0">
                    Email Address <span className="req asterisk">*</span>
                  </label>
                  <div className="field-group">
                    <input
                      type="email"
                      name="EMAIL"
                      id="MERGE0"
                      autoCapitalize="off"
                      autoCorrect="off"
                      size="25"
                      value={this.state.emailValue}
                      onChange={e => {
                        this.setState({ emailValue: e.target.value })
                      }}
                    />
                  </div>
                </div>

                <div
                  className="mergeRow dojoDndItem mergeRow-text"
                  id="mergeRow-1"
                >
                  <label htmlFor="MERGE1">First Name</label>
                  <div className="field-group">
                    <input
                      type="text"
                      name="FNAME"
                      id="MERGE1"
                      autoCapitalize="on"
                      autoCorrect="off"
                      size="25"
                      value={this.state.fnameValue}
                      onChange={e => {
                        this.setState({ fnameValue: e.target.value })
                      }}
                    />
                  </div>
                </div>

                <div
                  className="mergeRow dojoDndItem mergeRow-text"
                  id="mergeRow-2"
                >
                  <label htmlFor="MERGE2">Last Name</label>
                  <div className="field-group">
                    <input
                      type="text"
                      name="LNAME"
                      id="MERGE2"
                      autoCapitalize="on"
                      autoCorrect="off"
                      size="25"
                      value={this.state.lnameValue}
                      onChange={e => {
                        this.setState({ lnameValue: e.target.value })
                      }}
                    />
                  </div>
                </div>
                <div id="interestTable"></div>
              </div>
              <div className="submit_container clear">
                <input
                  type="submit"
                  className="formEmailButton"
                  name="submit"
                  value="Subscribe"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
