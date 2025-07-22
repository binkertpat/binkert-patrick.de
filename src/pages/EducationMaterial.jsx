import { useState } from "react";
import {
  AVAIVABLE_FILES,
  AVAIVABLE_CLASSES,
  AVAIVABLE_SUBJECTS,
} from "../content/avaivableFiles.js";

const EducationMaterial = () => {
  const FILTER_OPTIONS = {
    SUBJECT_AND_CLASS: "subject-and-class",
    TAGS: "tags",
  };

  const [selectedFilter, setSelectedFilter] = useState(
    FILTER_OPTIONS.SUBJECT_AND_CLASS,
  );
  const [inputTagFilter, setInputTagFilter] = useState(undefined);
  const [selectedSubject, setSelectedSubject] = useState(
    Object.keys(AVAIVABLE_SUBJECTS)[0],
  );
  const [selectedClass, setSelectedClass] = useState(
    Object.keys(AVAIVABLE_CLASSES)[0],
  );

  const handleClassFilterChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSubjectFilterChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleTagFilterInput = (event) => {
    setInputTagFilter(event.target.value);
  };

  const handleActiveFilterChangeSubjectClass = () => {
    if (selectedFilter != FILTER_OPTIONS.SUBJECT_AND_CLASS) {
      setSelectedFilter(FILTER_OPTIONS.SUBJECT_AND_CLASS);
    }
  };

  const handleActiveFilterChangeTag = () => {
    if (selectedFilter != FILTER_OPTIONS.TAGS) {
      setSelectedFilter(FILTER_OPTIONS.TAGS);
    }
  };

  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3">
        Unterrichtsmaterial und Arbeitsblätter
      </h1>

      <div className="accordion" id="filterOptions">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#filterOptionsOne"
              aria-expanded="true"
              aria-controls="filterOptionsOne"
              onClick={handleActiveFilterChangeSubjectClass}
            >
              Filtern nach Fach und Klasse
            </button>
          </h2>
          <div
            id="filterOptionsOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#filterOptions"
          >
            <div className="accordion-body">
              <div className="row gy-2 gx-3">
                <div className="col-auto">
                  <div className="input-group">
                    <span className="input-group-text" id="tagSearch">
                      Fach
                    </span>
                    <select
                      className="form-select"
                      onChange={handleSubjectFilterChange}
                      defaultValue={
                        AVAIVABLE_SUBJECTS[Object.keys(AVAIVABLE_SUBJECTS)[0]]
                      }
                    >
                      {Object.keys(AVAIVABLE_SUBJECTS).map((option, i) => {
                        return (
                          <option value={option} key={i}>
                            {AVAIVABLE_SUBJECTS[option]}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="input-group">
                    <span className="input-group-text" id="tagSearch">
                      Klasse
                    </span>
                    <select
                      className="form-select"
                      onChange={handleClassFilterChange}
                      defaultValue={
                        AVAIVABLE_CLASSES[Object.keys(AVAIVABLE_CLASSES)[0]]
                      }
                    >
                      {Object.keys(AVAIVABLE_CLASSES).map((option, i) => {
                        return (
                          <option value={option} key={i}>
                            {AVAIVABLE_CLASSES[option]}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#filterOptionsTwo"
              aria-expanded="false"
              aria-controls="filterOptionsTwo"
              onClick={handleActiveFilterChangeTag}
            >
              Filtern nach Tags
            </button>
          </h2>
          <div
            id="filterOptionsTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#filterOptions"
          >
            <div className="accordion-body">
              <div className="gy-2 gx-3">
                <div className="col-auto">
                  <div className="input-group">
                    <span className="input-group-text" id="tagSearch">
                      Tag-Suche
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Suche ..."
                      aria-label="Tag-Suche"
                      aria-describedby="tagSearch"
                      onChange={handleTagFilterInput}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive text-center">
        <table className="table table-hover table-striped table-bordered align-middle mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Dateiname</th>
              <th scope="col">Fach</th>
              <th scope="col">Klasse</th>
              <th scope="col">Datum</th>
              <th scope="col">Size</th>
              <th scope="col">Tags</th>
              <th scope="col">Download</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {Object.values(AVAIVABLE_FILES).map((item, i) => {
              if (selectedFilter == FILTER_OPTIONS.TAGS) {
                if (inputTagFilter != undefined && inputTagFilter != "") {
                  if (!item.TAGS.includes(inputTagFilter.toLowerCase().trim()))
                    return;
                }
              }

              if (selectedFilter == FILTER_OPTIONS.SUBJECT_AND_CLASS) {
                if (selectedSubject != "NONE" && selectedClass != "NONE") {
                  if (
                    item.SUBJECT != AVAIVABLE_SUBJECTS[selectedSubject] ||
                    item.CLASS != AVAIVABLE_CLASSES[selectedClass]
                  ) {
                    return;
                  }
                } else if (
                  selectedSubject != "NONE" &&
                  selectedClass == "NONE"
                ) {
                  if (item.SUBJECT != AVAIVABLE_SUBJECTS[selectedSubject]) {
                    return;
                  }
                } else if (
                  selectedSubject == "NONE" &&
                  selectedClass != "NONE"
                ) {
                  if (item.CLASS != AVAIVABLE_CLASSES[selectedClass]) {
                    return;
                  }
                }
              }

              return (
                <tr key={i} data-klasse={item.CLASS} data-subject={item.FACH}>
                  <th dangerouslySetInnerHTML={{ __html: item.IMG }}></th>
                  <th>
                    <a
                      href={item.PATH}
                      className="text-decoration-none text-body"
                    >
                      <pre className="m-0">{item.TITLE}</pre>
                    </a>
                  </th>
                  <td>{item.SUBJECT}</td>
                  <td>{item.CLASS}</td>
                  <td>
                    <pre className="m-0">{item.DATE}</pre>
                  </td>
                  <td>
                    <pre className="m-0">{item.SIZE}</pre>
                  </td>
                  <td>
                    {item.TAGS.map((tag, i) => {
                      return (
                        <span key={i} className="badge text-bg-primary me-2">
                          #{tag}
                        </span>
                      );
                    })}
                  </td>
                  <td>
                    <a href={item.PATH}>
                      <button className="btn btn-success ms-2" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-download"
                          viewBox="0 0 16 16"
                        >
                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                        </svg>
                      </button>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EducationMaterial;
