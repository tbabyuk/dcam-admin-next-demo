"use client"

import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";


export const PayTableRow = ({metaDoc}) => {
  
  const {teacher, week2Submitted, payday, totalPay} = metaDoc;

  const formatDate = () => {
    const date = new Date(payday)
    const options = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate
  }

  return (
    <tr>
        <td className="py-2 px-6">{teacher[0].toUpperCase() + teacher.slice("1")}</td>
        <td className="py-2 px-6">{!week2Submitted ? <MdRadioButtonUnchecked size="1.2rem" className="mx-auto" /> : <MdRadioButtonChecked size="1.2rem" color="green" className="mx-auto" />}</td>
        <td className="py-2 px-6">${totalPay && totalPay.toFixed(2)}</td>
        <td className="py-2 px-6">{formatDate()}</td>
    </tr>
  )
}