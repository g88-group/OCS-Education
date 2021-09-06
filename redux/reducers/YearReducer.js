import * as t from "../Types"

const initialState = {
    showYear: -1,
    editYear: false,
    yearData: [
        { title: "2017 - 2018" },
        { title: "2018 - 2019" },
        { title: "2019 - 2020" },
        { title: "2020 - 2021" },
    ]
}

const YearReducer = (state = initialState, action) => {
    const yearData = [...state.yearData]
    switch (action.type) {
        case t.ADD_YEAR:
            if (action.payload.trim() === "") return state;
            return { ...state, yearData: [...state.yearData, { title: action.payload }] }
        case t.DELETE_YEAR: yearData.splice(action.payload, 1);
            return { ...state, yearData: yearData };
        case t.SHOW_YEAR: return { ...state, showYear: action.payload }
        case t.EDIT_YEAR: return { ...state, editYear: action.payload2 }
        case t.SAVE_YEAR: yearData[action.index].title = action.payload;
            return { ...state, yearData: yearData, showYear: -1 };
        default: return state;
    }
}

export default YearReducer;