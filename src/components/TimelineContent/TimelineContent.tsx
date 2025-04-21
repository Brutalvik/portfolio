import Timeline from "UI/Timeline/Timeline";
import { FC } from "react";
import { IoSchool } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";

const timelineData = [
  {
    id: 1,
    icon: <MdWorkHistory />,
    date: "October 2023 - August 2024",
    position: "Fullstack Developer (Remote Contract)",
    location: "Government of Alberta",
  },
  {
    id: 2,
    icon: <MdWorkHistory />,
    date: "May 2023 - August 2023",
    position: "Senior Software Developer - Fullstack (Remote)",
    location: "GSTS (Global Spatial Technology Solutions)",
  },
  {
    id: 3,
    icon: <MdWorkHistory />,
    date: "April 2022 - April 2023",
    position: "Application developer (Fullstack)",
    location: "IBM",
  },
  {
    id: 4,
    icon: <GiDiploma />,
    date: "Jan 2020 - Jan 2022",
    position: "Student",
    location: "TAV College",
    content: "Mobile Applications & Web Development",
  },
  {
    id: 5,
    icon: <MdWorkHistory />,
    date: "Sep 2015 - Jan 2020",
    position: "Fullstack developer",
    location: "Inovi Technologies",
  },
  {
    id: 6,
    icon: <MdWorkHistory />,
    date: "Sep 2011 - Sep 2015",
    position: "Fullstack developer",
    location: "Softbrij IT Solutions",
  },
  {
    id: 7,
    icon: <IoSchool />,
    date: "Jun 2007 - May 2011",
    position: "Student",
    location: "AIIT",
    content: "Bachelors of Technology in Computer Science and Engineering",
  },
];

const TimelineContent: FC = () => {
  return (
    <div>
      <Timeline data={timelineData} />
    </div>
  );
};

export default TimelineContent;
