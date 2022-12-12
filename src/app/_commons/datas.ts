import { Link } from "./models/links";
import { Product } from "./models/product";


export const LINKS: Link[] = [
    { id: 0 , path: "", name: "Home", icon: ""},
    { id: 1 , path: "/about", name: "A propos", icon: "" },
    { id: 2 , path: "/contact", name: "Contact", icon: "" },
]


export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "XNNYH Project",
        img: "assets/st4gyrijgatsqzy8q20220510234002.jpg",
        previews: ["assets/st4gyrijgatsqzy8q20220510234002.jpg"],
        path: "1",
    },
]