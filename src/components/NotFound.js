import React from 'react'
import { Content, Spotlight } from '.'

export default function NotFound() {
  return (
    <div className="grid-container " style={{ height: "42rem", display: 'flex', flexDirection:'column', justifyContent:'center' }}>
      <Spotlight title="Uh Oh!"
      subtitle="404 Not Found 🔎" />

      <Content>
        <p>Let's get you back <p/>
        {
          <a href="/" className=".App-link">
            home
          </a>
        }</p>
      </Content>
    </div>
  )
}
