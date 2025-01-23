import { FaBookReader, FaCcMastercard, FaFileContract, FaFileMedical, FaIdCard, FaUserFriends, FaUsers } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdDashboard, MdWeb, MdDiscFull, MdPayment } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { GiTicket } from "react-icons/gi";
import { SiConvertio, SiQzone } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";
import { PiScrollFill } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa6";
import { useEffect } from "react";
import { getLength } from "../../../api/login/Login";
import { CgAttribution } from "react-icons/cg";

export const navigationData = (count) => {
  const membersTypes = [];
  count?.user?.forEach(element => {
    membersTypes.push({
      uniqueId: element._id,
      id: element._id,
      title: element?.memeberType + `(${element?.count})`,
      path: `member-list/${element._id}/${element.memeberType}`,
    });
  });
  membersTypes.push({
    uniqueId: "submenu_2_3",
    id: "3",
    title: "Suspended User",
    path: "suspended-users",
  });

  return [
    {
      uniqueId: "menu_2",
      id: "2",
      title: "Members",
      icon: <FaUserFriends />,
      subMenus: membersTypes,
    },
    {
      uniqueId: "menu_6",
      id: "6",
      title: "Masters",
      icon: <FaCcMastercard />,
      subMenus: [
        {
          uniqueId: "submenu_6_1",
          id: "1",
          title: "Bank Master",
          path: "bank-master",
        },
        {
          uniqueId: "submenu_6_2",
          id: "2",
          title: "Role Master",
          path: "role-master",
        },
        {
          uniqueId: "submenu_6_s4",
          id: "4s",
          title: "Course Master",
          path: "course-master",
        },
        {
          uniqueId: "submenu_6_5",
          id: "5",
          title: "Stream Master",
          path: "stream-master",
        },
        {
          uniqueId: "submenu_6_6",
          id: "6",
          title: "Package Master",
          path: "package-master",
        },
        {
          uniqueId: "submenu_6_7",
          id: "7",
          title: "College Types",
          path: "college_types",
        },
        {
          uniqueId: "submenu_6_8",
          id: "8",
          title: "Affiliated",
          path: "affilated-by",
        },
        {
          uniqueId: "submenu_6_12",
          id: "12",
          title: "Credit Cards",
          path: "credit-cards",
        },
        {
          uniqueId: "submenu_6_13",
          id: "13",
          title: "Approval",
          path: "approval",
        },
        {
          uniqueId: "submenu_6_9",
          id: "9",
          title: "Lead Status",
          path: "lead-status",
        },
        {
          uniqueId: "submenu_6_10",
          id: "10",
          title: "Lead Sub Status",
          path: "lead-sub-status",
        },
        {
          uniqueId: "submenu_6_11",
          id: "11",
          title: "Lead Source",
          path: "lead-source",
        },
        {
          uniqueId: "submenu_15_52ds",
          id: "99sw",
          title: "Package Sales Report ",
          path: "Package-Sales-Report",
        },
      ]
    },
    {
      uniqueId: "menu_6a",
      id: "6a",
      title: "Colleges",
      icon: <FaCcMastercard />,
      subMenus: [
        {
          uniqueId: "submenu_6_1a",
          id: "1",
          title: "Add Colleges",
          path: "list-colleges",
        },
      ]
    },
    {
      uniqueId: "menu_14",
      id: "14",
      title: "Help & support",
      icon: <IoIosPeople />,
      subMenus: [
        {
          uniqueId: "submenu_15_5",
          id: "5",
          title: " Ticket List",
          path: "disputes/welcome",
        },
        {
          uniqueId: "submenu_15_6",
          id: "6",
          title: "Status Master",
          path: "dmt-status/welcome",
        },
        {
          uniqueId: "submenu_15_7",
          id: "7",
          title: "Priority Master",
          path: "priority-master/welcome",
        },
        {
          uniqueId: "submenu_6_22",
          id: "223",
          title: "Department  Master",
          path: "department-master",
        },
        {
          uniqueId: "submenu_12s_2",
          id: "2s",
          title: "User Type",
          path: "user-type",
        },
        {
          uniqueId: "submenu_13s_3",
          id: "2s",
          title: "Complainant Dashboard",
          path: "employees-complaints-dashboard",
        },
        {
          uniqueId: "submenu_14s_3",
          id: "2s",
          title: "Create Complainant",
          path: "Create-Complaint",
        },
        {
          uniqueId: "submenu_15s_3",
          id: "2s",
          title: "List Complainant",
          path: "list-Complaint",
        },
      ],
    },
    {
      uniqueId: "menu_18",
      id: "18",
      title: "Staff Module",
      icon: <PiScrollFill />,
      subMenus: [
        {
          uniqueId: "submenu_18_5",
          id: "5",
          title: " Add  Staff",
          path: "add-staff",
        },
        {
          uniqueId: "submenu_18_6",
          id: "6",
          title: "List  Staff",
          path: "staff-list",
        },
      ],
    },
    {
      uniqueId: "menu_19",
      id: "19",
      title: "Staff Address",
      icon: <FaAddressCard />,
      subMenus: [
        {
          uniqueId: "submenu_19_5",
          id: "5",
          title: "Building Master",
          path: "building-master",
        },
        {
          uniqueId: "submenu_19_7",
          id: "5",
          title: "Floor Master",
          path: "floor-master",
        },
        {
          uniqueId: "submenu_19_1",
          id: "5",
          title: "Area Master",
          path: "area-master",
        },
        {
          uniqueId: "submenu_21_1",
          id: "7",
          title: "Ward Master",
          path: "ward-master",
        },
        {
          uniqueId: "submenu_19_6",
          id: "5",
          title: "Block Master",
          path: "block-master",
        },
        {
          uniqueId: "submenu_20_6",
          id: "6",
          title: "Office Master",
          path: "office-master",
        },
        {
          uniqueId: "submenu_20_7",
          id: "7",
          title: "Departments Master",
          path: "departments-master",
        },
        {
          uniqueId: "submenu_20_8",
          id: "8",
          title: "Designation Master",
          path: "designation-master",
        },
      ],
    }];
};
