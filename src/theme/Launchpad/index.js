import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Slider from 'react-slick';

function Launchpad() {
  var sliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: '32.5px',
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 10000,
        settings: 'unslick'
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
return <section className="rds-resources">
    <div className="container" id="resources">

      <h2 className="section-title white">Redis Launchpad</h2>
      <h3 className="section-description white">Build fast apps faster 🚀</h3>

      <Slider className="row articles" {...sliderSettings}>
        <div className="col col--4">
          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/img/helsinki.png')} className="thumb" loading="lazy" alt="Hack1" />
              <div className="article-body">
                <span className="type">Full App</span>
                <h3 className="title">Real-time Tracking of Helsinki Transit Feeds using RedisTimeSeries and RedisGears</h3>
              </div>
              <a href="http://launchpad.redis.com/?id=project%3Aexpert-garbanzo" target="_blank" rel="noopener" className="link">Read More</a>
            </div>
          </article>
        </div>
        <div className="col col--4">
          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/img/squad.png')} className="thumb" loading="lazy" alt="Redis Enterprise Cloud sample app architecture diagram" />
              <div className="article-body">
                <span className="type">Full App</span>
                <h3 className="title">Squad health checks using RedisJSON, RediSearch and Redis Streams</h3>
              </div>
              <a href="http://launchpad.redis.com/?id=project%3Afeature-creep" target="_blank" rel="noopener" className="link">Read More</a>
            </div>
          </article>
        </div>
        <div className="col col--4">
          <article className="article">
            <div className="article-wrapper">
              <img src={useBaseUrl('/img/pattern.png')} className="thumb" loading="lazy" alt="Terminal screenshot of Python code" />
              <div className="article-body">
                <span className="type">Full App</span>
                <h3 className="title">The Pattern: Machine Learning NLP using RedisAI, RedisGears & RedisGraph</h3>
              </div>
              <a href="http://launchpad.redis.com/?id=project%3Athe-pattern" target="_blank" rel="noopener" className="link">Read More</a>
            </div>
          </article>
        </div>
      </Slider>

      <div className="cta">
        <a href="https://launchpad.redis.com" target="_blank" rel="noopener" className="btn">View More Apps</a>
      </div>

    </div>
  </section>;
}

export default Launchpad;
