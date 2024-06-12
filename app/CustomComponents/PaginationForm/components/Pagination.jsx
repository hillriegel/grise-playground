import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Select from '@mui/material/Select';


export default function Pagination({ itemsDisplayed, setItemsDisplayed }) {

    const handleChangeRowsPerPage = (event) => {
        setItemsDisplayed((prev) => ({
            ...prev,
            rowsPerPage: event.target.value
        }));
    }


    const handlePageClick = (loc) => {
        switch (loc) {
            case 'first': 
                setItemsDisplayed((prev) => ({
                    ...prev,
                    rangeStart: 0,
                    pageNumber: 1,
                    rangeEnd: itemsDisplayed.rowsPerPage,
                }));

                break;
            case 'prev':
                setItemsDisplayed((prev) => ({
                    ...prev,
                    pageNumber: itemsDisplayed.pageNumber - 1,
                    rangeStart: itemsDisplayed.rangeStart - itemsDisplayed.rowsPerPage,
                    rangeEnd: (itemsDisplayed.rangeStart - 1) * itemsDisplayed.rowsPerPage,
                }));
                console.log('prev');
                break;
            case 'next':
                setItemsDisplayed((prev) => ({
                    ...prev,
                    pageNumber: itemsDisplayed.pageNumber + 1,
                    rangeStart: itemsDisplayed.rangeStart + itemsDisplayed.rowsPerPage,
                    rangeEnd: itemsDisplayed.rangeEnd + itemsDisplayed.rowsPerPage,
                }));
                console.log('next');
                break;
            case  'last':
                setItemsDisplayed((prev) => ({
                    ...prev,
                    pageNumber: itemsDisplayed.totalItems / itemsDisplayed.rowsPerPage,
                    rangeStart: itemsDisplayed.totalItems - itemsDisplayed.rowsPerPage,
                    rangeEnd: itemsDisplayed.totalItems
                }));
                break;
            default:
                break;

        }
    }


    return (
        <div className={"pagination"}>
            <div>
                rows {itemsDisplayed.rangeStart + 1} to {itemsDisplayed.rangeEnd} of {itemsDisplayed.totalItems}
            </div>
            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 80}} style={{color: "#ffffff"}}>
                 <InputLabel id="demo-simple-select-standard-label" style={{color: "#ffffff"}}> rows per page</InputLabel>
                    <Select
                        id="number-of-rows-select"
                        value={itemsDisplayed.rowsPerPage}
                        label="rows"
                        onChange={(e) => handleChangeRowsPerPage(e)}
                        style={{color: "#ffffff"}}
                    >
                        <MenuItem value={5} >5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="button-bar">
                <button 
                    onClick={() => handlePageClick('first')}
                    className="button"
                >
                    <FirstPageIcon style={{width: '19px'}} />
                </button>
                <button 
                    onClick={() => handlePageClick('prev')}
                    className="button"
                    >&nbsp;<ArrowBackIosIcon style={{width: '12px'}} /></button>
                <button 
                    onClick={() => handlePageClick('next')}
                    className="button"
                    >
                        <ArrowForwardIosIcon  style={{width: '12px'}}/>
                    </button>
                <button 
                    onClick={() => handlePageClick('last')}
                    className="button"
                    >
                        <LastPageIcon style={{width: '19px'}}/> 
                    </button>
            </div>
        </div>
    )
}