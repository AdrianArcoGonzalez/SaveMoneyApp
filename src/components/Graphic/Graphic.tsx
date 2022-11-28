import ReactEcharts from "echarts-for-react";
import { GraphicData } from "../../interfaces/interfaces";
import GraphicStyled from "./GraphicStyled";

interface GraphicProps {
  data: GraphicData[];
}

const Graphic = ({ data }: GraphicProps): JSX.Element => {
  const option = {
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        name: "Expense",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: true,

        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };
  return (
    <GraphicStyled>
      <h2 className="title">Expenses</h2>
      <ReactEcharts
        option={option}
        style={{ width: "320px", height: "320px" }}
      ></ReactEcharts>
    </GraphicStyled>
  );
};

export default Graphic;
