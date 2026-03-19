// AUDIO STARTS ON FIRST CLICK
document.addEventListener("click", function() {
    const audio = document.getElementById("tickSound");
    audio.play();
}, { once: true });


// SCENE SWITCHING
function goTo(sceneId) {
    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });

    const next = document.getElementById(sceneId);
    next.classList.add('active');

    // retrigger animations inside the new scene
    next.querySelectorAll('.hidden').forEach(el => {
        observer.observe(el);
    });

    // scroll to top of new scene
    window.scrollTo(0, 0);
}


// FADE-IN ANIMATIONS
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

// Observe all hidden elements on load
document.querySelectorAll(".hidden").forEach(el=>{
  observer.observe(el);
});
