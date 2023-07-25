// Moving object in x-axis based on mouse position
export function movingObject() {
  var elementPropertiesList = [];

  // Get all initial properties of element
  document.querySelectorAll(".pos-3d").forEach((element) => {
    // Get the left and right distance of object
    let elementBounding = element.getBoundingClientRect();
    let initLeft = elementBounding.left;
    let initRight = elementBounding.right;

    // Get the initial transformation of element
    let elementStyle = window.getComputedStyle(element);
    let initTransform = elementStyle.getPropertyValue("transform");

    let initProperties = {
      initLeft: initLeft,
      initRight: initRight,
      initTransform: initTransform,
      distance: 0,
    };

    elementPropertiesList.push(initProperties);
  });

  // Listening to mousemove event
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".pos-3d").forEach((element, index) => {
      startMove(element, elementPropertiesList[index], e);
    });
  });
}

// Checking mouse area and call move function
function startMove(element, initProperties, e) {
  const mouseArea = Number(element.getAttribute("move-area"));

  // Get mouse position and screen middle point in x-axis
  const mouseX = e.clientX;
  const screenWidth = window.innerWidth;
  const screenMiddleX = screenWidth / 2;

  // Get mouse position and screen middle point in y-axis
  const mouseY = e.clientY;
  const screenHeight = window.innerHeight;
  const screenMiddleY = screenHeight / 2;

  // Check mouse moving area (0 in x-axis; 1 in y-axis; 2 in both axis)
  if (mouseArea === 0) {
    moveX(element, mouseX, screenMiddleX, initProperties);
  } else if (mouseArea === 1) {
    moveX(element, mouseY, screenMiddleY, initProperties);
  }
}

// Start moving object
function moveX(element, mousePosition, screenMiddle, initProperties) {
  // Get configurate parameter from element
  const speed = Number(element.getAttribute("move-speed"));
  const maxDistance = Number(element.getAttribute("move-distance"));
  const inverse = Number(element.getAttribute("move-inverse"));

  // Get latest left & right distance of object
  const objectLeftDistance = element.getBoundingClientRect().left;
  const objectRightDistance = element.getBoundingClientRect().right;

  // Calculate for maximum distance (10% from initial position) of object
  const distanceLeft = initProperties["initLeft"];
  const distanceRight = initProperties["initRight"];
  const maxDistanceLeft = distanceLeft - maxDistance * distanceLeft;
  const maxDistanceRight = distanceRight + maxDistance * distanceRight;

  let distance = initProperties["distance"];

  if (mousePosition <= screenMiddle) {
    // Calculate for moving distance
    distance += speed;

    // Check for maximum distance
    if ((!inverse && objectLeftDistance <= maxDistanceLeft) || (inverse && objectRightDistance >= maxDistanceRight)) {
      distance -= speed;
    }
  } else if (mousePosition >= screenMiddle) {
    // Calculate for moving distance
    distance -= speed;

    // Check for maximum distance
    if ((!inverse && objectRightDistance >= maxDistanceRight) || (inverse && objectLeftDistance <= maxDistanceLeft)) {
      distance += speed;
    }
  }

  // Updating translation in X and distance value
  element.style.transform = initProperties["initTransform"] + `translate(${inverse ? distance : -distance}px)`;
  initProperties["distance"] = distance;
}
