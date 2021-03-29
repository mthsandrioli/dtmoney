import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Containter } from "./styles";

export function Dashboard() {
  return (
    <Containter>
      <Summary />
      <TransactionsTable />
    </Containter>
  );
}