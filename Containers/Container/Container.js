import ContainerWrapper from "./ContainerWrapper";
import { useState } from "react";
import Sidebardata from "../../Data/SidebarData";
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
const Container = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  }
  return (
    <ContainerWrapper>
      <div className={`sidebar ${sidebar ? "sidebar_mini" : ""}`}>
        <div className="sidebar_header">
          {sidebar ? "" : <h5 className="text-center m-0 text-white">Admin Panel</h5>}
        </div>
        <div className="sidebar_list">
          <ul className="menu">
            {Sidebardata.map((v, i) => <li key={i}>
              <Link href={`${v.href}`} ><a className={`sidebar_link  ${sidebar ? "text-center" : ""} `}>{v.icon} {sidebar ? "" : <span>{v.title}</span>}  </a></Link>
            </li>)}

          </ul>
        </div>
        <div className="sidebar_footer"></div>
      </div>
      <div className="rightside">
        <div className="header d-flex">
          <div className="header_btn d-flex justify-content-center align-items-center" onClick={showSidebar}>
            <button className="btn shadow-none"> <FontAwesomeIcon icon={faAlignRight} /> </button>
          </div>
          <div className="d-flex align-items-center p-2">
            <h4 className="m-0"> EFCOS - EDUCATION </h4>
          </div>
        </div>
        {children}
      </div>
    </ContainerWrapper>
  )
}

export default Container;