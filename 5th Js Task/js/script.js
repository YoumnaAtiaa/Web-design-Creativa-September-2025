const items = document.querySelectorAll("#menu li");

      items.forEach((item) => {
        item.style.cursor = "pointer";
        item.style.padding = "8px";
        item.style.display = "block";

        item.addEventListener("mouseover", () => {
          items.forEach((i) => (i.style.color = "black"));
          item.style.color = "red";
        });

        item.addEventListener("mouseout", () => {
          item.style.color = "black";
        });
      });