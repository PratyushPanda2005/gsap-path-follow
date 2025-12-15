// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin, MotionPathPlugin, DrawSVGPlugin);

// Content configuration for each path
const content = {
  path02a: {
    title: "Panel 1 – The Big Idea",
    subtitle: "Reimagine B2B commerce for Manufacturers and Distributors",
    list: [
      {
        main: "Most B2B companies still sell with email, spreadsheets, and portals that feel like they're stuck in 2005. eComchain turns your ERP-powered business into a modern B2B2C commerce experience.",
        bullets: [],
      },
      {
        main: "Instead of stitching together custom code, you launch on a SaaS platform that already knows how B2B works.",
        bullets: [],
      },
      {
        main: "“From first login to first order, eComchain is built around how real industrial buyers actually buy.”",
        bullets: [],
      },
    ],
    heading: "Empowering B2B Commerce with eComchain",
    paragraph1:
      "eComchain is a leading provider of B2B eCommerce solutions, empowering manufacturers and distributors to create seamless online buying experiences.",
    paragraph2:
      "With a focus on scalability, customization, and integration, eComchain helps businesses streamline their sales processes.",
    image: "https://images.unsplash.com/photo-1761914850175-7e99abaad722",
  },
  path02b: {
    title: "Panel 2 – The eComchain Approach",
    subtitle: "A B2B2C platform layered on top of your ERP",
    list: [
      {
        main: "eComchain doesn’t ask you to rip and replace. It leverages your existing ERP investment and wraps it with a modern, AI-assisted commerce layer. The platform is designed to integrate with major ERPs such as Oracle, SAP, JD Edwards, Microsoft Dynamics and others, so product, pricing, inventory and orders stay in sync. ",
        bullets: [],
      },
      {
        main: "On top of those business processes, eComchain adds:",
        bullets: [
          "Account-based storefronts for each customer or distributor",
          "Contract & volume pricing that flow directly from your ERP",
          "Purchase order & punchout support for procurement teams",
          "Multi-vendor marketplace options, so you can onboard suppliers and expand your catalog without new custom builds (eComchain)",
        ],
      },
    ],
    heading: "Empowering B2B Commerce with eComchain",
    paragraph1:
      "eComchain is a leading provider of B2B eCommerce solutions, empowering manufacturers and distributors to create seamless online buying experiences.",
    paragraph2:
      "With a focus on scalability, customization, and integration, eComchain helps businesses streamline their sales processes.",
    image:
      "https://images.unsplash.com/photo-1763897236977-1baa4a026a6d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  path02c: {
    title: "Panel 3 – Built for Speed and Scale",
    subtitle: "From idea to live storefront in days, not months",
    list: [
      {
        main: "Using drag-and-drop site building tools and a gallery of industry-specific templates, eComchain lets your team stand up branded storefronts quickly—without heavy IT lift. Marketing teams can manage pages, catalogs, banners, promotions and content without submitting tickets or touching code. ",
        bullets: [],
      },
      {
        main: "Behind the scenes, a cloud-native AWS architecture keeps performance and security handled for you, with periodic feature updates so you’re always on the latest version of the platform. (eComchain)",
        bullets: [],
      },
    ],
    heading: "Empowering B2B Commerce with eComchain",
    paragraph1:
      "eComchain is a leading provider of B2B eCommerce solutions, empowering manufacturers and distributors to create seamless online buying experiences.",
    paragraph2:
      "With a focus on scalability, customization, and integration, eComchain helps businesses streamline their sales processes.",
    image:
      "https://images.unsplash.com/photo-1764621204527-dcbaf5ad81f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  path02d: {
    title: "Panel 4 – Intelligent Commerce",
    subtitle: "AI-enhanced storefronts that learn from every click",
    list: [
      {
        main: "eComchain weaves AI into key touchpoints of the buyer journey:",
        bullets: [
          "Product discovery with intelligent search and visual product search for more accurate results",
          "Recommendations & personalization tuned to your industry, previous purchases, and location",
          "Live chat and chatbots so your buyers get answers in real time",
          "In-built web analytics to track performance by customer, region, and product line (eComchain)",
        ],
      },
      {
        main: "These tools turn your storefront into a living channel that gets smarter with every order, quote, or abandoned cart.",
        bullets: [],
      },
    ],
    heading: "Empowering B2B Commerce with eComchain",
    paragraph1:
      "eComchain is a leading provider of B2B eCommerce solutions, empowering manufacturers and distributors to create seamless online buying experiences.",
    paragraph2:
      "With a focus on scalability, customization, and integration, eComchain helps businesses streamline their sales processes.",
    image:
      "https://images.unsplash.com/photo-1764471243156-5709bb76c7c8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  path02e: {
    title: "Panel 5 – Industry Use Cases",
    subtitle: "One platform. Many verticals.",
    list: [
      {
        main: "Manufacturers, distributors, and niche brands use eComchain to stand up tailored experiences such as:",
        bullets: [
          "Manufacturer B2B portals fully integrated with ERP, payments and accounting systems",
          "Food & beverage ordering sites that put restaurants and retailers online in as little as 24 hours",
          "Garage door and building products portals that connect installers, dealers and schedulers",
          "Multi-product marketplaces for sectors like healthcare, aviation spares, consumer electronics and more (eComchain)",
        ],
      },
      {
        main: "Each vertical gets industry-specific workflows while staying on the same core SaaS platform.",
        bullets: [],
      },
    ],
    heading: "Empowering B2B Commerce with eComchain",
    paragraph1:
      "eComchain is a leading provider of B2B eCommerce solutions, empowering manufacturers and distributors to create seamless online buying experiences.",
    paragraph2:
      "With a focus on scalability, customization, and integration, eComchain helps businesses streamline their sales processes.",
    image:
      "https://images.unsplash.com/photo-1764377975933-2ffbd913f3c2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

// Colors for each path
const colors = {
  path02a: "#e63946",
  path02b: "#1d3557",
  path02c: "#2a9d8f",
  path02d: "#1b5e20",
  path02e: "#6a4c93",
};

// Initialize all maps
window.addEventListener("DOMContentLoaded", () => {
  // Initialize all paths
  Object.keys(colors).forEach((id) => {
    const path = document.getElementById(id);
    if (path) {
      gsap.set(path, {
        drawSVG: "100%",
        stroke: colors[id],
      });
    }
  });

  // Add event handlers to all stops
  const allStops = document.querySelectorAll(".stop");
  allStops.forEach((stop) => {
    stop.addEventListener("click", () => {
      handleMapClick(stop);
    });
  });

  // Initialize each map
  initializeMap(1);
  initializeMap(2);
  initializeMap(3);
});

// Map state management
const mapStates = {};

// Initialize a map
function initializeMap(mapNumber) {
  mapStates[mapNumber] = {
    firstClick: false,
    isAnimating: false,
    currentAnimation: null,
    freezePoint: 0,
  };

  const stopsContainer = document.getElementById(`stops-${mapNumber}`);
  const extraDistance = 0;

  // Update freeze point
  // function updateFreezePoint() {
  //     if (stopsContainer) {
  //         mapStates[mapNumber].freezePoint =
  //             stopsContainer.offsetTop + stopsContainer.offsetHeight + extraDistance;
  //     }
  // }

  // updateFreezePoint();
  // window.addEventListener("resize", updateFreezePoint);

  // // Scroll freezing logic for this map
  // window.addEventListener("scroll", () => {
  //     const state = mapStates[mapNumber];
  //     if (!state.firstClick && !state.isAnimating) {
  //         if (window.scrollY > state.freezePoint) {
  //             window.scrollTo(0, state.freezePoint);
  //         }
  //     }
  // });
}

// Handle map click
function handleMapClick(stop) {
  const pathId = stop.dataset.path;
  const selectedColor = colors[pathId];
  const mapContainer = stop.closest('[id^="map-container-"]');
  const mapNumber = mapContainer.id.split("-")[2];
  const state = mapStates[mapNumber];

  if (state.isAnimating) return; // Prevent multiple clicks during animation

  state.isAnimating = true;

  // Find the img element inside the clicked stop
  const originalImg = stop.querySelector(".stop-img");

  if (!originalImg) {
    state.isAnimating = false;
    return;
  }

  // Remove any existing moving image in this map
  const existingMovingImg = mapContainer.querySelector(".moving-image");
  if (existingMovingImg) {
    existingMovingImg.remove();
  }

  // Stop any ongoing animation for this map
  if (state.currentAnimation) {
    state.currentAnimation.kill();
  }

  // Set firstClick to true to disable scroll freeze for this map
  if (!state.firstClick) {
    state.firstClick = true;
  }

  // Update text content for this map
  const cfg = content[pathId];
  if (!cfg) {
    state.isAnimating = false;
    return;
  }

  const titleEl = document.getElementById(`dynamic-title-${mapNumber}`);
  const subtitleEl = document.getElementById(`dynamic-subtitle-${mapNumber}`);
  const listEl = document.getElementById(`dynamic-list-${mapNumber}`);
  const imageEl = document.getElementById(`dynamic-image-${mapNumber}`);
  const headingEl = document.getElementById(`dynamic-heading-${mapNumber}`);
  const paragraphEl = document.getElementById(`dynamic-paragraph-${mapNumber}`);
  const paragraph2El = document.getElementById(`dynamic-paragraph-2-${mapNumber}`);

  
  titleEl.textContent = cfg.title;
  subtitleEl.textContent = cfg.subtitle;
  listEl.innerHTML = "";
  imageEl.src = cfg.image;
  headingEl.textContent = cfg.heading;
  paragraphEl.textContent = cfg.paragraph1;
  paragraph2El.textContent = cfg.paragraph2;

  cfg.list.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.main;
    li.className = "mb-4";

    if (item.bullets && item.bullets.length > 0) {
      const innerUl = document.createElement("ul");
      innerUl.className = "list-disc ml-6 mt-2 space-y-1 text-neutral-600";

      item.bullets.forEach((b) => {
        const innerLi = document.createElement("li");
        innerLi.textContent = b;
        innerUl.appendChild(innerLi);
      });

      li.appendChild(innerUl);
    }

    listEl.appendChild(li);
  });

  // Reset all paths
  // Reset only the current path
  gsap.set(`#${pathId}`, {
    drawSVG: "0%",
    stroke: selectedColor,
  });

  // Get all stops in this map
  const allStopsInMap = mapContainer.querySelectorAll(".stop");

  // Reset all stops appearance in this map
  allStopsInMap.forEach((s) => {
    const pid = s.dataset.path;
    const img = s.querySelector(".stop-img");

    // Reset stop background and border
    s.style.backgroundColor = "white";
    s.style.color = colors[pid];
    s.style.border = `2px solid ${colors[pid]}`;

    // Show all images
    if (img) {
      gsap.set(img, { autoAlpha: 1 });
    }
  });

  // Activate clicked stop
  stop.style.backgroundColor = selectedColor;
  stop.style.color = "white";
  stop.style.border = `2px solid ${selectedColor}`;

  // Hide the image in the clicked stop
  gsap.set(originalImg, { autoAlpha: 0 });

  // Set path color
  gsap.set(`#${pathId}`, { stroke: selectedColor });

  // Create and position the moving image
  const movingImg = document.createElement("img");
  movingImg.className = "moving-image h-[50px] w-[50px]";
  movingImg.src = originalImg.src;

  // Position at the center of the stop
  const stopRect = stop.getBoundingClientRect();
  const mapRect = mapContainer.getBoundingClientRect();

  movingImg.style.left = stopRect.left - mapRect.left + "px";
  movingImg.style.top = stopRect.top - mapRect.top + "px";

  mapContainer.appendChild(movingImg);

  // Animation timeline
  const tl = gsap.timeline({
    defaults: { duration: 3, ease: "power2.inOut" },
    onUpdate: function () {
      // Scroll tracking logic
      const rect = movingImg.getBoundingClientRect();
      const scrollY = window.scrollY + rect.top - (window.innerHeight / 2 - 50);

      gsap.to(window, {
        duration: 0.4,
        scrollTo: { y: scrollY, autoKill: false },
        ease: "power3.out",
      });
    },
    onComplete: function () {
      // Hide the original image after animation completes
      gsap.set(originalImg, { autoAlpha: 0 });
      state.isAnimating = false;
      state.currentAnimation = null;
    },
  });

  // Store the current animation
  state.currentAnimation = tl;

  // Animate the path drawing
  tl.to(
    `#${pathId}`,
    {
      drawSVG: "100%",
      duration: 2.5,
    },
    0
  );

  // Animate the image along the path
  tl.to(
    movingImg,
    {
      motionPath: {
        path: `#${pathId}`,
        align: `#${pathId}`,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      duration: 2.5,
      ease: "power2.inOut",
    },
    0
  );
}
