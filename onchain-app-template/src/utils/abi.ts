export const initiativeFactoryABI = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "createdAt",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "initiativeGoal",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "foundBy",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "initiativeAddress",
                type: "address",
            },
        ],
        name: "InitiativeCreated",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_initiativeGoal",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_initiativeMetadata",
                type: "bytes",
            },
        ],
        name: "createInititive",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "founder",
                type: "address",
            },
        ],
        name: "getFounderInitiatives",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
] as const;

export const initiativeStorageABI = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_initiativeGoal",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_initiativeMetadata",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "_initiativeFounder",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "ExcessAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InitiativeBalanceNotEnough",
        type: "error",
    },
    {
        inputs: [],
        name: "InitiativeGoalReached",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "TokenTransferFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "YouDidNotFindThisInitiative",
        type: "error",
    },
    {
        inputs: [],
        name: "YouFoundThisInitiative",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "supportedAt",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountSupportedWith",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "supportedBy",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "foundBy",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "initiativeAddress",
                type: "address",
            },
        ],
        name: "InitiativeSupported",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "withdrawnAt",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountWithdrawn",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "initiativeAddress",
                type: "address",
            },
        ],
        name: "WithdrawnFromInitiative",
        type: "event",
    },
    {
        inputs: [],
        name: "getInitiative",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "createdAt",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "initiativeFounder",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "initiativeGoal",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "initiativeAmountRaised",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "initiativeMetadata",
                        type: "bytes",
                    },
                    {
                        internalType: "address",
                        name: "initiativeAddress",
                        type: "address",
                    },
                ],
                internalType: "struct Initiative_Initiative.Initiative",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "supportInitiative",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
] as const;
