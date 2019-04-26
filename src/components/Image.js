import React from 'react';

const ImgStyles = {
    width: '100%',
    maxHeight: '150px',
}

const priceBlockStyle = {
    position: 'absolute',
    top: '10px',
    left: '5px',
    background: '#eeeeee',
    padding: '3px',
}

class Image extends React.Component {
    state = {
        showDefaultImage: false,
    }

    defaultImage = "https://via.placeholder.com/350x200";

    handleImageErrored = () => this.setState({ showDefaultImage: true });

    render() {
        const { showDefaultImage } = this.state;
        const { src, price, hasChild } = this.props;
        const imgSrc = showDefaultImage ? this.defaultImage : src;

        return (
            <div style={{position: 'relative'}}>
                <img 
                    src={imgSrc} 
                    style={ImgStyles}
                    onError={this.handleImageErrored}
                    alt="House"
                />
                {hasChild ? <b style={priceBlockStyle}>${price}</b> : <b>${price}</b>}
            </div>
        )
    }
}

export default Image;