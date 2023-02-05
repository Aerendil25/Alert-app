import React from "react";

const Notes = () => {
  return (
    <div className="notes-flex">
      <div className="notes-card">
          <h4>
              Add notes
          </h4>
          <textarea name="textarea" rows="5" cols="25">Write something here...</textarea>
          <button type="button" class="btn btn-success">Submit</button>
      </div>
      <div className="relic-slpunk-container">
        <div className="newrelic-card">
            <h4>
                New Relic query
            </h4>
            <div className="newrelic-data">data</div>
        </div>
        <div className="splunk-card">
            <h4>
                Splunk Query
            </h4>
            <div className="splunk">data</div>
        </div>
      </div>
      <div className="image-card">
          <h5>
              Upload image...
          </h5>
          <input type="textarea"/>
          <button type="button" class="btn btn-success">Upload</button>
      </div>
      <form action="">
        <input type="checkbox" />
        <label htmlFor="">Submit to PagerDuty</label>
        <input type="checkbox" />
        <label htmlFor="">Resolve the issue</label>
        <button type="button" class="btn btn-warning">Submit</button>
      </form>
    </div>
  );
}

export default Notes;
