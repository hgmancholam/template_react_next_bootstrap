import Head from "next/head";
import { Col, Row } from "reactstrap";
import SalesChart from "../../components/dashboard/SalesChart";
import Feeds from "../../components/dashboard/Feeds";
import ProjectTables from "../../components/dashboard/ProjectTable";
import ProgressCard from "../../components/dashboard/ProgressCard";
import PieChartCard from "../../components/dashboard/PieChartCard";
import TopCards from "../../components/dashboard/TopCards";
import GrowthKPICard from "../../components/dashboard/GrowthKPICard ";
import RadialBarChartCard from "../../components/dashboard/RadialBarChartCard";
import Blog from "../../components/dashboard/Blog";
import bg1 from "../../assets/images/bg/bg1.jpg";
import bg2 from "../../assets/images/bg/bg2.jpg";
import bg3 from "../../assets/images/bg/bg3.jpg";
import bg4 from "../../assets/images/bg/bg4.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUsers, faChartLine } from "@fortawesome/free-solid-svg-icons";

library.add(faUsers, faChartLine);
const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const dataPie = [
  { name: "Categoría 1", value: 40 },
  { name: "Categoría 2", value: 30 },
  { name: "Categoría 3", value: 20 },
  { name: "Categoría 4", value: 10 },
];
const colorsPie = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const dataRadial = [
  { name: "Category 1", value: 31, fill: "#8884d8" },
  { name: "Category 2", value: 28, fill: "#82ca9d" },
  { name: "Category 3", value: 20, fill: "#ffc658" },
  { name: "Category 4", value: 10, fill: "#ff8042" },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>ENCA admin panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/***Top Cards***/}
        <Row>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-success text-success"
              title="Profit"
              subtitle="Yearly Earning"
              earning="$21k"
              icon="bi bi-wallet"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="Refund given"
              earning="$1k"
              icon="bi bi-coin"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="New Project"
              subtitle="Yearly Project"
              earning="456"
              icon="bi bi-basket3"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-into"
              title="Sales"
              subtitle="Weekly Sales"
              earning="210"
              icon="bi bi-bag"
            />
          </Col>
        </Row>
        {/***Progress Cards***/}
        <Row>
          <Col sm="6" lg="3">
            <ProgressCard title="Indicador 1" percentage="10" />
          </Col>
          <Col sm="6" lg="3">
            <ProgressCard title="Indicador 2" percentage="30" />
          </Col>
          <Col sm="6" lg="3">
            <ProgressCard title="Indicador 3" percentage="80" />
          </Col>
          <Col sm="6" lg="3">
            <ProgressCard title="Indicador 4" percentage="100" />
          </Col>
        </Row>
        <Row>
          <Col sm="6" lg="3">
            <PieChartCard data={dataPie} colors={colorsPie} />
          </Col>{" "}
          <Col sm="6" lg="3">
            <PieChartCard data={dataPie} colors={colorsPie} />
          </Col>{" "}
          <Col sm="6" lg="3">
            <PieChartCard data={dataPie} colors={colorsPie} />
          </Col>{" "}
          <Col sm="6" lg="3">
            <PieChartCard data={dataPie} colors={colorsPie} />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <RadialBarChartCard data={dataRadial} />
          </Col>
        </Row>
        <Row>
          {/* Growth KPI CARD */}
          <Col sm="6" lg="3">
            <GrowthKPICard value={1500} icon={faChartLine} growth={15} />
          </Col>
          <Col sm="6" lg="3">
            <GrowthKPICard value={1500} icon={faChartLine} growth={15} />
          </Col>
          <Col sm="6" lg="3">
            <GrowthKPICard value={1500} icon={faChartLine} growth={15} />
          </Col>
          <Col sm="6" lg="3">
            <GrowthKPICard value={1500} icon={faChartLine} growth={15} />
          </Col>
        </Row>

        {/***Sales & Feed***/}
        <Row>
          <Col sm="12" lg="6" xl="7" xxl="8">
            <SalesChart />
          </Col>
          <Col sm="12" lg="6" xl="5" xxl="4">
            <Feeds />
          </Col>
        </Row>
        {/***Table ***/}
        <Row>
          <Col lg="12" sm="12">
            <ProjectTables />
          </Col>
        </Row>
        {/***Blog Cards***/}
        <Row>
          {BlogData.map((blg) => (
            <Col sm="6" lg="6" xl="3" key={blg.title}>
              <Blog
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
