gsap.registerPlugin(ScrollToPlugin, MotionPathPlugin, DrawSVGPlugin);


// const content = {
//   path02a: {
//     title: "Panel 1 – The Big Idea",
//     subtitle: "Reimagine B2B commerce for Manufacturers and Distributors",
//      list: [
//       "Most B2B companies still sell with email, spreadsheets, and portals that feel like they’re stuck in 2005. eComchain turns your ERP-powered business into a modern B2B2C commerce experience – where manufacturers, distributors, and end consumers all connect on a single, cloud-based storefront.",
//       "Instead of stitching together custom code, you launch on a SaaS platform that already knows how B2B works: complex pricing, contracts, approvals, credit limits, purchase orders, and account-based ordering – all out of the box.",
//       "“From first login to first order, eComchain is built around how real industrial buyers actually buy.”"
//     ]
//   },
//   path02b: {
//     title: "Panel 2 – The eComchain Approach",
//     subtitle: "A B2B2C platform layered on top of your ERP",
//      list: [
//       "eComchain doesn’t ask you to rip and replace. It leverages your existing ERP investment and wraps it with a modern, AI-assisted commerce layer. The platform is designed to integrate with major ERPs such as Oracle, SAP, JD Edwards, Microsoft Dynamics and others, so product, pricing, inventory and orders stay in sync. (eComchain)",
//       "San Francisco point 02 text here...",
//       "San Francisco point 03 text here..."
//     ]
//   },
//   path02c: {
//     title: "San Diego's High-Speed Future",
//     subtitle: "",
//      list: [
//       "San Francisco point 01 text here...",
//       "San Francisco point 02 text here...",
//       "San Francisco point 03 text here..."
//     ]
//   },
//   path02d: {
//     title: "High-Speed Vision for New York",
//     subtitle: "",
//      list: [
//       "San Francisco point 01 text here...",
//       "San Francisco point 02 text here...",
//       "San Francisco point 03 text here..."
//     ]
//   },
//   path02e: {
//     title: "Boston's Rail Revolution",
//      list: [
//       "San Francisco point 01 text here...",
//       "San Francisco point 02 text here...",
//       "San Francisco point 03 text here..."
//     ]
//   },
//   path02f: {
//     title: "Miami's High-Speed Transformation",
//     list: [
//       "Miami point 01 text here...",
//       "Miami point 02 text here...",
//       "Miami point 03 text here..."
//     ]
//   },
//   path02g: {
//     title: "Seattle's High-Speed Connectivity",
//      list: [
//       "San Francisco point 01 text here...",
//       "San Francisco point 02 text here...",
//       "San Francisco point 03 text here..."
//     ]
//   },
// };


const content = {
  path02a: {
    title: "Panel 1 – The Big Idea",
    subtitle: "Reimagine B2B commerce for Manufacturers and Distributors",
    list: [
      {
        main: "Most B2B companies still sell with email, spreadsheets, and portals that feel like they’re stuck in 2005. eComchain turns your ERP-powered business into a modern B2B2C commerce experience – where manufacturers, distributors, and end consumers all connect on a single, cloud-based storefront.",
        bullets: []
      },
      {
        main: "Instead of stitching together custom code, you launch on a SaaS platform that already knows how B2B works: complex pricing, contracts, approvals, credit limits, purchase orders, and account-based ordering – all out of the box.",
        bullets: []
      },
      {
        main: "“From first login to first order, eComchain is built around how real industrial buyers actually buy.”",
        bullets: []
      }
    ]
  },
  path02b: {
    title: "Panel 2 – The eComchain Approach",
    subtitle: "A B2B2C platform layered on top of your ERP",
    list: [
      {
        main: "eComchain doesn’t ask you to rip and replace. It leverages your existing ERP investment and wraps it with a modern, AI-assisted commerce layer. The platform is designed to integrate with major ERPs such as Oracle, SAP, JD Edwards, Microsoft Dynamics and others, so product, pricing, inventory and orders stay in sync. (eComchain)",
        bullets: []
      },
      {
        main: "On top of those business processes, eComchain adds:",
        bullets: [
          "Account-based storefronts for each customer or distributor",
          "Contract & volume pricing that flow directly from your ERP",
          "Purchase order & punchout support for procurement teams",
          "Multi-vendor marketplace options, so you can onboard suppliers and expand your catalog without new custom builds (eComchain)"
        ]
      },
    ]
  },
};


const titleEl = document.getElementById("dynamic-title");
const subtitleEl = document.getElementById("dynamic-subtitle");
const listEl = document.getElementById("dynamic-list");


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
      listEl.innerHTML = "";

      
      content[pathId].list.forEach((item) => {
  // Create main LI
  const li = document.createElement("li");
  li.textContent = item.main;

  // Create inner UL
  const innerUl = document.createElement("ul");
  innerUl.className = "list-disc ml-6 mt-2 space-y-1 text-neutral-600";

  // Add bullet items
  item.bullets.forEach((b) => {
    const innerLi = document.createElement("li");
    innerLi.textContent = b;
    innerUl.appendChild(innerLi);
  });

  // Add inner UL to LI
  li.appendChild(innerUl);

  // Append LI to main UL
  listEl.appendChild(li);
});

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
