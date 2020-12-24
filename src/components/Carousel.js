import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';

import blackpanther from '../assets/black-panther.png'
import headshot from '../assets/headshot.jpg'
import eventhopper from '../assets/eventhopper.gif'
import kojo from '../assets/kojo.gif'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Technical Projects',
                    subtitle: 'hardware, full-stack and more',
                    image: eventhopper,
                    link: 'https://github.com/kylermintah',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Kyler Mintah',
                    subtitle: 'more about me',
                    image: headshot,
                    link: 'https://www.linkedin.com/in/kyler-mintah-399b78121',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Creative Projects',
                    subtitle: 'photography, animation and more',
                    image: kojo,
                    link: 'https://vimeo.com/user73148798',
                    selected: false
                },

            ]
        }
    }

    handleCardHover = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }

        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onHover={(e => this.handleCardHover(item.id, e))} key={item.id} />
        })

    }

    render() {
        return (
            <Container fluid={true} >
                <Row style={{ padding: "3%", justifyContent: 'space-evenly', }}>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>);
    }

}

export default Carousel;