import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaVimeo } from 'react-icons/fa';



export class SocialLinks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    site: 'GitHub',
                    icon: <AiFillGithub />,
                    link: 'https://github.com/kylermintah',
                },
                {
                    id: 1,
                    site: 'LinkedIn',
                    icon: <FaLinkedin/>,
                    link: 'https://www.linkedin.com/in/kyler-mintah-399b78121/',
                },
                {
                    id: 2,
                    site: 'Vimeo',
                    icon: <FaVimeo/>,
                    link: 'https://vimeo.com/user73148798',
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
            return <h1 style={{fontSize:'6em'}}><a href={item.link} target="_blank" rel="noreferrer">{item.icon}</a></h1>;
        })

    }

    render() {
        return (
            <Container fluid={true} style={{maxWidth:'600px'}}>
                <Row style={{ padding: "3%", justifyContent: 'space-evenly' }}>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>);
    }

}

export default SocialLinks;