import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../../themes/palette'
import Icon from '../../general/Icon'
import Typography from '../../general/Typography'
import { object } from '@storybook/addon-knobs'

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 320px;
  color: ${palette.grayscale[4]};
`

const StyledTableWrapper = styled.div`
  ${props =>
    props.yScroll &&
    css`
      max-height: 240px;
      overflow-y: scroll;
    `}
`
const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
`

const TableRow = styled.tr`
  cursor: default;
  transition: background 0.3s;

  th {
    font-weight: 500;
    color: ${palette.grayscale[1]};
    background: #fafafa;
    padding: 16px;
    border-bottom: 1px solid ${palette.outline};

    ${props =>
      props.yScroll &&
      css`
        position: sticky;
        top: 0;
      `}
  }

  &:hover {
    background: ${palette.grayscale[6]};
  }

  td {
    padding: 16px;
    border-bottom: 1px solid ${palette.outline};
    text-align: center;

    &:hover {
    }
  }
`
type columProps = {
  key: string | number
  title: string
}

type TableProps = {
  loading?: boolean
  yScroll?: boolean
  columns: columProps[]
  dataSource?: object[] | undefined
}

function Table({ columns, dataSource, ...props }: TableProps) {
  const { yScroll } = props

  const columnKeys = Object.keys(columns)
  return (
    <StyledTableWrapper yScroll={yScroll}>
      <StyledTable>
        <thead>
          <TableRow {...props}>{columns && columns.map(col => <th key={col.key}>{col.title}</th>)}</TableRow>
        </thead>
        <tbody>
          {dataSource ? (
            dataSource.map((data, idx) => (
              <TableRow key={idx}>
                {columnKeys.map(key => (
                  <td key={key}>{data[columns[key].key]}</td>
                ))}
              </TableRow>
            ))
          ) : (
            <td colSpan={columnKeys.length}>
              <StyledEmpty>
                <Icon name="no-data" size={50} style={{ marginBottom: '12px' }} />
                <Typography.Text color={palette.grayscale[4]}>No Data</Typography.Text>
              </StyledEmpty>
            </td>
          )}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  )
}

Table.defaultProps = {
  yScroll: false,
}

export default Table
