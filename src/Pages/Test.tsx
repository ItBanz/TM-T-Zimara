import React, { useState } from 'react';
import '../Styles//Pages/test.css';
import Header from '../Components/Header';
import store from '../Data/Store.json';
import RevenueChart from '../Charts/Chart';
import QuantitySoldChart from '../Charts/chartline';
import PieChart from '../Charts/PieChartProps';

export default function Test() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isDialogVisible, setIsDialogVisible] = useState<string | null>(null);
    const [editProduct, setEditProduct] = useState<any | null>(null);

    const storeData = store.Shops[0];
    const products = storeData.products;

    const labels = products.map((product) => product['title-product']);
    const salesData = products.map((product) => product.quantitySold);
    const returnsData = products.map((product) => product.returns || 0);

    const totalRevenueThisMonth = products.reduce(
        (acc, product) => acc + (parseFloat(product.totalrevenproduct.replace(/,/g, '')) || 0),
        0,
    );
    const totalRevenueLastMonth = parseFloat(storeData.totalRevenueLastMonth.replace(/,/g, ''));

    const percentageDifference =
        totalRevenueLastMonth === 0
            ? 0
            : ((totalRevenueThisMonth - totalRevenueLastMonth) / totalRevenueLastMonth) * 100;

    const formattedDifference = percentageDifference.toFixed(2);
    const displayDifference =
        percentageDifference < 0
            ? `-${Math.abs(parseFloat(formattedDifference))}%`
            : `${parseFloat(formattedDifference)}%`;

    const handleButtonClick = (dialogType: string, product?: any) => {
        setIsDialogVisible(dialogType);
        setEditProduct(product || null);
    };

    const handleCloseDialog = () => {
        setIsDialogVisible(null);
        setEditProduct(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (editProduct) {
            const { name, value } = e.target;
            setEditProduct({ ...editProduct, [name]: value });
        }
    };

    const handleSaveChanges = () => {
        console.log('Product updated:', editProduct);
        handleCloseDialog();
    };

    const renderProductList = () => {
        return products.map((product, index) => {
            const totalQuantity = product.colorOptions.reduce(
                (sum, colorOption) => sum + colorOption.sizes.reduce((sizeSum, size) => sizeSum + size.quality, 0),
                0,
            );
            return (
                <div key={product['id-product']} className="shop-product-item">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={product['image-product'][0]}
                                        alt={product['title-product']}
                                        className="img-fluid"
                                    />
                                </td>
                                <td className="title-spi">
                                    <h3>
                                        Tên sản phẩm: <span>{product['name']}</span>
                                    </h3>
                                    <p>
                                        Giảm Giá: <span>{product['colorOptions'][0]['pricediscount']}</span>
                                    </p>
                                    <p>
                                        Giá Gốc: <span>{product['colorOptions'][0]['price']}</span>
                                    </p>
                                    <p>
                                        Tổng Tồn Kho: <span>{totalQuantity}</span>
                                    </p>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleButtonClick('dialog1', product)}
                                    >
                                        Chi Tiết Sản Phẩm
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        });
    };

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    // Convert product data to the format required by PieChart
    const productData = products.map((product) => ({
        name: product['title-product'],
        totalrevenproduct: parseFloat(product.totalrevenproduct.replace(/,/g, '')),
    }));

    const contentDivs = [
        <div key="1">
            <div className="container-admin pe-2">
                <div className="DoanhThu">
                    <div className="Chart">
                        <RevenueChart
                            currentMonthRevenue={totalRevenueThisMonth}
                            lastMonthRevenue={totalRevenueLastMonth}
                        />
                    </div>
                    <div className="row Title-Chart">
                        <div className="col">
                            <h3>Tổng Doanh Thu Tháng Này: {totalRevenueThisMonth.toLocaleString()} VNĐ</h3>
                        </div>
                        <div className="col">
                            <h3>Doanh Thu Tháng Trước: {storeData.totalRevenueLastMonth} VNĐ</h3>
                        </div>
                        <div className="col">
                            <h3>So Với Cùng Kỳ Tháng Trước: {displayDifference}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        <div key="2">
            <div className="">
                <div className="product-list-shop">{renderProductList()}</div>
            </div>
        </div>,
        <div key="3">
            <div className="Add-Product">
                <h3>Thêm Sản Phẩm</h3>
                <table className="Add-Product-Table">
                    <tbody>
                        <tr>
                            <td>Tên Sản Phẩm</td>
                            <td>
                                <input type="text" name="name" onChange={handleInputChange} className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>Tiêu Đề</td>
                            <td>
                                <input
                                    type="text"
                                    name="title-product"
                                    onChange={handleInputChange}
                                    className="form-control"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>,
        <div key="4">
            <QuantitySoldChart labels={labels} salesData={salesData} returnsData={returnsData} />
        </div>,
        <div key="5">
            <PieChart productData={productData} />
        </div>,
        <div key="5">Nội dung cho Item 3</div>,
        <div key="6">Nội dung cho Item 3</div>,
        <div key="7">Nội dung cho Item 3</div>,
    ];

    const items = [
        { name: 'Tổng Doanh Thu', icon: 'fas fa-tachometer-alt' },
        { name: 'Sản Phẩm', icon: 'fas fa-box' },
        { name: 'Thêm Sản Phẩm', icon: 'fas fa-box' },
        { name: 'Phân tích', icon: 'fas fa-chart-line' },
        { name: 'Thống Kê', icon: 'fas fa-cart-plus' },
        { name: 'Tin Nhắn', icon: 'fas fa-envelope' },
        { name: 'Đơn Hàng', icon: 'fas fa-file-invoice' },
        { name: 'Giảm Giá', icon: 'fas fa-tags' },
    ];

    return (
        <>
            <Header />
            <div className="container-admin">
                <div className="sidebar">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} onClick={() => handleClick(index)}>
                                <i className={item.icon}></i> {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="content">
                    {contentDivs.map((content, index) => (
                        <div key={index} className={`content-div ${activeIndex === index ? 'visible' : 'hidden'}`}>
                            {content}
                        </div>
                    ))}
                </div>

                {isDialogVisible && (
                    <div className="dialog-overlay">
                        <div className="dialog-content">
                            {isDialogVisible === 'dialog1' && editProduct && (
                                <>
                                    <div className="p-3 Title">
                                        <h2>Chi Tiết Sản Phẩm</h2>
                                    </div>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>Tên Sản Phẩm</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={editProduct.name || ''}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Tiêu Đề</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="title-product"
                                                        value={editProduct['title-product'] || ''}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}>
                                                    <div>
                                                        {editProduct.colorOptions.map(
                                                            (colorOption: any, index: number) => (
                                                                <div key={index}>
                                                                    <h4>Màu: {colorOption.color}</h4>
                                                                    <table className="table">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Giá: </td>
                                                                                <td>
                                                                                    <input
                                                                                        type="text"
                                                                                        name="price"
                                                                                        value={colorOption.price || ''}
                                                                                        onChange={(e) => {
                                                                                            const newColorOptions = [
                                                                                                ...editProduct.colorOptions,
                                                                                            ];
                                                                                            newColorOptions[
                                                                                                index
                                                                                            ].price = e.target.value;
                                                                                            setEditProduct({
                                                                                                ...editProduct,
                                                                                                colorOptions:
                                                                                                    newColorOptions,
                                                                                            });
                                                                                        }}
                                                                                        className="form-control"
                                                                                    />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Giảm Giá: </td>
                                                                                <td>
                                                                                    <input
                                                                                        type="text"
                                                                                        name="pricediscount"
                                                                                        value={
                                                                                            colorOption.pricediscount ||
                                                                                            ''
                                                                                        }
                                                                                        onChange={(e) => {
                                                                                            const newColorOptions = [
                                                                                                ...editProduct.colorOptions,
                                                                                            ];
                                                                                            newColorOptions[
                                                                                                index
                                                                                            ].pricediscount =
                                                                                                e.target.value;
                                                                                            setEditProduct({
                                                                                                ...editProduct,
                                                                                                colorOptions:
                                                                                                    newColorOptions,
                                                                                            });
                                                                                        }}
                                                                                        className="form-control"
                                                                                    />
                                                                                </td>
                                                                            </tr>
                                                                            {colorOption.sizes.map(
                                                                                (size: any, sizeIndex: number) => (
                                                                                    <tr key={sizeIndex}>
                                                                                        <td>Kích Thước</td>
                                                                                        <td>
                                                                                            <input
                                                                                                type="text"
                                                                                                name={`size-${sizeIndex}`}
                                                                                                value={size.size}
                                                                                                onChange={(e) => {
                                                                                                    const newColorOptions =
                                                                                                        [
                                                                                                            ...editProduct.colorOptions,
                                                                                                        ];
                                                                                                    newColorOptions[
                                                                                                        index
                                                                                                    ].sizes[
                                                                                                        sizeIndex
                                                                                                    ].size =
                                                                                                        e.target.value;
                                                                                                    setEditProduct({
                                                                                                        ...editProduct,
                                                                                                        colorOptions:
                                                                                                            newColorOptions,
                                                                                                    });
                                                                                                }}
                                                                                                className="form-control"
                                                                                            />
                                                                                        </td>
                                                                                        <td>Tồn Kho</td>
                                                                                        <td>
                                                                                            <input
                                                                                                type="number"
                                                                                                name={`quality-${sizeIndex}`}
                                                                                                value={
                                                                                                    size.quality || ''
                                                                                                }
                                                                                                onChange={(e) => {
                                                                                                    const newColorOptions =
                                                                                                        [
                                                                                                            ...editProduct.colorOptions,
                                                                                                        ];
                                                                                                    newColorOptions[
                                                                                                        index
                                                                                                    ].sizes[
                                                                                                        sizeIndex
                                                                                                    ].quality =
                                                                                                        parseInt(
                                                                                                            e.target
                                                                                                                .value,
                                                                                                            10,
                                                                                                        );
                                                                                                    setEditProduct({
                                                                                                        ...editProduct,
                                                                                                        colorOptions:
                                                                                                            newColorOptions,
                                                                                                    });
                                                                                                }}
                                                                                                className="form-control"
                                                                                            />
                                                                                        </td>
                                                                                    </tr>
                                                                                ),
                                                                            )}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="Description">
                                                <td>Mô Tả:</td>
                                                <td>
                                                    <textarea
                                                        name="description"
                                                        value={editProduct.description.join('\n') || ''}
                                                        onChange={(e) => {
                                                            if (editProduct) {
                                                                setEditProduct({
                                                                    ...editProduct,
                                                                    description: e.target.value.split('\n'),
                                                                });
                                                            }
                                                        }}
                                                        className="form-control"
                                                        rows={5} // Adjust the number of rows as needed
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="row button-product">
                                        <div className="col d-flex justify-content-center ">
                                            <button onClick={handleCloseDialog} className="btn-Cancel">
                                                Hủy
                                            </button>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <button onClick={handleSaveChanges} className="btn-Save">
                                                Lưu
                                            </button>
                                        </div>
                                        <div className="col d-flex justify-content-center">
                                            <button onClick={handleCloseDialog} className="btn-Delete">
                                                Xóa
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
