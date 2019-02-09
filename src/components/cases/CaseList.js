import React from 'react'
import CaseSummary from './CaseSummary'
import { Link } from 'react-router-dom'

const CaseList = ({cases}) => {
    console.log(cases);
const CaseSummaryList = cases && cases.map(file => {
    return <Link to={'/case/' + file.id}>
    <CaseSummary file={file} key={file.id} />
    </Link>
})
console.log(CaseSummaryList);
    return (
        <div className="case-list section">
             {CaseSummaryList}
        </div>
    )
}
export default CaseList