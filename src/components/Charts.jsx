import { useSelect } from "@mui/base"
import { Card, Title, LineChart } from "@tremor/react"
import { useSelector } from "react-redux"

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock)

  const salesData = sales.map((item) => ({
    date: item.createds,
    sale: Number(item.price_total),
  }))

  return (
    <Card className="mt-6">
      <Title>Total Sales</Title>
      <LineChart
        className="mt-6"
        data={salesData}
        index="date"
        categories={["sale"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  )
}
export default Charts
