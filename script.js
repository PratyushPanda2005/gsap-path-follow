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


const titleEl = document.getElementById("dynamic-title");
const subtitleEl = document.getElementById("dynamic-subtitle");


window.addEventListener("DOMContentLoaded", () => {
      const stops = gsap.utils.toArray("#stops .stop");

    const colors = {
    path02a: "#e63946",
    path02b: "#1d3557",
    path02c: "#2a9d8f",
    path02d: "#f4a261",
    path02e: "#e76f51",
    path02f: "#457b9d",
    path02g: "#6a994e",
  };

 
  Object.keys(colors).forEach((id) => {
    gsap.set(`#${id}`, {
      drawSVG: "100%",
      stroke: colors[id],
    });
  });


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
      applyMap5Disables();
      applyMap6Disables(); // NEW
      applyMap7Disables();
    });
  });

})


let firstClick = false;
const extraDistance = 200;
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
