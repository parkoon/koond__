import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../themes/palette'
import Icon from '../Icon'
import Text from '../Text'

const TABLE_SIZE = {
  default: '16px',
  middle: '12px 8px',
  small: '8px',
}

const tableSize = ({ size }) => TABLE_SIZE[size]

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 320px;
  color: ${palette.grayscale[4]};
`
type StyledLoadingProps = {
  loading: boolean
}
const StyledLoading = styled.div<StyledLoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s;
  opacity: ${props => (props.loading ? 0.8 : 0)};
  background: ${palette.white};
`

type StyledTableWrapperProps = {
  yScroll: boolean
}
const StyledTableWrapper = styled.div<StyledTableWrapperProps>`
  position: relative;
  ${props =>
    props.yScroll &&
    css`
      max-height: 240px;
      overflow-y: scroll;
    `}
`

type StyledTable = {
  tableLayout?: 'fixed' | undefined
}
const StyledTable = styled.table<StyledTable>`
  border-collapse: collapse;
  width: 100%;

  table-layout: ${props => (props.tableLayout === 'fixed' ? 'fixed' : 'auto')};
`

type TableRowProps = {
  yScroll: boolean
  size: 'small' | 'middle' | 'default'
}
const TableRow = styled.tr<TableRowProps>`
  cursor: default;
  transition: background 0.3s;

  th,
  td {
    padding: ${tableSize};
    border-bottom: 1px solid ${palette.outline};
  }

  th {
    font-weight: 500;
    color: ${palette.grayscale[1]};
    background: #fafafa;

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
  /** 로딩 여부 */
  loading?: boolean

  /** 스크롤 여부 */
  yScroll?: boolean

  /** Table 타이틀 { key: string | number, title: string } */
  columns: columProps[]

  /** Table 데이터 */
  dataSource?: object[] | undefined

  /** Table layout */
  tableLayout?: 'fixed' | undefined

  /** Table size 'small' | 'middle' | 'default' */
  size?: 'small' | 'middle' | 'default'
}

function Table({ columns, loading, tableLayout, dataSource, yScroll, size }: TableProps) {
  const columnKeys = Object.keys(columns)
  return (
    <StyledTableWrapper yScroll={yScroll}>
      <StyledTable tableLayout={tableLayout}>
        <thead>
          <TableRow yScroll={yScroll} size={size}>
            {columns && columns.map(col => <th key={col.key}>{col.title}</th>)}
          </TableRow>
        </thead>
        <tbody>
          {dataSource ? (
            dataSource.map((data, idx) => (
              <TableRow yScroll={yScroll} size={size} key={idx}>
                {columnKeys.map(key => (
                  <td key={key}>{data[columns[key].key]}</td>
                ))}
              </TableRow>
            ))
          ) : (
            <td colSpan={columnKeys.length}>
              <StyledEmpty>
                <Icon name="no-data" size={50} style={{ marginBottom: '12px' }} />
                <Text color={palette.grayscale[4]}>No Data</Text>
              </StyledEmpty>
            </td>
          )}
        </tbody>
      </StyledTable>

      <StyledLoading loading={loading}>
        <Icon name="loading" spin size={20} />
      </StyledLoading>
    </StyledTableWrapper>
  )
}

Table.defaultProps = {
  yScroll: false,
  tableLayout: undefined,
  size: 'default',
  loading: false,
}

export default Table
