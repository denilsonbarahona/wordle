export type stateType = {
    tries: Array<any>,
    myGuess: string,
    guess: string,
    winCounter: number,
    plays: number,
    win: boolean,
    fail: boolean
}

export type actionType = {
    type: string,
    payload: any
}

export const initialState: stateType = {
    tries: [],
    myGuess: "",
    guess: "",
    winCounter:0,
    plays:0,
    win: false,
    fail: false,
}
