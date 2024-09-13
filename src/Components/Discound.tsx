import React from 'react';
import '../Styles/Components/Discound.css';

interface DiscountCodeProps {
    id: string;
    name: string;
    condition: string;
    expiryDate: string;
    quantity: string;
    value: string;
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ id, name, condition, expiryDate, quantity, value }) => {
    return (
        <div className="row me-4 discount-code-shop">
            <div className="col-8 right-discount-code-shop">
                <h3>{name}</h3>
                <p>{condition}</p>
                <p>
                    <strong>HSD</strong> {expiryDate}
                </p>
            </div>
            <div className="col-4 left-discount-code-shop">
                <p>
                    {/* <strong></strong> {quantity} */}
                    <button>Lưu</button>
                </p>
            </div>
        </div>
    );
};

export default DiscountCode;
