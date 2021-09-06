import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "../Containers/Container";
import HomeWrapper from "../Wrappers/HomeWrapper";
import * as t from "../redux/Types";
import { dispatch } from "../redux/Store";
import Button from '@material-ui/core/Button';
import * as React from 'react';
export default function Home() {
  const [value, setValue] = useState("");
  const [addYear, setAddYear] = useState(false);
  const [yearIndex, setYearIndex] = useState()
  const inputvalue = (event) => {
    setValue(event.target.value)
  }

  const data = useSelector(state => state.YearReducer.yearData);
  const showYear = useSelector(state => state.YearReducer.showYear);
  const editf = useSelector(state => state.YearReducer.editYear);
  const AddYear = () => {
    setAddYear(!addYear);
    const action = { type: t.EDIT_YEAR, payload2: false }
    dispatch(action)
  }
  const addyear = () => {
    const action = { type: t.ADD_YEAR, payload: value }
    setValue("")
    dispatch(action);
    if (value != "") {
      AddYear();
    }
  }
  const showyear = (index) => {
    if (showYear > -1) {
      const action = { type: t.SHOW_YEAR, payload: -1 }
      dispatch(action);
    }
    else {
      const action = { type: t.SHOW_YEAR, payload: index };
      dispatch(action)
    }
  }
  const deleteYear = (i) => {
    const action = { type: t.DELETE_YEAR, payload: i }
    dispatch(action);
    showyear()
  }
  const edit = (index) => {
    AddYear();
    setYearIndex(index)
    console.log(yearIndex);
    setValue(data[index].title);
    const action = { type: t.EDIT_YEAR, payload: value, payload2: true }
    dispatch(action)
  }

  const saveYear = () => {
    AddYear();
    const action = { type: t.SAVE_YEAR, index: yearIndex, payload: value }
    dispatch(action)
    console.log(yearIndex);
    setValue();
  }
  return (
    <Container>
      <HomeWrapper>
        <div className="home">
          <div className="home_header p-3 mb-5">
            <h4 className="m-0 title">O'quv yillari</h4>
          </div>
          {
            addYear ?
              <div className="row m-0 home_year_add d-flex align-items-center mb-4" onClose={AddYear}>
                <div className="col-sm-4 bg-white p-2 shadow rounded-3 text-end">
                  <h4 className="text-center my-2">O'quv yili qo'shish</h4>
                  <form className="p-3">
                    <input type="text" className="form-control mb-4" value={value}
                      placeholder="O'quv yili qo'shish" onChange={inputvalue} required />
                    <button className="btn btn-primary me-3" type="button" onClick={AddYear}>
                      Orqaga qaytish
                    </button>
                    {
                      editf ? <button className="btn btn-primary" type="button" onClick={saveYear}>
                        Saqlash
                      </button> :
                        <button className="btn btn-primary" type="button" onClick={addyear}>
                          Qo'shish
                        </button>
                    }
                  </form>
                </div>
              </div> :
              <div className="mb-4">
                <Button variant="contained" color="primary" onClick={AddYear}>
                  O'quv yili qo'shish
                </Button>
              </div>
          }
          <div className="home_content">
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>O'quv yillari</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((v, i) => <tr key={i}>
                    <td scope="row">{i}</td>
                    <td>{v.title}</td>
                    <td className="text-center" >
                      <div className="position-relative item_box">
                        <button className="btn shadow-none" onClick={() => showyear(i)}>
                          <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                        <div className={`position-absolute item_box_child ${showYear == i ? "d-block" : ""} `}>
                          <button className="d-block w-100 btn shadow-none" onClick={() => edit(i)}>Taxrirlash</button>
                          <button className="d-block w-100 btn hadow-none" onClick={() => deleteYear(i)}>O'chirish</button>
                        </div>
                      </div>
                    </td>
                  </tr>)
                }

              </tbody>
            </table>
          </div>
        </div>
      </HomeWrapper>
    </Container>
  )
}
