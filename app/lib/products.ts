export interface Product {
    slug: string;
    title: string;
    collection: string;
    price: string;
    description: string;
    images: string[];
    modelUrl: string;
    specs: { label: string; value: string }[];
}

export const products: Product[] = [
    {
        slug: "sofa",
        title: "Minimalist Sofa 01",
        collection: "Mags Soft Collection",
        price: "$1,299.00",
        description: "A low, deep modular sofa with a lounge feel. Rounded edges and soft cushions create a relaxed silhouette. Designed for maximum comfort with minimal aesthetics.",
        images: [
            "/assets/demo/product-images/sofa-front.jpg",
            "/assets/demo/product-images/sofa-front-angle.jpg",
            "/assets/demo/product-images/sofa-back.jpg",
            "/assets/demo/product-images/sofa-back-angle.jpg",
            "/assets/demo/product-images/sofa-left.jpg",
        ],
        modelUrl: "/assets/demo/sofa-model-optimised.glb",
        specs: [
            { label: "Dimensions", value: "W: 227cm, D: 94cm, H: 67cm" },
            { label: "Material", value: "Kvadrat Wool / Foam" },
        ],
    },
    {
        slug: "office-chair",
        title: "HyperTask Alpha",
        collection: "ErgoTech Series",
        price: "$899.00",
        description: "The ultimate ergonomic tool for the modern workspace. Featuring carbon-fiber dynamics and breathable mesh that adapts to your every movement.",
        images: [
            "/assets/demo/product-images/office-chair.png",
        ],
        modelUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb", // Placeholder
        specs: [
            { label: "Adjustment", value: "4D Armrests, Synchro-tilt" },
            { label: "Warranty", value: "12 Years" },
        ],
    },
    {
        slug: "diamond-ring",
        title: "Eternal Solitaire",
        collection: "High Jewelry",
        price: "$4,500.00",
        description: "A masterpiece of light. This 2-carat precision-cut diamond is set in a minimalist platinum band, engineered to maximize brilliance from every angle.",
        images: [
            "/assets/demo/product-images/diamond-ring.png",
        ],
        modelUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb", // Placeholder for refraction/metal
        specs: [
            { label: "Carat", value: "2.0 ct, VVS1" },
            { label: "Metal", value: "Platinum 950" },
        ],
    },
    {
        slug: "luxury-watch",
        title: "Chronos One",
        collection: "Precision Horology",
        price: "$8,200.00",
        description: "Mechanical perfection on your wrist. A brushed stainless steel case housing a hand-assembled movement with a 72-hour power reserve.",
        images: [
            "/assets/demo/product-images/luxury-watch.png",
        ],
        modelUrl: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/FlightHelmet/glTF-Binary/FlightHelmet.glb", // Placeholder for complex metal/glass
        specs: [
            { label: "Movement", value: "Automatic Caliber D1" },
            { label: "Crystal", value: "Sapphire" },
        ],
    },
];

export function getProductBySlug(slug: string) {
    return products.find((p) => p.slug === slug);
}
