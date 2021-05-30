import React from 'react'
import { Content, Spotlight } from '.'

export default function NotFound() {
  return (
    <div>
      <Spotlight title="Uh Oh!"
      subtitle="404 Not Found 🔎" />

      <Content>
        <p>Let's get you back <s/>
        {
          <a href="/" className=".App-link">
            home
          </a>
        }</p>
      </Content>
    </div>
  )
}
