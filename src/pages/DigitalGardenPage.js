import React from 'react';
import {Garden} from '../components/';
import {Spotlight} from '../components/';
import {Content} from '../components/';

function DigitalGardenPage(props) {

    return (
        <div>
   
            <Spotlight title={props.title} text={props.subtitle} />
            
            <Content>
            <div style={{height:24}}></div>
             <Garden/>
            </Content>
            
        </div>
    )

}

export default DigitalGardenPage;