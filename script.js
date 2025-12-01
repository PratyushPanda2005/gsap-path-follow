gsap.registerPlugin(ScrollToPlugin, MotionPathPlugin, DrawSVGPlugin);

const content = {
  path02a: {
    title: "Reimagining High-Speed Rail in San Francisco",
    subtitle: "By Eleanor Stubbs — Updated for San Francisco",
  },
  path02b: {
    title: "Connecting Los Angeles with High-Speed Trains",
    subtitle: "By Curt Merrill — Updated for Los Angeles",
  },
  path02c: {
    title: "San Diego's High-Speed Future",
    subtitle: "By Alexandra Skores — Updated for San Diego",
  },
  path02d: {
    title: "High-Speed Vision for New York",
    subtitle: "By CNN Staff — Updated for New York",
  },
  path02e: {
    title: "Boston's Rail Revolution",
    subtitle: "By Alex Leeds Matthews — Updated for Boston",
  },
  path02f: {
    title: "Miami's High-Speed Transformation",
    subtitle: "By Agne Jurkenaite — Updated for Miami",
  },
  path02g: {
    title: "Seattle's High-Speed Connectivity",
    subtitle: "By Eleanor Stubbs — Updated for Seattle",
  },
};

// Add this new content object for Map 2
const content2 = {
  path02a_2: {
    title: "Reimagining High-Speed Rail in San Francisco",
    subtitle: "By Eleanor Stubbs — Updated for San Francisco",
  },
  path02b_2: {
    title: "Connecting Los Angeles with High-Speed Trains",
    subtitle: "By Curt Merrill — Updated for Los Angeles",
  },
  path02c_2: {
    title: "San Diego's High-Speed Future",
    subtitle: "By Alexandra Skores — Updated for San Diego",
  },
  path02d_2: {
    title: "High-Speed Vision for New York",
    subtitle: "By CNN Staff — Updated for New York",
  },
  path02e_2: {
    title: "Boston's Rail Revolution",
    subtitle: "By Alex Leeds Matthews — Updated for Boston",
  },
  path02f_2: {
    title: "Miami's High-Speed Transformation",
    subtitle: "By Agne Jurkenaite — Updated for Miami",
  },
  path02g_2: {
    title: "Seattle's High-Speed Connectivity",
    subtitle: "By Eleanor Stubbs — Updated for Seattle",
  },
};

const content3 = {
  path02a_3: {
    title: "Reimagining High-Speed Rail in San Francisco",
    subtitle: "By Eleanor Stubbs — Updated for San Francisco (Map 3)",
  },
  path02b_3: {
    title: "Connecting Los Angeles with High-Speed Trains",
    subtitle: "By Curt Merrill — Updated for Los Angeles (Map 3)",
  },
  path02c_3: {
    title: "San Diego's High-Speed Future",
    subtitle: "By Alexandra Skores — Updated for San Diego (Map 3)",
  },
  path02d_3: {
    title: "High-Speed Vision for New York",
    subtitle: "By CNN Staff — Updated for New York (Map 3)",
  },
  path02e_3: {
    title: "Boston's Rail Revolution",
    subtitle: "By Alex Leeds Matthews — Updated for Boston (Map 3)",
  },
  path02f_3: {
    title: "Miami's High-Speed Transformation",
    subtitle: "By Agne Jurkenaite — Updated for Miami (Map 3)",
  },
  path02g_3: {
    title: "Seattle's High-Speed Connectivity",
    subtitle: "By Eleanor Stubbs — Updated for Seattle (Map 3)",
  },
};

const content4 = {
  path02a_4: {
    title: "Reimagining High-Speed Rail in San Francisco",
    subtitle: "By Eleanor Stubbs — Updated for San Francisco (Map 4)",
  },
  path02b_4: {
    title: "Connecting Los Angeles with High-Speed Trains",
    subtitle: "By Curt Merrill — Updated for Los Angeles (Map 4)",
  },
  path02c_4: {
    title: "San Diego's High-Speed Future",
    subtitle: "By Alexandra Skores — Updated for San Diego (Map 4)",
  },
  path02d_4: {
    title: "High-Speed Vision for New York",
    subtitle: "By CNN Staff — Updated for New York (Map 4)",
  },
  path02e_4: {
    title: "Boston's Rail Revolution",
    subtitle: "By Alex Leeds Matthews — Updated for Boston (Map 4)",
  },
  path02f_4: {
    title: "Miami's High-Speed Transformation",
    subtitle: "By Agne Jurkenaite — Updated for Miami (Map 4)",
  },
  path02g_4: {
    title: "Seattle's High-Speed Connectivity",
    subtitle: "By Eleanor Stubbs — Updated for Seattle (Map 4)",
  },
};



