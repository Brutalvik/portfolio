import SpinnerItem from "UI/Spinner/SpinnerItem";
import { FC, Suspense } from "react";
import styles from "./Timeline.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useAppSelector } from "app/hooks";
import { TimelineDataInterface, TimelineInterface } from "features/interfaces";

const Timeline: FC<TimelineInterface> = ({ data }) => {
  const { darkMode } = useAppSelector((state) => state.theme);
  return (
    <Suspense fallback={<SpinnerItem />}>
      <div className={styles.container}>
        <VerticalTimeline>
          {data?.map(
            ({
              id,
              icon,
              date,
              position,
              location,
              content,
            }: TimelineDataInterface) => {
              return (
                <VerticalTimelineElement
                  key={id}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: darkMode
                      ? "var(--light-text)"
                      : "var(--dark-text)",
                    color: darkMode
                      ? "var(--dark-background)"
                      : "var(--light-background)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date={date}
                  iconStyle={{
                    background: darkMode
                      ? "var(--light-text)"
                      : "var(--dark-text)",
                    color: darkMode
                      ? "var(--light-background)"
                      : "var(--dark-background)",
                  }}
                  icon={icon}
                >
                  <div className={darkMode ? styles.light : styles.dark}>
                    <h3 className="vertical-timeline-element-title">
                      {position}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {location}
                    </h4>
                    <p>{content}</p>
                  </div>
                </VerticalTimelineElement>
              );
            }
          )}
        </VerticalTimeline>
      </div>
    </Suspense>
  );
};

export default Timeline;
