import React from 'react';
import { Button, Card, Menu, MenuItem } from '@mui/material';
const FilterButton = () => {


    const [anchorSale, setAnchorSale] = React.useState(null);
    const [filterSale, setFilterSale] = React.useState("Sale");
    const openSale = Boolean(anchorSale);
    const handleClick = (event) => {
        setAnchorSale(event.currentTarget);
    };
    const handleClose = (e) => {
        Boolean(e.target.ariaLabel) ? setFilterSale(e.target.ariaLabel) : null;
        setAnchorSale(null);
    };


    const [anchorPrice, setAnchorPrice] = React.useState(null);
    const openPrice = Boolean(anchorPrice);
    const handlePriceClick = (event) => {
        setAnchorPrice(event.currentTarget);
    };
    const handlePriceClose = () => {
        setAnchorPrice(null);
    };


    return (
        <div className='filter-buttons'>

            <div>
                <Button className='filtering-button'
                    id="basic-button"
                    aria-controls={openSale ? 'for-sale-filter' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openSale ? 'true' : undefined}
                    onClick={handleClick}
                >
                    For {filterSale}
                </Button>
                <Menu
                    id="for-sale-filter"
                    anchorEl={anchorSale}
                    open={openSale}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} aria-label='Rent'>For Rent</MenuItem>
                    <MenuItem onClick={handleClose} aria-label='Sale'>For Sale</MenuItem>
                </Menu>
            </div>

            <div>
                <Button className='filtering-button'
                    id="basic-button"
                    aria-controls={openPrice ? 'price-filter' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openPrice ? 'true' : undefined}
                    onClick={handlePriceClick}
                >
                    Price
                </Button>
                <Menu
                    id="price-filter"
                    anchorEl={anchorPrice}
                    open={openPrice}
                    onClose={handlePriceClose}
                >
                    <section>
                        <h1>price range</h1>
                    </section>
                </Menu>
            </div>
        </div>
    );
}

export default FilterButton;
