import { memo, useEffect, useState } from 'react'
import { BootstrapTableWrapperStyled } from './Styled'
import left from 'src/assets/svgs/left-arrow.svg'
import right from 'src/assets/svgs/Right-arrow.svg'
import _ from 'lodash'

const Pagination = memo(({ totalPages, currentPage, onNext, onPrevious, onClick }) => {
    const [pagesData, _pagesData] = useState([])

    useEffect(() => {
        _pagesData(_.times(totalPages))
    }, [totalPages])

    useEffect(() => {
        console.log(pagesData)
    }, [pagesData])

    return (
        <BootstrapTableWrapperStyled>
            <div className='d-flex align-items-center Inspection-pagination'>
                <div className='pagination'>
                    <ul className='pagination-list d-flex align-items-center'>
                        <li>
                            <button><img src={left} /></button>
                        </li>
                        {pagesData.length >= 3
                            ?

                            <>
                                {currentPage <= 3
                                    ?
                                    <>
                                        <li>
                                            <button onClick={() => onClick(1)} className={currentPage == 1 ? 'active' : ''}>1</button>
                                        </li>
                                        <li>
                                            <button onClick={() => onClick(1)} className={currentPage == 2 ? 'active' : ''}>2</button>
                                        </li>
                                        <li>
                                            <button onClick={() => onClick(2)} className={currentPage == 3 ? 'active' : ''}>3</button>
                                        </li>
                                        <li>
                                            <button onClick={() => onClick(3)}>...</button>
                                        </li>
                                    </> : ''}
                                {currentPage > 3 ?
                                    <>
                                        <li>
                                            <button >...</button>
                                        </li>
                                        <li>
                                            <button onClick={() => onClick(currentPage - 1)} className='active'>{currentPage}</button>
                                        </li>
                                        {currentPage < pagesData?.length
                                            ?
                                            <>
                                                <li>
                                                    <button onClick={() => onClick(currentPage)} className={currentPage + 1 == currentPage ? 'active' : ''}>{currentPage + 1}</button>
                                                </li>
                                                <li>
                                                    <button onClick={() => onClick(currentPage + 1)} className={currentPage + 2 == currentPage ? 'active' : ''}>{currentPage + 2}</button>
                                                </li>
                                                <li>
                                                    <button >...</button>
                                                </li>
                                            </>
                                            : ''}
                                    </>
                                    : ''}

                            </>
                            : ''
                        }




                        {currentPage < pagesData?.length ?
                            < li >
                                <button><img src={right} /></button>
                            </li>
                            : ""}
                    </ul>
                </div>
            </div>
        </BootstrapTableWrapperStyled >
    )
})
export default Pagination;