import React from 'react'
import ClassWrapper from '../Wrappers/ClassWrapper'
import Container from "./../Containers/Container/Container"
const Class = () => {
    return (
        <Container>
            <ClassWrapper>
                <div className="class">
                    <div className="class_header p-3 mb-5">
                        <h4 className="m-0 title">Sinflar</h4>
                    </div>
                    <div>
                        <button className="btn btn-primary" type="button">Yangi sinf qo'shish</button>
                    </div>
                </div>
            </ClassWrapper>
        </Container>
    )
}

export default Class
