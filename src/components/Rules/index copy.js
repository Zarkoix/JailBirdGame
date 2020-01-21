import React from "react"

import "./rules.css"
import RuleStep1Img from "./ruleStep1"
import RuleStep2Img from "./ruleStep2"
import RuleStep3Img from "./ruleStep3"

const RulesSection = () => {
  return (
    <div className="rulesSection">
      <div className="flexRow">
        <div className="contentsSquared">
          <h2>How you play!</h2>
          <p className="ruleStep__title ruleStep__txt">
            On your turn draw up to three cards
          </p>
        </div>
        <RuleStep1Img className="ruleImg ruleImg1 rightImg" />
      </div>
      <div className="flexRow">
        <RuleStep2Img className="ruleImg ruleImg2 leftImg" />
        <div className="contentsSquared">
          <p className="ruleStep__title ruleStep__txt">
            Then play up to three cards
          </p>
          <p className="ruleStep__desc ruleStep__txt">
            You want to move evidence cards to other people’s hands
          </p>
        </div>
      </div>
      <div className="flexRow">
        <div className="contentsSquared">
          <p className="ruleStep__title ruleStep__txt">
            When the penguin police card is drawn, a police raid begins
          </p>
          <p className="ruleStep__desc ruleStep__txt">
            If you have the most evidence in hand at the end, you’re out
          </p>
        </div>
        <RuleStep3Img className="ruleImg ruleImg3 rightImg" />
      </div>
    </div>
  )
}

export default RulesSection
