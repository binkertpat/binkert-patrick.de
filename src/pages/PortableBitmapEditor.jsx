/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const PortableBitmapEditor = () => {
  const ctx = useRef(null);
  const exampleP1 =
    "P1\n5 5\n0\t1\t0\t1\t0\n0\t1\t0\t1\t0\n0\t0\t1\t0\t0\n1\t0\t0\t0\t1\n0\t1\t1\t1\t0";
  const exampleP2 =
    "P2\n4 4\n15\n0\t1\t2\t3\n4\t5\t6\t7\n8\t9\t10\t11\n12\t13\t14\t15";
  const exampleP3 = "P3\n3 1\n255\n255 0 0\t0 255 0\t0 0 255";
  const [pbmInput, setPbmInput] = useState(exampleP1);
  const [showCanvasAndOptions, setShowCanvasAndOptions] = useState(false);
  const [maxRangeSlider, setMaxRangeSlider] = useState(500);
  const [pixelDimension, setPixelDimension] = useState(50);
  const [pbmData, setPbmData] = useState({
    MODE: "",
    WIDTH: 0,
    HEIGHT: 0,
    DATA: [],
  });

  const parseP1 = () => {
    const ctxData = ctx.current.getContext("2d");
    ctxData.clearRect(0, 0, ctx.current.width, ctx.current.height);
    let x = 0;

    pbmData.DATA.forEach((line, i) => {
      console.log(Array.from(line));
      Array.from(line).forEach((pixel) => {
        if (pixel === "1") {
          ctxData.fillStyle = "black";
        } else if (pixel === "0") {
          ctxData.fillStyle = "white";
        }
        if (pixel === "1" || pixel === "0") {
          ctxData.fillRect(
            x * pixelDimension,
            i * pixelDimension,
            pixelDimension,
            pixelDimension,
          );
          x++;
        }
      });
      x = 0;
    });
  };

  const map = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  const mapGreyValueToColor = (value, max) => {
    return map(value, 0, max, 0, 255);
  };

  const parseP2 = (data) => {
    const ctxData = ctx.current.getContext("2d");
    ctxData.clearRect(0, 0, ctx.current.width, ctx.current.height);
    const maxColorValue = parseInt(data[0]);
    data = data.slice(1);

    // strings with spaces or tabs to single items
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].replaceAll("\t", ",").replaceAll(" ", ",").split(",");
    }

    let x = 0;
    data.forEach((line, i) => {
      line.forEach((pixel) => {
        if (parseInt(pixel) >= 0 && parseInt(pixel) <= maxColorValue) {
          ctxData.fillStyle = `rgb(
              ${mapGreyValueToColor(pixel, maxColorValue)}, 
              ${mapGreyValueToColor(pixel, maxColorValue)}, 
              ${mapGreyValueToColor(pixel, maxColorValue)})
            `;
          ctxData.fillRect(
            x * pixelDimension,
            i * pixelDimension,
            pixelDimension,
            pixelDimension,
          );
          x++;
        }
      });
      x = 0;
    });
  };

  const parseP3 = (data) => {
    const ctxData = ctx.current.getContext("2d");
    ctxData.clearRect(0, 0, ctx.current.width, ctx.current.height);
    const maxColorValue = parseInt(data[0]);
    data = data.slice(1);

    // strings with spaces or tabs to single items
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].replaceAll("\t", ",").replaceAll(" ", ",").split(",");
    }

    data.forEach((line, i) => {
      let j = 0;
      let x = 0;
      while (x < pbmData.WIDTH) {
        ctxData.fillStyle = `rgb(
            ${mapGreyValueToColor(line[j], maxColorValue)}, 
            ${mapGreyValueToColor(line[j + 1], maxColorValue)}, 
            ${mapGreyValueToColor(line[j + 2], maxColorValue)})
          `;
        ctxData.fillRect(
          x * pixelDimension,
          i * pixelDimension,
          pixelDimension,
          pixelDimension,
        );
        j = j + 3;
        x++;
      }
    });
  };

  const loadP1Example = () => {
    setPbmInput(exampleP1);
  };

  const loadP2Example = () => {
    setPbmInput(exampleP2);
  };

  const loadP3Example = () => {
    setPbmInput(exampleP3);
  };

  const clearEditor = () => {
    setShowCanvasAndOptions(false);
    setPbmInput("");
  };

  const parsePbmInput = () => {
    setShowCanvasAndOptions(true);
    const lines = pbmInput.split("\n");
    const mode = lines[0];
    const width = parseInt(lines[1].split(" ")[0]);
    const height = parseInt(lines[1].split(" ")[1]);
    const data = lines.slice(2);
    setMaxRangeSlider(
      parseInt(document.querySelector("textarea").offsetWidth / width),
    );
    setPbmData({
      ...pbmData,
      ...{ MODE: mode, WIDTH: width, HEIGHT: height, DATA: data },
    });
  };

  const handlePixelDimensionChange = (e) => {
    if (
      parseInt(e.target.value) * pbmData.WIDTH >
      document.querySelector("textarea").offsetWidth
    ) {
      return;
    }
    setPixelDimension(parseInt(e.target.value));
  };

  useEffect(() => {
    if (pbmData.MODE === "P1") {
      parseP1();
    } else if (pbmData.MODE === "P2") {
      parseP2(pbmData.DATA);
    } else if (pbmData.MODE === "P3") {
      parseP3(pbmData.DATA);
    }
  }, [pbmData, pixelDimension]);

  return (
    <>
      <h1 className="display-5 fw-bold lh-1 mb-3"> Portable Bitmap Editor</h1>
      <span className="badge bg-danger mb-3 me-2">work in progress</span>
      <span className="badge bg-danger mb-3">beta</span>
      <h2>Editor</h2>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-3">
        <button
          type="button"
          className="btn btn-secondary btn-lg px-4 me-md-2"
          onClick={loadP1Example}
        >
          P1 Beispiel laden
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg px-4 me-md-2"
          onClick={loadP2Example}
        >
          P2 Beispiel laden
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg px-4 me-md-2"
          onClick={loadP3Example}
        >
          P3 Beispiel laden
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4 me-md-2"
          onClick={clearEditor}
        >
          Leeren
        </button>
      </div>
      <textarea
        className="form-control mb-3 textarea-with-code"
        id="pbm_input"
        rows="12"
        value={pbmInput}
        onChange={(e) => setPbmInput(e.target.value)}
      ></textarea>

      {pbmInput != "" && (
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-3">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-md-2"
            onClick={parsePbmInput}
          >
            Vorschau generieren
          </button>
        </div>
      )}

      {showCanvasAndOptions && (
        <>
          <div className="mb-3">
            <label htmlFor="dimension" className="form-label">
              Größe ändern
            </label>
            <input
              type="range"
              className="form-range"
              id="dimension"
              min="1"
              max={maxRangeSlider}
              value={pixelDimension}
              onChange={handlePixelDimensionChange}
            />
          </div>

          <canvas
            id="pbm_canvas"
            ref={ctx}
            className="mb-3"
            style={{ border: "1px solid black" }}
            width={pbmData.WIDTH * pixelDimension}
            height={pbmData.HEIGHT * pixelDimension}
          ></canvas>

          <div className="accordion mb-3" id="debugOutput">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#debugOutputOne"
                  aria-expanded="false"
                  aria-controls="debugOutputOne"
                >
                  Debug Output
                </button>
              </h2>
              <div
                id="debugOutputOne"
                className="accordion-collapse collapse"
                data-bs-parent="#debugOutput"
              >
                <div className="accordion-body">
                  <pre>
                    {JSON.stringify(
                      {
                        ...{
                          RENDERED_PIXEL_WIDTH: pixelDimension,
                          RENDERED_PIXEL_HEIGHT: pixelDimension,
                          MAX_RANGE_SLIDER: maxRangeSlider,
                        },
                        ...pbmData,
                      },
                      null,
                      4,
                    )}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PortableBitmapEditor;
