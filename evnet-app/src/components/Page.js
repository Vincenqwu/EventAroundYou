import React from 'react'
import Pagination from "react-bootstrap/Pagination"
import "./css/Page.css"

export default function Page() {
  return (
    <div>
        <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item active>{5}</Pagination.Item>
      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Item disabled>{7}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </div>
  )
}
