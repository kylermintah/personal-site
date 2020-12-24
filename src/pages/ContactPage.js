import React from 'react';
import Content from '../components/Content';
import Spotlight from '../components/Spotlight';

function ContactPage(props) {

    return (
        <div>
            <Spotlight title={props.title} />

            <Content>
                You can email me at: <a href="mailto:kylermintah@gmail.com?subject=[Reaching Out]" className='.App-link' >kylermintah@gmail.com</a>
            </Content>


        </div>)

}

export default ContactPage;