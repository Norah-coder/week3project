$(".image").click(function () {
    $(this).children(".hideMe").slideToggle("1500");
    $(this).children(".show").toggle("1500");
});

$("#work1")
    .mouseenter(function () {
        $("#overlay").show("slow");
    })
    .mouseleave(function () {
        $("#overlay").hide("slow");
    });

$("#work2")
    .mouseenter(function () {
        $("#overlay2").show("slow");
    })
    .mouseleave(function () {
        $("#overlay2").hide("slow");
    });
$("#work3")
    .mouseenter(function () {
        $("#overlay3").show("slow");
    })
    .mouseleave(function () {
        $("#overlay3").hide("slow");
    });
$("#work4")
    .mouseenter(function () {
        $("#overlay4").show("slow");
    })
    .mouseleave(function () {
        $("#overlay4").hide("slow");
    });
$("#work5")
    .mouseenter(function () {
        $("#overlay5").show("slow");
    })
    .mouseleave(function () {
        $("#overlay5").hide("slow");
    });
$("#work6")
    .mouseenter(function () {
        $("#overlay6").show("slow");
    })
    .mouseleave(function () {
        $("#overlay6").hide("slow");
    });
$("#work7")
    .mouseenter(function () {
        $("#overlay7").show("slow");
    })
    .mouseleave(function () {
        $("#overlay7").hide("slow");
    });
$("#work8")
    .mouseover(function () {
        $("#overlay8").show("slow");
    })
    .mouseleave(function () {
        $("#overlay8").hide("slow");
    });


$("form#formInput").submit(function (event) {
    let name = $("input#name").val();
    let email = $("input#email").val();
    let subject = $("textarea#subject").val();

    if ($("input#name").val() && $("input#email").val()) {
        alert(name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
        alert("Please enter your name and email!");
    }

    event.preventDefault();
})