import React, {ReactElement, ReactNode} from "react";
import {PaginationType} from "types/shared.type";
import {MoviesPagesSC} from "pages/moviePage/components/body/moviePageBody.styles";

export const Pagination: React.FC<PaginationType> = (props) => {
    const {totalPages, selectPage, currentPage, range} = props.options;

    const pagination = (range: number): ReactNode => {
        const totalPagesArr = [];
        if (totalPages)
            for (let i = 1; i <= totalPages; i++) {
                totalPagesArr.push(i)
            }
        const mapping = (arr: Array<number>): Array<ReactElement> => arr.map(
            (item, index) =>
                <MoviesPagesSC key={index} onClick={() => selectPage && selectPage(item)}
                               isActive={item === currentPage ? '800' : '500'}>
                    {item}
                </MoviesPagesSC>
        );
        const extremePages = (num: number): ReactElement => <MoviesPagesSC onClick={() => selectPage && selectPage(num)}>{num}</MoviesPagesSC>;
        const neighbours = (range - 1) / 2;
        const rightLimit = totalPagesArr.length - neighbours;
        if (currentPage !== null)
            if (currentPage >= neighbours + 1 && currentPage < rightLimit) {
                return (
                    <div>
                        {
                            currentPage >= neighbours + 2 ? extremePages(1) : ''
                        }
                        {
                            mapping(totalPagesArr.filter(i => i >= currentPage - neighbours && i <= currentPage + neighbours))
                        }
                        {extremePages(totalPagesArr.length)}
                    </div>
                )
            } else if (currentPage < neighbours + 1) {
                return (
                    <div>
                        {
                            mapping(totalPagesArr.filter(i => i <= range))
                        }
                        {currentPage !== null && extremePages(totalPagesArr.length)}
                    </div>
                )
            } else if (currentPage >= rightLimit) {
                return (
                    <div>
                        {extremePages(1)}
                        {
                            mapping(totalPagesArr.filter(i => i >= (totalPagesArr.length - neighbours * 2) && i <= totalPagesArr.length))
                        }
                    </div>
                )
            }
    };
    return (
        <div>
            {pagination(range)}
        </div>
    )
};