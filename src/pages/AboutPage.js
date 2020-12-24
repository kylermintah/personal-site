import React from 'react';
import Content from '../components/Content';
import Spotlight from '../components/Spotlight';

function AboutPage(props) {

    return (
        <div>
            <Spotlight title={props.title} />
            <Content>
                <p>
                    {props.subtitle}
                </p>
            </Content>
        </div>
    )

}

export default AboutPage;