// Track selected city from Map 1
let selectedMap1City = null;
let selectedMap2City = null;
let selectedMap3City = null;


const titleEl = document.getElementById("dynamic-title");
const subtitleEl = document.getElementById("dynamic-subtitle");

const titleEl2 = document.getElementById("dynamic-title-2");
const subtitleEl2 = document.getElementById("dynamic-subtitle-2");

const titleEl3 = document.getElementById("dynamic-title-3");
const subtitleEl3 = document.getElementById("dynamic-subtitle-3");

const titleEl4 = document.getElementById("dynamic-title-4");
const subtitleEl4 = document.getElementById("dynamic-subtitle-4");

window.addEventListener("DOMContentLoaded", () => {
  const stops = gsap.utils.toArray("#stops .stop");
  const stops2 = gsap.utils.toArray("#stops2 .stop2");
  const stops3 = gsap.utils.toArray("#stops3 .stop3");
  const stops4 = gsap.utils.toArray("#stops4 .stop4");


  const colors = {
    path02a: "#e63946",
    path02b: "#1d3557",
    path02c: "#2a9d8f",
    path02d: "#f4a261",
    path02e: "#e76f51",
    path02f: "#457b9d",
    path02g: "#6a994e",
  };

  const colors2 = {
    path02a_2: "#e63946",
    path02b_2: "#1d3557",
    path02c_2: "#2a9d8f",
    path02d_2: "#f4a261",
    path02e_2: "#e76f51",
    path02f_2: "#457b9d",
    path02g_2: "#6a994e",
  };

  const colors3 = {
    path02a_3: "#e63946",
    path02b_3: "#1d3557",
    path02c_3: "#2a9d8f",
    path02d_3: "#f4a261",
    path02e_3: "#e76f51",
    path02f_3: "#457b9d",
    path02g_3: "#6a994e",
  };

  const colors4 = {
  path02a_4: "#e63946",
  path02b_4: "#1d3557",
  path02c_4: "#2a9d8f",
  path02d_4: "#f4a261",
  path02e_4: "#e76f51",
  path02f_4: "#457b9d",
  path02g_4: "#6a994e",
};

  // Reset all paths initially
  gsap.set(
    Object.keys(colors)
      .map((id) => `#${id}`)
      .join(", "),
    { drawSVG: "0%" }
  );

  // Reset all paths for map 2 initially
  gsap.set(
    Object.keys(colors2)
      .map((id) => `#${id}`)
      .join(", "),
    { drawSVG: "0%" }
  );

  gsap.set(
    Object.keys(colors3)
      .map((id) => `#${id}`)
      .join(", "),
    { drawSVG: "0%" }
  );

  gsap.set(
  Object.keys(colors4).map((id) => `#${id}`).join(", "),
  { drawSVG: "0%" }
);

  // **KEY FIX: Function to re-enable ALL Map 2 stops first**
  function enableAllMap2Stops() {
    stops2.forEach((stop) => {
      stop.classList.remove("disabled");
      const pid2 = stop.dataset.path2;
      stop.style.backgroundColor = "white";
      stop.style.color = colors2[pid2];
      stop.style.borderColor = colors2[pid2];
      stop.style.cursor = "pointer";
      stop.style.opacity = "1";
    });
  }

  function enableAllMap3Stops() {
    stops3.forEach((stop) => {
      stop.classList.remove("disabled");
      const pid3 = stop.dataset.path3;
      stop.style.backgroundColor = "white";
      stop.style.color = colors3[pid3];
      stop.style.borderColor = colors3[pid3];
      stop.style.cursor = "pointer";
      stop.style.opacity = "1";
    });
  }

  const map3DisableRules = {
  path02a: ["path02a_3"], 
  path02b: ["path02b_3"],
  path02c: ["path02c_3"],
  path02d: ["path02d_3"],
  path02e: ["path02e_3"],
  path02f: ["path02f_3"],
  path02g: ["path02g_3"],
};

const map3DisableRulesFromMap2 = {
  path02a_2: ["path02a_3"],        // if SF (map2) chosen, disable SF on map3
  path02b_2: ["path02b_3"],
  path02c_2: ["path02c_3"],
  path02d_2: ["path02d_3"],
  path02e_2: ["path02e_3"],
  path02f_2: ["path02f_3"],
  path02g_2: ["path02g_3"],
};

// from Map 1 (uses path02a, path02b, ...)
const map4DisableRulesFromMap1 = {
  path02a: ["path02a_4"],
  path02b: ["path02b_4"],
  path02c: ["path02c_4"],
  path02d: ["path02d_4"],
  path02e: ["path02e_4"],
  path02f: ["path02f_4"],
  path02g: ["path02g_4"],
};

// from Map 2 (uses path02a_2, path02b_2, ...)
const map4DisableRulesFromMap2 = {
  path02a_2: ["path02a_4"],
  path02b_2: ["path02b_4"],
  path02c_2: ["path02c_4"],
  path02d_2: ["path02d_4"],
  path02e_2: ["path02e_4"],
  path02f_2: ["path02f_4"],
  path02g_2: ["path02g_4"],
};

// from Map 3 (uses path02a_3, path02b_3, ...)
const map4DisableRulesFromMap3 = {
  path02a_3: ["path02a_4"],
  path02b_3: ["path02b_4"],
  path02c_3: ["path02c_4"],
  path02d_3: ["path02d_4"],
  path02e_3: ["path02e_4"],
  path02f_3: ["path02f_4"],
  path02g_3: ["path02g_4"],
};

function enableAllMap4Stops() {
  stops4.forEach((stop) => {
    stop.classList.remove("disabled");
    const pid4 = stop.dataset.path4;
    stop.style.backgroundColor = "white";
    stop.style.color = colors4[pid4];
    stop.style.borderColor = colors4[pid4];
    stop.style.cursor = "pointer";
    stop.style.opacity = "1";
  });
}




function applyMap3Disables(map1PathId, map2PathId) {
  enableAllMap3Stops();

  const fromMap1 = map1PathId ? (map3DisableRules[map1PathId] || []) : [];
  const fromMap2 = map2PathId ? (map3DisableRulesFromMap2[map2PathId] || []) : [];

  const toDisable = new Set([...fromMap1, ...fromMap2]);

  stops3.forEach((stop) => {
    const pid3 = stop.dataset.path3;
    if (toDisable.has(pid3)) {
      stop.classList.add("disabled");
      stop.style.backgroundColor = "#f3f4f6";
      stop.style.color = "#9ca3af";
      stop.style.borderColor = "#d1d5db";
      stop.style.cursor = "not-allowed";
      stop.style.opacity = "0.6";
    }
  });
}

function applyMap4Disables() {
  enableAllMap4Stops();

  const disabledSet = new Set();

  if (selectedMap1City) {
    const from1 = map4DisableRulesFromMap1[selectedMap1City] || [];
    from1.forEach((id) => disabledSet.add(id));
  }

  if (selectedMap2City) {
    const from2 = map4DisableRulesFromMap2[selectedMap2City] || [];
    from2.forEach((id) => disabledSet.add(id));
  }

  if (selectedMap3City) {
    const from3 = map4DisableRulesFromMap3[selectedMap3City] || [];
    from3.forEach((id) => disabledSet.add(id));
  }

  stops4.forEach((stop) => {
    const pid4 = stop.dataset.path4;
    if (disabledSet.has(pid4)) {
      stop.classList.add("disabled");
      stop.style.backgroundColor = "#f3f4f6";
      stop.style.color = "#9ca3af";
      stop.style.borderColor = "#d1d5db";
      stop.style.cursor = "not-allowed";
      stop.style.opacity = "0.6";
    }
  });
}



  // **UPDATED: Function to disable only the selected Map 2 city**
  function disableMap2City(map1PathId) {
    // First re-enable ALL stops
    enableAllMap2Stops();

    // Then disable only the selected one
    const map2PathId = map1PathId + "_2";

    stops2.forEach((stop) => {
      if (stop.dataset.path2 === map2PathId) {
        stop.classList.add("disabled");
        stop.style.backgroundColor = "#f3f4f6";
        stop.style.color = "#9ca3af";
        stop.style.borderColor = "#d1d5db";
        stop.style.cursor = "not-allowed";
        stop.style.opacity = "0.6";
      }
    });
  }

  function disableMap3Cities(map1PathId) {
  enableAllMap3Stops();

  const toDisable = map3DisableRules[map1PathId] || [];
  stops3.forEach((stop) => {
    const pid3 = stop.dataset.path3;
    if (toDisable.includes(pid3)) {
      stop.classList.add("disabled");
      stop.style.backgroundColor = "#f3f4f6";
      stop.style.color = "#9ca3af";
      stop.style.borderColor = "#d1d5db";
      stop.style.cursor = "not-allowed";
      stop.style.opacity = "0.6";
    }
  });
}

  stops.forEach((stop) => {
    stop.addEventListener("click", () => {
      const pathId = stop.dataset.path;
      const selectedColor = colors[pathId];

      // Store selected city for Map 2 disabling
      selectedMap1City = pathId;

      // Update text
      titleEl.textContent = content[pathId].title;
      subtitleEl.textContent = content[pathId].subtitle;

      // Reset paths
      gsap.set(
        Object.keys(colors)
          .map((id) => `#${id}`)
          .join(", "),
        {
          drawSVG: "0%",
          stroke: "#b33333",
        }
      );

      // Reset stops
      stops.forEach((s) => {
        const pid = s.dataset.path;
        s.style.backgroundColor = "white";
        s.style.color = colors[pid];
        s.style.borderColor = colors[pid];
      });

      // Activate clicked stop
      stop.style.backgroundColor = selectedColor;
      stop.style.color = "white";

      // Set path color
      gsap.set(`#${pathId}`, { stroke: selectedColor });

      // Animation timeline
      const tl = gsap.timeline({
        defaults: { duration: 3, ease: "power2.inOut" },
        onUpdate: () => {
          const point = document.querySelector("#point");
          if (!point) return;

          const rect = point.getBoundingClientRect();
          const scrollY =
            window.scrollY + rect.top - (window.innerHeight / 2 - 50);

          gsap.to(window, {
            duration: 0.4,
            scrollTo: scrollY,
            ease: "power3.out",
            overwrite: "auto",
          });
        },
      });

      tl.fromTo(`#${pathId}`, { drawSVG: "0%" }, { drawSVG: "100%" }, 0).to(
        "#point",
        {
          autoAlpha: 1,
          motionPath: {
            path: `#${pathId}`,
            align: `#${pathId}`,
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      );

      // **Disable selected city in Map 2 (this now re-enables others first)**
      disableMap2City(pathId);
      applyMap3Disables(selectedMap1City, selectedMap2City);
      applyMap4Disables();

    });
  });

  // Map 2 click handlers
  stops2.forEach((stop) => {
    stop.addEventListener("click", () => {
      // Check if this stop is disabled (from Map 1 selection)
      if (stop.classList.contains("disabled")) {
        return; // Don't execute if disabled
      }

      const pathId2 = stop.dataset.path2;
      const selectedColor2 = colors2[pathId2];

      // Update ONLY Map 2 title/subtitle
      titleEl2.textContent = content2[pathId2].title;
      subtitleEl2.textContent = content2[pathId2].subtitle;

      // Reset paths for map 2
      gsap.set(
        Object.keys(colors2)
          .map((id) => `#${id}`)
          .join(", "),
        {
          drawSVG: "0%",
          stroke: "#b33333",
        }
      );

      // Reset stops for map 2 (except disabled ones)
      stops2.forEach((s) => {
        if (!s.classList.contains("disabled")) {
          const pid2 = s.dataset.path2;
          s.style.backgroundColor = "white";
          s.style.color = colors2[pid2];
          s.style.borderColor = colors2[pid2];
        }
      });

      // Activate clicked stop
      stop.style.backgroundColor = selectedColor2;
      stop.style.color = "white";

      // Set path color
      gsap.set(`#${pathId2}`, { stroke: selectedColor2 });

      // Animation timeline for map 2
      const tl2 = gsap.timeline({
        defaults: { duration: 3, ease: "power2.inOut" },
        onUpdate: () => {
          const point2 = document.querySelector("#point2");
          if (!point2) return;

          const rect2 = point2.getBoundingClientRect();
          const scrollY2 =
            window.scrollY + rect2.top - (window.innerHeight / 2 - 50);

          gsap.to(window, {
            duration: 0.4,
            scrollTo: scrollY2,
            ease: "power3.out",
            overwrite: "auto",
          });
        },
      });

      tl2.fromTo(`#${pathId2}`, { drawSVG: "0%" }, { drawSVG: "100%" }, 0).to(
        "#point2",
        {
          autoAlpha: 1,
          motionPath: {
            path: `#${pathId2}`,
            align: `#${pathId2}`,
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      );

selectedMap2City = pathId2;
applyMap3Disables(selectedMap1City, selectedMap2City);
applyMap4Disables(); // new function

    });
  });

  stops3.forEach((stop) => {
  stop.addEventListener("click", () => {
    if (stop.classList.contains("disabled")) return;

    const pathId3 = stop.dataset.path3;
    const selectedColor3 = colors3[pathId3];

    titleEl3.textContent = content3[pathId3].title;
    subtitleEl3.textContent = content3[pathId3].subtitle;

    // reset paths map 3
    gsap.set(
      Object.keys(colors3).map((id) => `#${id}`).join(", "),
      { drawSVG: "0%", stroke: "#b33333" }
    );

    // reset stops map 3 except disabled
    stops3.forEach((s) => {
      if (!s.classList.contains("disabled")) {
        const pid3 = s.dataset.path3;
        s.style.backgroundColor = "white";
        s.style.color = colors3[pid3];
        s.style.borderColor = colors3[pid3];
      }
    });

    // active stop
    stop.style.backgroundColor = selectedColor3;
    stop.style.color = "white";

    gsap.set(`#${pathId3}`, { stroke: selectedColor3 });

    const tl3 = gsap.timeline({
      defaults: { duration: 3, ease: "power2.inOut" },
      onUpdate: () => {
        const point3 = document.querySelector("#point3");
        if (!point3) return;

        const rect3 = point3.getBoundingClientRect();
        const scrollY3 =
          window.scrollY + rect3.top - (window.innerHeight / 2 - 50);

        gsap.to(window, {
          duration: 0.4,
          scrollTo: scrollY3,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
    });

    tl3
      .fromTo(`#${pathId3}`, { drawSVG: "0%" }, { drawSVG: "100%" }, 0)
      .to(
        "#point3",
        {
          autoAlpha: 1,
          motionPath: {
            path: `#${pathId3}`,
            align: `#${pathId3}`,
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      );

      selectedMap3City = pathId3;
applyMap4Disables();

  });
});

stops4.forEach((stop) => {
  stop.addEventListener("click", () => {
    if (stop.classList.contains("disabled")) return;

    const pathId4 = stop.dataset.path4;
    const selectedColor4 = colors4[pathId4];

    titleEl4.textContent = content4[pathId4].title;
    subtitleEl4.textContent = content4[pathId4].subtitle;

    gsap.set(
      Object.keys(colors4).map((id) => `#${id}`).join(", "),
      { drawSVG: "0%", stroke: "#b33333" }
    );

    stops4.forEach((s) => {
      if (!s.classList.contains("disabled")) {
        const pid4 = s.dataset.path4;
        s.style.backgroundColor = "white";
        s.style.color = colors4[pid4];
        s.style.borderColor = colors4[pid4];
      }
    });

    stop.style.backgroundColor = selectedColor4;
    stop.style.color = "white";

    gsap.set(`#${pathId4}`, { stroke: selectedColor4 });

    const tl4 = gsap.timeline({
      defaults: { duration: 3, ease: "power2.inOut" },
      onUpdate: () => {
        const point4 = document.querySelector("#point4");
        if (!point4) return;

        const rect4 = point4.getBoundingClientRect();
        const scrollY4 =
          window.scrollY + rect4.top - (window.innerHeight / 2 - 50);

        gsap.to(window, {
          duration: 0.4,
          scrollTo: scrollY4,
          ease: "power3.out",
          overwrite: "auto",
        });
      },
    });

    tl4
      .fromTo(`#${pathId4}`, { drawSVG: "0%" }, { drawSVG: "100%" }, 0)
      .to(
        "#point4",
        {
          autoAlpha: 1,
          motionPath: {
            path: `#${pathId4}`,
            align: `#${pathId4}`,
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      );
  });
});
});

let firstClick = false;
const extraDistance = 100;
const stopsContainer = document.getElementById("stops");
let freezePoint =
  stopsContainer.offsetTop + stopsContainer.offsetHeight + extraDistance;

window.addEventListener("scroll", () => {
  if (!firstClick) {
    if (window.scrollY > freezePoint) {
      window.scrollTo(0, freezePoint);
    }
  }
});

document.querySelectorAll(".stop").forEach((stop) => {
  stop.addEventListener("click", () => {
    if (!firstClick) {
      firstClick = true;
    }
  });
});


