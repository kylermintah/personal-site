import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import yamlTemplatePath from '../articles/yaml-templates/yaml-templates.md'
import {CodeBlock, HeadingRenderer} from '../articles/utils'

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
        <div className='d-flex justify-content-md-center'>
        <div class="" style={{maxWidth:'750px', marginTop:'50px', justifyContent:'center'}}>
            {/* <Spotlight title={props.title} text={props.subtitle} /> */}
        
            <div className="content">
                <ReactMarkdown source={this.state.terms} renderers={{ code: CodeBlock, heading: HeadingRenderer,  }} allowDangerousHtml={true} className="line-break"/>
            </div>
      </div>
      </div>
    )
  }
}

export default BlogPage