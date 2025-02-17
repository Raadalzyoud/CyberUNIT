var theater = theaterJS();

theater
  .on('type:start, erase:start', function () {
    // Add typing effect class
    theater.getCurrentActor().$element.classList.add('typing');
  })
  .on('type:end, erase:end', function () {
    // Remove typing effect class when typing ends
    theater.getCurrentActor().$element.classList.remove('typing');
  });

theater
  .addActor('scene1', { speed: 1, accuracy: 1 })
  .addActor('scene2', { speed: 1, accuracy: 1 })
  .addActor('scene3', { speed: 1, accuracy: 1 })
  // Modify the scenes with your own content
  .addScene('scene1:Welcome to my website!', 800)
  .addScene('scene2: I\'m r3ad alzyoud a cybersecurity student in jordan university of science and technology and this is my personal webpage.', 800)
  .addScene('scene3: Here you will find my latest selected work and thoughts on my passion for cybersecurity.', 800);
