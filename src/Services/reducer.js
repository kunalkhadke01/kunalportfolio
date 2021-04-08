const data = localStorage.getItem("STATE")

const initialState = JSON.parse(data)
console.log(data)
const user = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "DATA_SUBMIT":
            return {
                state: [action.data]
            };
        case "DELETE_USER":
            return {
                state: [action.arg]
            };
        case "SPACEX_DATA":
            return {
                state: [action.data]
            };

        default:
            return { state: initialState }
    }
}

export default user;