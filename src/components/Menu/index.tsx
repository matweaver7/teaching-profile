import * as React from "react";
import { Link } from "react-router-dom";
import { defaultMenu as DefaultMenuConst } from "@constants/Menus";
import { Container, Row, Col } from 'reactstrap';


const Menu = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ul>
                    { DefaultMenuConst.map((item) => (
                        <li>
                            <Link
                                to={item.link}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )) }
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Menu;