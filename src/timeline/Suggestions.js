import React from 'react'
import './Suggestions.css'
import { Avatar, Button } from '@mui/material'

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions_title">Suggestions for you</div>
      <div className="suggestions_usernames">
       
        <div className="suggestion_username">
          <div className="username_left">
            <span className="Avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username_info">
              <span className="username">onyi_</span>
              <span className="relation">New to Instagram</span>

            </div>
          </div>
          <Button className="follow_button">follow</Button>
        </div>

        <div className="suggestion_username">
          <div className="username_left">
            <span className="Avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username_info">
              <span className="username">onyi_</span>
              <span className="relation">New to Instagram</span>

            </div>
          </div>
          <Button className="follow_button">follow</Button>
        </div>

        <div className="suggestion_username">
          <div className="username_left">
            <span className="Avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username_info">
              <span className="username">onyi_</span>
              <span className="relation">New to Instagram</span>

            </div>
          </div>
          <Button className="follow_button">follow</Button>
        </div>

        <div className="suggestion_username">
          <div className="username_left">
            <span className="Avatar">
              <Avatar>A</Avatar>
            </span>
            <div className="username_info">
              <span className="username">onyi_</span>
              <span className="relation">New to Instagram</span>

            </div>
          </div>
          <Button className="follow_button">follow</Button>
        </div>

  
      </div>
      </div>
  )
}

export default Suggestions