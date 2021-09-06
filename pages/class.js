import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ClassWrapper from '../Wrappers/ClassWrapper';
import Container from "./../Containers/Container/Container";
import * as t from "../redux/Types";
import { dispatch } from "../redux/Store";
const Class = () => {
    const [addClass, setAddClass] = useState(false);
    const data = useSelector(state => state.ClassReducer.classdata);
    const classDetails = useSelector(state => state.ClassReducer.classDetails);
    const classSaveBtn = useSelector(state => state.ClassReducer.classSaveBtn);
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [indexClass, setindexClass] = useState("")
    const addclass = () => {
        setAddClass(!addClass);
        const action = { type: t.SAVE_CLASS_BTN, payload: false }
        dispatch(action);
        setValue("")
        setValue1("")
        setValue2("")
    }
    const classProperty = (index) => {
        if (classDetails < 0) {
            const action = { type: t.SHOW_CLASS_DETAILS, payload: index };
            dispatch(action);
        } else {
            const action = { type: t.SHOW_CLASS_DETAILS, payload: -1 };
            dispatch(action);
        }
    }
    const edit = (index) => {
        setindexClass(index);
        classProperty();
        addclass();
        setValue(data[index].classNumber)
        setValue1(data[index].teacher)
        setValue2(data[index].numberOfStudents)
        const action = { type: t.SAVE_CLASS_BTN }
        dispatch(action);
    }
    const saveClass = () => {
        addclass();
        console.log(indexClass);
        const action = {
            type: t.SAVE_CLASS, payload: false, index: indexClass,
            payloadv1: value,
            payloadv2: value1,
            payloadv3: value2,
        }
        dispatch(action);
    }
    const deleteClass = (index) => {
        const action = { type: t.DELETE_CLASS, payload: index }
        dispatch(action);
    }
    return (
        <Container>
            <ClassWrapper>
                <div className="class">
                    <div className="class_header p-3 mb-5">
                        <h4 className="m-0 title">Sinflar</h4>
                    </div>
                    <div className="mb-4">
                        {
                            addClass ? <div className={`row m-0 classModal justify-content-center align-items-center ${addClass ? "top-0" : ""}`}>
                                <div className="col-md-6 col-10">
                                    <div className=" class_modal_content py-3">
                                        <h4 className="text-center m-0">Sinf qo&apos;shish</h4>
                                        <div className="p-5">
                                            <input type="text" className="form-control mb-3" placeholder="Sinf" value={value} onChange={event => setValue(event.target.value)} />
                                            <input type="text" className="form-control mb-3" placeholder="Sinf rahbari" value={value1} onChange={event => setValue1(event.target.value)} />
                                            <input type="text" className="form-control" placeholder="O'quvchilar soni" value={value2} onChange={event => setValue2(event.target.value)} />
                                        </div>
                                        <div className="text-end px-5">
                                            <button className="btn btn-primary" onClick={addclass}>Orqaga qaytish</button>
                                            {
                                                classSaveBtn ? <button className="btn btn-primary ms-2" onClick={saveClass}>Saqlash</button> :
                                                    <button className="btn btn-primary ms-2">Qo&apos;shish</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div> :
                                <button className="btn btn-primary" type="button" onClick={addclass}>Yangi sinf qo&apos;shish</button>
                        }

                    </div>

                    <div className="class_content">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Sinf</th>
                                    <th>Sinf rahbari</th>
                                    <th>O&apos;quvchilar soni</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((v, i) => <tr key={i} className="align-middle">
                                        <td scope="row">{i}</td>
                                        <td>{v.classNumber}</td>
                                        <td>{v.teacher}</td>
                                        <td>{v.numberOfStudents}</td>
                                        <td className="text-center" >
                                            <div className="position-relative item_box">
                                                <button className="btn shadow-none" onClick={() => classProperty(i)}>
                                                    <FontAwesomeIcon icon={faEllipsisV} />
                                                </button>
                                                <div className={`position-absolute item_box_child  ${classDetails == i ? "d-block" : ""}`}>
                                                    <button className="d-block w-100 btn shadow-none" onClick={() => edit(i)}>Taxrirlash</button>
                                                    <button className="d-block w-100 btn shadow-none" onClick={() => deleteClass(i)}>O&apos;chirish</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </ClassWrapper>
        </Container >
    )
}

export default Class
