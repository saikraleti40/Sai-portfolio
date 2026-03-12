import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> Web & App Developer</h4>
                <h5>Composol Software Pvt Ltd</h5>
              </div>
              <h3>2019-22</h3>
            </div>
            <p>
              Built 3+ complete applications using  Angular and React.js, showcasing expertise in scalable
              Front-End development and Integrated backend
              authentication using Node.js . Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Engineer Web & App Developer</h4>
                <h5>Mastercard Digital Experience Platform</h5>
              </div>
              <h3>2022-23</h3>
            </div>
            <p>
              Led two development teams on DXP, a large-scale Content Management System. Developed multiple modules using Angular & migrated critical functionalities to Node.js microservices.
              And also worked for Fintech, Fintech refers to the integration of technology into offerings by financial services companies to improve their use and delivery to consumers, here we used to develop the UI and UX part of the fintech in the Mastercard, pages and screens were developed and payment gateways were developed.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead</h4>
                <h5>Western Union</h5>
              </div>
              <h3>2023-25</h3>
            </div>
            <p>
              Western Union is a global money transfer app enabling seamless international transactions.
              It offers two convenient transfer methods Digital and retail. users can effortlessly send money across borders with just few taps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
