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

interface User  {
    completed: boolean
    id: number
    title: string
    userId: number
}
interface Props {
    users : User[]
}

export default function ShopList({users}: Props) {

    return (
        <div className="space-y-4 overflow-y-auto h-screen">
            {users.map((user) => (
                <ShopItem key={user.id} user={user} />
            ))}
        </div>
    )
}
