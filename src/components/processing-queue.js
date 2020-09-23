import React from 'react';
import processingQueuData from '../components/data/proessing-queue.json'
import  'bootstrap/dist/css/bootstrap.min.css';
import "./component-style/processing.css";
import LazyLoad from 'react-lazyload';







function ProcessingQueueComponent() {
    return (
        <div className="custom_container container processing-queue-section">
        <div className="custom_container_sub queue_container">
            <span className="inner_lables queue_label"> Processing Queue</span>
            <a href="#" className="view_supression_link">View Supression List History</a>
        </div>
        <LazyLoad height={200}>
        {processingQueuData.map((data) => {
            return (
                <div className="processing-queue-container">
            <div className="processing-queue-date">
            <span>{data.updatedDate}</span>
            </div>
            <div className="processing-queue-content">
            <h3 className="processing-queue-content_header">{data.subject}</h3>
                <div className="row">
                    <div className="col-md-2 processing-queue_cell">
                        <div className="inner_header">Inputs Records</div>
                        <div className="inner_content">{data.records}</div>
                    </div>
                    <div className="col-md-2 processing-queue_cell">
                        <div className="inner_header">Valid Records</div>
                        <div className="inner_content">{data.validRecords}</div>
                    </div>
                    <div className="col-md-2 processing-queue_cell">
                        <div className="inner_header">Actions</div>
                        <div className="inner_content">{data.action}</div>
                    </div>
                    <div className="col-md-2 processing-queue_cell">
                        <div className="inner_header">By</div>
                        <div className="inner_content">{data.by}</div>
                    </div>
                    <div className="col-md-2 processing-queue_cell">
                        <div className="inner_header">Lists</div>
                        <div className="inner_content">{data.lists}</div>
                    </div>
                    <div className="col-md-2 processing-queue_cell">
                        {data.status === 'Queued'?<span className="blue-circle indicator"></span>:<span className="orange-circle indicator"></span>}
                        <div className="status_label">In Progress</div>
                    </div>
                </div>
            </div>
        </div>
            )
        })}
        </LazyLoad>
        </div>
    )
}

export default ProcessingQueueComponent;