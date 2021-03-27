const data = localStorage.getItem("STATE")
const initialState = JSON.parse(data)


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
            }

        default:
            return { state: initialState }
    }
}

export default user;