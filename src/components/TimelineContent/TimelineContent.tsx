import Timeline from "UI/Timeline/Timeline";
import { FC } from "react";
import { IoSchool, IoCodeSlash } from "react-icons/io5";
import { MdWork, MdWorkHistory } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";

const timelineData = [
  {
    id: 1,
    icon: <MdWorkHistory />,
    date: "April 2022 - April 2023",
    position: "Application developer (Fullstack)",
    location: "IBM",
  },
  {
    id: 2,
    icon: <GiDiploma />,
    date: "Jan 2020 - Jan 2022",
    position: "Student",
    location: "TAV College",
    content: "Mobile Applications & Web Development",
  },
  {
    id: 3,
    icon: <MdWork />,
    date: "Sep 2015 - Jan 2020",
    position: "Fullstack developer",
    location: "Inovi Technologies",
  },
  {
    id: 4,
    icon: <IoCodeSlash />,
    date: "Sep 2011 - Sep 2015",
    position: "Fullstack developer",
    location: "Softbrij IT Solutions",
  },
  {
    id: 5,
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
