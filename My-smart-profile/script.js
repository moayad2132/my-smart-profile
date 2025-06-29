
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {

  const themeToggle = document.getElementById("themeToggle");
  const themeLabel = document.getElementById("themeLabel");

  if (themeToggle) {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark-mode");
      themeToggle.checked = true;
      themeLabel.textContent = "Dark Mode";
    }

    themeToggle.addEventListener("change", function () {
      if (this.checked) {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        themeLabel.textContent = "Dark Mode";
      } else {
        document.documentElement.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        themeLabel.textContent = "Light Mode";
      }
    });
  }


  const toggleBtn = document.getElementById("showMoreBtn");
  const hiddenContent = document.getElementById("moreContent");

  if (toggleBtn && hiddenContent) {
    toggleBtn.addEventListener("click", function () {
      hiddenContent.classList.toggle("d-none");
      toggleBtn.textContent = hiddenContent.classList.contains("d-none")
        ? "Show More"
        : "Show Less";
    });
  }
const dynamicCard = document.getElementById("dynamicCard");
const title = document.getElementById("dynamicTitle");
const desc = document.getElementById("dynamicDesc");
const image = document.getElementById("dynamicImage");

dynamicCard.addEventListener("click", function () {
  title.textContent = "Dynamic Portfolio Card";
  desc.textContent =
    "This project card isn’t written in the HTML — it’s added automatically using JavaScript when the page loads. The goal was to show how content can be updated or added on the fly, without editing the page’s actual code.";
  image.src = "images/dynamic-min.jpg"; 
});
});



$(document).ready(function () {
  if ($("#toggleBlockBtn").length) {
    $("#toggleBlockBtn").click(function () {
      $("#slideBlock").slideToggle(400);
    });
  }


  if ($("#fadeToggleBtn").length) {
    $("#fadeToggleBtn").click(function () {
      $("#fadeImage").fadeToggle(400, function () {
        $("#fadeToggleBtn").text(
          $("#fadeImage").is(":visible") ? "Hide Image" : "Show Image"
        );
      });
    });
  }


  if ($("#loadQuoteBtn").length) {
    $("#loadQuoteBtn").click(function () {
      $("#quoteBox").html("<em>Loading...</em>");
      $.ajax({
        url: "quote.txt",
        method: "GET",
        success: function (data) {
      
      const quotes = data.split(".").map(q => q.trim()).filter(q => q !== "");


      let html = quotes.map(q => `<p><strong>"${q}"</strong></p>`).join("");

      $("#quoteBox").html(html);
    },
        error: function () {
          $("#quoteBox").html(
            '<span class="text-danger">Failed to load quote. Please use Live Server or open this project in a local web server.</span>'
          );
        },
      });
    });
  }

$("#userName").on("keyup", function () {
  const name = $(this).val().trim();

  if (name) {
    $("#greetName").text(name);
    $("#liveGreeting").fadeIn();
  } else {
    $("#liveGreeting").fadeOut();
  }
});


$("#outputBox").hover(
  function () {
    if ($("body").hasClass("dark-mode")) {
      $(this).css("background-color", "#c3d1d2");
    } else {
      $(this).css("background-color", "#5a7d7c");
    }
  },
  function () {
    $(this).css("background-color", "");
  }
);

$("#fadeTipBtn").click(function () {
  $("#smartTipBox").fadeToggle(400, function () {
    const visible = $(this).is(":visible");
    $("#fadeTipBtn").text(visible ? "Hide Surprise" : "Show Surprise");

    if (visible) {
      $("#smartTipBox")
        .animate({marginLeft: "-=20px"}, 300)
        .animate({marginLeft: "+=40px"}, 600)
        .animate({marginLeft: "-=20px"}, 300);
    }
  });
});


$("#submitBtn").click(function () {
  const name = $("#userName").val().trim();
  const color = $("#favoriteColor").val();
  const message = $("#customMessage").val().trim();

  if (!name || !message) {
    $("#outputBox").html(
      '<span class="text-danger">Please fill in both your name and message.</span>'
    );
    return;
  }

  const output = `
    <p><strong style="color:${color};">${name}</strong> says:</p>
    <p>${message}</p>
  `;

  $("#outputBox").html(output);

  // Animate bounce effect
  $("#outputBox").animate({marginLeft: "-=20px"}, 100)
                 .animate({marginLeft: "+=40px"}, 200)
                 .animate({marginLeft: "-=20px"}, 100);
});
});