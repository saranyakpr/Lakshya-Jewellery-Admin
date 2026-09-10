import { useMemo, useState } from 'react'
import DataTable from './DataTable'
import TablePagination from './TablePagination'

function PaginatedDataTable({ columns, rows, rowKey, minWidthClassName, pageSize = 10, itemLabel = 'items' }) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalItems = rows.length
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const activePage = Math.min(currentPage, totalPages)

  const paginatedRows = useMemo(() => {
    const start = (activePage - 1) * pageSize
    return rows.slice(start, start + pageSize)
  }, [rows, activePage, pageSize])

  const startItem = totalItems === 0 ? 0 : (activePage - 1) * pageSize + 1
  const endItem = Math.min(activePage * pageSize, totalItems)
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <>
      <DataTable columns={columns} rows={paginatedRows} rowKey={rowKey} minWidthClassName={minWidthClassName} />

      {totalItems > pageSize ? (
        <TablePagination
          label={`Showing ${startItem}-${endItem} of ${totalItems} ${itemLabel}`}
          pages={pages}
          activePage={activePage}
          onPageChange={setCurrentPage}
          onPrev={() => setCurrentPage((page) => Math.max(1, page - 1))}
          onNext={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
        />
      ) : null}
    </>
  )
}

export default PaginatedDataTable
