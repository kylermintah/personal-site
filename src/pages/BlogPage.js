import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import yamlTemplatePath from '../articles/yaml-templates/yaml-templates.md'
import CodeBlock from '../articles/utils'

class BlogPage extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(yamlTemplatePath).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
      
    return (
        <div className='d-flex justify-content-center'>
        <div class="d-flex justify-content-md-center" style={{maxWidth:'1000px', marginTop:'50px'}}>
            {/* <Spotlight title={props.title} text={props.subtitle} /> */}
        
            <div className="content">
                <ReactMarkdown source={this.state.terms} renderers={{ code: CodeBlock }} className="line-break"/>
            </div>
      </div>
      </div>
    )
  }
}

export default BlogPage