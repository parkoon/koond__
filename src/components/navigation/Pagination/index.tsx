import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

// Constants
const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

// Types
type Props = {
  total: number
  limit: number
  neighbours: number
  onChange?: (page: number) => void
  defaultCurrent?: number
  outline: boolean
}

type PaginationLinkProps = {
  current?: boolean
  outline?: boolean
}

// Functions
/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from: number, to: number, step: number = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

const pageButtonColor = ({ current }: PaginationLinkProps) => (current ? palette.primary : palette.typography.default)
const pageButtonBorder = ({ current, outline }: PaginationLinkProps) => {
  console.log(outline)
  if (current) {
    return `1px solid ${palette.button.primary}`
  }

  if (outline) {
    return `1px solid ${palette.button.outline}`
  }

  return 'none'
}

// Styled
const PaginationLink = styled.a<PaginationLinkProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: ${pageButtonBorder};

  min-width: 32px;
  height: 32px;

  margin-right: 8px;
  font-size: 14px;
  color: ${pageButtonColor};
  outline: none;
  cursor: pointer;
`

function Pagination({ limit, total, onChange, neighbours, outline, defaultCurrent, ...props }: Props) {
  const [currentPage, setCurrentPage] = useState(defaultCurrent)

  useEffect(() => {
    onChange(currentPage)
  }, [currentPage, onChange])

  // can be: 0, 1 or 2
  const pageNeighbours = Math.max(0, Math.min(neighbours, 2))

  const totalPages = Math.ceil(total / limit)

  /**
   * Let's say we have 10 pages and we set pageNeighbours to 2
   * Given that the current page is 6
   * The pagination control will look like the following:
   *
   * (1) < {4 5} [6] {7 8} > (10)
   *
   * (x) => terminal pages: first and last page(always visible)
   * [x] => represents current page
   * {...x} => represents page neighbours
   */
  const fetchPageNumbers = useCallback(() => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)

      let pages = range(startPage, endPage)

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [LEFT_PAGE, ...extraPages, ...pages]
          break
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pages = [...pages, ...extraPages, RIGHT_PAGE]
          break
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
          break
        }
      }

      return [1, ...pages, totalPages]
    }

    return range(1, totalPages)
  }, [currentPage, pageNeighbours, totalPages])

  const gotoPage = page => {
    const currentPage = Math.max(0, Math.min(page, total))

    const paginationData = {
      currentPage,
      totalPages,
      pageLimit: limit,
      totalRecords: total,
    }

    console.log(paginationData)

    setCurrentPage(currentPage)
  }

  const handleClick = page => evt => {
    evt.preventDefault()
    gotoPage(page)
  }

  const handleMoveLeft = evt => {
    evt.preventDefault()
    gotoPage(currentPage - pageNeighbours * 2 - 1)
  }

  const handleMoveRight = evt => {
    evt.preventDefault()
    gotoPage(currentPage + pageNeighbours * 2 + 1)
  }

  const pages = fetchPageNumbers()

  return (
    <>
      <ul className="pagination">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <PaginationLink outline={outline} onClick={handleMoveLeft}>
                &laquo;
              </PaginationLink>
            )
          if (page === RIGHT_PAGE)
            return (
              <PaginationLink outline={outline} onClick={handleMoveRight}>
                &raquo;
              </PaginationLink>
            )

          return (
            <PaginationLink onClick={handleClick(page)} outline={outline} current={currentPage === page}>
              {page}
            </PaginationLink>
          )
        })}
      </ul>
    </>
  )
}

Pagination.defaultProps = {
  defaultCurrent: 1,
  outline: false,
}

export default Pagination
