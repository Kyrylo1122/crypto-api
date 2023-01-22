import { useState } from "react";
import { color } from "styled-system";
import { Box } from "../Box";

const timeRange = [1, 7, 30, 180, 360];
export default function TimeChartButtons({ setTime }) {
  const [active, setActive] = useState(0);
  return (
    <Box as="ul" m="-5px" display="flex" justifyContent="center">
      {timeRange.map((day, index) => (
        <Box as="li" m="5px" key={day}>
          <button
            type="button"
            style={{
              color: "white",
              outline: "none",
              backgroundColor:
                index === active
                  ? "rgb(53, 162, 235)"
                  : "rgba(170, 216, 247, 0.5)",
            }}
            onClick={() => {
              setActive(index);
              setTime(day);
            }}
          >
            {day}
            {day === 1 ? " Day" : " Days"}
          </button>
        </Box>
      ))}
    </Box>
  );
}
