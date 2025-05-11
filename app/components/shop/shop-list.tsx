import {ShopItem} from "~/components/shop/shop-item";

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front",
        price: '$35',
        color: 'White',
    },
]

export default function ShopList() {
    return (
        <div className="space-y-4">
            {products.map((product) => (
                <ShopItem key={product.id} product={product} />
            ))}
        </div>
    )
}
