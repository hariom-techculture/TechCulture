"use client";

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";

const highlightedStates = [
  "UT",
  "RJ",
  "PB",
  "UP",
  "MP",
  "MH",
  "TN",
  "BR",
  "AS",
  "MN",
  "DL",
];

const stateNamesList = [
  "Uttarakhand",
  "Rajasthan",
  "Punjab",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Maharashtra",
  "Tamil Nadu",
  "Bihar",
  "Assam",
  "Manipur",
  "Delhi",
];

const projectionConfig = {
  scale: 1000,
  center: [82.9629, 23.5937], // Adjusted slightly for better centering
};

const OurBestWorkExperience = () => {
  return (
    <section
      style={{
        padding: "40px 20px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "40px",
          color: "#333",
          fontWeight: "bold",
        }}
      >
        Our Best Work Experience
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "40px",
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },
        }}
      >
        {/* Left side: State names */}
        <div
          style={{
            flex: 1,
            textAlign: "left",
            maxWidth: "400px",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "20px",
              color: "#007bff",
            }}
          >
            States Where We Have Served Clients
          </h3>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              fontSize: "1.2rem",
              color: "#555",
            }}
          >
            {stateNamesList.map((state, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s",
                  ":hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {state}
              </li>
            ))}
          </ul>
        </div>
        {/* Right side: Map */}
        <div
          style={{
            flex: 1,
            maxWidth: "600px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={projectionConfig}
            width={600}
            height={600}
            style={{ width: "100%", height: "auto" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = highlightedStates.includes(geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? "#007bff" : "#d6d6d6"}
                      stroke="#ffffff"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          fill: isHighlighted ? "#0056b3" : "#c0c0c0",
                          outline: "none",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
};

export default OurBestWorkExperience;
