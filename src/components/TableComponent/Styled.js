import styled from 'styled-components'

export const BootstrapTableWrapperStyled = styled.div`
.react-bootstrap-table{
  overflow-x: auto;
}
  .table {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
    table-layout: auto;
  }
  .react-bootstrap-table {
  }
  thead {
    background: #e82225;
  }
  th {
    color: white;
    vertical-align: middle;
    padding: 15px 20px;
    white-space: nowrap;
  }
  th:first-child {
    border-top-left-radius: 5px;
  }
  th:last-child {
    border-top-right-radius: 5px;
  }
  
  td {
    color: #909090;
    vertical-align: middle;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 15px 20px;
    // word-break: break-word;
  }
  .pagination{
    margin:0;
  }
  .pagination .pagination-list{
    padding:0;
    list-style:none;
    margin:0;
  }
  .pagination .pagination-list li{
    margin-right:14px;
  }
  .pagination .pagination-list li:last-child{
    margin-right:0;
  }
  .pagination .pagination-list li button.active{
    background-color:#E82225;
    color: #FFFFFF;
    box-shadow: 0px 6px 15px rgba(232, 34, 37, 0.15);
  }
  .pagination .pagination-list li button{
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #949494;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    font-family: 'Roboto';
    background: #FFFFFF;
    border: 1px solid #DADADA;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.05);
  }
`
