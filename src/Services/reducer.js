const initialState = {
    Address: "9,sadoba nager",
    birthday: "2021-09-09",
    college: "middle",
    country: null,
    gender: "male",
    hobbies: "playing cricket",
    name: "chetan mujumdar "
}

const user = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "DATA_SUBMIT":
            return state = state, action.data;
        default:
            return state
    }
}

export default user;