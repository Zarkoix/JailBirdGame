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

/*
<div className="contentsSquared">
  <h2 className="profile__name profile__txt">Daniel Simic</h2>
  <p className="profile__title profile__txt">CFO</p>
  <p className="profile__desc profile__txt">What a chad</p>
  <p className="profile__contact profile__txt">
    daniel@jailbirdgames.com
  </p>
</div>
*/

const TeamSection = () => {
  return (
    <div className="teamSection">
      <div className="row">
        <div className="column">
          <div className="card">
            <Nathan className="teamImg nathanImg" />
            <div className="contentsSquared">
              <h2 className="profile__name profile__txt">Nathan Lee</h2>
              <p className="profile__title profile__txt">CEO</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <Emma className="teamImg nathanImg" />
            <div className="contentsSquared">
              <h2 className="profile__name profile__txt long">
                Emma [Yingying] Deng
              </h2>
              <p className="profile__title profile__txt">COO</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <Daniel className="teamImg danielImg" />
            <div className="contentsSquared">
              <h2 className="profile__name profile__txt">Daniel Simic</h2>
              <p className="profile__title profile__txt">CFO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <Tori className="teamImg toriImg" />
            <div className="contentsSquared">
              <h2 className="profile__name profile__txt">Tori Teng</h2>
              <p className="profile__title profile__txt">CMO</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <Apala className="teamImg apalaImg" />
            <div className="contentsSquared">
              <h2 className="profile__name profile__txt">Apala Srivastava</h2>
              <p className="profile__title profile__txt">VP of Growth</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <Anushka className="teamImg anushkaImg" />
            <div className="contentsSquared">
              <h2 className="profile__name profile__txt">Anushka Raheja</h2>
              <p className="profile__title profile__txt">Director of Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
