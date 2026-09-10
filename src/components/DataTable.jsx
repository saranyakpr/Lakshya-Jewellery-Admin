function DataTable({ columns, rows, rowKey, minWidthClassName = 'min-w-[62rem]' }) {
  return (
    <div className='overflow-x-auto rounded-[1.8rem] border border-[#efe3ed]'>
      <table className={`w-full ${minWidthClassName} border-separate border-spacing-0 text-left`}>
        <thead className='bg-[#fbf2ff] !text-[0.82rem] !text-[#755270]'>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className='px-3 py-3'>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={rowKey ? rowKey(row, index) : index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fcf5ff]'}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`border-t border-[#f1e5f2] px-3 py-3 ${column.cellClassName ?? ''}`}
                >
                  {column.render ? column.render(row, index) : row[column.accessor ?? column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
