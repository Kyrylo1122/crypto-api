import CoinRowMarkup from "../CoinRowMarkup";
import { Table } from "./index.styled";
export default function TableCoinSet({ coins }) {
  return (
    <Table>
      <thead>
        <tr>
          <th># </th>
          <th>Name</th>
          <th>Price</th>
          <th>Price changed in 24H</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => (
          <tr key={coin.id}>
            <CoinRowMarkup coin={coin} />
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
