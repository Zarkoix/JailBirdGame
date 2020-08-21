import React from "react"

import "./team.css"

/* Import Team Photo Suite */
import Anushka from "./anushka"
import Apala from "./apala"
import Daniel from "./daniel"
import Emma from "./emma"
import Nathan from "./nathan"
import Tori from "./tori"
import TeamPhoto from "./teamPhoto"

const TeamSection = () => {
  return (
    <div className="teamSection">
      <div className="row">
        <div className="contentsSquared leftText">
          <Daniel className="teamImg danielImg rightImg" />
          <p className="profile__title profile__txt">Daniel Simic</p>
          <p className="profile__desc profile__txt">What a chad</p>
        </div>

        <div className="contentsSquared leftText">
          <Emma className="teamImg danielImg rightImg" />
          <p className="profile__title profile__txt">Emma [Yingying] Deng</p>
          <p className="profile__desc profile__txt">What a chad</p>
        </div>
      </div>

      <div className="contentsSquared leftText">
        <p className="ruleStep__title ruleStep__txt">
          When the penguin police card is drawn, a{" "}
          <span className="orange">police raid</span> begins
        </p>
        <p className="ruleStep__desc ruleStep__txt">
          If you have the most evidence in hand at the end, you’re out
        </p>
      </div>
      <Tori className="ruleImg ruleImg3 rightImg" />
    </div>
  )
}

export default TeamSection
