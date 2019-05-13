import React from 'react';
// CSS
import Table from 'react-bootstrap/Table';
import TabPane from 'react-bootstrap/TabPane';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <React.Fragment>
      <h1 className="display-4 m-3">About</h1>
      <TabContainer id="company-tab-container" defaultActiveKey="dev">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="dev">Lara Helena Roth</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tool">Stock Tool</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <TabContent>
              <TabPane eventKey="dev">
                <h4 className="mb-3">Lara Helena Roth</h4>
                <h6 className="">Profile</h6>
                <h6 className="">{`Background & Education`}</h6>
                <p className="">
                  I was born in San Francisco, CA and raised between Canada,
                  Minneapolis, and New York. After graduating high school, I
                  moved to Canada to pursue statistics in college. After one
                  year, I moved to New York to be closer to family. At Baruch
                  College (CUNY), I graduated with a bachelors in Statistics and
                  Quantitative Modeling with special permission to make half of
                  my major a computer science degree. I also graduated with a
                  minors in Women and Gender Studies.
                </p>
                <h6 className="">Professional Experience</h6>
                <p>
                  In college, I worked and had three internships. The last
                  internship became a full-time job after graduation with one
                  month off to travel in between. I was the head of the
                  development team for the Americas at{' '}
                  <a href="https://skimgroup.com/">SKIM</a>, mainly focusing on
                  the front-end shopping simulation and experience respondents
                  would interact with for market research insights. I
                  single-handedly developed the interaction for a new
                  methodology that was piloted while I was working there.
                </p>
                <p>
                  In July of 2018, I started a new position with{' '}
                  <a href="https://www.fitchratings.com/site/home">Fitch</a> as
                  a developer in Operations. There, I concentrated on the data
                  side of application development. I consulted internally to
                  create new schemas, replacing legacy application dependencies
                  for the new process automation I was developing. The processes
                  I alone automated saved analysts about 50% of their time per
                  committee as well as saved the firm about one million dollars
                  in the process.
                </p>
                <p>
                  My old bosses from SKIM joined the advanced analytics team at{' '}
                  <a href="https://www.loreal.com/">L'Oréal</a>. They asked me
                  to contract for them to build a reusable shopping platform to
                  collect insights into marketing, similar to my first full-time
                  professional role. Utilizing weekends and free weeknights, I
                  collaborated with the team at L'Oréal to deliver a analyst and
                  respondent friendly data collection tool with a nice UI.
                </p>
                <h6 className="">Personal</h6>
                <p>
                  Growing up, I was a classicly trained ballet dancer. I
                  attended the{' '}
                  <a href="https://www.joffreyballetschool.com/">
                    Joffrey Ballet School
                  </a>{' '}
                  here in New York, as well as the{' '}
                  <a href="https://www.rwb.org/">
                    Royal Winnipeg Ballet School
                  </a>
                  . My home studio,{' '}
                  <a href="https://hopkinsdance.com/">Hopkins Dance Center</a>{' '}
                  is where I would call the studio home. Currently, I plan to
                  complete my yoga teacher training certificate by the end of
                  2019 with the vision of teaching at least one class a week and
                  maintain a fitness lifestyle attending Steps on Broadway every
                  so often and eating well. I am a proud mother of Lieba the
                  black cat and maintain a very close relationship with my
                  brother, sister, and mother.
                </p>
              </TabPane>
              <TabPane eventKey="tool">
                <h4 className="mb-3">Stock Tool Application</h4>
                <p>This tool was built in the React Redux environment.</p>
                <h6 className="">Stock Information</h6>
                <p>
                  I found the <a href="https://iexcloud.io/">IEX Cloud</a> api
                  while researching stock apis alternative to Yahoo. They source
                  their real-time information during stock hours from{' '}
                  <a href="https://iextrading.com/">Investors Exchange</a>.
                </p>
                <h6 className="">Dependencies</h6>
                <Table>
                  <thead>
                    <tr>
                      <th>Library</th>
                      <th>Version</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>axios</th>
                      <th>0.18.0</th>
                    </tr>
                    <tr>
                      <th>bootstrap</th>
                      <th>4.3.1</th>
                    </tr>
                    <tr>
                      <th>fusioncharts</th>
                      <th>3.13.4</th>
                    </tr>
                    <tr>
                      <th>moment</th>
                      <th>2.24.0</th>
                    </tr>
                    <tr>
                      <th>moving-averages</th>
                      <th>4.0.5</th>
                    </tr>
                    <tr>
                      <th>react-big-calendar</th>
                      <th>0.20.4</th>
                    </tr>
                    <tr>
                      <th>react-bootstrap</th>
                      <th>1.0.0-beta.8</th>
                    </tr>
                    <tr>
                      <th>react-fusioncharts</th>
                      <th>3.0.0</th>
                    </tr>
                    <tr>
                      <th>react-router-dom</th>
                      <th>5.0.0</th>
                    </tr>
                    <tr>
                      <th>redux</th>
                      <th>4.0.1</th>
                    </tr>
                    <tr>
                      <th>redux-thunk</th>
                      <th>2.3.0</th>
                    </tr>
                  </tbody>
                </Table>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </React.Fragment>
  );
}
