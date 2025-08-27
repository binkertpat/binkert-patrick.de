/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const SurfaceWin11UpgradeBooking = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [freeTimeslots, setFreeTimeslots] = useState([]);
  const [optionState, updateOptionState] = useState({});
  const [addedBooking, setAddedBooking] = useState(false);

  const ACTUAL_DATE = new Date();
  const ACTUAL_MONTH = ACTUAL_DATE.getMonth() + 1; // Months are zero-indexed
  const ACTUAL_DAY = ACTUAL_DATE.getDate();

  const handleOptionChange = (e, userID) => {
    updateOptionState({ ...optionState, ...{ [userID]: e.target.value } });
  };

  const handleSubmitButton = (e, userID) => {
    if (optionState[userID] != undefined) {
      addBooking(userID, optionState[userID]);
    }
  };

  const addBooking = async (userID, timeID) => {
    const url =
      "https://binkert-patrick.de/api/addBooking.php?timeID=" +
      timeID +
      "&userID=" +
      userID;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Cannot load bookings.");
      }
      await response.json();
      setAddedBooking(!addedBooking);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };

  const fetchGetBookings = async () => {
    const url = "https://binkert-patrick.de/api/getBookings.php";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Cannot load bookings.");
      }
      const json = await response.json();
      setBookings(json);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
    }
  };

  const checkIfDateStringIsPast = (timeString) => {
    timeString = timeString.split(", der ")[1];
    let timeSlotDay = parseInt(timeString.split(".")[0]);
    let timeSlotMonth = parseInt(timeString.split(".")[1]);
    if (
      ACTUAL_MONTH > timeSlotMonth ||
      (ACTUAL_MONTH === timeSlotMonth && ACTUAL_DAY > timeSlotDay)
    ) {
      return true;
    }
    return false;
  };

  const fetchFreeTimeslots = async () => {
    const url = "https://binkert-patrick.de/api/getFreeTimeslots.php";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Cannot load free timeslots.");
      }
      const json = await response.json();
      for (const [key, value] of Object.entries(json)) {
        if (checkIfDateStringIsPast(value.timeSlot)) {
          delete json[key];
        }
      }
      setFreeTimeslots(json);
    } catch (error) {
      console.error("Error fetching free timeslots:", error.message);
    }
  };

  const initFetching = async () => {
    await fetchGetBookings();
    await fetchFreeTimeslots();
    setLoading(false);
  };

  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 5000);
    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    initFetching();
  }, [addedBooking, count]);

  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3">Zeitslot buchen</h1>

      {loading && (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      )}

      {bookings.length > 0 && freeTimeslots.length > 0 && (
        <>
          <div className="alert alert-danger" role="alert">
            Es kann sein, dass die Initialen nicht aktuell sind bzw. nicht zum
            aktuellen Nutzer des Geräts passen. Am Ende zählt und gewinnt die
            Inventarnummer! :-)
          </div>
          <div className="table-responsive">
            <table className="table table-striped align-middle text-center">
              <thead>
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Initialen</th>
                  <th scope="col">Inventarnummer</th>
                  <th scope="col">Zeitslot</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(bookings).map((item, i) => {
                  if (
                    item.bookedTimeSlot != undefined &&
                    item.timeSlot != undefined &&
                    checkIfDateStringIsPast(item.timeSlot)
                  ) {
                    return;
                  } else {
                    return (
                      <tr key={i}>
                        <td>{item.shortText}</td>
                        <td>{item.inventaryNumber}</td>
                        {item.bookedTimeSlot != undefined && (
                          <td>{item.timeSlot}</td>
                        )}
                        {item.bookedTimeSlot == undefined && (
                          <td>
                            <div className="d-grid gap-2 align-items-center">
                              <select
                                style={{ minWidth: "250px" }}
                                key={item.userID}
                                className="form-select"
                                aria-label="Zeitslot-Selector"
                                value={optionState[item.userID]}
                                placeholder="Wähle deinen Zeitslot!"
                                onChange={(e) =>
                                  handleOptionChange(e, item.userID)
                                }
                              >
                                <option>Wähle deinen Tag!</option>
                                {Object.values(freeTimeslots).map((time) => {
                                  return (
                                    <option
                                      key={time.timeID}
                                      value={time.timeID}
                                    >
                                      {time.timeSlot}
                                    </option>
                                  );
                                })}
                              </select>
                              <button
                                type="button"
                                className="btn btn-success ms-2"
                                onClick={(e) =>
                                  handleSubmitButton(e, item.userID)
                                }
                              >
                                Bestätigen
                              </button>
                            </div>
                          </td>
                        )}
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default SurfaceWin11UpgradeBooking;
