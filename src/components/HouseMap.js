import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import Address from './Address';
import Area from './Area';
import Image from './Image';

import { fetchData } from '../actions/dataAction';

const houseMapWrapper = {
    padding: '5px',
    border: '1px solid black',
    height: '100%',
}

class HouseMap extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }

    components = {
        ADDRESS: Address,
        AREA: Area,
        IMAGE: Image,
    }

    render() {
        const { houses, activeTemplate } = this.props;
        return (
            <Row>
                {activeTemplate.template && houses.map(house => {
                    const content = activeTemplate.template.map(block => {
                        const isValidBlock = block.component !== 'PRICE';
                        const Component = isValidBlock && this.components[block.component];
                        const key = `${house.id}-${block.component}`;
                        if (block.component === 'IMAGE'){
                            const params = {
                                src: house[block.field],
                                price: house['price'],
                                hasChild: block.hasOwnProperty('children'),
                            }
                            return <Component key={key} {...params} />;
                        }
                        return isValidBlock && <Component key={key} param={house[block.field]} />;
                    });

                    return (
                        <Col key={house.id} md="3" className="p-3">
                            <div style={houseMapWrapper}>{content}</div>
                        </Col>
                    );
                })}
            </Row>
        );
    }
}

export default connect(
    state => ({
        activeTemplate: state.templating.activeTemplate,
        houses: state.data.houses,
    }),
    { fetchData },
)(HouseMap);