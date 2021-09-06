import { faAddressBook, faAlignLeft, faBars, faChalkboardTeacher, faTable, faUserFriends, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DvrIcon from '@material-ui/icons/Dvr';
const SidebarData = [
    {
        icon: <FontAwesomeIcon icon={faBars} />, title: "o'quv yillari", href: "/"
    },
    {
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} />, title: "o'qituvchilar", href: "/"
    },
    {
        icon: <DvrIcon />, title: "sinflar", href: "/class"
    },
    {
        icon: <FontAwesomeIcon icon={faUserGraduate} />, title: "o'quvchilar", href: "/"
    },
    {
        icon: <FontAwesomeIcon icon={faUserFriends} />, title: "ota - onalar", href: "/"
    },
    {
        icon: <FontAwesomeIcon icon={faTable} />, title: "dars jadvali", href: "/"
    },
    {
        icon: <FontAwesomeIcon icon={faAddressBook} />, title: "jurnal", href: "/"
    },
    {
        icon: <FontAwesomeIcon icon={faAlignLeft} />, title: "fanlar", href: "/"
    },
]

export default SidebarData;