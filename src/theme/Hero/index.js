import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Typed from 'react-typed';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import SvgHero from '@site/src/svg/Hero';
import SvgCreate from '@site/src/svg/Create';
import SvgCreateBg from '@site/src/svg/CreateBg';
import SvgDevelop from '@site/src/svg/Develop';
import SvgDevelopBg from '@site/src/svg/DevelopBg';
import SvgExplore from '@site/src/svg/Explore';
import SvgExploreBg from '@site/src/svg/ExploreBg';
import SvgArrowRight from '@site/src/svg/ArrowRight';

function Hero() {
  return (
      <header className="rds-hero">
        <div className="container">
          <div className="row">

            <div className="col col--7">
              <h1 className="hero-title">Tax Computation</h1>

              <h2 className="hero-subtitle">
                <Typed
                    strings={['>_ For all your indirect tax needs']}
                    typeSpeed={75}
                >
                </Typed>
              </h2>

              <div className="boxes">


                <div className="box box-develop">
                  <SvgDevelopBg color="#FFFFFF" className="bg" />
                  <span className="icon">
                  <SvgDevelop color="#FFFFFF" />
                </span>
                  <div className="text">
                    <h3 className="title">Develop</h3>
                    <p className="description">Enhance, fix or add support for a new region <br/><br/> </p>
                    <span className="more">Go <SvgArrowRight color="#DC382C" /></span>
                  </div>
                  <a href={useBaseUrl('/develop/')} className="link">Read More</a>
                </div>

                <div className="box box-explore">
                  <SvgExploreBg color="#FFFFFF" className="bg" />
                  <span className="icon">
                  <SvgExplore color="#FFFFFF" />
                </span>
                  <div className="text">
                    <h3 className="title">Consume</h3>
                    <p className="description">Use tax computation in your application<br/> <br/></p>
                    <span className="more">Go <SvgArrowRight color="#DC382C" /></span>
                  </div>
                  <a href={useBaseUrl('/explore/redisinsight/')} className="link">Read More</a>
                </div>

                <div className="box box-create">
                  <SvgCreateBg color="#FFFFFF" className="bg" />
                  <span className="icon">
                  <SvgCreate color="#FFFFFF" />
                </span>
                  <div className="text">
                    <h3 className="title">FAQ</h3>
                    <p className="description">Browse through frequently asked questions</p>
                    <span className="more">Go <SvgArrowRight color="#DC382C" /></span>
                  </div>
                  <a href={useBaseUrl('/create/rediscloud')} className="link">Read More</a>
                </div>


              </div>
            </div>

            <div className="col col--5">
              <SvgHero color="#FFFFFF" className="illustration" />
            </div>

          </div>
        </div>
      </header>
  );
}

export default Hero;
