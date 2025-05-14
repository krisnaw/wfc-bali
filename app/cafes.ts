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
    area: string;
    internetSpeed?: "Medium",
    powerOutlets?: "Limited",
    images?: string[]
}

export const cafes: Cafe[] = [
    {
        id: 1,
        name: "Seniman Coffee Studio",
        description: "Innovative coffee shop known for its unique brewing techniques and artisanal coffee blends.",
        rating: 4.9,
        coordinates: {
            lat: -8.5069,
            lng: 115.2624
        },
        address: "Jl. Sriwedari No.5, Ubud, Bali",
        imageUrl: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5",
        area: "Ubud"
    },
    {
        id: 2,
        name: "Folk Pool & Gardens",
        description: "Relaxing cafe with a poolside setting offering great coffee and delicious food.",
        rating: 4.8,
        coordinates: {
            lat: -8.5152,
            lng: 115.2593
        },
        address: "Jl. Monkey Forest, Ubud, Bali",
        imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        area: "Ubud"
    },
    {
        id: 3,
        name: "Tukies Coconut Shop",
        description: "Specialty cafe focusing on coconut-based treats and refreshing coffee drinks.",
        rating: 4.7,
        coordinates: {
            lat: -8.5190,
            lng: 115.2608
        },
        address: "Jl. Raya Ubud No.14, Ubud, Bali",
        imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        area: "Ubud"
    },
    {
        id: 4,
        name: "Crate Cafe",
        description: "Popular brunch spot known for their excellent coffee and healthy bowls",
        rating: 4.7,
        coordinates: {
            lat: -8.6478,
            lng: 115.1385
        },
        address: "Jl. Pantai Batu Bolong No.64, Canggu, Bali",
        imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
        area: "Canggu"
    },
    {
        id: 5,
        name: "Machinery Cafe",
        description: "Industrial-chic cafe with specialty coffee and all-day breakfast",
        rating: 4.6,
        coordinates: {
            lat: -8.6503,
            lng: 115.1373
        },
        address: "Jl. Pantai Batu Bolong No.83, Canggu, Bali",
        imageUrl: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24",
        area: "Canggu"
    },
    {
        id: 6,
        name: "Hungry Bird Coffee",
        description: "Specialty coffee roaster with expert baristas and house-roasted beans",
        rating: 4.8,
        coordinates: {
            lat: -8.6527,
            lng: 115.1367
        },
        address: "Jl. Raya Semat No.86, Canggu, Bali",
        imageUrl: "https://images.unsplash.com/photo-1518057111178-44a106bad636",
        area: "Canggu"
    },
    {
        id: 7,
        name: "Milk & Madu",
        description: "Trendy cafe offering great coffee and extensive breakfast menu",
        rating: 4.5,
        coordinates: {
            lat: -8.6558,
            lng: 115.1351
        },
        address: "Jl. Pantai Berawa No.52, Canggu, Bali",
        imageUrl: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
        area: "Canggu"
    },
    {
        id: 8,
        name: "BGS Coffee",
        description: "Local coffee shop featuring Indonesian beans and traditional brewing methods",
        rating: 4.6,
        coordinates: {
            lat: -8.6491,
            lng: 115.1378
        },
        address: "Jl. Pantai Batu Bolong No.97, Canggu, Bali",
        imageUrl: "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
        area: "Canggu"
    },
    {
        id: 9,
        name: "Caffeine Coffee",
        description: "Specialty coffee shop with a focus on sustainability and local sourcing",
        rating: 4.7,
        coordinates: {
            lat: -8.6505,
            lng: 115.1382
        },
        address: "Jl. Pantai Batu Bolong No.45, Canggu, Bali",
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        area: "Canggu"
    },
    {
        id: 10,
        name: "The Avocado Factory",
        description: "Healthy cafe specializing in avocado-based dishes and drinks",
        rating: 4.4,
        coordinates: {
            lat: -8.6512,
            lng: 115.1390
        },
        address: "Jl. Pantai Berawa No.88, Canggu, Bali",
        imageUrl: "https://images.unsplash.com/photo-1518057111178-44a106bad636",
        area: "Canggu"
    },
    {
        id: 11,
        name: "MAD FOR COFFEE BALI",
        description: "Healthy cafe specializing in avocado-based dishes and drinks",
        rating: 4.4,
        coordinates: {
            lat: 6.2721,
            lng: 106.8017
        },
        address: "Jl. Bumbak Gg. Pulau 63A, Kerobokan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
        imageUrl: "https://jtkdr9ubvq.ufs.sh/f/sieYGlSKznV84do06jZAYVlEg2hN5U0PIwdQtWGKDHribmBc",
        area: "Kerobokan",
        images: [
            "https://jtkdr9ubvq.ufs.sh/f/sieYGlSKznV84do06jZAYVlEg2hN5U0PIwdQtWGKDHribmBc",
            "https://jtkdr9ubvq.ufs.sh/f/sieYGlSKznV8YNvHp5Kx9qK3vOotHGMckN4d0mIP2WAC8xVb",
            "https://jtkdr9ubvq.ufs.sh/f/sieYGlSKznV8gUPCdjic9bm5gOdMknVjJKf0yzsotuI27GqZ"
        ]
    },
    {
        id: 12,
        name: "CAMPUS | Specialty Coffee & Vinyl",
        description: "Healthy cafe specializing in avocado-based dishes and drinks",
        rating: 4.4,
        coordinates: {
            lat: 6.2721,
            lng: 106.8017
        },
        address: "Jl. Bikes Only, Tibubeneng, Kec. Kuta Utara, Kabupaten Badung, Bali 80361",
        imageUrl: "https://jtkdr9ubvq.ufs.sh/f/sieYGlSKznV8Cb7RkhovGw3skSHVI9LdUuynRKe4QptXxrfg",
        area: "Kuta",
        images: [
            "https://jtkdr9ubvq.ufs.sh/f/sieYGlSKznV8NO4vEvFMuhRUiJdl4vTbgFVG6SEtOIrDZj9c",
            "https://jtkdr9ubvq.ufs.sh/f/sieYGlSKznV8Cb7RkhovGw3skSHVI9LdUuynRKe4QptXxrfg",
            "https://jtkdr9ubvq.ufs.sh/f/sieYGlSKznV8NLYlBxFMuhRUiJdl4vTbgFVG6SEtOIrDZj9c"
        ]
    }
];