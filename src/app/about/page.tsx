import type { Metadata } from "next";
import Image from "next/image";
import Slider from "../components/Home/Slider";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const metadata: Metadata = {
  title: "About",
};
export default function About() {
  return (
    <>
      <Slider></Slider>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5   align-items-stretch">
            <div className="col-lg-6">
              <div className="about-image mt-5">
                <img
                  src={`${basePath}/images/about/Goyco.jpg`}
                  className="img-fluid rounded-4"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="section-title"> ABOUT US </span>

              <p>
                Goyco Business Solutions Private Limited (GBSPL) is built for
                Would Be / Currently Entrepreneurs / Entities in India — whether
                they are planning to start a business, are already running one,
                or are looking to grow, expand or strengthen their operations.
                We aim to provide comprehensive business solutions covering the
                various needs and requirements that arise throughout an
                entrepreneur’s/entity’s business journey. We believe that
                entrepreneurs should be able to access the right people,
                services, technology, products and professional support without
                having to manage multiple disconnected resources. We are a
                professionally managed business solutions company focussed on
                creating and delivering reliable infrastructure, operational
                support and business solutions for organisations across
                different stages of growth of the Would Be / Currently
                Entrepreneurs / Entities. We understand that running or growing
                any business requires more than a product or service. GBSPL
                works to bridge this gap and provides efficient , flexible and
                reliable business oriented services and solutions to meet the
                modern day professional requirements. As our network and
                capabilities grow, we aim to continuously expand the range of
                solutions available to businesses, while remaining practical,
                accessible and focused on the evolving needs of entrepreneurs
                and entities.
              </p>

              <div className="row mt-5">
                <div className="col-6">
                  <div className="counter-card">
                    <h3>3+</h3>

                    <p>Solutions</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="counter-card">
                    <h3>30+</h3>

                    <p>Subnational Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Mission & Vision</h2>

            <p className="text-muted">
              Building technology that empowers businesses.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="mission-card h-100">
                <div className="d-flex align-items-center">
                  <div className="icon-circle">
                    <i className="bi bi-bullseye"></i>
                  </div>

                  <h3 className="ps-3">Our Mission</h3>
                </div>

                <p className="mt-2">
                  To build a stronger business ecosystem, create new
                  opportunities, and achieve new milestones through innovation,
                  collaboration, and trusted solutions.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mission-card h-100">
                <div className="d-flex align-items-center">
                  <div className="icon-circle">
                    <i className="bi bi-stars"></i>
                  </div>

                  <h3 className="ps-3">Our Vision</h3>
                </div>

                <p className="mt-2">
                  To be a trusted business ecosystem that connects organizations
                  with the right expertise, technology, products, and support to
                  grow and succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="team-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">Our Team</span>
            <h2 className="fw-bold mt-2">Meet Our Leadership</h2>
            <p className="text-muted">
              Experienced professionals committed to innovation, excellence, and
              delivering exceptional value.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 offset-3 col-md-6">
              <div className="team-card">
                <div className="team-image">
                  <Image
                    height={90}
                    width={90}
                    src={`${basePath}/images/ceo.jpg`}
                    alt=""
                  ></Image>
                </div>

                <div className="team-content">
                  <h4>John Anderson</h4>

                  <span className="designation"> Chief Executive Officer </span>

                  <p>
                    Visionary leader driving innovation, strategy and long-term
                    business growth.
                  </p>

                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-image">
                  <Image
                    height={90}
                    width={90}
                    src={`${basePath}/images/ceo.jpg`}
                    alt=""
                  ></Image>
                </div>

                <div className="team-content">
                  <h4>John Anderson</h4>

                  <span className="designation"> Chief Executive Officer </span>

                  <p>
                    Visionary leader driving innovation, strategy and long-term
                    business growth.
                  </p>

                  <div className="team-social">
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
