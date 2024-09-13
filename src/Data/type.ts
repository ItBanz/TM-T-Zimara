export interface ColorOption {
    color: string;
    price: string;
    pricediscount: string;
    sizes: { size: string; quantity: number }[];
}

export interface Comment {
    id: number;
    username: string;
    date: string;
    rating: number;
    content: string;
    images?: string[];
    sellerfeedback: string;
}

export interface Product {
    id: number;
    name: string;
    rate: string;
    evaluate: string;
    selling: string;
    category: string;
    promotionalQuantity: number;
    remainingStock: number;
    shippingFrom: string;
    description: string[];
    colorOptions: ColorOption[];
    comments: Comment[];
    images: string[];
    shop?: {
        logo: string;
        name: string;
        rating: number;
        products: number;
        responseRate: string;
        joinTime: string;
        followers: number;
    };
}
