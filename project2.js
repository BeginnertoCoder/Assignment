function learnMore(event, cardId) {
    event.preventDefault();
  
    const titles = {
      1: "Uncompromised Safety",
      2: "Assuring Cleanliness",
      3: "Experience AIPS"
    };
  
    alert("You clicked: " + titles[cardId]);
  }