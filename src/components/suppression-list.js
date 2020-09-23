import React, { useState } from 'react';
import { useTable ,usePagination,useFilters} from 'react-table';
import  'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import data from './data/data.json'
import { faEnvelope ,faPen,faTrash, faDotCircle, faUser, faUsers, faFile, faPlus, faPlusCircle, faMinusCircle, faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




function Table({columns}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex, pageSize },
        setFilter 
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 4 },

        },
        useFilters,
        usePagination,
        
    )

    const [filterInput, setFilterInput] = useState("");
  
        
     const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("lst_modifi-By",value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
        setFilterInput(value);
      };

    return (
        <div className="custom_container container">
        <div className="custom_container_sub">
            <span className="inner_lables"><FontAwesomeIcon className="mr-1 faDotCircle" icon={faDotCircle}/> Target Lists</span>
            <span className="inner_lables supression_list"><FontAwesomeIcon className="mr-1 faUser" icon={faUser}/> Supression Lists</span>
        </div>
        <div className="total_record_container">
           <div className="left_sec">
           <h3>Total Supression Records:<span className="number_of_record ml-2"><FontAwesomeIcon className="mr-1 faDotCircle" icon={faUsers}/>15,000</span></h3>    
           </div>
           <div className="right_sec">
           <Form className="">
            <Form.Group controlId="controlID" className="form_group">
            <Form.Control type="input"   value={filterInput} onChange={handleFilterChange}  placeholder="search By Supression List Name" className="mr-2" id="searchInput" />
            <DropdownButton id="dropdown-basic-button" title="List Actions">
            <Dropdown.Item href="#"><FontAwesomeIcon className="mr-2 faDotCircle" icon={faFile}/>Create Suression List</Dropdown.Item>
            <Dropdown.Item href="#"><FontAwesomeIcon className="mr-2 faDotCircle" icon={faPlusCircle}/>Add Supression Email</Dropdown.Item>
            <Dropdown.Item href="#"><FontAwesomeIcon className="mr-2 faDotCircle" icon={faMinusCircle}/>Remove Supression Email</Dropdown.Item>
            </DropdownButton>
            </Form.Group>
            </Form>
           </div>
        </div> 
        <table className="table" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    
                                )
                                
                            })}
                            <td><FontAwesomeIcon className="mr-3" icon={faEnvelope}/><FontAwesomeIcon className="mr-3" icon={faPen}/><FontAwesomeIcon className="mr-3" icon={faTrash}/></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

         {/* Design for Pagination */} 
          <div className="pagination_container">
                <div className="pagination">
                <a href="#" onClick={() => previousPage()} class="blocks"><FontAwesomeIcon  icon={faAngleDoubleLeft}/> Pre</a>
                    {pageOptions.map((pageIndex) => {
                        return (
                        <a href="#" onClick={() => gotoPage(pageIndex)} class="blocks">{pageIndex+1}</a>            
                        )
                    })}
                <a href="#" onClick={() => nextPage()} class="blocks">Next <FontAwesomeIcon  icon={faAngleDoubleRight}/></a>
                </div>
          </div>      

        </div>
    )
}

function BasicTableComponent() {
  
    const columns = [
        {
            Header : "Sr.No.",
            accessor : 'index'
        },
        {
            Header : "Supression List Name",
            accessor : 'sListName'
        },
        {
            Header : "Last Modified On",
            accessor : 'lst_Modifi-Date'
        },
        {
            Header : "Last Modified By",
            accessor : 'lst_modifi-By'
        },
        {
            Header : "Records",
            accessor : 'records'
        }
    ];

    return (
        <Table columns={columns}/>
    )
}

export default BasicTableComponent;