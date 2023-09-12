document.addEventListener("DOMContentLoaded", function() {
    const cube = document.querySelector(".cube");
    const rotationIncrement = 1; // Increment for automatic rotation (degrees)
    const dragSensitivity = 0.2; // Sensitivity for drag rotation

    let isDragging = false;
    let previousX = 0;
    let currentRotation = 0;

    cube.addEventListener("mousedown", handleDragStart);
    cube.addEventListener("touchstart", handleDragStart);

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("touchmove", handleDrag);

    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);

    function handleDragStart(event) {
      isDragging = true;
      previousX = event.clientX || event.touches[0].clientX;
    }

    function handleDrag(event) {
      if (!isDragging) return;

      const currentX = event.clientX || event.touches[0].clientX;
      const deltaX = currentX - previousX;

      // Calculate rotation based on deltaX and apply it to the cube
      const dragRotation = deltaX * dragSensitivity;
      currentRotation += dragRotation;
      updateRotation();
      
      previousX = currentX;
    }

    function handleDragEnd() {
      isDragging = false;
    }

    // Automatic rotation
    function rotateCube() {
      currentRotation += rotationIncrement;
      updateRotation();
      requestAnimationFrame(rotateCube);
    }

    function updateRotation() {
      cube.style.transform = `rotateY(${currentRotation}deg)`;
    }

    rotateCube();
  });