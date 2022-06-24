import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { CircularProgress } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { chartDays } from "../../utils/data";
import { getHistoricalChart } from "../../utils/api";
import Container from "./Container";
import { ThemeContext } from "styled-components";
import ButtonGroup from "./ButtonGroup";
import SelectButton from "./SelectButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinInfo = ({ coin, currency, symbol }) => {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    axios.get(getHistoricalChart(coin.id, days, currency)).then((res) => {
      setHistoricData(res.data.prices);
    });
    setLoaded(true);
  }, [days, currency, coin]);

  return (
    <Container>
      {loaded ? (
        <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price (Past ${days} ${
                  days === 1 ? "day" : "days"
                }) in ${currency.toUpperCase()}`,
                borderColor: `${theme.mode === "dark" ? "#bebebe" : "#414141"}`,
              },
            ],
          }}
          options={{
            responsive: true,
            elements: { point: { radius: 1 } },
            scales: {
              x: { grid: { display: false } },
            },
          }}
        />
      ) : (
        <CircularProgress color="inherit" />
      )}
      <ButtonGroup>
        {chartDays.map((day) => (
          <SelectButton
            key={day.value}
            selected={day.value === days}
            onClick={() => setDays(day.value)}
          >
            {day.label}
          </SelectButton>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default CoinInfo;
