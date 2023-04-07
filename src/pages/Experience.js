import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2015-2016'
        iconStyle={{background : "#3e497a", color:"#fff"}}
        icon={<SchoolIcon/>}>
          <h2 className='vertical-timeline-element-title'>Ingraham Insitute Senior Secondary English School, Aligarh, UTTAR PRADESH</h2>
        <p>Higher Secondary Education</p></VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            S.V.M Sr. Sec. English School,Aligarh,UTTAR PRADESH
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Senior Secondary Education
          </h4>

          <p> PCM With PHE & Hindi</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Raj Kumar Goel Insitute of Technology ,Ghaziabad,UTTAR PRADESH
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            AKTU
          </h4>
          <p>Information Technology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Nagarro,Pvt. Ltd.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Associate Software Engineer - JAVA
          </h4>
          <p>
            Under the training for various different projects on different technologies under the guidance of mentors 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience