import Timeline from "UI/Timeline/Timeline";
import { FC } from "react";
import { IoSchool, IoCodeSlash } from "react-icons/io5";
import { MdWork, MdWorkHistory } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";

const timelineData = [
  {
    icon: <MdWorkHistory />,
    date: "April 2022 - April 2023",
    position: "Application developer (Fullstack)",
    location: "IBM",
  },
  {
    icon: <GiDiploma />,
    date: "Jan 2020 - Jan 2022",
    position: "Student",
    location: "TAV College",
    content: "Mobile Applications & Web Development",
  },
  {
    icon: <MdWork />,
    date: "Sep 2015 - Jan 2020",
    position: "Fullstack developer",
    location: "Inovi Technologies",
  },
  {
    icon: <IoCodeSlash />,
    date: "Sep 2011 - Sep 2015",
    position: "Fullstack developer",
    location: "Softbrij IT Solutions",
  },
  {
    icon: <IoSchool />,
    date: "Jun 2007 - May 2011",
    position: "Student",
    location: "AIIT",
    content: "Bachelors of Technology in Computer Science and Engineering",
  },
];

const Skills: FC = () => {
  return (
    <div>
      <Timeline data={timelineData} />
    </div>
  );
};

export default Skills;
