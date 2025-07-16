import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Hero Lionar Exchanger",
    chainId: "galileo-4",
    createdDate: "2025-07-16T16:09:47.576Z",
    modifiedDate: "2025-07-16T16:13:16.225Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1f9udm9wa2cdt3fxesfrld0h30gqdlcu2uvh5ajftl7ltmtvcy9jqthphdj",
            cw20: "andr1fd65nj95p9dc0wsvsafslrjaj35h8htuy36fhqzmep0y9au2fu4se6w2w8",
            name: "Hero Lionar Token Exchange ",
            type: ICollectionType.EXCHANGE,
            id: "Hero-Lionar-Exchanger",
        },
    ],
};

export default CONFIG;
