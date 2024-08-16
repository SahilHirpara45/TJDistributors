import styled from 'styled-components'

export const ManageInspectionWrapper = styled.div`
  display: flex;
  flex-flow: column;

  margin-top: 14px;

  .text_link {
    text-decoration: none;
  }

  .inspections_text,
  .maintain_text,
  .completed_text,
  .customers_text {
    font-weight: 500;
    font-size: 20px;
    color: #262627;
  }

  .inspections_text,
  .completed_text {
    margin-bottom: 30px;
  }

  .maintain_text {
    margin-bottom: 20px;
  }

  .button_wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    margin-bottom: 30px;
  }

  .customers_text {
    margin-bottom: 60px;
  }
  .pagination{
    margin:0;
  }
  .pagination .page-item{
    margin-right:14px;
  }
  .pagination .page-item:last-child{
    margin-right:0;
  }
  .pagination .page-item.active .page-link{
    background-color:#E82225;
    color: #FFFFFF;
    box-shadow: 0px 6px 15px rgba(232, 34, 37, 0.15);
  }
  .pagination .page-item .page-link .sr-only{
    display:none;
  }
  .pagination .page-item .page-link{
    border-radius: 10px !important;
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
  @media (max-width: 1599px) {
    .inspections_text,
    .maintain_text,
    .completed_text,
    .customers_text {
      font-size: 16px;
    }
  }
`

export const InfoCardWrapper = styled.div`
  display: inline-block;
  width: 100%;
`

export const DoneButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
`

export const AddButtonWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`

export const TelescopingButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
`
