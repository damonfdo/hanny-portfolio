import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { useEffect, useState } from "react";
import LazyLoad from 'react-lazy-load';


export const Projects = ({ data }) => {
  return (
    <section className="project" id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Portfolio</h2>

                  {/* <p>{document.data}</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">

                    <Row>
                      {data.map((data, index) => {
                        return (
                          // <LazyLoad height={762}>
                          <ProjectCard
                            key={index}
                            imgUrl={`http://localhost:3000/${data.image}`}
                          // imgUrl={`http://api:3000/${data.image}`}
                          />
                          // </LazyLoad>

                        );
                      })
                      }
                    </Row>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
}


