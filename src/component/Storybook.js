import React, { useState } from 'react';

const images = [
    {
        url: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5',
        originalPrice: 25,
        salePrice: 20
    },
    {
        url: 'https://m.media-amazon.com/images/I/81nPwPrfwpL._SX342_.jpg',
        originalPrice: 20,
        salePrice: 15
    },
    {
        url: 'https://i5.walmartimages.com/seo/The-48-Laws-of-Power-Paperback-9780140280197_9fec2759-9203-4933-99f8-51ac99143359.483d87fa28f7ff4a7745f98a6da5a194.jpeg',
        originalPrice: 30,
        salePrice: 25
    },
    {
        url: 'https://cdn.prod.website-files.com/5ad143610f7efd77b6f188f3/5b351e2574b1dd17e5d1847f_41Arb9dTamL._SX362_BO1%2C204%2C203%2C200_.jpg',
        originalPrice: 35,
        salePrice: 30
    }
];

const calculateDiscountPercentage = (originalPrice, salePrice) => {
    const discount = originalPrice - salePrice;
    const discountPercentage = Math.round((discount / originalPrice) * 100);
    return discountPercentage;
};

const styles = {
    galleryContainer: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageContainer: {
        position: 'relative',
        maxWidth: '400px',
        margin: '0 auto'
    },
    imageWrapper: {
        width: '100%',
        height: 'auto',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
    },
    priceTag: {
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        background: '#FFD700',
        color: '#000',
        padding: '8px 12px',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    originalPrice: {
        textDecoration: 'line-through',
        marginRight: '5px'
    },
    salePrice: {
        color: 'red',
        fontWeight: 'bold'
    },
    discountCircle: {
        background: 'red',
        color: '#fff',
        borderRadius: '50%',
        width: '25px',
        height: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
        position: 'absolute',
        top: '-15px',
        left: '-15px'
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    },
    button: {
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        width: '15px',
        height: '15px',
        border: 'none',
        cursor: 'pointer',
        margin: '0 5px',
        transition: 'background 0.3s ease'
    },
    activeButton: {
        background: 'rgba(0, 0, 0, 0.8)'
    }
};

const BookListt = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div style={styles.galleryContainer} className='mt-7'>
            <div style={styles.imageContainer}>
                <div style={styles.imageWrapper}>
                    <img src={images[currentIndex].url} alt={`image${currentIndex + 1}`} style={styles.image} />
                </div>
                <div style={styles.priceTag}>
                    <span style={styles.originalPrice}>{images[currentIndex].originalPrice}</span>
                    <span style={styles.salePrice}>{images[currentIndex].salePrice}</span>
                    <div style={styles.discountCircle}>
                        -{calculateDiscountPercentage(images[currentIndex].originalPrice, images[currentIndex].salePrice)}%
                    </div>
                </div>
            </div>
            <div style={styles.buttonsContainer}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        style={{ 
                            ...styles.button, 
                            ...(currentIndex === index ? styles.activeButton : {}) 
                        }}
                        onClick={() => handleButtonClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BookListt;
