import { ICollectionType, IConfig } from "./lib/app/types";

// const CONFIG: IConfig = {
//     coinDenom: "uandr",
//     name: "AURA",
//     chainId: "galileo-4",
//     createdDate: "2024-03-31T19:01:01.148Z",
//     modifiedDate: "2024-03-31T19:01:01.148Z",
//     id: "andromeda",
//     collections: [
//         // {
//         //     auction:
//         //         "stars19xddx2zdky6d9jlsrqqyavfycr6pytwmn799vvqsu7fzd4dp7k4q9etd9q",
//         //     cw721: "stars15l5j0hf80ayj7yuhd6qjhlgwgmgy6apekwpe3k76lgltfhqge3cqemdnth",
//         //     name: "Auction Example",
//         //     type: ICollectionType.AUCTION,
//         //     id: "auction",
//         //     featured: "ANDR1"
//         // },
//         // {
//         //     marketplace:
//         //         "stars1gmjfd922u5jf8szjwad9k47ylsg0ftg6pvnaa7fplh8vrd0w4z0qa827u0",
//         //     cw721: "stars1cf0urzkvhph9nhxe5fv8rq25j8x683z3vcjfwc9ypv5qkar0jw2sv78dwu",
//         //     name: "Marketplace Example",
//         //     type: ICollectionType.MARKETPLACE,
//         //     id: "marketplace",
//         // },
//         // {
//         //     crowdfund:
//         //         "stars1a0el2qceyryftj9cx0ds4as3sgfu4ezj7mumtdp34v5c9qpswzaqw0qq38",
//         //     cw721: "stars1uj5tl3g26022ev9ym6x39xtv09hz3xvc7e3c5wthdpufxtwk7rsscs6jz4",
//         //     name: "Crowdfund Example",
//         //     type: ICollectionType.CROWDFUND,
//         //     id: "crowdfund",
//         // },
//         {
//             exchange:
//                 "andr10wf7eu7mrurc9cpmvdf4qq7m9wp7c3ftskw5jggpuy760llma3pqrvy22s",
//             cw20: "andr1zz030gahtsmxhhrjxwqpm2gqg5zuf65m5pjaw7lrsz0gkzqnr0qqmt0y7n",
//             name: "AURA",
//             type: ICollectionType.EXCHANGE,
//             id: "AURA-Exchange",
//         },
//     ],
// };

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Hero Token Exchange",
    chainId: "galileo-4",
    createdDate: "2025-07-15T16:09:47.576Z",
    modifiedDate: "2025-07-15T16:13:16.225Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr15edtdepcl54kswk54eepgnzp9cp90az3y3l80e25vt7m6krjqzfsggp5sv",
            cw20: "andr17vknhndt26lx6a35ejddscd662r59pe99m43cp3mnw4k9j6n0vcqz7vcpk",
            name: "Hero Token Exchange ",
            type: ICollectionType.EXCHANGE,
            id: "Hero-Token-Exchange",
        },
    ],
};

export default CONFIG;
