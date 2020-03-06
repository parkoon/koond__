import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../../themes/palette'

const stickyHeader = () => {
  console.log('zz')
  return `;`
}

const StyledTableWrapper = styled.div`
  max-height: 240px;
  overflow-y: scroll;
`
const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
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

    &:hover {
    }
  }
`

type TableProps = {
  loading?: boolean
  yScroll?: boolean
}

function Table({ ...props }: TableProps) {
  return (
    <StyledTableWrapper>
      <StyledTable>
        <thead>
          <TableRow {...props}>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Tags</th>
            <th>Action</th>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
          <TableRow>
            <td>parkoon</td>
            <td>19</td>
            <td>secret</td>
            <td>bla bal</td>
            <td>action</td>
          </TableRow>
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  )
}

Table.defaultProps = {
  yScroll: false,
}

export default Table
