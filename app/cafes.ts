export interface Cafe {
    id: number;
    name: string;
    description: string;
    rating: number;
    coordinates: {
        lat: number;
        lng: number;
    };
    address: string;
    imageUrl: string;
}

export const cafes: Cafe[] = [
    {
        id: 1,
        name: "Sunny Side Cafe",
        description: "Cozy cafe with fresh pastries and specialty coffee drinks",
        rating: 4.5,
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        },
        address: "123 Main Street, New York, NY 10001",
        imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8"
    },
    {
        id: 2,
        name: "The Coffee Lab",
        description: "Experimental coffee brewing methods and unique flavor combinations",
        rating: 4.8,
        coordinates: {
            lat: 40.7112,
            lng: -74.0055
        },
        address: "456 Park Avenue, New York, NY 10002",
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
    },
    {
        id: 3,
        name: "Brew & Bake",
        description: "Homemade pastries paired with artisanal coffee selections",
        rating: 4.3,
        coordinates: {
            lat: 40.7135,
            lng: -74.0048
        },
        address: "789 Broadway, New York, NY 10003",
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    }
];