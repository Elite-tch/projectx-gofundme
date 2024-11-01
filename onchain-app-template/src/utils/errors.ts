// Error messages for backend validation and smart contract interactions
const errorMessages: any = {
    // Backend Validation Errors (Mongoose schema)
    InitiativeTitleRequired: "Must provide Initiative title.",
    InitiativeTitleTooShort:
        "Initiative title cannot be less than 5 characters.",
    InitiativeTitleTooLong:
        "Initiative title cannot be more than 55 characters.",
    UserAddressRequired: "Must provide User address.",
    UserAddressInvalid: "Invalid Ethereum address for the initiative founder.",
    DescriptionRequired: "Must provide description.",
    DescriptionTooShort:
        "Initiative description cannot be less than 30 characters.",
    DescriptionTooLong:
        "Initiative description cannot be more than 250 characters.",
    GoalRequired: "Must provide goal.",
    GoalTooLow: "Goal must be at least 0.001 ETH.",
    InvalidInitiativeId: "Invalid initiative ID provided.",
    ContractAddressInvalid: "Invalid Ethereum address for the initiative.",

    // Backend Query Errors
    NoInitiativesFound:
        "No initiatives found for the given user address or ID.",
    InvalidDataId: "The provided data ID is invalid.",

    // Smart Contract Errors (custom error codes)
    YouFoundThisInitiative:
        "You are the owner of this initiative and cannot perform this action.",
    YouDidNotFindThisInitiative:
        "You are not registered as a participant in this initiative.",
    InitiativeBalanceNotEnough:
        "The initiative does not have enough balance for this operation.",
    InitiativeGoalReached:
        "The initiative has already reached its funding goal.",
    InvalidAmount: "The amount you entered is invalid.",
    ExcessAmount: "The amount exceeds the required goal for this initiative.",
    TokenTransferFailed: "Failed to transfer tokens. Please try again.",

    // Other Common Errors
    InsufficientFunds:
        "The total cost of executing this transaction exceeds the account balance. Ensure you have enough ETH to cover the transaction.",
    UserRejected:
        "The transaction request was rejected by the user. Please try again.",
    UnknownError: "An unknown error occurred. Please try again.",
};

// Function to parse errors from backend and smart contract interactions
export const parseError = (error: any) => {
    const errorString = error.message || error.toString();

    // Match specific backend error messages based on validation text
    if (errorString.includes("Must provide Initiative title"))
        return errorMessages.InitiativeTitleRequired;
    if (
        errorString.includes(
            "Initiative title cannot be less than 5 characters",
        )
    )
        return errorMessages.InitiativeTitleTooShort;
    if (
        errorString.includes(
            "Initiative title cannot be more than 55 characters",
        )
    )
        return errorMessages.InitiativeTitleTooLong;
    if (errorString.includes("Must provide User address"))
        return errorMessages.UserAddressRequired;
    if (
        errorString.includes(
            "Invalid Ethereum address for the initiative founder",
        )
    )
        return errorMessages.UserAddressInvalid;
    if (errorString.includes("Must provide description"))
        return errorMessages.DescriptionRequired;
    if (
        errorString.includes(
            "Initiative description cannot be less than 30 characters",
        )
    )
        return errorMessages.DescriptionTooShort;
    if (
        errorString.includes(
            "Initiative description cannot be more than 250 characters",
        )
    )
        return errorMessages.DescriptionTooLong;
    if (errorString.includes("Must provide goal"))
        return errorMessages.GoalRequired;
    if (errorString.includes("Goal must be at least 0.001 ETH"))
        return errorMessages.GoalTooLow;
    if (errorString.includes("Invalid initiative ID"))
        return errorMessages.InvalidInitiativeId;
    if (errorString.includes("Invalid Ethereum address for the initiative"))
        return errorMessages.ContractAddressInvalid;
    if (errorString.includes("No initiatives found"))
        return errorMessages.NoInitiativesFound;
    if (errorString.includes("Invalid data ID"))
        return errorMessages.InvalidDataId;

    // Handle specific errors related to transaction execution
    if (errorString.includes("insufficient funds for gas * price + value"))
        return errorMessages.InsufficientFunds;
    if (errorString.includes("User denied transaction signature"))
        return errorMessages.UserRejected;

    // Match custom smart contract errors
    const matchedError = errorString.match(/\b[A-Za-z]+\(\)/);
    if (matchedError) {
        const errorName = matchedError[0].replace("()", "");
        if (errorMessages[errorName]) {
            return errorMessages[errorName];
        }
    }

    // Default error message
    return errorMessages.UnknownError;
};
